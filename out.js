const figlet = require('figlet');
const chalk = require('chalk');


const colorize = (msg, color) => {

    if (typeof color !== "undefined"){
        msg = chalk[color].bold(msg);
    }
    return msg;
};

const log = (msg, color) => {

    console.log(colorize(msg, color));
};

const biglog = (msg, color) => {

    log(figlet.textSync(msg, {horizontalLayout: 'full'}), color);
};

const errorlog = (emsg) => {

    console.log(`${colorize("Error", "red")}: ${colorize(colorize(emsg, "red"), "bgYellowBright")}`);
};

const getByIndex = id => {

    const quiz = quizzes[id];
    if (typeof quiz === "undefined") {
        throw new Error(`El valor del parámetro id no es válido.`);
    }
    return JSON.parse(JSON.stringify(quiz));
};

const deleteByIndex = id => {

    const quiz = quizzes[id];
    if (typeof quiz === "undefined"){
        throw new Error(`El valor del parámetro id no es válido`);
    }
    quizzes.splice(id, 1);
};


exports = module.exports = {
    colorize,
    log,
    biglog,
    errorlog
};