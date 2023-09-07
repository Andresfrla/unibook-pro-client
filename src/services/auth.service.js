import service from './index';

const authService = {
    signup: (signupForm) => service.post('/auth/signup', signupForm),
    login: (loginForm) => service.post('/auth/login', loginForm),
    adminLogin: (loginForm) => service.post('/admin/login', loginForm),
    verify: () => service.get('/auth/verify'),
    verifyAdmin: () => service.get('/admin/verify')
}

export default authService;