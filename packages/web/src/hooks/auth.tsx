import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
  user: Record<string, unknown>;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: Record<string, unknown>;
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@e-commerce:token');
    const user = localStorage.getItem('@e-commerce:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions/auth-user', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@e-commerce:token', token);
    localStorage.setItem('@e-commerce:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@e-commerce:token');
    localStorage.removeItem('@e-commerce:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Function useAuth must be used within AuthProvider');
  }

  return context;
}
