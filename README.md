# signalk-repl
[SignalK](http://signalk.org) Node Server Plugin that provides a REPL for a running server.

After activation you can connect to the server using `nc` or preferably [`repl-client`](https://github.com/dshaw/repl-client) and the default socket `/tmp/signalk-repl-sock`.

The plugin exposes the variable `app`, which provides the same functionality plugins have access to:

```
$ rc /tmp/signalk-repl-sock
Signal K > app
{
  _events: [Object: null prototype] {
    mount: [Function: onmount],
    serverevent: [ [Function], [Function], [Function] ],
    nmea0183out: [Function: send],
    discovered: [Function]
  },
  _eventsCount: 3,
  _maxListeners: undefined,
  setMaxListeners: [Function: setMaxListeners],
  getMaxListeners: [Function: getMaxListeners],
  emit: [Function: emit],
  addListener: [Function: addListener],
  on: [Function: addListener],
  prependListener: [Function: prependListener],
  once: [Function: once],
  prependOnceListener: [Function: prependOnceListener],
  removeListener: [Function: removeListener],
  off: [Function: removeListener],
  removeAllListeners: [Function: removeAllListeners],
  listeners: [Function: listeners],
  rawListeners: [Function: rawListeners],
  listenerCount: [Function: listenerCount],
  eventNames: [Function: eventNames],
  init: [Function: init],
  ...
}

Signal K >
```

When using [`repl-client`](https://github.com/dshaw/repl-client), regular `readline` functionality works like tab completion and history.

