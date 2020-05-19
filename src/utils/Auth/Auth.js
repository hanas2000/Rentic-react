export default class Auth {
    static isLoggedIn = !!localStorage.getItem('apiKey');
    static loggedId = localStorage.getItem('id');
    static loggedApiKey = localStorage.getItem('apiKey');

    static signIn = (apiKey, id) => {
        localStorage.setItem('apiKey', apiKey);
        localStorage.setItem('id', id);
        window.location.href = "/";
    };

    static logOut = () => {
        localStorage.removeItem('apiKey');
        localStorage.removeItem('id');
        window.location.href = "/login";
    }
}
