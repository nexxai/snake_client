const { ENCODING, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY } = require('./constants');
let connection;
let direction;
let moving;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (MOVE_UP_KEY.includes(key)) {
    // connection.write('Move: up');
    constantMovement('up');
  } else if (MOVE_LEFT_KEY.includes(key)) {
    // connection.write('Move: left');
    constantMovement('left');
  } else if (MOVE_DOWN_KEY.includes(key)) {
    // connection.write('Move: down');
    constantMovement('down');
  } else if (MOVE_RIGHT_KEY.includes(key)) {
    // connection.write('Move: right');
    constantMovement('right');
  } else if (key == 'n') {
    connection.write('Say: nexxai got this');
  }
};

const constantMovement = function (direction) {
  if (moving) {
    clearInterval(moving);
  }
  move(direction);
}

const move = function(direction) {
  moving = setInterval(() => {
    connection.write(`Move: ${direction}`)
  }, 100);
} 

module.exports = { setupInput };