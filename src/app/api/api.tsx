import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

// Функция входа (логина)
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/token/`, { email, password });
        const { access, refresh } = response.data;

        // Сохраняем токены в localStorage
        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refresh);

        return true;  // Успешный вход
    } catch (error) {
        console.error('Ошибка авторизации:', error.response?.data || error);
        return false;  // Ошибка входа
    }
};

// Функция обновления access-токена
export const refreshToken = async () => {
    try {
        const refresh = localStorage.getItem('refresh');
        const response = await axios.post(`${API_URL}/token/refresh/`, { refresh });
        localStorage.setItem('access', response.data.access);
        return response.data.access;
    } catch (error) {
        console.error('Ошибка обновления токена:', error.response?.data || error);
        return null;
    }
};

// Функция выхода (удаление токенов)
export const logout = async () => {
    try {
        const access = localStorage.getItem('access');
        await axios.post(`${API_URL}/logout/`, {}, {
            headers: { Authorization: `Bearer ${access}` }
        });
    } catch (error) {
        console.error('Ошибка при выходе:', error.response?.data || error);
    }
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
};

// Функция получения профиля
export const getUserProfile = async () => {
    try {
        let access = localStorage.getItem('access');
        if (!access) {
            access = await refreshToken();  // Если токен истёк, обновляем его
        }
        if (!access) return null;  // Если токен не удалось обновить, выходим

        const response = await axios.get(`${API_URL}/user/`, {
            headers: { Authorization: `Bearer ${access}` }
        });

        return response.data;
    } catch (error) {
        console.error('Ошибка получения профиля:', error.response?.data || error);
        return null;
    }
};
