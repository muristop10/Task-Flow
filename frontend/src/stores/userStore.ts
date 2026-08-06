import { create } from "zustand";
import type { iLoginUser } from "../schemas/loginUser.schema";
import { getMe } from "../services/authService";

interface AuthProps {
  isLoading: boolean;
  user: iLoginUser | null;
  token: string | null;
  setAuth: (token: string, user: iLoginUser) => void;
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
    // validade do token
    const token = localStorage.getItem('token')
    if (!token) {
        set({ user: null, isLoading: false, token: null });
    } else {
        try {
            const userData = await getMe(token)
            set({user: userData, isLoading: false, token: token})
        } catch (e) {
            localStorage.removeItem('token')
            console.log(`${e}`)
            set({ user: null, isLoading: false, token: null });
        }
    }
  }
}));
