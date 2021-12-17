function QueryableWorker(url, defaultListener, onError) {
    const instance = this, worker = new Worker(url), listeners = {};
    this.sendQuery = function () {
        console.log('send query', arguments);
        if (arguments.length < 1) {
            throw new TypeError('queryable worker  sendQuery needs atleast 1 argument')
        } else {
            worker.postMessage({
                queryMethod: arguments[0],
                queryArgs: Array.prototype.slice.call(arguments, 1)
            });
        }
    }
    this.postMessage = function (msg) {
        worker.postmessage(msg);
    }
    this.addListener = function (name, handler) {
        console.log('added listener', name);
        listeners[name] = handler;
    }
    this.removeListener = function (name) {
        delete listeners[name];
    }
    worker.onmessage = function (e) {
        console.log('received on listener', e.data);
        if (e.data instanceof Object && e.data.hasOwnProperty('listener') && e.data.hasOwnProperty('args')) {
            listeners[e.data['listener']].apply(instance, e.data['args']);
        } else {
            defaultListener.call(instance, e.data);
        }
    }

    this.defaultListener = defaultListener || function () {
        console.log('default listener called');
    };
}
window.QW = new QueryableWorker('myWorker.js');
window.QW.addListener('printStuff', message => {
    console.log('message', message);
    const newNode = document.createElement('div');
    newNode.appendChild(document.createTextNode(`The difference is ${message}`));
    document.getElementsByClassName('printHere')[0].appendChild(newNode);
});
window.QW.addListener('waitFor', time => {
    console.log('message', time);
    alert(`waited for ${time}`)
});
console.log('window is', window.QW);