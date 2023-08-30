const net = require("net");
const { IP, PORT, ENCODING } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({ host: IP, port: PORT });

  // interpret incoming data as text
  conn.setEncoding(ENCODING);

  conn.on('data', (message) => {
    console.log(message);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: NXI');
  });

  return conn;
};

module.exports = { connect };