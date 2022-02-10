export default function logicalLogout() {
    const $ = document.querySelector.bind(document);
    const logout = $('#logout');

    logout.addEventListener('click', () => {
        window.location.reload();
    })
}