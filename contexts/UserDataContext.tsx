"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface UserData {
    name: string;
    email: string;
}

interface UserContextType {
    user: UserData | null;
    setUserFromToken: (token: string) => void;
    clearUser: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserData | null>(null);
    // const [email, setEmail] = useState<UserData | null>(null);


    const setUserFromToken = (token: string) => {
        try {
            const decoded: any = jwtDecode(token);
            setUser({
                name: decoded.name,
                email: decoded.email,
            });
        } catch {
            setUser(null);
        }
    };

    const clearUser = () => setUser(null);

    // 🟡 Load user saat refresh / reload
    useEffect(() => {
        const token = getTokenFromCookies();
        if (token) setUserFromToken(token);
    }, []);

    return (
        <UserContext.Provider value={{ user, setUserFromToken, clearUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error("useUser must be used within UserProvider");
    return ctx;
}

// 🔧 fungsi baca cookies
function getTokenFromCookies() {
    if (typeof document === "undefined") return null;

    const cookies = document.cookie.split("; ");

    for (const c of cookies) {
        const [key, value] = c.split("=");
        if (key === "token") return value;
    }
    return null;
}
