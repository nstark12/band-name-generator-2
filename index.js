import { generateSlug } from 'random-word-slugs';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';

inquirer.prompt([
    {
        type: 'number',
        name: 'numWords',
        message: 'How many words do you want in your band name?',
        default: 3,
    },
    {
        type: 'list',
        name: 'animationName',
        message: 'Which animation do you want to use?',
        choices: ['rainbow', 'pulse', 'glitch', 'radar', 'neon', 'karaoke']
    }
])
    .then((answers) => {
        const randomSlug = generateSlug(answers.numWords, {
            format: 'title'
        })

        chalkAnimation[answers.animationName](randomSlug)
    })
    .catch((err) => {
        console.log(err)
    })




