# express-lazy
Make express lazy 🦥 for improved performance 🔥

We use rxjs to share an observable stream and use it as a cache.

Papaparse to handle local or remote parsing files.

wrk for Benchmarking tests.

Features :
- use cache system for data or logic
- use cache system with configurable historic
- provide store who any endpoint can access
- provide options to use ram as cache
- provide options to use large file (+40go) (handle file lines by lines)
- ... ?



## Benchmarking

The `run.sh` script will use docker to pull czerasz/wrk-json image and run saved models of request from /scripts/*.lua. For more see [wrk Documentation](https://github.com/wg/wrk)

### Prerequisites
- Make `./run.sh` executable with `chmod u+x ./run.sh` or `sudo chmod u+x ./run.sh`
- [Docker](https://www.docker.com/)
### Usage


- start `./run.sh` script you need to specify tester ip:port with host="", if no value the script will don't start. Exemple `./run.sh host="192.100.10.100:3000"  `
- help with 'run.sh --h'
 
### Options

- **duration** with duration="" e.g. 2s, 2m, 2h. Default 1s
- **number of threads** to use with threads="" . Default 1
- **number of connections** to use with connections="" . Default 1
- **LUA script** to use with script="" . Default /scripts/multi-request-json.lua
- **requests file** to use with data_folder="" . Default /wrk/data