export interface AuthUserRequest {
    email: string;
    password: string;
}

// TODO: [any]
export interface AuthUserResponse {
    user?: any;
    token?: string;
}
