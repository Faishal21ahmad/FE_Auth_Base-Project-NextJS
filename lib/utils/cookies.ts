import Cookies from 'js-cookie';

// SIMPAN token
export const setToken = (token: string) => {
    Cookies.set('token', token);
};

// AMBIL token
export const getToken = () => {
    return Cookies.get('token');
};

// HAPUS token
export const removeToken = () => {
    Cookies.remove('token');
    return
};

// CEK apakah token ada
export const checkToken = () => {
    return !!getToken();
};