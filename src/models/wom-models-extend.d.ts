interface RemoveValues {
    removeValues: string[];
}

declare namespace WOM {
    // export interface GetUserResponse {
    //     organizationId: string;
    // }
    export interface AllLanguagesResponse {
        languages: string[];
    }
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

    export enum CampaignAgePromotion {
        Age15To20 = 0,
        Age20To50 = 1,
        Age50Plus = 2
    }

    export interface TurnoverStatisticsQuerySetRequest {
        organizationId: string;
        dateFrom: string;
        dateTo: string;
        groupByWeek: boolean;
        returnQueryCount: boolean;
    }

    interface TurnoverStatisticsQueryRequest {
        dateFrom: string;
        dateTo: string;
        groupByWeek: boolean;
        returnQueryCount: boolean;
    }

    export interface TurnoverStatisticsQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        request?: /* earningsStatisticsQueryRequest */ TurnoverStatisticsQueryRequest;
        /**
         * int32
         */
        totalRecords?: number; // int32
        /**
         * int32
         */
        returnedRecords?: number; // int32
        /**
         * list1
         */
        items?: /* earningStatisticsDailyItem */ EarningStatisticsDailyItem[] | null;
    }

    export interface EarningStatisticsValues {
        /**
         * decimal
         */
        none?: number; // double
        /**
         * decimal
         */
        deposit?: number; // double
        /**
         * decimal
         */
        withdrawal?: number; // double
        /**
         * decimal
         */
        creatorStake?: number; // double
        /**
         * decimal
         */
        creatorReward?: number; // double
        /**
         * decimal
         */
        creatorBonus?: number; // double
        /**
         * decimal
         */
        creatorStakeRefund?: number; // double
        /**
         * decimal
         */
        validationStake?: number; // double
        /**
         * decimal
         */
        validationReward?: number; // double

        /**
         * decimal
         */
        validationProfit?: number; // double
        /**
         * decimal
         */
        validationStakeRefund?: number; // double
        /**
         * decimal
         */
        exchange?: number; // double
        /**
         * decimal
         */
        userTransfer?: number; // double
        /**
         * decimal
         */
        reward?: number; // double
        /**
         * decimal
         */
        migrationSync?: number; // double
        /**
         * decimal
         */
        campaignPayment?: number; // double
        /**
         * decimal
         */
        performancePayment?: number; // double
        /**
         * decimal
         */
        performancePaymentCreator?: number; // double
        /**
         * decimal
         */
        performancePaymentAuthenticator?: number; // double
        /**
         * decimal
         */
        performancePaymentFacilitator?: number; // double
        /**
         * decimal
         */
        performancePaymentPublisher?: number; // double
        /**
         * decimal
         */
        performancePaymentDisplayNetwork?: number; // double
        /**
         * decimal
         */
        performancePaymentAdvertiser?: number; // double
        /**
         * decimal
         */
        performancePaymentBrand?: number; // double
        /**
         * decimal
         */
        giftCardPayment?: number; // double
        /**
         * decimal
         */
        giftCardRefund?: number; // double

        organizationPurchase?: number;
    }
}
