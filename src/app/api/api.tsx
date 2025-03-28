import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/api';

// Определение типа для профиля пользователя
export interface UserProfile {
  id: number;
  name: string;
  email: string;
}

export interface RegisterData {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    password2: string;
  }
  
  export const registerUser = async (userData: RegisterData): Promise<void> => {
    try {
      await axios.post(`${API_URL}/register/`, userData);
    } catch (error: any) {
      console.error("Ошибка регистрации:", error.response?.data || error.message);
      throw error;
    }
  };


export const login = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log("Попытка входа:", { email, password });
  
      // Если API требует username, замените email на username
      const response = await axios.post(`${API_URL}/token/`, {
        username: email, // Попробуйте заменить на `email`, если сервер ожидает email
        password,
      });
  
      console.log("Ответ сервера на вход:", response.data);
  
      if (response.status === 200) {
        const { access, refresh } = response.data;
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        return true;
      }
      return false;
    } catch (error: any) {
      console.error("Ошибка авторизации:", error.response?.data || error.message);
      return false;
    }
  };

// Функция обновления токена
export const refreshToken = async (): Promise<string | null> => {
  try {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) return null;

    const response = await axios.post(`${API_URL}/token/refresh/`, { refresh });
    if (response.status === 200) {
      localStorage.setItem('access', response.data.access);
      return response.data.access;
    }
    return null;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
};

// Функция выхода из системы
export const logout = async (): Promise<void> => {
  try {
    const access = localStorage.getItem('access');
    if (access) {
      await axios.post(`${API_URL}/logout/`, {}, {
        headers: { Authorization: `Bearer ${access}` }
      });
    }
  } catch (error) {
    console.error('Error logging out:', error);
  } finally {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }
};

// Функция получения профиля пользователя
export const getUserProfile = async (): Promise<UserProfile | null> => {
  try {
    let access = localStorage.getItem('access');
    if (!access) {
      access = await refreshToken();  // Если токен истек, обновить его
    }
    if (!access) return null;  // Если не удалось получить или обновить токен, выйти

    const response = await axios.get<UserProfile>(`${API_URL}/user/`, {
      headers: { Authorization: `Bearer ${access}` }
    });

    return response.data;
  } catch (error) {
    console.error('Error getting profile:', error);
    return null;
  }
};
