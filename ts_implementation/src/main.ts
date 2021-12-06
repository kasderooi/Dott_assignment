import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('q1 What do you think of Node.js? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve(() => {})
    })
  })
}

const main = async () => {
  await question1()
  await question2()
  rl.close()
}

main()