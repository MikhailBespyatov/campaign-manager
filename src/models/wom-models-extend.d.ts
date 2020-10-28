interface RemoveValues {
    removeValues: string[];
}

declare namespace WOM {
    // export interface GetUserResponse {
    //     organizationId: string;
    // }

    export interface ContentItemResponse {
        inCampaignIds?: string[];
    }

    export interface ContentItemResponse {
        womContentId?: string;
    }

    export interface OrganizationAcceptInviteRequest {
        inviteCode: string;
        username: string;
        password: string;
    }

    export interface ContentQueryRequestValues extends Omit<ContentQueryRequest, 'pageIndex', 'limit'> {}

    export interface UpdateAndRemoveCampaignContentValues extends RemoveValues {
        updateValues?: ContentQueryRequestValues;
    }

    export interface UpdateAndRemoveCampaignStatisticsValues extends RemoveValues {
        updateValues?: CampaignStatisticsQueryRequest;
    }

    export interface CampaignScheduleStatus {
        isEnabled?: boolean;
    }
}
