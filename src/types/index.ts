export interface AuthUserRequest {
    email: string;
    password: string;
}

// TODO: [any]
export interface AuthUserResponse {
    user?: any;
    token?: string;
}

export interface Auth {
    access: number;
    authDenyReason?: string;
}

export interface WithError {
    error?: boolean;
}
