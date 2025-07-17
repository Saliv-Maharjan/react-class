export const AUTH_TOKEN = '112233';

export const doLogin = (email, password) => {
    if(email === 'admin@gmail.com' && password === 'admin'){
        localStorage.setItem('AUTH_TOKEN', AUTH_TOKEN);
        localStorage.setItem('USER_EMAIL', email);

        return true;
    }else{
        return false;
    }
}