# express-lazy
Make express lazy 🦥 for improved performance 🔥

Principes :
We use rxjs Share, ShareReplay and Refcount opperators to share an observable stream, so we use our stream as a cache.

Features :
- use cache system for data or logic
- use cache system with configurable historic
- provide store who any endpoint can access
- provide options to use ram as cache
- provide options to use large file (+40go) (handle file lines by lines)
- ... ?