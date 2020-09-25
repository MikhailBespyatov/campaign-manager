declare namespace WOM {
    /**
     * addressAccountType
     * Representing the wallet types<br/><br/>Values:<br/>0 = None<br/>1 = WOM<br/>2 = RP
     */
    export type AddressAccountType = 0 | 1 | 2; // int32
    /**
     * addressCreateRequest
     */
    export interface AddressCreateRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId: string; // objectId
        addressAccountType: /**
         * addressAccountType
         * Representing the wallet types<br/><br/>Values:<br/>0 = None<br/>1 = WOM<br/>2 = RP
         */
        AddressAccountType /* int32 */;
    }
    /**
     * addressResponse
     * A strongly typed entity representing the amount of tokens in a user's account.
     */
    export interface AddressResponse {
        /**
         * string
         * The name used to describe this address.
         */
        name: string | null;
        /**
         * dateTime
         * The utc date of this address's creation.
         */
        utcCreated: string; // date-time
        /**
         * string
         * This address's account type.
         */
        accountType: string | null;
        /**
         * string
         * The unique address for this particular token account.
         */
        address: string | null;
        /**
         * boolean
         * Only true if this address has previously participated in a transaction.
         */
        hasTransacted: boolean;
        /**
         * boolean
         * True, if this is the default address for this account type.
         */
        isDefault: boolean;
        /**
         * bigInteger
         * The balance currently on this address denominated in WEI
         * example:
         * 100000000000000000000000
         */
        balanceWei: string; // string
        /**
         * decimal
         * The balance currently on this address denominated in Ether
         */
        balance: number; // double
        /**
         * bigInteger
         * The balance pending on this address denominated in WEI
         * example:
         * 100000000000000000000000
         */
        pendingBalanceWei: string; // string
        /**
         * decimal
         * The balance pending on this address denominated in Ether
         */
        pendingBalance: number; // double
        /**
         * dateTime
         * The UTC datetime representation of the balance request.
         */
        balanceQueriedAtUtc: string; // date-time
    }
    /**
     * analyzeEmailRequest
     */
    export interface AnalyzeEmailRequest {
        /**
         * string
         */
        email: string;
    }
    /**
     * analyzeEmailResponse
     */
    export interface AnalyzeEmailResponse {
        result: /**
         * emailValidity
         * <br/><br/>Values:<br/>0 = NotExists<br/>1 = InvalidFormat<br/>2 = SingleUseDomain<br/>3 = Exists
         */
        EmailValidity /* int32 */;
    }
    /**
     * authenticateWithTokenRequest
     */
    export interface AuthenticateWithTokenRequest {
        /**
         * string
         */
        email: string;
        /**
         * string
         */
        password: string;
        /**
         * string
         */
        confirmationToken: string;
    }
    /**
     * bridgeSystemBalanceResponse
     */
    export interface BridgeSystemBalanceResponse {
        woMx: /* systemBalanceResponse */ SystemBalanceResponse;
        ethereum: /* systemBalanceResponse */ SystemBalanceResponse;
        /**
         * string
         */
        escrowAddress: string | null;
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        escrowEthBalanceWei: string; // string
        /**
         * decimal
         */
        escrowEthBalance: number; // double
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        missingFromEscrowWei: string; // string
        /**
         * decimal
         */
        readonly missingFromEscrow: number; // double
        /**
         * boolean
         */
        readonly isBalanced: boolean;
    }
    /**
     * campaignBudget
     */
    export interface CampaignBudget {
        /**
         * decimal
         * The amount of money allocated to this campaign.
         */
        amount: number; // double
        /**
         * decimal
         * The amount spent on this campaign so far.
         */
        spend: number; // double
        /**
         * decimal
         * The amount being spent per day.
         */
        spendPerDay: number; // double
        /**
         * decimal
         * The remaining amount to be spent.
         */
        readonly remaining: number; // double
        /**
         * timeSpan
         * The approximate amount of days left at this spending per day rate.
         * example:
         * 0
         */
        readonly remainingDuration: number; // int64
    }
    /**
     * campaignDetailResponse
     */
    export interface CampaignDetailResponse {
        /**
         * objectId
         * This campaign's unique identifier.
         * example:
         * 000000000000000000000000
         */
        id: string; // objectId
        /**
         * string
         * The user generated name of this campaign.
         */
        title: string | null;
        /**
         * objectId
         * The id of the organization that owns this campaign.
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
        /**
         * objectId
         * The id of the user who initially created this campaign.
         * example:
         * 000000000000000000000000
         */
        creatorId: string; // objectId
        /**
         * objectId
         * The id of the user who last updated this campaign.
         * example:
         * 000000000000000000000000
         */
        updatedById: string; // objectId
        /**
         * dateTime
         * The UTC creation date
         */
        utcCreated: string; // date-time
        /**
         * dateTime
         * The UTC date of the last change.
         */
        utcLastUpdated: string; // date-time
        /**
         * hashSet1
         * The IDs of the content items used for this campaign.
         */
        contentIds: string /* objectId */[] | null;
        budget: /* campaignBudget */ CampaignBudget;
        engagement: /* engagementStatistics */ EngagementStatistics;
        deltaStatistics: /* engagementStatisticsHistorical */ EngagementStatisticsHistorical;
        womQualityScore: /* WOMQualityScore */ WOMQualityScore;
        settings: /* campaignSettings */ CampaignSettings;
        schedule: /* campaignScheduleStatus */ CampaignScheduleStatus;
    }
    /**
     * campaignGetRequest
     */
    export interface CampaignGetRequest {
        /**
         * objectId
         * The unique identifier of the campaign you are retreiving.
         * example:
         * 000000000000000000000000
         */
        campaignId: string; // objectId
        /**
         * int32
         * If set the query will return statistics based on the period (in days) specified here.
         */
        returnStatisticsPeriod: number; // int32
    }
    /**
     * campaignSchedule
     */
    export interface CampaignSchedule {
        /**
         * dateTime
         */
        utcToStart: string; // date-time
        /**
         * dateTime
         */
        utcToEnd: string; // date-time
    }
    /**
     * campaignScheduleStatus
     */
    export interface CampaignScheduleStatus {
        /**
         * dateTime
         */
        utcToStart: string; // date-time
        /**
         * dateTime
         */
        utcToEnd: string; // date-time
        /**
         * dateTime
         */
        utcCreated: string; // date-time
        /**
         * dateTime
         */
        utcStarted: string; // date-time
        /**
         * dateTime
         */
        utcEnded: string; // date-time
        /**
         * timeSpan
         * example:
         * 0
         */
        readonly duration: number; // int64
        /**
         * timeSpan
         * example:
         * 0
         */
        readonly remainingDuration: number; // int64
        /**
         * boolean
         */
        readonly isActive: boolean;
        /**
         * boolean
         */
        hasStarted: boolean;
    }
    /**
     * campaignSettings
     */
    export interface CampaignSettings {
        /**
         * boolean
         * Enable / disable 'watch override'
         */
        watchOverride: boolean;
        /**
         * boolean
         * Enable / disable 'must watch'
         */
        mustWatch: boolean;
        /**
         * int32
         * Boost the content by supplied value.
         */
        boostContentValue: number; // int32
        /**
         * int32
         * Boost the creator by supplied value.
         */
        boostCreatorValue: number; // int32
    }
    /**
     * campaignStatisticsQueryRequest
     */
    export interface CampaignStatisticsQueryRequest {
        /**
         * boolean
         */
        returnQueryCount: boolean;
        /**
         * objectId
         * The id of the campaign.
         * example:
         * 000000000000000000000000
         */
        campaignId: string; // objectId
        /**
         * date
         * Retrieve statistics starting with this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateFrom: string; // string
        /**
         * date
         * Retrieve statistics up until and including this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateTo: string; // string
        /**
         * int32
         * The amount of historical comparison sets to generate
         */
        historicalSets: number; // int32
    }
    /**
     * campaignStatisticsQueryResponse
     */
    export interface CampaignStatisticsQueryResponse {
        /**
         * int32
         */
        totalRecords: number; // int32
        /**
         * int32
         */
        readonly returnedRecords: number; // int32
        request: /* campaignStatisticsQueryRequest */ CampaignStatisticsQueryRequest;
        deltaStatistics: /* engagementStatisticsHistorical */ EngagementStatisticsHistorical;
        /**
         * list1
         */
        readonly sets: /* campaignStatisticsQuerySetResponse */ CampaignStatisticsQuerySetResponse[] | null;
    }
    /**
     * campaignStatisticsQuerySetResponse
     */
    export interface CampaignStatisticsQuerySetResponse {
        /**
         * int32
         */
        totalRecords: number; // int32
        /**
         * int32
         */
        readonly returnedRecords: number; // int32
        /**
         * list1
         */
        items: /* dailyAggregatedCampaignStatistics */ DailyAggregatedCampaignStatistics[] | null;
        request: /* campaignStatisticsQueryRequest */ CampaignStatisticsQueryRequest;
        summary: /* engagementStatistics */ EngagementStatistics;
    }
    /**
     * campaignUpsertRequest
     */
    export interface CampaignUpsertRequest {
        /**
         * nullable1
         * The unique identifier of the campaign (only required during update).
         * example:
         * 000000000000000000000000
         */
        id: string | null; // objectId
        /**
         * objectId
         * The unique identifier of the organization (this cannot be changed)
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
        /**
         * string
         * The user generated name of this campaign.
         */
        title: string | null;
        /**
         * tags
         * This campaign's tags
         */
        tags: string /* string */[] | null;
        /**
         * hashSet1
         * The IDs of the content items used for this campaign.
         */
        contentIds: string /* objectId */[] | null;
        schedule: /* campaignSchedule */ CampaignSchedule;
        budget: /* campaignBudget */ CampaignBudget;
        settings: /* campaignSettings */ CampaignSettings;
    }
    /**
     * campaignsQueryRequest
     */
    export interface CampaignsQueryRequest {
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount: boolean;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
        /**
         * list1
         * Return documents that match any of these tags
         */
        tagsAny: string[] | null;
        /**
         * list1
         * Return documents that contain all of these tags
         */
        tagsAll: string[] | null;
        /**
         * int32
         * If set the query will return statistics based on the period (in days) specified here.
         */
        returnStatisticsPeriod: number; // int32
    }
    /**
     * campaignsQueryResponse
     */
    export interface CampaignsQueryResponse {
        /**
         * int32
         */
        totalRecords: number; // int32
        /**
         * int32
         */
        readonly returnedRecords: number; // int32
        /**
         * list1
         */
        items: /* campaignDetailResponse */ CampaignDetailResponse[] | null;
        /**
         * int32
         */
        totalPages: number; // int32
        /**
         * int32
         */
        currentPageIndex: number; // int32
    }
    /**
     * changeOrganizationUserRequest
     */
    export interface ChangeOrganizationUserRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId: string; // objectId
        permission: /**
         * organizationPermission
         * <br/><br/>Values:<br/>0 = None<br/>1 = Member<br/>2 = Admin
         */
        OrganizationPermission /* int32 */;
    }
    /**
     * contentFlagInappropriateRequest
     */
    export interface ContentFlagInappropriateRequest {
        /**
         * objectId
         * Id of the content to be flagged.
         * example:
         * 000000000000000000000000
         */
        contentId: string; // objectId
        /**
         * string
         * Remote id of the content to be flagged.
         * You must request with a token issued on the target remote network for a match to occur.
         */
        remoteContentId: string | null;
    }
    /**
     * contentGetRequest
     */
    export interface ContentGetRequest {
        /**
         * objectId
         * Search by the id of the content required.
         * example:
         * 000000000000000000000000
         */
        contentId: string; // objectId
        /**
         * string
         * Search by the remote id ('your' id) of this content.
         * You must request with a token issued on the target remote network for a match to occur.
         */
        remoteContentId: string | null;
        /**
         * string
         * Search by the primary Uri of this content.
         */
        uriPrimary: string | null;
        /**
         * boolean
         * Enable the 'is document hidden by user' feature.
         */
        returnUserValidatorHidden: boolean;
        /**
         * boolean
         * Enable the 'user flag inappropriate' feature.
         */
        returnUserFlagInappropriate: boolean;
        /**
         * boolean
         * Enable the 'user specific validation details' feature.
         */
        returnUserValidationDetails: boolean;
        /**
         * boolean
         * Enable the 'user details' feature, which returns more comprehensive information on the owner.
         */
        returnUserDetails: boolean;
    }
    /**
     * contentItemResponse
     */
    export interface ContentItemResponse {
        /**
         * objectId
         * This content's unique identifier on WOM.
         * example:
         * 000000000000000000000000
         */
        id: string; // objectId
        /**
         * dateTime
         */
        createdUtc: string; // date-time
        /**
         * string
         * The id for this content on the remote network that created it.
         */
        remoteContentId: string | null;
        /**
         * objectId
         * The UserId of this content's owner.
         * example:
         * 000000000000000000000000
         */
        userId: string; // objectId
        /**
         * objectId
         * The segment Id of the originating (source) network.
         * example:
         * 000000000000000000000000
         */
        segmentId: string; // objectId
        /**
         * string
         * The title given to this content by the creator.
         */
        title: string | null;
        /**
         * list1
         * The first is the primary product of this content, followed by additional products if available.
         */
        products: /* productResponse */ ProductResponse[] | null;
        /**
         * hashSet1
         * The ids of campaigns this content is currently participating in.
         */
        inCampaignIds: string /* objectId */[] | null;
        /**
         * hashSet1
         * The ids of campaigns this content is currently being promoted in.
         */
        inCampaignPromotionIds: string /* objectId */[] | null;
        /**
         * boolean
         * True if this content is currently in use in any campaigns.
         */
        readonly inCampaignUse: boolean;
        /**
         * boolean
         * True if this content is currently in use in any promotions.
         */
        readonly inCampaignPromotionUse: boolean;
        /**
         * tags
         * The tags associated with this content.
         */
        tags: string /* string */[] | null;
        /**
         * string
         * The primary Uri of the content on the originating network.
         */
        uriPrimary: string | null;
        streamDetails: /* streamDetails */ StreamDetails;
        videoAnalysis: /* videoAnalysisResponse */ VideoAnalysisResponse;
        validationState: /* validationStateResponse */ ValidationStateResponse;
        womQualityScore: /* WOMQualityScore */ WOMQualityScore;
        engagement: /* engagementStatistics */ EngagementStatistics;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        facilitatorId: string; // objectId
        /**
         * nullable1
         * If requested in a query, this field shows if the requesting user has hidden this content for validation / authentication.
         */
        userValidatorHidden: boolean | null;
        /**
         * nullable1
         * If requested in a query, this field shows if the requesting user has marked this content as inappropriate.
         */
        userFlagInappropriate: boolean | null;
        userValidationDetails: /* userValidationDetails */ UserValidationDetails;
        userDetails: /* getUserResponse */ GetUserResponse;
    }
    /**
     * contentPutRequest
     */
    export interface ContentPutRequest {
        /**
         * string
         * The remote id of this content, can be used to look up this content later.
         */
        remoteId: string | null;
        /**
         * string
         * The title of this content.
         */
        title: string | null;
        /**
         * tags
         * The tags associated with this content.
         */
        tags: string /* string */[] | null;
        /**
         * string
         * The primary Uri of this content, as determined by the remote network sending it.
         */
        uriPrimary: string | null;
        streamDetails: /* streamDetails */ StreamDetails;
        videoAnalysis: /* videoAnalysisResponse */ VideoAnalysisResponse;
        /**
         * boolean
         * If true, allows to accept the video details at a later time.
         */
        isDelayedProcessing: boolean;
        primaryProduct: /* productUpsertRequest */ ProductUpsertRequest;
        /**
         * list1
         * Optional list of secondary products.
         */
        secondaryProducts: /* productUpsertRequest */ ProductUpsertRequest[] | null;
        /**
         * string
         * The id of the facilitator on the calling network. Leave null if none specified.
         */
        facilitatorUserId: string | null;
        /**
         * string
         * The id of the publisher organization/system/user.
         */
        publisherId: string | null;
    }
    /**
     * contentPutResponse
     */
    export interface ContentPutResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id: string; // objectId
    }
    /**
     * contentQueryRequest
     */
    // export interface ContentQueryRequest {
    //     /**
    //      * int32
    //      */
    //     limit: number; // int32
    //     /**
    //      * boolean
    //      */
    //     returnQueryCount: boolean;
    //     /**
    //      * int32
    //      */
    //     pageIndex: number; // int32
    //     /**
    //      * hashSet1
    //      * Query by a list of content ids.
    //      */
    //     byContentIds: string /* objectId */[] | null;
    //     validationResult: /**
    //      * validationResult
    //      * <br/><br/>Values:<br/>0 = NotProcessed<br/>1 = AcceptedByConsensus<br/>-1 = RejectedByConsensus
    //      */
    //     ValidationResult /* int32 */;
    //     validationEndedReason: /**
    //      * validationEndedReason
    //      * <br/><br/>Values:<br/>0 = None<br/>1 = CompletedNormally<br/>2 = ConsensusNotReached<br/>3 = TerminatedInHold
    //      */
    //     ValidationEndedReason /* int32 */;
    //     validationStage: /**
    //      * validationStage
    //      * <br/><br/>Values:<br/>0 = NotStarted<br/>1 = Processing<br/>2 = Ended<br/>3 = Held
    //      */
    //     ValidationStage /* int32 */;
    //     /**
    //      * nullable1
    //      * Filter by documents that are currently being validated.
    //      */
    //     currentlyValidating: boolean | null;
    //     /**
    //      * nullable1
    //      * Filter by reported state
    //      */
    //     isReported: boolean | null;
    //     /**
    //      * nullable1
    //      * Filter by live state
    //      */
    //     isLive: boolean | null;
    //     /**
    //      * nullable1
    //      * Filter by whether this user participated during consensus.
    //      */
    //     partOfConsensus: boolean | null;
    //     /**
    //      * boolean
    //      * Implies: PartOfConsensus, returns validation documents that the user participated in, but did not get rewarded for or that are no longer live.
    //      */
    //     partOfConsensusComplete: boolean;
    //     /**
    //      * objectId
    //      * Return only documents owned by this user Id.
    //      * example:
    //      * 000000000000000000000000
    //      */
    //     byUserId: string; // objectId
    //     /**
    //      * string
    //      * Return only documents owned by this remote user Id.
    //      * You must request with a token issued on the target remote network for a match to occur.
    //      */
    //     byRemoteUserId: string | null;
    //     /**
    //      * string
    //      * Return only documents owned by this remote Id.
    //      * You must request with a token issued on the target remote network for a match to occur.
    //      */
    //     byRemoteId: string | null;
    //     /**
    //      * objectId
    //      * Return only documents from this segment.
    //      * example:
    //      * 000000000000000000000000
    //      */
    //     bySegmentId: string; // objectId
    //     /**
    //      * nullable1
    //      * Filter by documents that are single channel audio
    //      */
    //     isSingleChannelAudio: boolean | null;
    //     /**
    //      * nullable1
    //      * Filter by documents that are unlimited length
    //      */
    //     isUnlimitedLength: boolean | null;
    //     /**
    //      * nullable1
    //      * Filter by documents that were filmed in portrait mode
    //      */
    //     isPortraitAspect: boolean | null;
    //     /**
    //      * nullable1
    //      * Filter by documents with subtitles.
    //      */
    //     hasSubtitles: boolean | null;
    //     /**
    //      * tags
    //      * Return documents that match any of these tags
    //      */
    //     tagsAny: string /* string */[] | null;
    //     /**
    //      * tags
    //      * Return documents that contain all of these tags
    //      */
    //     tagsAll: string /* string */[] | null;
    //     /**
    //      * boolean
    //      * Enable the 'is document hidden by user' feature.
    //      */
    //     returnUserValidatorHidden: boolean;
    //     /**
    //      * boolean
    //      * Enable the 'user flag inappropriate' feature.
    //      */
    //     returnUserFlagInappropriate: boolean;
    //     /**
    //      * boolean
    //      * Enable the 'user specific validation details' feature.
    //      */
    //     returnUserValidationDetails: boolean;
    //     /**
    //      * boolean
    //      * Enable the 'user details' feature, which returns more comprehensive information on the owner.
    //      */
    //     returnUserDetails: boolean;
    //     /**
    //      * boolean
    //      * Will order the results by 'validation timer' ascending.
    //      */
    //     orderByValidationTimer: boolean;
    // }
    /**
     * contentQueryResponse
     */
    export interface ContentQueryResponse {
        /**
         * int32
         */
        totalRecords: number; // int32
        /**
         * int32
         */
        readonly returnedRecords: number; // int32
        /**
         * list1
         */
        items: /* contentItemResponse */ ContentItemResponse[] | null;
        /**
         * int32
         */
        totalPages: number; // int32
        /**
         * int32
         */
        currentPageIndex: number; // int32
        request: /* contentQueryRequest */ ContentQueryRequest;
    }
    /**
     * contentStatisticsQueryRequest
     */
    export interface ContentStatisticsQueryRequest {
        /**
         * boolean
         */
        returnQueryCount: boolean;
        /**
         * objectId
         * Search by the id of the content required.
         * example:
         * 000000000000000000000000
         */
        contentId: string; // objectId
        /**
         * string
         * Search by the remote id ('your' id) of this content.
         * You must request with a token issued on the target remote network for a match to occur.
         */
        remoteContentId: string | null;
        /**
         * string
         * Search by the primary Uri of this content.
         */
        uriPrimary: string | null;
        /**
         * date
         * Retrieve statistics starting with this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateFrom: string; // string
        /**
         * date
         * Retrieve statistics up until and including this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateTo: string; // string
    }
    /**
     * contentStatisticsQueryResponse
     */
    export interface ContentStatisticsQueryResponse {
        /**
         * int32
         */
        totalRecords: number; // int32
        /**
         * int32
         */
        readonly returnedRecords: number; // int32
        /**
         * list1
         */
        items: /* statisticsDaily */ StatisticsDaily[] | null;
        request: /* contentStatisticsQueryRequest */ ContentStatisticsQueryRequest;
        totalsInPage: /* engagementStatistics */ EngagementStatistics;
    }
    /**
     * contentStreamUpdateRequest
     */
    export interface ContentStreamUpdateRequest {
        /**
         * objectId
         * Search by the id of the content required.
         * example:
         * 000000000000000000000000
         */
        contentId: string; // objectId
        /**
         * string
         * The remote id of this content, can be used to look up this content later.
         */
        remoteContentId: string | null;
        /**
         * string
         * The primary Uri of this content, as determined by the remote network sending it.
         */
        uriPrimary: string | null;
        streamDetails: /* streamDetails */ StreamDetails;
        videoAnalysis: /* videoAnalysisResponse */ VideoAnalysisResponse;
    }
    /**
     * createNetworkAdministratorRequest
     */
    export interface CreateNetworkAdministratorRequest {
        /**
         * string
         */
        remoteIssuer: string | null;
        /**
         * string
         */
        remoteId: string | null;
    }
    /**
     * createOrganizationRequest
     */
    export interface CreateOrganizationRequest {
        /**
         * string
         * The title of this organization.
         */
        companyName: string | null;
        /**
         * string
         * Supply an email for the initial administrator of this organization.
         */
        administratorEmail: string | null;
        /**
         * tags
         * The mandatory tags of this organization.
         */
        mandatoryTags: string /* string */[] | null;
    }
    /**
     * cryptoInformationResponse
     */
    export interface CryptoInformationResponse {
        /**
         * list1
         */
        addresses: /**
         * addressResponse
         * A strongly typed entity representing the amount of tokens in a user's account.
         */
        AddressResponse[] | null;
        bridgeBalanceReport: /* bridgeSystemBalanceResponse */ BridgeSystemBalanceResponse;
        /**
         * transactionQueueReportResponse
         */
        pendingBalanceReport: /* transactionQueueReportItemResponse */ TransactionQueueReportItemResponse[] | null;
    }
    /**
     * dailyAggregatedCampaignStatistics
     */
    export interface DailyAggregatedCampaignStatistics {
        /**
         * int32
         * The total number of views
         */
        viewCount: number; // int32
        /**
         * int32
         * Views that had a duration less than 25%
         */
        viewD1Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD1Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 25-49%
         */
        viewD2Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD2Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 50-74%
         */
        viewD3Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD3Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 75-100%
         */
        viewD4Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD4Percentage: number; // double
        /**
         * int32
         * The total number of likes
         */
        likeCount: number; // int32
        /**
         * decimal
         */
        readonly likesPercentage: number; // double
        /**
         * int32
         * The total number of ratings by users (not authenticators)
         */
        ratingCount: number; // int32
        /**
         * decimal
         */
        readonly ratingsPercentage: number; // double
        /**
         * int32
         * The total number of times this item was saved.
         */
        saveCount: number; // int32
        /**
         * decimal
         */
        readonly savesPercentage: number; // double
        /**
         * int32
         * The amount of times this item was shared.
         */
        shareCount: number; // int32
        /**
         * decimal
         */
        readonly sharesPercentage: number; // double
        /**
         * int32
         * The amount of comments.
         */
        commentCount: number; // int32
        /**
         * decimal
         */
        readonly commentsPercentage: number; // double
        /**
         * int32
         * The amount of times this item received a click.
         */
        clickCount: number; // int32
        /**
         * decimal
         */
        readonly clicksPercentage: number; // double
        /**
         * int32
         * The amount of times this item received a buy event.
         */
        buyCount: number; // int32
        /**
         * decimal
         */
        readonly buysPercentage: number; // double
        /**
         * int32
         * The total engagements of this item.
         */
        readonly total: number; // int32
        /**
         * date
         * The date (does not include a time component) of this statistics entry.
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateUtc: string; // string
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        authenticity: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        creativity: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        positivity: number | null; // double
        /**
         * objectId
         * The ID of the campaign
         * example:
         * 000000000000000000000000
         */
        campaignId: string; // objectId
    }
    /**
     * dailyAggregatedOrganizationStatistics
     */
    export interface DailyAggregatedOrganizationStatistics {
        /**
         * int32
         * The total number of views
         */
        viewCount: number; // int32
        /**
         * int32
         * Views that had a duration less than 25%
         */
        viewD1Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD1Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 25-49%
         */
        viewD2Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD2Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 50-74%
         */
        viewD3Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD3Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 75-100%
         */
        viewD4Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD4Percentage: number; // double
        /**
         * int32
         * The total number of likes
         */
        likeCount: number; // int32
        /**
         * decimal
         */
        readonly likesPercentage: number; // double
        /**
         * int32
         * The total number of ratings by users (not authenticators)
         */
        ratingCount: number; // int32
        /**
         * decimal
         */
        readonly ratingsPercentage: number; // double
        /**
         * int32
         * The total number of times this item was saved.
         */
        saveCount: number; // int32
        /**
         * decimal
         */
        readonly savesPercentage: number; // double
        /**
         * int32
         * The amount of times this item was shared.
         */
        shareCount: number; // int32
        /**
         * decimal
         */
        readonly sharesPercentage: number; // double
        /**
         * int32
         * The amount of comments.
         */
        commentCount: number; // int32
        /**
         * decimal
         */
        readonly commentsPercentage: number; // double
        /**
         * int32
         * The amount of times this item received a click.
         */
        clickCount: number; // int32
        /**
         * decimal
         */
        readonly clicksPercentage: number; // double
        /**
         * int32
         * The amount of times this item received a buy event.
         */
        buyCount: number; // int32
        /**
         * decimal
         */
        readonly buysPercentage: number; // double
        /**
         * int32
         * The total engagements of this item.
         */
        readonly total: number; // int32
        /**
         * date
         * The date (does not include a time component) of this statistics entry.
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateUtc: string; // string
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        authenticity: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        creativity: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        positivity: number | null; // double
        /**
         * objectId
         * The ID of the organization
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
    }
    /**
     * emailValidity
     * <br/><br/>Values:<br/>0 = NotExists<br/>1 = InvalidFormat<br/>2 = SingleUseDomain<br/>3 = Exists
     */
    export type EmailValidity = 0 | 1 | 2 | 3; // int32
    /**
     * enableNetworkAccountRequest
     */
    export interface EnableNetworkAccountRequest {
        /**
         * string
         */
        remoteId: string | null;
        /**
         * string
         */
        remoteUsername: string | null;
        /**
         * string
         */
        remoteValidatedEmail: string | null;
        /**
         * string
         */
        remoteVerifiedMobileNumber: string | null;
    }
    /**
     * engagementStatistics
     */
    export interface EngagementStatistics {
        /**
         * int32
         * The total number of views
         */
        viewCount: number; // int32
        /**
         * int32
         * Views that had a duration less than 25%
         */
        viewD1Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD1Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 25-49%
         */
        viewD2Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD2Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 50-74%
         */
        viewD3Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD3Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 75-100%
         */
        viewD4Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD4Percentage: number; // double
        /**
         * int32
         * The total number of likes
         */
        likeCount: number; // int32
        /**
         * decimal
         */
        readonly likesPercentage: number; // double
        /**
         * int32
         * The total number of ratings by users (not authenticators)
         */
        ratingCount: number; // int32
        /**
         * decimal
         */
        readonly ratingsPercentage: number; // double
        /**
         * int32
         * The total number of times this item was saved.
         */
        saveCount: number; // int32
        /**
         * decimal
         */
        readonly savesPercentage: number; // double
        /**
         * int32
         * The amount of times this item was shared.
         */
        shareCount: number; // int32
        /**
         * decimal
         */
        readonly sharesPercentage: number; // double
        /**
         * int32
         * The amount of comments.
         */
        commentCount: number; // int32
        /**
         * decimal
         */
        readonly commentsPercentage: number; // double
        /**
         * int32
         * The amount of times this item received a click.
         */
        clickCount: number; // int32
        /**
         * decimal
         */
        readonly clicksPercentage: number; // double
        /**
         * int32
         * The amount of times this item received a buy event.
         */
        buyCount: number; // int32
        /**
         * decimal
         */
        readonly buysPercentage: number; // double
        /**
         * int32
         * The total engagements of this item.
         */
        readonly total: number; // int32
    }
    /**
     * engagementStatisticsHistorical
     */
    export interface EngagementStatisticsHistorical {
        /**
         * dateTime
         */
        dateFromHistorical: string; // date-time
        /**
         * dateTime
         */
        dateToHistorical: string; // date-time
        /**
         * dateTime
         */
        dateFromLatest: string; // date-time
        /**
         * dateTime
         */
        dateToLatest: string; // date-time
        /**
         * decimal
         */
        readonly viewsDelta: number; // double
        /**
         * decimal
         */
        readonly viewsD1Delta: number; // double
        /**
         * decimal
         */
        readonly viewsD2Delta: number; // double
        /**
         * decimal
         */
        readonly viewsD3Delta: number; // double
        /**
         * decimal
         */
        readonly viewsD4Delta: number; // double
        /**
         * decimal
         */
        readonly likesDelta: number; // double
        /**
         * decimal
         */
        readonly ratingsDelta: number; // double
        /**
         * decimal
         */
        readonly savesDelta: number; // double
        /**
         * decimal
         */
        readonly sharesDelta: number; // double
        /**
         * decimal
         */
        readonly clicksDelta: number; // double
        /**
         * decimal
         */
        readonly buysDelta: number; // double
    }
    /**
     * error400BadRequest
     */
    export interface Error400BadRequest {
        /**
         * string
         */
        readonly message: string | null;
        /**
         * boolean
         */
        readonly isSuccess: boolean;
        loggingLevel: /**
         * logLevel
         * <br/><br/>Values:<br/>0 = Trace<br/>1 = Debug<br/>2 = Information<br/>3 = Warning<br/>4 = Error<br/>5 = Critical<br/>6 = None
         */
        LogLevel /* int32 */;
        /**
         * dictionary2
         */
        errors: {
            [name: string]: string[];
        } | null;
        /**
         * string
         */
        title: string | null;
        /**
         * string
         */
        traceId: string | null;
    }
    /**
     * error404NotFoundResponse
     */
    export interface Error404NotFoundResponse {
        /**
         * string
         */
        readonly message: string | null;
        /**
         * boolean
         */
        readonly isSuccess: boolean;
        loggingLevel: /**
         * logLevel
         * <br/><br/>Values:<br/>0 = Trace<br/>1 = Debug<br/>2 = Information<br/>3 = Warning<br/>4 = Error<br/>5 = Critical<br/>6 = None
         */
        LogLevel /* int32 */;
    }
    /**
     * error409ConflictResponse
     */
    export interface Error409ConflictResponse {
        /**
         * string
         */
        readonly message: string | null;
        /**
         * boolean
         */
        readonly isSuccess: boolean;
        loggingLevel: /**
         * logLevel
         * <br/><br/>Values:<br/>0 = Trace<br/>1 = Debug<br/>2 = Information<br/>3 = Warning<br/>4 = Error<br/>5 = Critical<br/>6 = None
         */
        LogLevel /* int32 */;
    }
    /**
     * exchangeRateItem
     */
    export interface ExchangeRateItem {
        /**
         * string
         */
        assetName: string | null;
        /**
         * decimal
         */
        price: number; // double
    }
    /**
     * exchangeRateRequest
     */
    export interface ExchangeRateRequest {}
    /**
     * exchangeRateResponse
     */
    export interface ExchangeRateResponse {
        /**
         * list1
         */
        rates: /* exchangeRateItem */ ExchangeRateItem[] | null;
        /**
         * dateTime
         * The time at which this request to the token information external API was made.
         */
        utcRequested: string; // date-time
    }
    /**
     * existenceResponse
     */
    export interface ExistenceResponse {
        /**
         * boolean
         */
        exists: boolean;
    }
    /**
     * getCurrentAuthorizationsRequest
     */
    export interface GetCurrentAuthorizationsRequest {
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        userId: string | null; // objectId
    }
    /**
     * getCurrentAuthorizationsResponse
     */
    export interface GetCurrentAuthorizationsResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId: string; // objectId
        /**
         * roles
         */
        roles: string /* string */[] | null;
        /**
         * string
         */
        email: string | null;
        /**
         * boolean
         */
        isEmailValidated: boolean;
        /**
         * boolean
         */
        isAccountVerified: boolean;
    }
    /**
     * getNotificationsRequest
     */
    export interface GetNotificationsRequest {
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount: boolean;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        lastId: string; // objectId
    }
    /**
     * getOrganizationRequest
     */
    export interface GetOrganizationRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
    }
    /**
     * getOrganizationTagsRequest
     */
    export interface GetOrganizationTagsRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
    }
    /**
     * getUserRequest
     */
    export interface GetUserRequest {
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        userId: string | null; // objectId
    }
    /**
     * getUserResponse
     */
    export interface GetUserResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId: string; // objectId
        /**
         * dateTime
         */
        utcCreated: string; // date-time
        /**
         * dateTime
         */
        utcUpdated: string; // date-time
        /**
         * dateTime
         */
        utcLastAuthentication: string; // date-time
        /**
         * roles
         */
        roles: string /* string */[] | null;
        /**
         * string
         */
        email: string | null;
        /**
         * string
         */
        mobileNumber: string | null;
        /**
         * string
         */
        username: string | null;
        /**
         * boolean
         */
        isAccountVerified: boolean;
        /**
         * boolean
         */
        isEmailValidated: boolean;
        profile: /* userProfileResponse */ UserProfileResponse;
        /**
         * objectId
         * WOM's id for this user.
         * example:
         * 000000000000000000000000
         */
        womUserId: string; // objectId
        /**
         * string
         */
        firstName: string | null;
        /**
         * string
         */
        lastName: string | null;
        /**
         * string
         */
        readonly fullName: string | null;
        /**
         * string
         * The user's remote id (not WOM userId) if it exists.
         */
        remoteUserId: string | null;
        /**
         * string
         * The user's remote username if it exists.
         */
        remoteUsername: string | null;
        /**
         * string
         * The remote issuer that created this user, if it exists.
         */
        remoteIssuer: string | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        walletId: string; // objectId
        /**
         * boolean
         */
        hasWallet: boolean;
        /**
         * int32
         * If this user is allowed free stakes, the amount of stakes remaining.
         */
        freeStakesRemaining: number; // int32
        organizationMembership: /* organizationMembership */ OrganizationMembership;
    }
    /**
     * getValidationDetailRequest
     */
    export interface GetValidationDetailRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId: string; // objectId
        /**
         * string
         */
        remoteContentId: string | null;
    }
    /**
     * getValidationStateRequest
     */
    export interface GetValidationStateRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId: string; // objectId
        /**
         * string
         */
        remoteContentId: string | null;
    }
    /**
     * hour
     */
    export interface Hour {
        /**
         * int32
         */
        readonly hoursSinceEpoch: number; // int32
        /**
         * boolean
         */
        readonly isDefault: boolean;
    }
    /**
     * IQueryRequest
     */
    export interface IQueryRequest {
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount: boolean;
        /**
         * boolean
         */
        enableUnboundQueryCount: boolean;
    }
    /**
     * IRequestContext
     */
    export interface IRequestContext {
        /**
         * boolean
         */
        readonly isAuthenticated: boolean;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        readonly userId: string; // objectId
        /**
         * boolean
         */
        readonly isRemote: boolean;
        /**
         * string
         */
        readonly remoteUserId: string | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        readonly segmentId: string; // objectId
        /**
         * string
         */
        readonly currentWebDomain: string | null;
        /**
         * string
         */
        readonly authenticationToken: string | null;
        /**
         * string
         */
        readonly issuer: string | null;
        clientApiVersion: /* version */ Version;
    }
    /**
     * IUserResponse
     */
    export interface IUserResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId: string; // objectId
        /**
         * roles
         */
        roles: string /* string */[] | null;
        /**
         * string
         */
        email: string | null;
        /**
         * boolean
         */
        isAccountVerified: boolean;
    }
    /**
     * logLevel
     * <br/><br/>Values:<br/>0 = Trace<br/>1 = Debug<br/>2 = Information<br/>3 = Warning<br/>4 = Error<br/>5 = Critical<br/>6 = None
     */
    export type LogLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6; // int32
    /**
     * messageResponseBase
     */
    export interface MessageResponseBase {
        /**
         * string
         */
        readonly message: string | null;
        /**
         * boolean
         */
        isSuccess: boolean;
    }
    /**
     * notificationItemResponse
     */
    export interface NotificationItemResponse {
        /**
         * dateTime
         */
        utcCreated: string; // date-time
        /**
         * string
         */
        type: string | null;
        /**
         * string
         */
        receiverUserId: string | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        receiverNetworkId: string; // objectId
        /**
         * boolean
         */
        isImportant: boolean;
        /**
         * list1
         */
        arguments: string[] | null;
    }
    /**
     * notificationsResponse
     */
    export interface NotificationsResponse {
        /**
         * list1
         */
        readonly items: /* notificationItemResponse */ NotificationItemResponse[] | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        maxId: string; // objectId
    }
    /**
     * organizationInvitationItem
     */
    export interface OrganizationInvitationItem {
        /**
         * string
         */
        email: string;
        permission: /**
         * organizationPermission
         * <br/><br/>Values:<br/>0 = None<br/>1 = Member<br/>2 = Admin
         */
        OrganizationPermission /* int32 */;
    }
    /**
     * organizationMembership
     */
    export interface OrganizationMembership {
        /**
         * hashSet1
         */
        memberOf: string /* objectId */[] | null;
        /**
         * hashSet1
         */
        adminOf: string /* objectId */[] | null;
    }
    /**
     * organizationPermission
     * <br/><br/>Values:<br/>0 = None<br/>1 = Member<br/>2 = Admin
     */
    export type OrganizationPermission = 0 | 1 | 2; // int32
    /**
     * organizationResponse
     */
    export interface OrganizationResponse {
        /**
         * objectId
         * The unique identifier for this organization
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
        /**
         * string
         * The title of this organization.
         */
        title: string | null;
        /**
         * tags
         * The mandatory tags of this organization.
         */
        mandatoryTags: string /* string */[] | null;
        /**
         * list1
         * The users (by id) that have admin rights over this organization.
         */
        adminIds: string /* objectId */[] | null;
        /**
         * list1
         * The users (by id) that are members of this organization.
         */
        memberIds: string /* objectId */[] | null;
        /**
         * objectId
         * If created, the identifier of this organization's wallet
         * example:
         * 000000000000000000000000
         */
        walletId: string; // objectId
        /**
         * boolean
         * True if this organization has a token wallet.
         */
        hasWallet: boolean;
    }
    /**
     * organizationStatisticsQueryRequest
     */
    export interface OrganizationStatisticsQueryRequest {
        /**
         * boolean
         */
        returnQueryCount: boolean;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
        /**
         * date
         * Retrieve statistics starting with this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateFrom: string; // string
        /**
         * date
         * Retrieve statistics up until and including this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateTo: string; // string
        /**
         * int32
         * The amount of historical comparison sets to generate
         */
        historicalSets: number; // int32
    }
    /**
     * organizationStatisticsQueryResponse
     */
    export interface OrganizationStatisticsQueryResponse {
        /**
         * int32
         */
        totalRecords: number; // int32
        /**
         * int32
         */
        readonly returnedRecords: number; // int32
        request: /* organizationStatisticsQueryRequest */ OrganizationStatisticsQueryRequest;
        deltaStatistics: /* engagementStatisticsHistorical */ EngagementStatisticsHistorical;
        /**
         * list1
         */
        readonly sets: /* organizationStatisticsQuerySetResponse */
        OrganizationStatisticsQuerySetResponse[] | null;
    }
    /**
     * organizationStatisticsQuerySetResponse
     */
    export interface OrganizationStatisticsQuerySetResponse {
        /**
         * int32
         */
        totalRecords: number; // int32
        /**
         * int32
         */
        readonly returnedRecords: number; // int32
        /**
         * list1
         */
        items: /* dailyAggregatedOrganizationStatistics */ DailyAggregatedOrganizationStatistics[] | null;
        request: /* organizationStatisticsQueryRequest */ OrganizationStatisticsQueryRequest;
        summary: /* engagementStatistics */ EngagementStatistics;
    }
    /**
     * organizationStatisticsRequest
     */
    export interface OrganizationStatisticsRequest {
        /**
         * objectId
         * The id of the organization.
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
    }
    /**
     * organizationStatisticsResponse
     */
    export interface OrganizationStatisticsResponse {
        /**
         * decimal
         * The amount of money allocated to this campaign.
         */
        amount: number; // double
        /**
         * decimal
         * The amount spent on this campaign so far.
         */
        spend: number; // double
        /**
         * decimal
         * The amount being spent per day.
         */
        spendPerDay: number; // double
        /**
         * decimal
         * The remaining amount to be spent.
         */
        readonly remaining: number; // double
        /**
         * timeSpan
         * The approximate amount of days left at this spending per day rate.
         * example:
         * 0
         */
        readonly remainingDuration: number; // int64
        /**
         * int32
         */
        campaignsRunning: number; // int32
    }
    /**
     * organizationTagsResponse
     */
    export interface OrganizationTagsResponse {
        /**
         * tags
         */
        discoveryTags: string /* string */[] | null;
    }
    /**
     * organizationUsersResponse
     */
    export interface OrganizationUsersResponse {
        /**
         * int32
         */
        totalRecords: number; // int32
        /**
         * int32
         */
        readonly returnedRecords: number; // int32
        /**
         * list1
         */
        items: /* getUserResponse */ GetUserResponse[] | null;
        /**
         * int32
         */
        totalPages: number; // int32
        /**
         * int32
         */
        currentPageIndex: number; // int32
    }
    /**
     * productResponse
     */
    export interface ProductResponse {
        /**
         * objectId
         * The product's unique identifier
         * example:
         * 000000000000000000000000
         */
        readonly id: string; // objectId
        /**
         * string
         * This product's brand name
         */
        brandName: string | null;
        /**
         * string
         * The item name of this product.
         */
        item: string | null;
        /**
         * tag
         * The tag that represents this product's brand.
         * example:
         * string
         */
        tagBrand: string; // string
        /**
         * tag
         * The main category tag
         * example:
         * string
         */
        tagCategory: string; // string
        /**
         * tag
         * The sub category tag
         * example:
         * string
         */
        tagSubCategory: string; // string
        /**
         * tags
         * Extra tags, will not include other tags referenced here.
         */
        extraTags: string /* string */[] | null;
    }
    /**
     * productUpsertRequest
     */
    export interface ProductUpsertRequest {
        /**
         * string
         */
        remoteId: string | null;
        /**
         * hashSet1
         */
        upcCodes: string[] | null;
        /**
         * string
         */
        brandName: string | null;
        /**
         * string
         */
        itemName: string | null;
        /**
         * string
         */
        primaryCategory: string | null;
        /**
         * hashSet1
         */
        secondaryCategories: string[] | null;
        /**
         * string
         */
        brandProductImageUrl: string | null;
        /**
         * tags
         */
        tags: string /* string */[] | null;
    }
    /**
     * queryOrganizationUsersRequest
     */
    export interface QueryOrganizationUsersRequest {
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount: boolean;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
        /**
         * string
         */
        textSearch: string | null;
    }
    /**
     * responseTransform
     */
    export interface ResponseTransform {
        /**
         * boolean
         */
        readonly isApplicable: boolean;
        version: /* version */ Version;
        clientVersion: /* version */ Version;
        mode: /**
         * transformMode
         * <br/><br/>Values:<br/>0 = ForVersion<br/>1 = BeforeAndForVersion<br/>2 = BeforeVersion<br/>3 = AfterVersion<br/>4 = AfterAndForVersion
         */
        TransformMode /* int32 */;
    }
    /**
     * rewardConsumeRequest
     */
    export interface RewardConsumeRequest {}
    /**
     * rewardGetPendingRequest
     */
    export interface RewardGetPendingRequest {}
    /**
     * rewardResponse
     */
    export interface RewardResponse {
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        valueWei: string; // string
        /**
         * decimal
         */
        value: number; // double
    }
    /**
     * sendOrganizationInvitationsRequest
     */
    export interface SendOrganizationInvitationsRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
        /**
         * list1
         */
        invitations: /* organizationInvitationItem */ OrganizationInvitationItem[];
    }
    /**
     * statisticsDaily
     */
    export interface StatisticsDaily {
        /**
         * int32
         * The total number of views
         */
        viewCount: number; // int32
        /**
         * int32
         * Views that had a duration less than 25%
         */
        viewD1Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD1Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 25-49%
         */
        viewD2Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD2Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 50-74%
         */
        viewD3Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD3Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 75-100%
         */
        viewD4Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD4Percentage: number; // double
        /**
         * int32
         * The total number of likes
         */
        likeCount: number; // int32
        /**
         * decimal
         */
        readonly likesPercentage: number; // double
        /**
         * int32
         * The total number of ratings by users (not authenticators)
         */
        ratingCount: number; // int32
        /**
         * decimal
         */
        readonly ratingsPercentage: number; // double
        /**
         * int32
         * The total number of times this item was saved.
         */
        saveCount: number; // int32
        /**
         * decimal
         */
        readonly savesPercentage: number; // double
        /**
         * int32
         * The amount of times this item was shared.
         */
        shareCount: number; // int32
        /**
         * decimal
         */
        readonly sharesPercentage: number; // double
        /**
         * int32
         * The amount of comments.
         */
        commentCount: number; // int32
        /**
         * decimal
         */
        readonly commentsPercentage: number; // double
        /**
         * int32
         * The amount of times this item received a click.
         */
        clickCount: number; // int32
        /**
         * decimal
         */
        readonly clicksPercentage: number; // double
        /**
         * int32
         * The amount of times this item received a buy event.
         */
        buyCount: number; // int32
        /**
         * decimal
         */
        readonly buysPercentage: number; // double
        /**
         * int32
         * The total engagements of this item.
         */
        readonly total: number; // int32
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id: string; // objectId
        /**
         * objectId
         * The ID of the content known to WOM.
         * example:
         * 000000000000000000000000
         */
        womContentId: string; // objectId
        /**
         * string
         * The ID of the content known to the remote network.
         */
        remoteContentId: string | null;
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        authenticity: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        creativity: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        positivity: number | null; // double
        /**
         * date
         * The date (does not include a time component) of this statistics entry.
         * example:
         * 2020-01-01T00:00:00Z
         */
        date: string; // string
    }
    /**
     * statisticsHourly
     */
    export interface StatisticsHourly {
        /**
         * int32
         * The total number of views
         */
        viewCount: number; // int32
        /**
         * int32
         * Views that had a duration less than 25%
         */
        viewD1Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD1Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 25-49%
         */
        viewD2Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD2Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 50-74%
         */
        viewD3Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD3Percentage: number; // double
        /**
         * int32
         * Views that had a duration inclusive 75-100%
         */
        viewD4Count: number; // int32
        /**
         * decimal
         */
        readonly viewsD4Percentage: number; // double
        /**
         * int32
         * The total number of likes
         */
        likeCount: number; // int32
        /**
         * decimal
         */
        readonly likesPercentage: number; // double
        /**
         * int32
         * The total number of ratings by users (not authenticators)
         */
        ratingCount: number; // int32
        /**
         * decimal
         */
        readonly ratingsPercentage: number; // double
        /**
         * int32
         * The total number of times this item was saved.
         */
        saveCount: number; // int32
        /**
         * decimal
         */
        readonly savesPercentage: number; // double
        /**
         * int32
         * The amount of times this item was shared.
         */
        shareCount: number; // int32
        /**
         * decimal
         */
        readonly sharesPercentage: number; // double
        /**
         * int32
         * The amount of comments.
         */
        commentCount: number; // int32
        /**
         * decimal
         */
        readonly commentsPercentage: number; // double
        /**
         * int32
         * The amount of times this item received a click.
         */
        clickCount: number; // int32
        /**
         * decimal
         */
        readonly clicksPercentage: number; // double
        /**
         * int32
         * The amount of times this item received a buy event.
         */
        buyCount: number; // int32
        /**
         * decimal
         */
        readonly buysPercentage: number; // double
        /**
         * int32
         * The total engagements of this item.
         */
        readonly total: number; // int32
        hour: /* hour */ Hour;
        /**
         * nullable1
         */
        authenticity: number | null; // double
        /**
         * nullable1
         */
        creativity: number | null; // double
        /**
         * nullable1
         */
        positivity: number | null; // double
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        readonly id: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        womContentId: string; // objectId
        /**
         * string
         */
        remoteContentId: string | null;
    }
    /**
     * statisticsHourlyUploadRequest
     */
    export interface StatisticsHourlyUploadRequest {
        /**
         * list1
         */
        items: /* statisticsHourly */ StatisticsHourly[] | null;
    }
    /**
     * streamDetails
     */
    export interface StreamDetails {
        /**
         * string
         */
        screenGrabUrl: string | null;
        /**
         * string
         */
        hlsUrl: string | null;
        /**
         * boolean
         */
        isHD: boolean;
        /**
         * boolean
         */
        isSingleChannelAudio: boolean;
        /**
         * boolean
         */
        isUnlimitedLength: boolean;
        /**
         * boolean
         */
        isPortraitAspect: boolean;
        /**
         * boolean
         */
        hasSubtitles: boolean;
        /**
         * list1
         * The languages available on this content.
         */
        languageSpoken: string[] | null;
        /**
         * list1
         * The subtitle languages available for this content.
         */
        languageSubtitle: string[] | null;
    }
    /**
     * systemBalanceResponse
     */
    export interface SystemBalanceResponse {
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        sumBalanceWei: string; // string
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        escrowBalanceWei: string; // string
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        circulationBalanceWei: string; // string
        /**
         * decimal
         */
        readonly sumBalance: number; // double
        /**
         * decimal
         */
        readonly escrowBalance: number; // double
        /**
         * decimal
         */
        readonly circulationBalance: number; // double
    }
    /**
     * transactionCreateRequest
     */
    export interface TransactionCreateRequest {
        /**
         * decimal
         * The amount to transfer.
         */
        value: number; // double
        /**
         * string
         * The account in the source wallet. Either WOM or RP.
         */
        addressFrom: string | null;
        /**
         * string
         * The account in the destination wallet. Either WOM or RP.
         */
        addressTo: string | null;
    }
    /**
     * transactionGetRequest
     */
    export interface TransactionGetRequest {
        /**
         * objectId
         * The unique identifier as received when the transaction was initiated
         * example:
         * 000000000000000000000000
         */
        transactionId: string; // objectId
    }
    /**
     * transactionNarrativeType
     * <br/><br/>Values:<br/>0 = None<br/>100 = Deposit<br/>200 = Withdrawal<br/>300 = CreatorStake<br/>301 = CreatorReward<br/>302 = CreatorStakeRefund<br/>400 = ValidationStake<br/>401 = ValidationReward<br/>402 = ValidationStakeRefund<br/>500 = Exchange<br/>600 = UserTransfer<br/>700 = Reward<br/>800 = MigrationSync
     */
    export type TransactionNarrativeType = 0 | 100 | 200 | 300 | 301 | 302 | 400 | 401 | 402 | 500 | 600 | 700 | 800; // int32
    /**
     * transactionQueryRequest
     */
    export interface TransactionQueryRequest {
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount: boolean;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * nullable1
         * The user's unique identifier, optional. If not specified the current caller's userid will be used.
         * example:
         * 000000000000000000000000
         */
        userId: string | null; // objectId
        status: /**
         * transactionStatus
         * Enum representing the current state of a token transfer<br/><br/>Values:<br/>0 = None<br/>1 = InProgress<br/>2 = Success<br/>-1 = Failure
         */
        TransactionStatus /* int32 */;
        type: /* transactionType */ TransactionType /* int32 */;
    }
    /**
     * transactionQueryResponse
     */
    export interface TransactionQueryResponse {
        /**
         * int32
         */
        totalRecords: number; // int32
        /**
         * int32
         */
        readonly returnedRecords: number; // int32
        /**
         * list1
         */
        items: /**
         * transactionResponse
         * Describes the current status of any transaction.
         */
        TransactionResponse[] | null;
        /**
         * int32
         */
        totalPages: number; // int32
        /**
         * int32
         */
        currentPageIndex: number; // int32
    }
    /**
     * transactionQueueReportItemResponse
     */
    export interface TransactionQueueReportItemResponse {
        /**
         * string
         */
        name: string | null;
        /**
         * string
         */
        address: string | null;
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        balanceWei: string; // string
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        queuedWei: string; // string
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        requiredWei: string; // string
        /**
         * decimal
         */
        balance: number; // double
        /**
         * decimal
         */
        queued: number; // double
        /**
         * decimal
         */
        required: number; // double
    }
    /**
     * transactionResponse
     * Describes the current status of any transaction.
     */
    export interface TransactionResponse {
        /**
         * objectId
         * The transaction hash
         * example:
         * 000000000000000000000000
         */
        transactionId: string; // objectId
        /**
         * string
         */
        ethereumTransactionHash: string | null;
        /**
         * dateTime
         */
        utcCreated: string; // date-time
        /**
         * string
         */
        from: string | null;
        /**
         * string
         */
        to: string | null;
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        valueWei: string; // string
        status: /**
         * transactionStatus
         * Enum representing the current state of a token transfer<br/><br/>Values:<br/>0 = None<br/>1 = InProgress<br/>2 = Success<br/>-1 = Failure
         */
        TransactionStatus /* int32 */;
        type: /**
         * transactionNarrativeType
         * <br/><br/>Values:<br/>0 = None<br/>100 = Deposit<br/>200 = Withdrawal<br/>300 = CreatorStake<br/>301 = CreatorReward<br/>302 = CreatorStakeRefund<br/>400 = ValidationStake<br/>401 = ValidationReward<br/>402 = ValidationStakeRefund<br/>500 = Exchange<br/>600 = UserTransfer<br/>700 = Reward<br/>800 = MigrationSync
         */
        TransactionNarrativeType /* int32 */;
        /**
         * decimal
         */
        value: number; // double
        /**
         * string
         */
        meta: string | null;
    }
    /**
     * transactionStatus
     * Enum representing the current state of a token transfer<br/><br/>Values:<br/>0 = None<br/>1 = InProgress<br/>2 = Success<br/>-1 = Failure
     */
    export type TransactionStatus = 0 | 1 | 2 | -1; // int32
    /**
     * transactionType
     */
    export type TransactionType = 0 | 1 | 2 | 3; // int32
    /**
     * transformMode
     * <br/><br/>Values:<br/>0 = ForVersion<br/>1 = BeforeAndForVersion<br/>2 = BeforeVersion<br/>3 = AfterVersion<br/>4 = AfterAndForVersion
     */
    export type TransformMode = 0 | 1 | 2 | 3 | 4; // int32
    /**
     * updateOrganizationRequest
     */
    export interface UpdateOrganizationRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
        /**
         * string
         * The title of this organization.
         */
        title: string;
        /**
         * tags
         * The mandatory tags of this organization.
         */
        mandatoryTags: string /* string */[];
    }
    /**
     * uploadUserProfileImageCommonResponse
     */
    export interface UploadUserProfileImageCommonResponse {
        /**
         * string
         */
        imageUrl: string | null;
    }
    /**
     * userAcceptInviteCampaignAccountRequest
     */
    export interface UserAcceptInviteCampaignAccountRequest {
        /**
         * string
         * The invite code will associate the created user with the correct organization
         */
        inviteCode: string;
        /**
         * string
         * The user name of this account
         */
        username: string;
        /**
         * string
         * The password must be at least 8 characters long, contain a digit and an uppercase character.
         */
        password: string;
    }
    /**
     * userAuthChallengeRequest
     */
    export interface UserAuthChallengeRequest {
        /**
         * string
         */
        email: string;
        /**
         * string
         */
        password: string;
    }
    /**
     * userCreateValidatorAccountRequest
     */
    export interface UserCreateValidatorAccountRequest {
        /**
         * string
         */
        email: string;
        /**
         * string
         */
        password: string;
        /**
         * string
         * Username, must be unique
         */
        username: string;
    }
    /**
     * userJwtTokenResponse
     */
    export interface UserJwtTokenResponse {
        /**
         * string
         */
        token: string | null;
        user: /* getUserResponse */ GetUserResponse;
    }
    /**
     * userProfileResponse
     */
    export interface UserProfileResponse {
        /**
         * string
         */
        primaryLanguage: string | null;
        /**
         * string
         */
        imageUrl: string | null;
    }
    /**
     * userQueryRequest
     */
    export interface UserQueryRequest {
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount: boolean;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        segmentId: string; // objectId
        /**
         * list1
         */
        userIds: string /* objectId */[] | null;
        /**
         * string
         */
        userName: string | null;
        /**
         * string
         */
        email: string | null;
        /**
         * string
         */
        mobileNumber: string | null;
        /**
         * string
         */
        textSearch: string | null;
        /**
         * roles
         */
        rolesAll: string /* string */[] | null;
        /**
         * roles
         */
        rolesAny: string /* string */[] | null;
    }
    /**
     * userQueryResponse
     */
    export interface UserQueryResponse {
        /**
         * int32
         */
        totalRecords: number; // int32
        /**
         * int32
         */
        readonly returnedRecords: number; // int32
        /**
         * list1
         */
        items: /* getUserResponse */ GetUserResponse[] | null;
        /**
         * int32
         */
        totalPages: number; // int32
        /**
         * int32
         */
        currentPageIndex: number; // int32
    }
    /**
     * userRoleChangeRequest
     */
    export interface UserRoleChangeRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId: string; // objectId
        /**
         * boolean
         */
        remove: boolean;
        /**
         * string
         */
        role: string | null;
    }
    /**
     * userTokenRequest
     */
    export interface UserTokenRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId: string; // objectId
    }
    /**
     * userUpdateRequest
     */
    export interface UserUpdateRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId: string; // objectId
        /**
         * string
         */
        email: string | null;
        /**
         * string
         */
        firstName: string | null;
        /**
         * string
         */
        lastName: string | null;
    }
    /**
     * userValidationDetails
     */
    export interface UserValidationDetails {
        /**
         * string
         */
        payoutAddress: string | null;
        /**
         * bigInteger
         * Amount paid out so far.
         * example:
         * 100000000000000000000000
         */
        paidOutWei: string; // string
        /**
         * bigInteger
         * The content creator's initial WOM stake for this validation
         * example:
         * 100000000000000000000000
         */
        stakedWei: string; // string
        /**
         * boolean
         * Is this user the content creator
         */
        isContentCreator: boolean;
        rating: /* WOMScore */ WOMScore;
    }
    /**
     * userWantsForgottenPasswordRequest
     */
    export interface UserWantsForgottenPasswordRequest {
        /**
         * string
         */
        email: string;
    }
    /**
     * userWantsValidationLinkEmailRequest
     */
    export interface UserWantsValidationLinkEmailRequest {
        /**
         * string
         */
        email: string;
    }
    /**
     * usernameExistsRequest
     */
    export interface UsernameExistsRequest {
        /**
         * string
         */
        username: string | null;
    }
    /**
     * validateContentRequest
     */
    export interface ValidateContentRequest {
        /**
         * objectId
         * The id of the content to validate.
         * example:
         * 000000000000000000000000
         */
        contentId: string; // objectId
        /**
         * decimal
         * The amount of WOM being staked to satisfy the validation process.
         */
        womStake: number; // double
        /**
         * boolean
         * Request a free promotional stake, if available.
         */
        requestStakingPromotion: boolean;
        /**
         * decimal
         * Creativity rating
         */
        creativity: number; // double
        /**
         * decimal
         * Authenticity rating
         */
        authenticity: number; // double
        /**
         * decimal
         * Positivity rating
         */
        positivity: number; // double
    }
    /**
     * validateHideRequest
     */
    export interface ValidateHideRequest {
        /**
         * objectId
         * The id of the content to hide.
         * example:
         * 000000000000000000000000
         */
        contentId: string; // objectId
    }
    /**
     * validateStartRequest
     */
    export interface ValidateStartRequest {
        /**
         * objectId
         * The id of the content to hide.
         * example:
         * 000000000000000000000000
         */
        contentId: string; // objectId
        /**
         * decimal
         * The amount of WOM the submitter is staking for validation to begin.
         */
        stakeAmount: number; // double
        /**
         * string
         * Submit for validation on behalf of this user. [Remote server only]
         */
        remoteUserId: string | null;
        /**
         * boolean
         * If set, this validation sequence will require further steps.
         */
        startWithHold: boolean;
        /**
         * objectId
         * The wallet id that will supply the stake amount.
         * example:
         * 000000000000000000000000
         */
        stakeWalletId: string; // objectId
        /**
         * nullable1
         * Optional: Specify a different payout wallet from the staking wallet.
         * example:
         * 000000000000000000000000
         */
        payoutWalletId: string | null; // objectId
    }
    /**
     * validationDetailResponse
     */
    export interface ValidationDetailResponse {
        validationState: /* validationStateResponse */ ValidationStateResponse;
        engagement: /* engagementStatistics */ EngagementStatistics;
        womQualityScore: /* WOMQualityScore */ WOMQualityScore;
        userValidationDetails: /* userValidationDetails */ UserValidationDetails;
    }
    /**
     * validationEndedReason
     * <br/><br/>Values:<br/>0 = None<br/>1 = CompletedNormally<br/>2 = ConsensusNotReached<br/>3 = TerminatedInHold
     */
    export type ValidationEndedReason = 0 | 1 | 2 | 3; // int32
    /**
     * validationReleaseHoldRequest
     */
    export interface ValidationReleaseHoldRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId: string; // objectId
        /**
         * string
         */
        remoteContentId: string | null;
        /**
         * boolean
         */
        terminate: boolean;
    }
    /**
     * validationResetRequest
     */
    export interface ValidationResetRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId: string; // objectId
        /**
         * string
         */
        remoteContentId: string | null;
    }
    /**
     * validationResult
     * <br/><br/>Values:<br/>0 = NotProcessed<br/>1 = AcceptedByConsensus<br/>-1 = RejectedByConsensus
     */
    export type ValidationResult = 0 | 1 | -1; // int32
    /**
     * validationStage
     * <br/><br/>Values:<br/>0 = NotStarted<br/>1 = Processing<br/>2 = Ended<br/>3 = Held
     */
    export type ValidationStage = 0 | 1 | 2 | 3; // int32
    /**
     * validationStateResponse
     */
    export interface ValidationStateResponse {
        /**
         * objectId
         * WOM's internal identifier for this content
         * example:
         * 000000000000000000000000
         */
        womContentId: string; // objectId
        /**
         * string
         * Remote content id (if available).
         */
        remoteContentId: string | null;
        /**
         * dateTime
         */
        utcValidateBy: string; // date-time
        currentStage: /**
         * validationStage
         * <br/><br/>Values:<br/>0 = NotStarted<br/>1 = Processing<br/>2 = Ended<br/>3 = Held
         */
        ValidationStage /* int32 */;
        validationResult: /**
         * validationResult
         * <br/><br/>Values:<br/>0 = NotProcessed<br/>1 = AcceptedByConsensus<br/>-1 = RejectedByConsensus
         */
        ValidationResult /* int32 */;
        endedReason: /**
         * validationEndedReason
         * <br/><br/>Values:<br/>0 = None<br/>1 = CompletedNormally<br/>2 = ConsensusNotReached<br/>3 = TerminatedInHold
         */
        ValidationEndedReason /* int32 */;
        /**
         * bigInteger
         * The amount of WOM the creator staked to begin validation in WEI.
         * example:
         * 100000000000000000000000
         */
        womStakedWei: string; // string
        /**
         * decimal
         * The amount of WOM the creator staked to begin validation.
         */
        womStaked: number; // double
    }
    /**
     * version
     */
    export interface Version {
        /**
         * int32
         */
        readonly major: number; // int32
        /**
         * int32
         */
        readonly minor: number; // int32
        /**
         * int32
         */
        readonly build: number; // int32
        /**
         * int32
         */
        readonly revision: number; // int32
        /**
         * int16
         */
        readonly majorRevision: number; // int32
        /**
         * int16
         */
        readonly minorRevision: number; // int32
    }
    /**
     * videoAnalysisResponse
     */
    export interface VideoAnalysisResponse {
        /**
         * timeSpan
         * example:
         * 0
         */
        duration: number; // int64
        /**
         * int64
         */
        size: number; // int64
    }
    /**
     * WOMQualityScore
     */
    export interface WOMQualityScore {
        /**
         * decimal
         * The WOM authenticity score as determined by the WOM validation process.
         */
        authenticity: number; // double
        /**
         * decimal
         * The WOM creativity score as determined by the WOM validation process.
         */
        creativity: number; // double
        /**
         * decimal
         * The WOM positivity score as determined by the WOM validation process.
         */
        positivity: number; // double
        /**
         * decimal
         * The WOM quality score is the sum of the other ratings multiplied by individual weights.
         */
        quality: number; // double
    }
    /**
     * WOMScore
     */
    export interface WOMScore {
        /**
         * decimal
         * The WOM authenticity score as determined by the WOM validation process.
         */
        authenticity: number; // double
        /**
         * decimal
         * The WOM creativity score as determined by the WOM validation process.
         */
        creativity: number; // double
        /**
         * decimal
         * The WOM positivity score as determined by the WOM validation process.
         */
        positivity: number; // double
    }
    /**
     * walletCreateRequest
     */
    export interface WalletCreateRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId: string; // objectId
    }
    /**
     * walletGetRequest
     */
    export interface WalletGetRequest {
        /**
         * nullable1
         * The id of the user's wallet, if not specified the calling user's primary wallet will be returned.
         * example:
         * 000000000000000000000000
         */
        walletId: string | null; // objectId
        /**
         * string
         * If specified the wallet for the given address will be displayed (Admin only)
         */
        publicAddress: string | null;
    }
    /**
     * walletResponse
     */
    export interface WalletResponse {
        /**
         * objectId
         * The user's wallet id if present, or default if not available
         * example:
         * 000000000000000000000000
         */
        walletId: string; // objectId
        /**
         * boolean
         * Determines if this user has a wallet
         */
        hasWallet: boolean;
        /**
         * boolean
         * Has the user participated in any WOM or RP token transactions.
         */
        hasTransacted: boolean;
        /**
         * list1
         * The addresses held in this wallet if available
         */
        items: /**
         * addressResponse
         * A strongly typed entity representing the amount of tokens in a user's account.
         */
        AddressResponse[] | null;
    }
    /**
     * withdrawalRequest
     */
    export interface WithdrawalRequest {
        /**
         * string
         * The source address, if not specified the calling user's primary account will be used.
         */
        addressFrom: string | null;
        /**
         * string
         * The destination address, must be a valid Ethereum WOM ERC20 destination.
         */
        addressTo: string | null;
        /**
         * decimal
         * This value is denominated in ETHER (WOM), it is a decimal value where 10.5 WOM tokens should be written as 10.5
         */
        value: number; // double
    }
}
declare namespace Paths {
    namespace CampaignContentFlagInappropriate {
        namespace Post {
            export type RequestBody = /* contentFlagInappropriateRequest */ Components.Schemas.ContentFlagInappropriateRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace CampaignContentGet {
        namespace Post {
            export type RequestBody = /* contentGetRequest */ Components.Schemas.ContentGetRequest;
            namespace Responses {
                export type $200 = /* contentItemResponse */ Components.Schemas.ContentItemResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace CampaignContentPut {
        namespace Post {
            export type RequestBody = /* contentPutRequest */ Components.Schemas.ContentPutRequest;
            namespace Responses {
                export type $200 = /* contentPutResponse */ Components.Schemas.ContentPutResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace CampaignContentQuery {
        namespace Post {
            export type RequestBody = /* contentQueryRequest */ Components.Schemas.ContentQueryRequest;
            namespace Responses {
                export type $200 = /* contentQueryResponse */ Components.Schemas.ContentQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace CampaignContentQueryStatistics {
        namespace Post {
            export type RequestBody = /* contentStatisticsQueryRequest */ Components.Schemas.ContentStatisticsQueryRequest;
            namespace Responses {
                export type $200 = /* contentStatisticsQueryResponse */ Components.Schemas.ContentStatisticsQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace CampaignContentSendStatisticsHourly {
        namespace Post {
            export type RequestBody = /* statisticsHourlyUploadRequest */ Components.Schemas.StatisticsHourlyUploadRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace CampaignContentStreamUpdate {
        namespace Post {
            export type RequestBody = /* contentStreamUpdateRequest */ Components.Schemas.ContentStreamUpdateRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace CampaignGet {
        namespace Post {
            export type RequestBody = /* campaignGetRequest */ Components.Schemas.CampaignGetRequest;
            namespace Responses {
                export type $200 = /* campaignDetailResponse */ Components.Schemas.CampaignDetailResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace CampaignQuery {
        namespace Post {
            export type RequestBody = /* campaignsQueryRequest */ Components.Schemas.CampaignsQueryRequest;
            namespace Responses {
                export type $200 = /* campaignsQueryResponse */ Components.Schemas.CampaignsQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace CampaignQueryStatistics {
        namespace Post {
            export type RequestBody = /* campaignStatisticsQueryRequest */ Components.Schemas.CampaignStatisticsQueryRequest;
            namespace Responses {
                export type $200 = /* campaignStatisticsQueryResponse */ Components.Schemas.CampaignStatisticsQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace CampaignUpsert {
        namespace Post {
            export type RequestBody = /* campaignUpsertRequest */ Components.Schemas.CampaignUpsertRequest;
            namespace Responses {
                export type $200 = /* campaignDetailResponse */ Components.Schemas.CampaignDetailResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace NotificationGet {
        namespace Post {
            export type RequestBody = /* getNotificationsRequest */ Components.Schemas.GetNotificationsRequest;
            namespace Responses {
                export type $200 = /* notificationsResponse */ Components.Schemas.NotificationsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationCreate {
        namespace Post {
            export type RequestBody = /* createOrganizationRequest */ Components.Schemas.CreateOrganizationRequest;
            namespace Responses {
                export type $200 = /* organizationResponse */ Components.Schemas.OrganizationResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationGet {
        namespace Post {
            export type RequestBody = /* getOrganizationRequest */ Components.Schemas.GetOrganizationRequest;
            namespace Responses {
                export type $200 = /* organizationResponse */ Components.Schemas.OrganizationResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationGetStatistics {
        namespace Post {
            export type RequestBody = /* organizationStatisticsRequest */ Components.Schemas.OrganizationStatisticsRequest;
            namespace Responses {
                export type $200 = /* organizationStatisticsResponse */ Components.Schemas.OrganizationStatisticsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationGetTags {
        namespace Post {
            export type RequestBody = /* getOrganizationTagsRequest */ Components.Schemas.GetOrganizationTagsRequest;
            namespace Responses {
                export type $200 = /* organizationTagsResponse */ Components.Schemas.OrganizationTagsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationQueryStatistics {
        namespace Post {
            export type RequestBody = /* organizationStatisticsQueryRequest */ Components.Schemas.OrganizationStatisticsQueryRequest;
            namespace Responses {
                export type $200 = /* organizationStatisticsQueryResponse */ Components.Schemas.OrganizationStatisticsQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace OrganizationUpdate {
        namespace Post {
            export type RequestBody = /* updateOrganizationRequest */ Components.Schemas.UpdateOrganizationRequest;
            namespace Responses {
                export type $200 = /* organizationResponse */ Components.Schemas.OrganizationResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationUserAnalyzeEmail {
        namespace Post {
            export type RequestBody = /* analyzeEmailRequest */ Components.Schemas.AnalyzeEmailRequest;
            namespace Responses {
                export type $200 = /* analyzeEmailResponse */ Components.Schemas.AnalyzeEmailResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $406 = /* analyzeEmailResponse */ Components.Schemas.AnalyzeEmailResponse;
                export type $409 = /* analyzeEmailResponse */ Components.Schemas.AnalyzeEmailResponse;
            }
        }
    }
    namespace OrganizationUserAuthenticate {
        namespace Post {
            export type RequestBody = /* userAuthChallengeRequest */ Components.Schemas.UserAuthChallengeRequest;
            namespace Responses {
                export type $200 = /* userJwtTokenResponse */ Components.Schemas.UserJwtTokenResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationUserAuthenticateToken {
        namespace Post {
            export type RequestBody = /* authenticateWithTokenRequest */ Components.Schemas.AuthenticateWithTokenRequest;
            namespace Responses {
                export type $200 = /* userJwtTokenResponse */ Components.Schemas.UserJwtTokenResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationUserMembershipAcceptInvite {
        namespace Post {
            export type RequestBody = /* userAcceptInviteCampaignAccountRequest */ Components.Schemas.UserAcceptInviteCampaignAccountRequest;
            namespace Responses {
                export type $200 = /* userJwtTokenResponse */ Components.Schemas.UserJwtTokenResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace OrganizationUserMembershipInvite {
        namespace Post {
            export type RequestBody = /* sendOrganizationInvitationsRequest */ Components.Schemas.SendOrganizationInvitationsRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationUserMembershipModify {
        namespace Post {
            export type RequestBody = /* changeOrganizationUserRequest */ Components.Schemas.ChangeOrganizationUserRequest;
            namespace Responses {
                export type $200 = /* organizationResponse */ Components.Schemas.OrganizationResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace OrganizationUserQuery {
        namespace Post {
            export type RequestBody = /* queryOrganizationUsersRequest */ Components.Schemas.QueryOrganizationUsersRequest;
            namespace Responses {
                export type $200 = /* organizationUsersResponse */ Components.Schemas.OrganizationUsersResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace OrganizationUserSendForgottenPasswordEmail {
        namespace Post {
            export type RequestBody = /* userWantsForgottenPasswordRequest */ Components.Schemas.UserWantsForgottenPasswordRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationUserSendValidationLinkEmail {
        namespace Post {
            export type RequestBody = /* userWantsValidationLinkEmailRequest */ Components.Schemas.UserWantsValidationLinkEmailRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace TestLoadtest {
        namespace Get {
            namespace Responses {
                /**
                 * string
                 */
                export type $200 = string;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace TestRebuildStatistics {
        namespace Post {
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace TestRefreshUser {
        namespace Get {
            namespace Parameters {
                /**
                 * string
                 */
                export type Userid = string | null;
            }
            export interface QueryParameters {
                userid: /* string */ Parameters.Userid;
            }
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace TestRewrite {
        namespace Get {
            namespace Parameters {
                /**
                 * string
                 */
                export type Name = string | null;
            }
            export interface QueryParameters {
                name: /* string */ Parameters.Name;
            }
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace TestWalletCleanup {
        namespace Post {
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace UserAdminGetToken {
        namespace Post {
            export type RequestBody = /* userTokenRequest */ Components.Schemas.UserTokenRequest;
            namespace Responses {
                export type $200 = /* userJwtTokenResponse */ Components.Schemas.UserJwtTokenResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace UserAdminManageRole {
        namespace Post {
            export type RequestBody = /* userRoleChangeRequest */ Components.Schemas.UserRoleChangeRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace UserAdminQuery {
        namespace Post {
            export type RequestBody = /* userQueryRequest */ Components.Schemas.UserQueryRequest;
            namespace Responses {
                export type $200 = /* userQueryResponse */ Components.Schemas.UserQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace UserGet {
        namespace Post {
            export type RequestBody = /* getUserRequest */ Components.Schemas.GetUserRequest;
            namespace Responses {
                export type $200 = /* getUserResponse */ Components.Schemas.GetUserResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace UserGetCurrentAuthorization {
        namespace Post {
            export type RequestBody = /* getCurrentAuthorizationsRequest */ Components.Schemas.GetCurrentAuthorizationsRequest;
            namespace Responses {
                export type $200 = /* getCurrentAuthorizationsResponse */ Components.Schemas.GetCurrentAuthorizationsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace UserRemoteEnableNetworkAccount {
        namespace Post {
            export type RequestBody = /* enableNetworkAccountRequest */ Components.Schemas.EnableNetworkAccountRequest;
            namespace Responses {
                export type $200 = /* userJwtTokenResponse */ Components.Schemas.UserJwtTokenResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace UserRemoteEnableNetworkIssuer {
        namespace Post {
            export type RequestBody = /* createNetworkAdministratorRequest */ Components.Schemas.CreateNetworkAdministratorRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace UserRemoteReceiveMessage {
        namespace Post {
            namespace Responses {
                /**
                 * string
                 */
                export type $200 = string;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ValidationAdminResetState {
        namespace Post {
            export type RequestBody = /* validationResetRequest */ Components.Schemas.ValidationResetRequest;
            namespace Responses {
                export type $200 = /* validationStateResponse */ Components.Schemas.ValidationStateResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace ValidationBeginValidation {
        namespace Post {
            export type RequestBody = /* validateStartRequest */ Components.Schemas.ValidateStartRequest;
            namespace Responses {
                export type $200 = /* validationStateResponse */ Components.Schemas.ValidationStateResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace ValidationGetDetails {
        namespace Post {
            export type RequestBody = /* getValidationDetailRequest */ Components.Schemas.GetValidationDetailRequest;
            namespace Responses {
                export type $200 = /* validationDetailResponse */ Components.Schemas.ValidationDetailResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace ValidationGetState {
        namespace Post {
            export type RequestBody = /* getValidationStateRequest */ Components.Schemas.GetValidationStateRequest;
            namespace Responses {
                export type $200 = /* validationStateResponse */ Components.Schemas.ValidationStateResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace ValidationHide {
        namespace Post {
            export type RequestBody = /* validateHideRequest */ Components.Schemas.ValidateHideRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace ValidationReleaseHold {
        namespace Post {
            export type RequestBody = /* validationReleaseHoldRequest */ Components.Schemas.ValidationReleaseHoldRequest;
            namespace Responses {
                export type $200 = /* validationStateResponse */ Components.Schemas.ValidationStateResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace ValidationUserAnalyzeEmail {
        namespace Post {
            export type RequestBody = /* analyzeEmailRequest */ Components.Schemas.AnalyzeEmailRequest;
            namespace Responses {
                export type $200 = /* analyzeEmailResponse */ Components.Schemas.AnalyzeEmailResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $406 = /* analyzeEmailResponse */ Components.Schemas.AnalyzeEmailResponse;
                export type $409 = /* analyzeEmailResponse */ Components.Schemas.AnalyzeEmailResponse;
            }
        }
    }
    namespace ValidationUserAuthenticate {
        namespace Post {
            export type RequestBody = /* userAuthChallengeRequest */ Components.Schemas.UserAuthChallengeRequest;
            namespace Responses {
                export type $200 = /* userJwtTokenResponse */ Components.Schemas.UserJwtTokenResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace ValidationUserAuthenticateToken {
        namespace Post {
            export type RequestBody = /* authenticateWithTokenRequest */ Components.Schemas.AuthenticateWithTokenRequest;
            namespace Responses {
                export type $200 = /* userJwtTokenResponse */ Components.Schemas.UserJwtTokenResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace ValidationUserCreateAccount {
        namespace Post {
            export type RequestBody = /* userCreateValidatorAccountRequest */ Components.Schemas.UserCreateValidatorAccountRequest;
            namespace Responses {
                export type $200 = /* userJwtTokenResponse */ Components.Schemas.UserJwtTokenResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace ValidationUserSendForgottenPasswordEmail {
        namespace Post {
            export type RequestBody = /* userWantsForgottenPasswordRequest */ Components.Schemas.UserWantsForgottenPasswordRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace ValidationUserSendValidationLinkEmail {
        namespace Post {
            export type RequestBody = /* userWantsValidationLinkEmailRequest */ Components.Schemas.UserWantsValidationLinkEmailRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace ValidationUserUpdate {
        namespace Post {
            export type RequestBody = /* userUpdateRequest */ Components.Schemas.UserUpdateRequest;
            namespace Responses {
                export type $200 = /* getUserResponse */ Components.Schemas.GetUserResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace ValidationUserUploadProfileImage$Id {
        namespace Post {
            namespace Parameters {
                /**
                 * string
                 */
                export type Id = string | null;
            }
            export interface PathParameters {
                id: /* string */ Parameters.Id;
            }
            namespace Responses {
                export type $200 = /* uploadUserProfileImageCommonResponse */ Components.Schemas.UploadUserProfileImageCommonResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ValidationUserUsernameExists {
        namespace Post {
            export type RequestBody = /* usernameExistsRequest */ Components.Schemas.UsernameExistsRequest;
            namespace Responses {
                export type $200 = /* existenceResponse */ Components.Schemas.ExistenceResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
            }
        }
    }
    namespace ValidationValidate {
        namespace Post {
            export type RequestBody = /* validateContentRequest */ Components.Schemas.ValidateContentRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace WalletCreateAddress {
        namespace Post {
            export type RequestBody = /* addressCreateRequest */ Components.Schemas.AddressCreateRequest;
            namespace Responses {
                export type $200 = /* walletResponse */ Components.Schemas.WalletResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace WalletCreateWallet {
        namespace Post {
            export type RequestBody = /* walletCreateRequest */ Components.Schemas.WalletCreateRequest;
            namespace Responses {
                export type $200 = /* walletResponse */ Components.Schemas.WalletResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace WalletGet {
        namespace Post {
            export type RequestBody = /* walletGetRequest */ Components.Schemas.WalletGetRequest;
            namespace Responses {
                export type $200 = /* walletResponse */ Components.Schemas.WalletResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace WalletGetCryptoInformation {
        namespace Post {
            namespace Responses {
                export type $200 = /* cryptoInformationResponse */ Components.Schemas.CryptoInformationResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace WalletGetTokenInfo {
        namespace Post {
            export type RequestBody = /* exchangeRateRequest */ Components.Schemas.ExchangeRateRequest;
            namespace Responses {
                export type $200 = /* exchangeRateResponse */ Components.Schemas.ExchangeRateResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace WalletRewardConsume {
        namespace Post {
            export type RequestBody = /* rewardConsumeRequest */ Components.Schemas.RewardConsumeRequest;
            namespace Responses {
                export type $200 = /* rewardResponse */ Components.Schemas.RewardResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace WalletRewardGet {
        namespace Post {
            export type RequestBody = /* rewardGetPendingRequest */ Components.Schemas.RewardGetPendingRequest;
            namespace Responses {
                export type $200 = /* rewardResponse */ Components.Schemas.RewardResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace WalletTransactionCreate {
        namespace Post {
            export type RequestBody = /* transactionCreateRequest */ Components.Schemas.TransactionCreateRequest;
            namespace Responses {
                export type $200 = /**
                 * transactionResponse
                 * Describes the current status of any transaction.
                 */ Components.Schemas.TransactionResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace WalletTransactionGet {
        namespace Post {
            export type RequestBody = /* transactionGetRequest */ Components.Schemas.TransactionGetRequest;
            namespace Responses {
                export type $200 = /**
                 * transactionResponse
                 * Describes the current status of any transaction.
                 */ Components.Schemas.TransactionResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace WalletTransactionQuery {
        namespace Post {
            export type RequestBody = /* transactionQueryRequest */ Components.Schemas.TransactionQueryRequest;
            namespace Responses {
                export type $200 = /* transactionQueryResponse */ Components.Schemas.TransactionQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace WalletTransferHistory {
        namespace Post {
            export type RequestBody = /* transactionQueryRequest */ Components.Schemas.TransactionQueryRequest;
            namespace Responses {
                export type $200 = /* transactionQueryResponse */ Components.Schemas.TransactionQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace WalletWithdrawalRequest {
        namespace Post {
            export type RequestBody = /* withdrawalRequest */ Components.Schemas.WithdrawalRequest;
            namespace Responses {
                export type $200 = /**
                 * transactionResponse
                 * Describes the current status of any transaction.
                 */ Components.Schemas.TransactionResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
}
