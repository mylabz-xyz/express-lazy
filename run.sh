#!/usr/bin/env bash
[ "$1" = "-h" -o "$1" = "--help" ] && echo "
  This script is for run Benchmark with mylabz-xyz/express-lazy.
  He will use docker to pull czerasz/wrk-json image and run
  Saved models of request from /scripts/*.lua

  You need to specify tester ip:port with host="", if no value the script will don't start

  You can set duration with duration="" e.g. 2s, 2m, 2h. Default 1s
  You can set number of threads to use with threads="" . Default 1
  You can set number of connections to use with connections="" . Default 1
  You can set LUA script to use with script="" . Default Default /scripts/multi-request-json.lua
  You can set requests file to use with data_folder="" . Default /wrk/data
" && exit

DEFAULT_DURATION=1s
DEFAULT_THREADS=1
DEFAULT_SCRIPT=/scripts/multi-request-json.lua
DEFAULT_CONNECTIONS=1
DEFAULT_WRK_FOLDER=/wrk
DEFAULT_LUA_REQUEST_FOLDER=/wrk/data

for ARGUMENT in "$@"
do
    KEY=$(echo $ARGUMENT | cut -f1 -d=)
    VALUE=$(echo $ARGUMENT | cut -f2 -d=)   
    case "$KEY" in
            server)              server=${VALUE} ;;
            duration)              duration=${VALUE} ;;
            script)              script=${VALUE} ;;
            connections)              connections=${VALUE} ;;
            threads)              threads=${VALUE} ;;
            data_folder)              data_folder=${VALUE} ;;
            wrk_folder)              wrk_folder=${VALUE} ;;
            host)              host=${VALUE} ;;
            *)   
    esac    
done

[ -z "$host" ] && echo "You can specity -h for help" &&  echo "You need to specify tester ip:port with host="", if no value the script will don't start" && exit

docker run --network=host --rm \
           -v `pwd`${DEFAULT_WRK_FOLDER:-${data_folder}}:/scripts \
           -v `pwd`${DEFAULT_LUA_REQUEST_FOLDER:-${data_folder}}:/data \
           czerasz/wrk-json wrk -c${connections:-${DEFAULT_CONNECTIONS}} -t${threads:-${DEFAULT_THREADS}} -d${duration:-${DEFAULT_DURATION}} -s ${script:-${DEFAULT_SCRIPT}} http://${host}