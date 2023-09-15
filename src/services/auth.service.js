import service from './index';

const authService = {
    signup: (signupForm) => service.post('/auth/signup', signupForm),
    login: (loginForm) => service.post('/auth/login', loginForm),
    verify: () => service.get('/auth/verify'),
}

export default authService;