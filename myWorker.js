self.addEventListener('message', messageRecived )

function messageRecived(message) {
    console.log('Messaggio ricevuto dal worker: ', message.data);
    postMessage('Eccomi, sono pronto a far il mio lavoro!')
}