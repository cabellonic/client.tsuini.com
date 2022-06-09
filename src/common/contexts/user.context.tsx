import React, { useState, createContext, useEffect, useCallback } from 'react';
// Models
import { User } from '@models/User';
import { Tokens } from '@models/Tokens';
// Services
import * as authService from '@services/auth.service';

type UserContextType = {
	user: User | null;
	login: () => void;
	logout: () => void;
	tokens: Tokens | null;
};

type UserProviderType = {
	children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({
	user: null,
	login: () => {},
	logout: () => {},
	tokens: {
		accessToken: '',
		refreshToken: '',
		expirationDate: 0,
	},
});

const UserProvider: React.FC<UserProviderType> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [tokens, setTokens] = useState<Tokens | null>(null);

	const login = () => authService.loginWithSpotify();

	const logout = () => authService.logout();

	const getUser = async () => {
		try {
			const response = await authService.check();
			if (!response) return;
			setUser(response.user);
			setTokens(response.tokens);
		} catch (error) {}
	};

	const getToken = useCallback(async () => {
		if (!localStorage.getItem('accessToken')) return;
		await getUser();
	}, []);

	useEffect(() => {
		getUser();
	}, []);

	useEffect(() => {
		const interval = setInterval(() => getToken(), 1000 * 60 * 10);
		return () => clearInterval(interval);
	}, [getToken]);

	return (
		<UserContext.Provider value={{ user, tokens, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
