import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
form.addEventListener('submit', popUpMessage);

function popUpMessage(evt) {
evt.preventDefault();
const delay = form.elements.delay.value;
const state = form.elements.state.value;
    const promise = createPromise({ delay, state });
    promise.then(onFulfilled).catch(onRejected);    
};

function createPromise({ delay, state }) {
const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);     
});
    return promise;
};

function onFulfilled(delay) {
iziToast.show({
    title: 'OK',
    titleColor: '#fff',
    titleSize: '16px',
    titleLineHeight: '150%',
    backgroundColor: '#59a10d',
    message: `Fulfilled promise in ${delay}ms`,
    messageColor: '#fff',
    messageSize: '16px',
    messageLineHeight: '150%',
    position: 'topCenter',
    close: 'false'
});
};
function onRejected(delay) {
iziToast.show({
    title: 'Error',
    titleColor: '#fff',
    titleSize: '16px',
    titleLineHeight: '150%',
    backgroundColor: ' #ef4040',
    message: `Rejected promise in ${delay}ms`,
    messageColor: '#fff',
    messageSize: '16px',
    messageLineHeight: '150%',
    position: 'topCenter',
    close: 'false'
});
};