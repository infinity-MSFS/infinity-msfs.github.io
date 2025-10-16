import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import { Auth0Client, type User } from "@auth0/auth0-spa-js";

interface AuthContextType {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	loginWithRedirect: () => Promise<void>;
	logout: () => void;
	getAccessToken: () => Promise<string>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

let auth0Client: Auth0Client | null = null;

const getAuth0Client = async (): Promise<Auth0Client> => {
	if (!auth0Client) {
		auth0Client = new Auth0Client({
			domain: import.meta.env.VITE_AUTH0_DOMAIN,
			clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
			authorizationParams: {
				// Use full URL without hash for callback
				redirect_uri: window.location.origin,
				audience: import.meta.env.VITE_AUTH0_AUDIENCE,
				scope: "openid profile email",
			},
			cacheLocation: "localstorage",
		});
	}
	return auth0Client;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const initAuth = async () => {
			try {
				const client = await getAuth0Client();

				console.log("Initializing auth...");
				console.log("Current URL:", window.location.href);
				console.log("Search params:", window.location.search);

				// Handle redirect callback
				if (
					window.location.search.includes("code=") &&
					window.location.search.includes("state=")
				) {
					console.log("Handling redirect callback...");
					try {
						const result = await client.handleRedirectCallback();
						console.log("Callback handled successfully:", result);

						// Clear the URL params but keep the hash
						const hash = window.location.hash;
						window.history.replaceState(
							{},
							document.title,
							window.location.pathname + hash,
						);
					} catch (error) {
						console.error("Error handling callback:", error);
					}
				}

				const authenticated = await client.isAuthenticated();
				console.log("Is authenticated:", authenticated);
				setIsAuthenticated(authenticated);

				if (authenticated) {
					const userData = await client.getUser();
					console.log("User data:", userData);
					setUser(userData || null);
				} else {
					console.log("Not authenticated");
				}
			} catch (error) {
				console.error("Auth init error:", error);
			} finally {
				setIsLoading(false);
			}
		};
		initAuth();
	}, []);

	const loginWithRedirect = async () => {
		try {
			const client = await getAuth0Client();
			console.log("Initiating login...");
			await client.loginWithRedirect({
				authorizationParams: {
					redirect_uri: window.location.origin,
				},
			});
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	const logout = async () => {
		const client = await getAuth0Client();
		await client.logout({
			logoutParams: { returnTo: window.location.origin },
		});
		setUser(null);
		setIsAuthenticated(false);
	};

	const getAccessToken = async (): Promise<string> => {
		const client = await getAuth0Client();
		return await client.getTokenSilently();
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated,
				isLoading,
				loginWithRedirect,
				logout,
				getAccessToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
