import '@vanillawc/wc-blink';
import 'emoji-rating';

console.log('Hello');
const messagesLog = document.getElementById('messagesLog');
const messagesTemplate = document.getElementById('messagesTemplate');
const loaderImage = document.getElementById('loader');
const drawProgress = document.getElementById('drawProgress');

let counter = 0;

const MOVES = {
  s: { text: 'stop', symbol: '🛑' },
  f: { text: 'forward', symbol: '⬆️' },
  b: { text: 'backwards', symbol: '⬇️' },
  l: { text: 'left', symbol: '⬅️' },
  r: { text: 'right', symbol: '➡️' },
};

async function addNewMessage(message) {
  const newTemplateNode = messagesTemplate.content.cloneNode(true);
  const msg = MOVES[message];
  newTemplateNode.querySelector(
    '.message-content'
  ).innerText = `${msg.symbol} ${msg.text}`;
  messagesLog.appendChild(newTemplateNode);
}

function countCommand(command) {
  if (command === 'f') {
    drawProgress.value = drawProgress.value + 1;
  }
}

async function getLatestMessages() {
  const messages = await fetch('/api-proxy').then((res) => res.json());
  console.log(messages);
  const { last } = messages;
  messagesLog.innerHTML = '';
  loaderImage.remove();
  last
    .filter((message) => message !== 'x')
    .forEach((message) => {
      countCommand(message);
      addNewMessage(message);
    });
}

async function run() {
  setInterval(getLatestMessages, 2000);
}

run();
