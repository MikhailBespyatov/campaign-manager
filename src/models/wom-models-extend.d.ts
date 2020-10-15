interface RemoveValues {
    removeValues: string[];
}

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
        womContentId?: string;
    }

    export interface OrganizationAcceptInviteRequest {
        inviteCode: string;
        username: string;
        password: string;
    }

    export interface UpdateAndRemoveCampaignContentValues extends RemoveValues {
        updateValues?: ContentQueryRequest;
    }

    export interface UpdateAndRemoveCampaignStatisticsValues extends RemoveValues {
        updateValues?: CampaignStatisticsQueryRequest;
    }
}
