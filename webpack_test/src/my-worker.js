const queryableFunctions = {
    getDifference: (b, a) => {
        console.log('replying diff');
        reply('printStuff', b - a);
    },
    waitSometime: time => {
        console.log('waiting', time);
        setTimeout(() => reply('waitFor', `${time} seconds`), time*1000);
    }
};

function reply() {
    if(arguments.length < 1) {
        throw new TypeError('reply method of worker called with 0 arguments');
    } else {
        console.log('posting', arguments);
        postMessage({
            listener: arguments[0],
            args: Array.prototype.slice.call(arguments, 1)
        });
    }
}

onmessage = function (e) {
    console.log('got', e);
    if (e.data instanceof Object && e.data.hasOwnProperty('queryMethod') && e.data.hasOwnProperty('queryArgs')) {
        queryableFunctions[e.data.queryMethod].apply(this, e.data.queryArgs);
    } else {
        defaultReply(e.data);
    }
}

function defaultReply () {

};