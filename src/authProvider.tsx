// Authenticated by default
// todo: next feature
export default {
    login: ({ username, password }) => {
        // localStorage.setItem('not_authenticated', true);
        return Promise.reject();
    },
    logout: () => {
        // localStorage.setItem('not_authenticated', true);
        localStorage.removeItem('role');
        localStorage.removeItem('login');
        localStorage.removeItem('user');
        localStorage.removeItem('avatar');
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        return status === 401 || status === 403
            ? Promise.reject()
            : Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('not_authenticated')
            ? Promise.reject()
            : Promise.resolve();
    },
    getPermissions: () => {
        const role = localStorage.getItem('role');
        return Promise.resolve(role);
    },
    getIdentity: () => {
        return {
            id: localStorage.getItem('login'),
            fullName: localStorage.getItem('user'),
            avatar: localStorage.getItem('avatar'),
        };
    },
};
