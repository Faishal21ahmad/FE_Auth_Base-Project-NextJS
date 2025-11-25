export interface User {
    id: string;
    email: string;
    name: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface forgotPasswordData {
    email: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    token: string;
}
export interface AuthRegisResponse {
    success: boolean;
    message: string;
    data?: {
        name: string;
        email: string;
        password: string;
    };
}

export interface forgotResponse {
    success: boolean;
    message: string;
}

export interface ProfileRespon {
    success: boolean;
    data: User;
}


export interface  resetPasswordData{
    token: string;
    password: string;
    password_confrim: string;
}

export interface resetResponse{
    success: boolean;
    message: string;
}

// export interface  {
 
// }