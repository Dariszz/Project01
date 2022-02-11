import logicalTimer from "./helpers/logicalTimer.js";

export default function logicalPassword(){
    const $ = document.querySelector.bind(document);
    const userLogin = $('#placeholderLogin');
    const inputLogin = $('#inputLogin');
    const userPassword = $('#placeholderPassword');
    const inputPassword = $('#inputPassword');
    const button = $('#button');
    const messageError = $('#messageError');
    const loginPage = $('#loginPage');
    const homePage = $('#homePage');

    button.addEventListener('click' ,()  => {
        if (userLogin.value === "admin" && userPassword.value === "admin") {
            loginPage.style.display = 'none';
            homePage.style.display = 'flex';
            document.title = 'Compass - Home';
            
            logicalTimer();

            history.pushState(
                null, 
                'home', 
                'https://dariszz.github.io/project01/home'
            );

        } else {
            messageError.style.visibility = 'visible';
            userLogin.value = '';
            userPassword.value = '';
            inputLogin.style.border = '1px solid #E9B425';
            inputPassword.style.border = '1px solid #E9B425';
        }
    });
};   