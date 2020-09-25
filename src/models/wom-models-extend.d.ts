declare namespace WOM {
    export interface UserJwtTokenResponse {
        token?: string | null;
        user?: GetUserResponse;
    }

    export interface ContentQueryRequest {
        limit: number;
        pageIndex: number;
    }

    export interface ContentItemResponse {
        womContentId: string;
    }
}
