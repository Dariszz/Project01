export default function logicalLogout() {
    const $ = document.querySelector.bind(document);
    const logout = $('#logout');

    logout.addEventListener('click', () => {
        history.pushState(
            null, 
            'login', 
            'https://dariszz.github.io/project01/'
        );
        window.location.reload();
    })
}