import colors from "colors";

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

const logger = {
  log(...args){
    console.log(colors.data(args));
  },

  debug(...args){
    console.log(colors.debug(args));
  },

  info(...args){
    console.log(colors.info(args));
  },

  warn(...args){
    console.log(colors.warn(args));
  },

  error(...args){
    console.log(colors.error(args));
  }

}

export {logger as default};