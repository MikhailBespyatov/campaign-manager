export interface AuthUserRequest {
    email: string;
    password: string;
}

export interface AuthUserResponse extends WOM.UserJwtTokenResponse {}

export interface RegisterUserRequest extends AuthUserRequest {
    companyName: string;
    username: string;
}

export interface Id {
    id: string;
}
