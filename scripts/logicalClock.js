export default function logicalClock() {
    const $ = document.querySelector.bind(document);
    const clock = $('#clock');
    const date = $('#date');

    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let weekDay = data.getDay();
    let day = data.getDate();
    let month = data.getMonth();
    let year = data.getFullYear();

    const arrayDays = new Array(
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado-feira"
    );

    const arrayMonths = new Array(
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    );

    clock.innerText = `${hours <= 9 ? "0" : ""}${hours}:${minutes <= 9 ? "0" : ""}${minutes}`;
    date.innerText = `${arrayDays[weekDay]}, ${day <= 9 ? "0" : ""}${day} de ${arrayMonths[month]} de ${year}`;
}