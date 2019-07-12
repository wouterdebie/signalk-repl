const repl = require('repl');
const net = require('net');
const process = require('process');

module.exports = function (app) {
  var plugin = {};
  var server;

  var defaultPath = '/tmp/signalk-repl-sock';

  plugin.id = 'signalk-repl';
  plugin.name = 'SignalK REPL';
  plugin.description = 'REPL for SignalK';

  plugin.start = function (options, restartPlugin) {
    var path = options.socket_path || defaultPath;

    app.debug('REPL started on ' + path);
    process.on('SIGINT', (code) => {
      plugin.stop();
      process.exit();
    });
    process.on('SIGTERM', (code) => {
      plugin.stop();
      process.exit();
    });
    process.on('exit', (code) => {
      plugin.stop();
      process.exit();
    });

    server = net.createServer((socket) => {
      repl.start({
        prompt: 'Signal K > ',
        terminal: true,
        input: socket,
        output: socket
      }).on('exit', () => {
        socket.end();
      }).context.app = app;
    }).listen(path);
  };

  plugin.stop = function () {
    server.close();
    app.debug('REPL stopped');
  };

  plugin.schema = {
    type: 'object',
    required: ['socket_path'],
    properties: {
      some_string: {
        type: 'string',
        title: 'Socket path',
        default: defaultPath
      }
    }
  };

  return plugin;
};
