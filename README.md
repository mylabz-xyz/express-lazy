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

### Prerequisites
- Make `run.sh` executable with `chmod u+x run.sh` or `sudo chmod u+x run.sh`
- [Docker](https://www.docker.com/)
### Usage

- start `run.sh` script and specify your espress server `ip:host` with `server="ip:host"`