docker run --network=host --rm \
           -v `pwd`/wrk:/scripts \
           -v `pwd`/wrk/data:/data \
           czerasz/wrk-json wrk -c1 -t1 -d1s -s /scripts/multi-request-json.lua http://192.168.60.179:3000 