import { create } from "zustand";
import { getMe } from "../services/authService";
import type { iUser } from "../schemas/user.schema";
interface AuthProps {
  isLoading: boolean;
  user: iUser | null;
  token: string | null;
  setAuth: (token: string, user: iUser) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuth = create<AuthProps>((set) => ({
  // default values
  user: null,
  isLoading: true,
  token: localStorage.getItem("token"),

  // methods
  setAuth: (token, user) => {
    set({ user, isLoading: false, token });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, isLoading: false, token: null });
  },

  // validations
checkAuth: async () => {
  const token = localStorage.getItem('token');

  console.log('TOKEN:', token);

  if (!token) {
    set({ user: null, isLoading: false, token: null });
  } else {
    try {
      console.log('Chamando /me');

      const userData = await getMe(token);

      console.log('USER DATA:', userData);

      set({
        user: userData,
        isLoading: false,
        token
      });
    } catch (e) {
      console.error('ERRO NO GETME:', e);

      localStorage.removeItem('token');

      set({
        user: null,
        isLoading: false,
        token: null
      });
    }
  }
}
}));
