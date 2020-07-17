
export function register(config) {
window.addEventListener('load', () => {
if('serviceWorker' in navigator) {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    validateServiceWorker(swUrl);
}
});
}

function validateServiceWorker(swUrl,config) {
    console.log('validating');
    fetch(swUrl).then(res => {
        console.log('fetched sw', res);
        const contentType = res.headers.get('content-type');
        if(res.status === 404 || (contentType !== null && contentType.indexOf('javascript')===-1)) {
            // not valid sw
            window.navigator.serviceWorker.ready.then(registration => {
                registration.unregister().then(() => window.location.reload());
            });
        } else {
            registerSW(swUrl,config);
        }
    });
}

function registerSW(swUrl,config) {
    navigator.serviceWorker.register(swUrl, {
        updateViaCache: 'none'
    }).then(registration => {
        console.log('registered', registration.scope);
        if(config && config.onSuccess){
            config.onSuccess(registration);
        }
        registration.addEventListener('updatefound', () => {
            console.log('update found');
            // const installingWorker = registration.installing;
            // if(!installingWorker) {
            //     return;
            // } else {
            //     installingWorker.onstatechange = () => {
            //         if(installingWorker.state === 'installed') {
            //             if(navigator.serviceWorker.controller) {
            //                 console.log('Close the tabs to get the updated SW');
            //             } else {
            //                 console.log('Sw is updated and usable');
            //             }
            //         }
            //     }
            // }
        });
    }).catch(error => {
        console.log('Error registering', error);
    });
}