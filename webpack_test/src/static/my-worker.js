const queryableFunctions = {
    getDifference: (b, a) => {
        reply('printStuff', b - a);
    },
    waitSometime: time => {
        setTimeout(() => reply('waitFor', `${time} seconds`), time);
    }
};

function reply() {
    console.log('reply', arguments);
    if(arguments.length < 1) {
        throw new TypeError('reply method of worker called with 0 arguments');
    } else {
        postMessage({
            listener: arguments[0],
            args: Array.prototype.slice.call(arguments, 1)
        });
    }
}

onmessage = (e) => {
    if(e.data instanceof Object && e.data.hasOwnProperty('queryMethod') && e.data.hasOwnProperty('args')) {
        queryableFunctions[e.data.queryMethod].apply(this, e.data.args);
    } else {
        defaultReply(e.data);
    }
}

function defaultReply () {

};