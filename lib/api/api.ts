require('dotenv').config({ quiet: true });
import { LoginData, RegisterData, AuthResponse, AuthRegisResponse, forgotPasswordData, forgotResponse, resetPasswordData, resetResponse, User } from '@/types/auth';
const API_BE = process.env.NEXT_PUBLIC_BE_URL;

export class Auth {
    static async login(credentials: LoginData): Promise<AuthResponse> {
        const response = await fetch(`${API_BE}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        // console.log(response)
        return await response.json();
    }
    static async registrasi(data: RegisterData): Promise<AuthRegisResponse> {
        const response = await fetch(`${API_BE}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        // console.log(response)
        return await response.json();
    }

    static async forgotPassword(data: forgotPasswordData): Promise<forgotResponse> {
        const response = await fetch(`${API_BE}/auth/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        // console.log(response)
        return await response.json();
    }

    static async resetPassword(data: resetPasswordData): Promise<resetResponse> {
        const response = await fetch(`${API_BE}/auth/reset-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        // console.log(response)
        return await response.json();
    }
}