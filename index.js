#! /usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import axios from 'axios';

async function fetchRandomJoke() {
  return (await axios.get('http://89.108.102.155:7000/randomJoke')).data;
}

const rollJoke = async () => {
  try {
    const res = await fetchRandomJoke();
    console.log(res.text);
    if (res.photo) {
      console.log('Photo: ', chalk.underline(res.photo));
    }
  } catch (e) {
    console.log('Something went wrong...')
  }
};

program
  .command('random')
  .description('Get random joke')
  .action(rollJoke)

program.parse()
