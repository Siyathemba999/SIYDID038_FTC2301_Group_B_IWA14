let firstName = 'John';
let age = 35;
let activity = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function hobby() {
  logTwice(`Hello, ${firstName} (${age}). I love ${activity}!`)
}

hobby()