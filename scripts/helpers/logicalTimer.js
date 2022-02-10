export default function logicalTimer() {
    const $ = document.querySelector.bind(document);
    const timer = $('#timer');
    let seconds = 600;

    setInterval(() => {
        timer.innerHTML = seconds;
        seconds --;
        if (!seconds) {
            window.location.reload();
        }
    }, 1000);
}