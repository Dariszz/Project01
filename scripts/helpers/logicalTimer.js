export default function logicalTimer() {
    const $ = document.querySelector.bind(document);
    const timer = $('#timer');
    let seconds = 600;

    setInterval(() => {
        timer.innerHTML = seconds;
        seconds --;
        if (!seconds) {
            history.pushState(
                null, 
                'login', 
                'https://dariszz.github.io/project01/'
            );
            window.location.reload();
        }
    }, 1000);
}