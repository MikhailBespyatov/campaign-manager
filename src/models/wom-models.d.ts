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
        addressAccountType?: /**
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
        name?: string | null;
        /**
         * dateTime
         * The utc date of this address's creation.
         */
        utcCreated?: string; // date-time
        /**
         * string
         * This address's account type.
         */
        accountType?: string | null;
        /**
         * string
         * The unique address for this particular token account.
         */
        address?: string | null;
        /**
         * boolean
         * Only true if this address has previously participated in a transaction.
         */
        hasTransacted?: boolean;
        /**
         * boolean
         * True, if this is the default address for this account type.
         */
        isDefault?: boolean;
        /**
         * bigInteger
         * The balance currently on this address denominated in WEI
         * example:
         * 100000000000000000000000
         */
        balanceWei?: string; // string
        /**
         * decimal
         * The balance currently on this address denominated in Ether
         */
        balance?: number; // double
        /**
         * bigInteger
         * The balance pending on this address denominated in WEI
         * example:
         * 100000000000000000000000
         */
        pendingBalanceWei?: string; // string
        /**
         * decimal
         * The balance pending on this address denominated in Ether
         */
        pendingBalance?: number; // double
        /**
         * dateTime
         * The UTC datetime representation of the balance request.
         */
        balanceQueriedAtUtc?: string; // date-time
    }
    /**
     * adminAllCountriesResponse
     */
    export interface AdminAllCountriesResponse {
        /**
         * list1
         */
        countries?: /* countryResponse */ CountryResponse[] | null;
    }
    /**
     * adminAllRegionsByCountryResponse
     */
    export interface AdminAllRegionsByCountryResponse {
        /**
         * list1
         */
        regions?: string[] | null;
    }
    /**
     * adminGetCountriesRequest
     */
    export interface AdminGetCountriesRequest {}
    /**
     * adminGetRegionsByCountryRequest
     */
    export interface AdminGetRegionsByCountryRequest {
        /**
         * countryInfo
         * example:
         * string
         */
        country?: string | null; // string
    }
    /**
     * allLanguagesResponse
     */
    export interface AllLanguagesResponse {
        /**
         * list1
         * List of Languages
         */
        languages?: string[] | null;
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
        result?: /**
         * emailValidity
         * <br/><br/>Values:<br/>0 = NotExists<br/>1 = InvalidFormat<br/>2 = SingleUseDomain<br/>3 = Exists
         */
        EmailValidity /* int32 */;
    }
    /**
     * analyzeMobileNumberRequest
     */
    export interface AnalyzeMobileNumberRequest {
        /**
         * string
         */
        mobileNumber?: string | null;
    }
    /**
     * analyzeMobileNumberResponse
     */
    export interface AnalyzeMobileNumberResponse {
        result?: /**
         * mobileNumberValidity
         * <br/><br/>Values:<br/>0 = Exists<br/>1 = NotFoundInSystem<br/>-2 = PendingVerification<br/>-1 = InvalidFormat
         */
        MobileNumberValidity /* int32 */;
    }
    /**
     * area
     */
    export interface Area {
        /**
         * string
         */
        city?: string | null;
        /**
         * string
         */
        region?: string | null;
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
        confirmationToken: string;
        /**
         * string
         */
        password: string;
    }
    /**
     * brandResponse
     */
    export interface BrandResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        name?: string | null;
        /**
         * tags
         */
        tags?: string /* string */[] | null;
    }
    /**
     * brandVoucherResponse
     */
    export interface BrandVoucherResponse {
        /**
         * string
         */
        brandName?: string | null;
        /**
         * string
         */
        countryName?: string | null;
        /**
         * string
         */
        currency?: string | null;
        /**
         * list1
         */
        denominations?: number /* double */[] | null;
        /**
         * list1
         */
        foreignDenominations?: number /* double */[] | null;
        valueRestrictions?: /* voucherValueRestrictions */ VoucherValueRestrictions;
        foreignValueRestrictions?: /* voucherValueRestrictions */ VoucherValueRestrictions;
        /**
         * int64
         */
        productId?: number; // int64
        /**
         * string
         */
        productImage?: string | null;
        /**
         * string
         */
        productDescription?: string | null;
        /**
         * string
         */
        howToUse?: string | null;
        /**
         * string
         */
        termsAndConditions?: string | null;
        /**
         * string
         */
        expiryAndValidity?: string | null;
    }
    /**
     * brandsResponse
     */
    export interface BrandsResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* brandResponse */ BrandResponse[] | null;
    }
    /**
     * bridgeSystemBalanceResponse
     */
    export interface BridgeSystemBalanceResponse {
        womX?: /* systemBalanceResponse */ SystemBalanceResponse;
        womERC20?: /* systemBalanceResponse */ SystemBalanceResponse;
        /**
         * string
         */
        escrowAddress?: string | null;
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        escrowEthBalanceWei?: string; // string
        /**
         * string
         */
        telemetry?: string | null;
        /**
         * decimal
         */
        escrowEthBalance?: number; // double
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        missingFromEscrowWei?: string; // string
        /**
         * decimal
         */
        missingFromEscrow?: number; // double
        /**
         * boolean
         */
        isBalanced?: boolean;
    }
    /**
     * campaignAgePromotion
     */
    export type CampaignAgePromotion = 0 | 1 | 2; // int32
    /**
     * campaignBudget
     */
    export interface CampaignBudget {
        /**
         * decimal
         * The amount of money allocated to this campaign.
         */
        budgetTotal?: number; // double
        /**
         * decimal
         * The amount spent on this campaign so far.
         */
        budgetSpent?: number; // double
        /**
         * decimal
         * The amount being spent per day.
         */
        budgetPerDay?: number; // double
        /**
         * decimal
         * The remaining amount to be spent.
         */
        budgetRemaining?: number; // double
        /**
         * dateTime
         */
        utcPaidUntil?: string; // date-time
        /**
         * boolean
         */
        isCurrentlyPaid?: boolean;
    }
    /**
     * campaignCreator
     */
    export interface CampaignCreator {
        /**
         * string
         */
        creatorId?: string | null;
        /**
         * string
         */
        creatorName?: string | null;
    }
    /**
     * campaignCreatorPromotion
     */
    export interface CampaignCreatorPromotion {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        creatorId?: string; // objectId
        /**
         * decimal
         */
        weight?: number; // double
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
        id?: string; // objectId
        /**
         * string
         * The user generated name of this campaign.
         */
        title?: string | null;
        /**
         * boolean
         * Determines the visibility of this campaign.
         */
        isHidden?: boolean;
        /**
         * objectId
         * The id of the organization that owns this campaign.
         * example:
         * 000000000000000000000000
         */
        organizationId?: string; // objectId
        /**
         * objectId
         * The id of the user who initially created this campaign.
         * example:
         * 000000000000000000000000
         */
        creatorId?: string; // objectId
        /**
         * objectId
         * The id of the user who last updated this campaign.
         * example:
         * 000000000000000000000000
         */
        updatedById?: string; // objectId
        /**
         * dateTime
         * The UTC creation date
         */
        utcCreated?: string; // date-time
        /**
         * dateTime
         * The UTC date of the last change.
         */
        utcLastUpdated?: string; // date-time
        /**
         * hashSet1
         * The IDs of the content items used for this campaign.
         */
        contentIds?: string /* objectId */[] | null;
        engagement?: /* engagementStatistics */ EngagementStatistics;
        deltaStatistics?: /* engagementStatisticsHistorical */ EngagementStatisticsHistorical;
        womQualityScore?: /* WOMQualityScore */ WOMQualityScore;
        settings?: /* campaignSettings */ CampaignSettings;
        budget?: /* campaignBudget */ CampaignBudget;
        schedule?: /* campaignSchedule */ CampaignSchedule;
        /**
         * boolean
         */
        isEnabled?: boolean;
        /**
         * string
         */
        disabledReason?: string | null;
        /**
         * boolean
         */
        isActive?: boolean;
    }
    /**
     * campaignGetPromotionDetailsRequest
     */
    export interface CampaignGetPromotionDetailsRequest {
        /**
         * objectId
         * The unique identifier of the campaign you are retreiving.
         * example:
         * 000000000000000000000000
         */
        campaignId?: string; // objectId
    }
    /**
     * campaignGetPromotionDetailsResponse
     */
    export interface CampaignGetPromotionDetailsResponse {
        /**
         * objectId
         * This campaign's unique identifier.
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         * The user generated name of this campaign.
         */
        title?: string | null;
        /**
         * boolean
         * Determines the visibility of this campaign.
         */
        isHidden?: boolean;
        /**
         * dateTime
         * The UTC creation date
         */
        utcCreated?: string; // date-time
        /**
         * dateTime
         * The UTC date of the last change.
         */
        utcLastUpdated?: string; // date-time
        /**
         * hashSet1
         * The IDs of the content items used for this campaign.
         */
        remoteContentIds?: string /* objectId */[] | null;
        settings?: /* campaignSettings */ CampaignSettings;
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
        campaignId?: string; // objectId
        /**
         * int32
         * If set the query will return statistics based on the period (in days) specified here.
         */
        returnStatisticsPeriod?: number; // int32
    }
    /**
     * campaignGetTagsRequest
     */
    export interface CampaignGetTagsRequest {
        /**
         * list1
         * The unique identifiers of Requested contentIds which will be used to fetch hashtags.
         */
        contentIds?: string /* objectId */[] | null;
    }
    /**
     * campaignGetTagsResponse
     */
    export interface CampaignGetTagsResponse {
        /**
         * tags
         * The tags associated with this content.
         */
        tags?: string /* string */[] | null;
    }
    /**
     * campaignLanguagePromotion
     */
    export interface CampaignLanguagePromotion {
        /**
         * languageInfo
         * example:
         * string
         */
        languageCode?: string | null; // string
        /**
         * decimal
         */
        weight?: number; // double
    }
    /**
     * campaignMerchantQueryRequest
     */
    export interface CampaignMerchantQueryRequest {
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * campaignMerchantQueryResponse
     */
    export interface CampaignMerchantQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* campaignMerchantResponse */ CampaignMerchantResponse[] | null;
    }
    /**
     * campaignMerchantResponse
     */
    export interface CampaignMerchantResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * int32
         */
        publicChannelCount?: number; // int32
        /**
         * string
         */
        name?: string | null;
    }
    /**
     * campaignSchedule
     */
    export interface CampaignSchedule {
        /**
         * dateTime
         */
        utcCreated?: string; // date-time
        /**
         * dateTime
         */
        utcStarted?: string; // date-time
        /**
         * dateTime
         */
        utcEnded?: string; // date-time
        /**
         * dateTime
         */
        utcToStart?: string; // date-time
        /**
         * dateTime
         */
        utcToEnd?: string; // date-time
        /**
         * int32
         */
        durationDays?: number; // int32
        /**
         * int32
         */
        remainingDays?: number; // int32
        /**
         * boolean
         */
        hasStarted?: boolean;
        /**
         * boolean
         */
        hasEnded?: boolean;
        /**
         * boolean
         */
        inDateWindow?: boolean;
    }
    /**
     * campaignSettings
     */
    export interface CampaignSettings {
        /**
         * boolean
         * Contains enable/disable 'watch override'.
         */
        watchOverride?: boolean;
        /**
         * list1
         * List of countries used to target set of people.
         */
        countries?: string /* string */[] | null;
        /**
         * boolean
         * Enable / disable 'must watch'
         */
        mustWatch?: boolean;
        /**
         * int32
         * Boost the content by supplied value.
         */
        boostContentValue?: number; // int32
        /**
         * int32
         * Boost the creator by supplied value.
         */
        boostCreatorValue?: number; // int32
        /**
         * list1
         * Boost the content by supplied value of tag with weight.
         */
        tagPromotions?: /* campaignTagPromotion */ CampaignTagPromotion[] | null;
        /**
         * list1
         * Boost the content by supplied languags.
         */
        languagePromotions?: /* campaignLanguagePromotion */ CampaignLanguagePromotion[] | null;
        /**
         * list1
         * Boost the creator by supplied weight value.
         */
        creatorPromotions?: /* campaignCreatorPromotion */ CampaignCreatorPromotion[] | null;
        /**
         * list1
         * Boost the content based on user ages.
         */
        agePromotions?: /* campaignAgePromotion */ CampaignAgePromotion /* int32 */[] | null;
    }
    /**
     * campaignStatisticsQueryRequest
     */
    export interface CampaignStatisticsQueryRequest {
        /**
         * objectId
         * The id of the campaign.
         * example:
         * 000000000000000000000000
         */
        campaignId?: string; // objectId
        /**
         * date
         * Retrieve statistics starting with this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateFrom?: string; // string
        /**
         * date
         * Retrieve statistics up until and including this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateTo?: string; // string
        /**
         * int32
         * The amount of historical comparison sets to generate
         */
        historicalSets?: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * campaignStatisticsQueryResponse
     */
    export interface CampaignStatisticsQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        request?: /* campaignStatisticsQueryRequest */ CampaignStatisticsQueryRequest;
        deltaStatistics?: /* engagementStatisticsHistorical */ EngagementStatisticsHistorical;
        /**
         * list1
         */
        sets?: /* campaignStatisticsQuerySetResponse */ CampaignStatisticsQuerySetResponse[] | null;
        /**
         * int32
         */
        totalRecords?: number; // int32
        /**
         * int32
         */
        returnedRecords?: number; // int32
    }
    /**
     * campaignStatisticsQuerySetResponse
     */
    export interface CampaignStatisticsQuerySetResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        request?: /* campaignStatisticsQueryRequest */ CampaignStatisticsQueryRequest;
        summary?: /* engagementStatistics */ EngagementStatistics;
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
        items?: /* dailyAggregatedCampaignStatistics */ DailyAggregatedCampaignStatistics[] | null;
    }
    /**
     * campaignTagPromotion
     */
    export interface CampaignTagPromotion {
        /**
         * tag
         * example:
         * string
         */
        tag?: string; // string
        /**
         * decimal
         */
        weight?: number; // double
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
        id?: string | null; // objectId
        /**
         * objectId
         * The unique identifier of the organization (this cannot be changed)
         * example:
         * 000000000000000000000000
         */
        organizationId?: string; // objectId
        /**
         * string
         * The user generated name of this campaign.
         */
        title?: string | null;
        /**
         * boolean
         * Determines the visibility of this campaign.
         */
        isHidden?: boolean;
        /**
         * tags
         * This campaign's tags
         */
        tags?: string /* string */[] | null;
        /**
         * hashSet1
         * The IDs of the content items used for this campaign.
         */
        contentIds?: string /* objectId */[] | null;
        /**
         * hashSet1
         * The IDs of the channel items used for this campaign.
         */
        channelIds?: string /* objectId */[] | null;
        schedule?: /* campaignSchedule */ CampaignSchedule;
        budget?: /* campaignBudget */ CampaignBudget;
        settings?: /* campaignSettings */ CampaignSettings;
    }
    /**
     * campaignsContentRequest
     */
    export interface CampaignsContentRequest {
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
        contentId?: string; // objectId
    }
    /**
     * campaignsQueryRequest
     */
    export interface CampaignsQueryRequest {
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
        tagsAny?: string[] | null;
        /**
         * list1
         * Return documents that contain all of these tags
         */
        tagsAll?: string[] | null;
        /**
         * nullable1
         * Will only return campaigns that are currently active (or not).
         */
        isActive?: boolean | null;
        /**
         * int32
         * If set the query will return statistics based on the period (in days) specified here.
         */
        returnStatisticsPeriod?: number; // int32
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * campaignsQueryResponse
     */
    export interface CampaignsQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* campaignDetailResponse */ CampaignDetailResponse[] | null;
    }
    /**
     * changeUserPasswordViaSmsRequest
     */
    export interface ChangeUserPasswordViaSmsRequest {
        /**
         * string
         */
        mobileNumber?: string | null;
        /**
         * string
         */
        validationCode?: string | null;
        /**
         * string
         */
        newPassword: string;
    }
    /**
     * changeUserPasswordViaSmsResponse
     */
    export interface ChangeUserPasswordViaSmsResponse {}
    /**
     * channelContentProductResponse
     */
    export interface ChannelContentProductResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        name?: string | null;
        /**
         * string
         */
        brand?: string | null;
    }
    /**
     * channelContentResponse
     */
    export interface ChannelContentResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        channelId?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        productUrl?: string | null;
        /**
         * list1
         */
        audioLanguage?: string[] | null;
        streaming?: /* streamingInfo */ StreamingInfo;
        engagement?: /* contentEngagement */ ContentEngagement;
        /**
         * tags
         */
        tags?: string /* string */[] | null;
    }
    /**
     * channelContentsResponse
     */
    export interface ChannelContentsResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* channelContentResponse */ ChannelContentResponse[] | null;
    }
    /**
     * channelPlaylistResponse
     */
    export interface ChannelPlaylistResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * tags
         */
        tags?: string /* string */[] | null;
        /**
         * string
         */
        streamingUrl?: string | null;
        /**
         * string
         */
        thumbnailUrl?: string | null;
        product?: /* channelContentProductResponse */ ChannelContentProductResponse;
    }
    /**
     * channelResponse
     */
    export interface ChannelResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId?: string; // objectId
        /**
         * string
         */
        publicId?: string | null;
        /**
         * string
         */
        name?: string | null;
        /**
         * boolean
         */
        isDisabled?: boolean;
        /**
         * boolean
         */
        isPrivate?: boolean;
    }
    /**
     * channelViewerContentItemsResponse
     */
    export interface ChannelViewerContentItemsResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* channelContentResponse */ ChannelContentResponse[] | null;
    }
    /**
     * channelsResponse
     */
    export interface ChannelsResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* channelResponse */ ChannelResponse[] | null;
    }
    /**
     * checkSmsCodeRequest
     */
    export interface CheckSmsCodeRequest {
        /**
         * string
         */
        mobileNumber?: string | null;
        /**
         * string
         */
        code?: string | null;
    }
    /**
     * checkSmsCodeResponse
     */
    export interface CheckSmsCodeResponse {
        /**
         * boolean
         */
        result?: boolean;
    }
    /**
     * checkWithdrawalRequest
     */
    export interface CheckWithdrawalRequest {
        /**
         * string
         */
        addressTo?: string | null;
    }
    /**
     * checkWithdrawalResponse
     */
    export interface CheckWithdrawalResponse {
        /**
         * list1
         */
        items?: /* checkWithdrawalResponseItem */ CheckWithdrawalResponseItem[] | null;
    }
    /**
     * checkWithdrawalResponseItem
     */
    export interface CheckWithdrawalResponseItem {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        womUserId?: string; // objectId
        /**
         * string
         */
        remoteId?: string | null;
        /**
         * string
         */
        username?: string | null;
        /**
         * string
         */
        address?: string | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        walletId?: string; // objectId
        /**
         * string
         */
        emailAddress?: string | null;
    }
    /**
     * consensusRange
     */
    export interface ConsensusRange {
        /**
         * decimal
         * Minimal creativity value in consensus
         */
        lowCreativity?: number; // double
        /**
         * decimal
         * Minimal authenticity value in consensus
         */
        lowAuthenticity?: number; // double
        /**
         * decimal
         * Minimal positivity value in consensus
         */
        lowPositivity?: number; // double
        /**
         * decimal
         * Maximum creativity value in consensus
         */
        highCreativity?: number; // double
        /**
         * decimal
         * Maximum authenticity value in consensus
         */
        highAuthenticity?: number; // double
        /**
         * decimal
         * Maximum positivity value in consensus
         */
        highPositivity?: number; // double
    }
    /**
     * contentDeleteByUserRequest
     */
    export interface ContentDeleteByUserRequest {
        /**
         * nullable1
         * Search by the id of the user required.
         * example:
         * 000000000000000000000000
         */
        userId?: string | null; // objectId
        /**
         * string
         * Search by the remote id ('your' id) of the user.
         */
        remoteUserId?: string | null;
    }
    /**
     * contentDeleteRequest
     */
    export interface ContentDeleteRequest {
        /**
         * objectId
         * Search by the id of the content required.
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * string
         * Search by the remote id ('your' id) of this content.
         * You must request with a token issued on the target remote network for a match to occur.
         */
        remoteContentId?: string | null;
    }
    /**
     * contentEngagement
     */
    export interface ContentEngagement {
        /**
         * int32
         */
        viewCount?: number; // int32
        /**
         * int32
         */
        likeCount?: number; // int32
        /**
         * int32
         */
        shareCount?: number; // int32
        /**
         * int32
         */
        commentCount?: number; // int32
        /**
         * int32
         */
        saveCount?: number; // int32
        /**
         * int32
         */
        clickCount?: number; // int32
        /**
         * int32
         */
        ratingCount?: number; // int32
        /**
         * int32
         */
        buyCount?: number; // int32
        /**
         * int32
         */
        total?: number; // int32
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
        contentId?: string; // objectId
        /**
         * string
         * Remote id of the content to be flagged.
         * You must request with a token issued on the target remote network for a match to occur.
         */
        remoteContentId?: string | null;
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
        contentId?: string; // objectId
        /**
         * string
         * Search by the remote id ('your' id) of this content.
         * You must request with a token issued on the target remote network for a match to occur.
         */
        remoteContentId?: string | null;
        /**
         * string
         * Search by the primary Uri of this content.
         */
        uriPrimary?: string | null;
        /**
         * nullable1
         * If specified returns validation state for each content item.
         */
        returnValidationState?: boolean | null;
        /**
         * boolean
         * Enable the 'is document hidden by user' feature.
         */
        returnUserValidatorHidden?: boolean;
        /**
         * boolean
         * Enable the 'user flag inappropriate' feature.
         */
        returnUserFlagInappropriate?: boolean;
        /**
         * boolean
         * Enable the 'user specific validation details' feature.
         */
        returnUserValidationDetails?: boolean;
        /**
         * boolean
         * Enable the 'user details' feature, which returns more comprehensive information on the owner.
         */
        returnUserDetails?: boolean;
        /**
         * boolean
         */
        returnContentEarnings?: boolean;
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
        womContentId?: string; // objectId
        /**
         * dateTime
         */
        createdUtc?: string; // date-time
        /**
         * string
         * The id for this content on the remote network that created it.
         */
        remoteContentId?: string | null;
        /**
         * objectId
         * The UserId of this content's owner.
         * example:
         * 000000000000000000000000
         */
        userId?: string; // objectId
        /**
         * objectId
         * The segment Id of the originating (source) network.
         * example:
         * 000000000000000000000000
         */
        segmentId?: string; // objectId
        /**
         * string
         * The title given to this content by the creator.
         */
        title?: string | null;
        /**
         * list1
         * The first is the primary product of this content, followed by additional products if available.
         */
        products?: /* productResponseLegacy */ ProductResponseLegacy[] | null;
        /**
         * hashSet1
         * The ids of campaigns this content is currently participating in.
         */
        inCampaignIds?: string /* objectId */[] | null;
        /**
         * hashSet1
         * The ids of campaigns this content is currently being promoted in.
         */
        inCampaignPromotionIds?: string /* objectId */[] | null;
        /**
         * boolean
         * True if this content is currently in use in any campaigns.
         */
        inCampaignUse?: boolean;
        /**
         * boolean
         * True if this content is currently in use in any promotions.
         */
        inCampaignPromotionUse?: boolean;
        /**
         * tags
         * The tags associated with this content.
         */
        tags?: string /* string */[] | null;
        /**
         * string
         * The primary Uri of the content on the originating network.
         */
        uriPrimary?: string | null;
        streamDetails?: /* videoDetailsResponse */ VideoDetailsResponse;
        videoAnalysis?: /* videoAnalysisResponse */ VideoAnalysisResponse;
        validationState?: /* validationStateResponse */ ValidationStateResponse;
        womQualityScore?: /* WOMQualityScore */ WOMQualityScore;
        engagement?: /* engagementStatistics */ EngagementStatistics;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        facilitatorUserId?: string; // objectId
        /**
         * boolean
         * Has this content been deleted
         */
        isDeleted?: boolean;
        userValidationDetails?: /* userValidationDetails */ UserValidationDetails;
        userDetails?: /* getUserResponse */ GetUserResponse;
        /**
         * nullable1
         */
        earningsValue?: number | null; // double
    }
    /**
     * contentOrderByProperty
     * <br/><br/>Values:<br/>0 = Default<br/>1 = Likes<br/>2 = DateAddedUtc<br/>3 = Views<br/>4 = ViewD1Count<br/>5 = ViewD2Count<br/>6 = ViewD3Count<br/>7 = ViewD4Count<br/>8 = BuyCount<br/>9 = ClickCount<br/>10 = CommentCount<br/>11 = ShareCount<br/>12 = RatingCount<br/>13 = SaveCount<br/>14 = ValidationTimer
     */
    export type ContentOrderByProperty = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14; // int32
    /**
     * contentPutRequest
     */
    export interface ContentPutRequest {
        /**
         * string
         * The remote id of this content, can be used to look up this content later.
         */
        remoteId?: string | null;
        /**
         * string
         * The title of this content.
         */
        title?: string | null;
        /**
         * tags
         * The tags associated with this content.
         */
        tags?: string /* string */[] | null;
        /**
         * string
         * The primary Uri of this content, as determined by the remote network sending it.
         */
        uriPrimary?: string | null;
        videoDetails?: /* videoDetailsRequest */ VideoDetailsRequest;
        videoAnalysis?: /* videoAnalysisResponse */ VideoAnalysisResponse;
        /**
         * boolean
         * If true, allows to accept the video details at a later time.
         */
        isDelayedProcessing?: boolean;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        primaryProductId?: string; // objectId
        /**
         * string
         * The id of the facilitator on the calling network. Leave null if none specified.
         */
        facilitatorUserId?: string | null;
        /**
         * string
         * The id of the facilitator on the calling network. Leave null if none specified.
         */
        facilitatorOrganizationId?: string | null;
        /**
         * string
         * The id of the publisher organization/system/user.
         */
        publisherId?: string | null;
        /**
         * list1
         * The languages of the content
         */
        languages?: string[] | null;
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
        id?: string; // objectId
    }
    /**
     * contentQueryPromoted
     */
    export interface ContentQueryPromoted {}
    /**
     * contentQueryPromotedResponse
     */
    export interface ContentQueryPromotedResponse {
        /**
         * list1
         */
        remoteContentIds?: string[] | null;
    }
    /**
     * contentQueryRequest
     */
    export interface ContentQueryRequest {
        /**
         * hashSet1
         * Query by a list of content ids.
         */
        byContentIds?: string /* objectId */[] | null;
        /**
         * nullable1
         * If specified returns validation state for each content item.
         */
        returnValidationState?: boolean | null;
        validationResult?: /**
         * validationResult
         * <br/><br/>Values:<br/>0 = NotProcessed<br/>1 = AcceptedByConsensus<br/>-1 = RejectedByConsensus
         */
        ValidationResult /* int32 */;
        validationEndedReason?: /**
         * validationEndedReason
         * <br/><br/>Values:<br/>0 = None<br/>1 = CompletedNormally<br/>2 = ConsensusNotReached<br/>3 = TerminatedInHold<br/>4 = Deleted
         */
        ValidationEndedReason /* int32 */;
        validationStage?: /**
         * validationStage
         * <br/><br/>Values:<br/>0 = NotStarted<br/>1 = Processing<br/>2 = Ended<br/>3 = Held
         */
        ValidationStage /* int32 */;
        /**
         * nullable1
         * Filter by documents that are currently being validated.
         */
        currentlyValidating?: boolean | null;
        /**
         * nullable1
         * Filter by reported state
         */
        isReported?: boolean | null;
        /**
         * nullable1
         * Filter by live state
         */
        isLive?: boolean | null;
        /**
         * nullable1
         * If set, will return deleted videos
         */
        isDeleted?: boolean | null;
        /**
         * nullable1
         * Filter by whether this user participated during consensus.
         */
        partOfConsensus?: boolean | null;
        /**
         * boolean
         * Implies: PartOfConsensus, returns validation documents that the user participated in, but did not get rewarded for or that are no longer live.
         */
        partOfConsensusComplete?: boolean;
        /**
         * objectId
         * Return only documents owned by this user Id.
         * example:
         * 000000000000000000000000
         */
        byUserId?: string; // objectId
        /**
         * string
         * Return only documents owned by this remote user Id.
         * You must request with a token issued on the target remote network for a match to occur.
         */
        byRemoteUserId?: string | null;
        /**
         * string
         * Return only documents owned by this remote Id.
         * You must request with a token issued on the target remote network for a match to occur.
         */
        byRemoteId?: string | null;
        /**
         * objectId
         * Return only documents from this segment.
         * example:
         * 000000000000000000000000
         */
        bySegmentId?: string; // objectId
        /**
         * nullable1
         * Filter by documents that are single channel audio
         */
        isSingleChannelAudio?: boolean | null;
        /**
         * nullable1
         * Filter by documents that are unlimited length
         */
        isUnlimitedLength?: boolean | null;
        /**
         * nullable1
         * Filter by documents that were filmed in portrait mode
         */
        isPortraitAspect?: boolean | null;
        /**
         * nullable1
         * Filter by documents with subtitles.
         */
        hasSubtitles?: boolean | null;
        /**
         * tags
         * Return documents that match any of these tags
         */
        tagsAny?: string /* string */[] | null;
        /**
         * tags
         * Return documents that contain all of these tags
         */
        tagsAll?: string /* string */[] | null;
        /**
         * boolean
         * Enable the 'is document hidden by user' feature.
         */
        returnUserValidatorHidden?: boolean;
        /**
         * boolean
         * Enable the 'user flag inappropriate' feature.
         */
        returnUserFlagInappropriate?: boolean;
        /**
         * boolean
         * Enable the 'user specific validation details' feature.
         */
        returnUserValidationDetails?: boolean;
        /**
         * boolean
         * Enable the 'user details' feature, which returns more comprehensive information on the owner.
         */
        returnUserDetails?: boolean;
        /**
         * boolean
         * Will return this user's earnings for each content element
         */
        returnContentEarnings?: boolean;
        /**
         * boolean
         */
        orderByValidationTimer?: boolean;
        orderByProperty?: /**
         * contentOrderByProperty
         * <br/><br/>Values:<br/>0 = Default<br/>1 = Likes<br/>2 = DateAddedUtc<br/>3 = Views<br/>4 = ViewD1Count<br/>5 = ViewD2Count<br/>6 = ViewD3Count<br/>7 = ViewD4Count<br/>8 = BuyCount<br/>9 = ClickCount<br/>10 = CommentCount<br/>11 = ShareCount<br/>12 = RatingCount<br/>13 = SaveCount<br/>14 = ValidationTimer
         */
        ContentOrderByProperty /* int32 */;
        /**
         * list1
         * Filter by content language
         */
        language?: string[] | null;
        /**
         * boolean
         * Orders results by descending if set to true.
         */
        orderByDesc?: boolean;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * contentQueryResponse
     */
    export interface ContentQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        request?: /* contentQueryRequest */ ContentQueryRequest;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* contentItemResponse */ ContentItemResponse[] | null;
    }
    /**
     * contentResponse
     */
    export interface ContentResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        productUrl?: string | null;
        /**
         * list1
         */
        audioLanguage?: string[] | null;
        streaming?: /* streamingInfo */ StreamingInfo;
        engagement?: /* contentEngagement */ ContentEngagement;
        /**
         * tags
         */
        tags?: string /* string */[] | null;
    }
    /**
     * contentStatisticsQueryRequest
     */
    export interface ContentStatisticsQueryRequest {
        /**
         * objectId
         * Search by the id of the content required.
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * string
         * Search by the remote id ('your' id) of this content.
         * You must request with a token issued on the target remote network for a match to occur.
         */
        remoteContentId?: string | null;
        /**
         * string
         * Search by the primary Uri of this content.
         */
        uriPrimary?: string | null;
        /**
         * date
         * Retrieve statistics starting with this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateFrom?: string; // string
        /**
         * date
         * Retrieve statistics up until and including this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateTo?: string; // string
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * contentStatisticsQueryResponse
     */
    export interface ContentStatisticsQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        request?: /* contentStatisticsQueryRequest */ ContentStatisticsQueryRequest;
        totalsInPage?: /* engagementStatistics */ EngagementStatistics;
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
        items?: /* statisticsDaily */ StatisticsDaily[] | null;
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
        contentId?: string; // objectId
        /**
         * string
         * The remote id of this content, can be used to look up this content later.
         */
        remoteContentId?: string | null;
        /**
         * string
         * The primary Uri of this content, as determined by the remote network sending it.
         */
        uriPrimary?: string | null;
        videoDetails?: /* videoDetailsRequest */ VideoDetailsRequest;
        videoAnalysis?: /* videoAnalysisResponse */ VideoAnalysisResponse;
    }
    /**
     * countryResponse
     */
    export interface CountryResponse {
        /**
         * string
         */
        countryCode?: string | null;
        /**
         * string
         */
        countryName?: string | null;
    }
    /**
     * createBrandRequest
     */
    export interface CreateBrandRequest {
        /**
         * string
         */
        name?: string | null;
        /**
         * tags
         */
        tags?: string /* string */[] | null;
    }
    /**
     * createChannelContentRequest
     */
    export interface CreateChannelContentRequest {
        /**
         * nullable1
         * If calling user is an admin, they will be able to create a channel content on behalf of other organization.
         * example:
         * 000000000000000000000000
         */
        organizationId?: string | null; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        channelId?: string; // objectId
        /**
         * string
         */
        affiliateLinkUrl?: string | null;
    }
    /**
     * createChannelRequest
     */
    export interface CreateChannelRequest {
        /**
         * string
         */
        name?: string | null;
        /**
         * boolean
         */
        isPrivate?: boolean;
    }
    /**
     * createNetworkAdministratorRequest
     */
    export interface CreateNetworkAdministratorRequest {
        /**
         * string
         */
        remoteIssuer?: string | null;
        /**
         * string
         */
        remoteId?: string | null;
    }
    /**
     * createOrganizationRequest
     */
    export interface CreateOrganizationRequest {
        /**
         * string
         * The title of this organization.
         */
        companyName?: string | null;
        /**
         * string
         * The key that will be used publicly to represent this organization.
         */
        key?: string | null;
        /**
         * string
         * Supply an email for the initial administrator of this organization.
         */
        administratorEmail?: string | null;
        /**
         * tags
         * The mandatory tags of this organization.
         */
        mandatoryTags?: string /* string */[] | null;
        /**
         * string
         * The origin of the request. For now only empty or shopify
         */
        origin?: string | null;
    }
    /**
     * createProductRequest
     */
    export interface CreateProductRequest {
        /**
         * string
         */
        name?: string | null;
        /**
         * tags
         */
        tags?: string /* string */[] | null;
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        brandId?: string | null; // objectId
    }
    /**
     * createRemoteProductRequest
     */
    export interface CreateRemoteProductRequest {
        /**
         * string
         */
        name?: string | null;
        /**
         * string
         */
        brand?: string | null;
        /**
         * string
         */
        publicId?: string | null;
        /**
         * string
         */
        url?: string | null;
        /**
         * string
         */
        imageUrl?: string | null;
    }
    /**
     * createVoucherTransactionRequest
     */
    export interface CreateVoucherTransactionRequest {
        /**
         * int64
         */
        productId?: number; // int64
        /**
         * int32
         */
        denomination?: number; // int32
    }
    /**
     * cryptoInformationResponse
     */
    export interface CryptoInformationResponse {
        /**
         * list1
         */
        addresses?: /**
         * addressResponse
         * A strongly typed entity representing the amount of tokens in a user's account.
         */
        AddressResponse[] | null;
        bridgeBalanceReport?: /* bridgeSystemBalanceResponse */ BridgeSystemBalanceResponse;
        /**
         * transactionQueueReportResponse
         */
        pendingBalanceReport?: /* transactionQueueReportItemResponse */ TransactionQueueReportItemResponse[] | null;
    }
    /**
     * dailyAggregatedCampaignStatistics
     */
    export interface DailyAggregatedCampaignStatistics {
        /**
         * objectId
         * The ID of the campaign
         * example:
         * 000000000000000000000000
         */
        campaignId?: string; // objectId
        /**
         * date
         * The date (does not include a time component) of this statistics entry.
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateUtc?: string; // string
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        authenticity?: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        creativity?: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        positivity?: number | null; // double
        /**
         * int32
         * The total number of views
         */
        viewCount?: number; // int32
        /**
         * int32
         * Views that had a duration less than 25%
         */
        viewD1Count?: number; // int32
        /**
         * decimal
         */
        viewsD1Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 25-49%
         */
        viewD2Count?: number; // int32
        /**
         * decimal
         */
        viewsD2Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 50-74%
         */
        viewD3Count?: number; // int32
        /**
         * decimal
         */
        viewsD3Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 75-100%
         */
        viewD4Count?: number; // int32
        /**
         * decimal
         */
        viewsD4Percentage?: number; // double
        /**
         * int32
         * The total number of likes
         */
        likeCount?: number; // int32
        /**
         * decimal
         */
        likesPercentage?: number; // double
        /**
         * int32
         * The total number of ratings by users (not authenticators)
         */
        ratingCount?: number; // int32
        /**
         * decimal
         */
        ratingsPercentage?: number; // double
        /**
         * int32
         * The total number of times this item was saved.
         */
        saveCount?: number; // int32
        /**
         * decimal
         */
        savesPercentage?: number; // double
        /**
         * int32
         * The amount of times this item was shared.
         */
        shareCount?: number; // int32
        /**
         * decimal
         */
        sharesPercentage?: number; // double
        /**
         * int32
         * The amount of comments.
         */
        commentCount?: number; // int32
        /**
         * decimal
         */
        commentsPercentage?: number; // double
        /**
         * int32
         * The amount of times this item received a click.
         */
        clickCount?: number; // int32
        /**
         * decimal
         */
        clicksPercentage?: number; // double
        /**
         * int32
         * The amount of times this item received a buy event.
         */
        buyCount?: number; // int32
        /**
         * decimal
         */
        buysPercentage?: number; // double
        /**
         * int32
         * The total engagements of this item.
         */
        total?: number; // int32
    }
    /**
     * dailyAggregatedOrganizationStatistics
     */
    export interface DailyAggregatedOrganizationStatistics {
        /**
         * objectId
         * The ID of the organization
         * example:
         * 000000000000000000000000
         */
        organizationId?: string; // objectId
        /**
         * date
         * The date (does not include a time component) of this statistics entry.
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateUtc?: string; // string
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        authenticity?: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        creativity?: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        positivity?: number | null; // double
        /**
         * int32
         * The total number of views
         */
        viewCount?: number; // int32
        /**
         * int32
         * Views that had a duration less than 25%
         */
        viewD1Count?: number; // int32
        /**
         * decimal
         */
        viewsD1Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 25-49%
         */
        viewD2Count?: number; // int32
        /**
         * decimal
         */
        viewsD2Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 50-74%
         */
        viewD3Count?: number; // int32
        /**
         * decimal
         */
        viewsD3Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 75-100%
         */
        viewD4Count?: number; // int32
        /**
         * decimal
         */
        viewsD4Percentage?: number; // double
        /**
         * int32
         * The total number of likes
         */
        likeCount?: number; // int32
        /**
         * decimal
         */
        likesPercentage?: number; // double
        /**
         * int32
         * The total number of ratings by users (not authenticators)
         */
        ratingCount?: number; // int32
        /**
         * decimal
         */
        ratingsPercentage?: number; // double
        /**
         * int32
         * The total number of times this item was saved.
         */
        saveCount?: number; // int32
        /**
         * decimal
         */
        savesPercentage?: number; // double
        /**
         * int32
         * The amount of times this item was shared.
         */
        shareCount?: number; // int32
        /**
         * decimal
         */
        sharesPercentage?: number; // double
        /**
         * int32
         * The amount of comments.
         */
        commentCount?: number; // int32
        /**
         * decimal
         */
        commentsPercentage?: number; // double
        /**
         * int32
         * The amount of times this item received a click.
         */
        clickCount?: number; // int32
        /**
         * decimal
         */
        clicksPercentage?: number; // double
        /**
         * int32
         * The amount of times this item received a buy event.
         */
        buyCount?: number; // int32
        /**
         * decimal
         */
        buysPercentage?: number; // double
        /**
         * int32
         * The total engagements of this item.
         */
        total?: number; // int32
    }
    /**
     * deleteBrandRequest
     */
    export interface DeleteBrandRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
    }
    /**
     * deleteChannelContentRequest
     */
    export interface DeleteChannelContentRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
    }
    /**
     * deleteChannelRequest
     */
    export interface DeleteChannelRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
    }
    /**
     * deleteProductRequest
     */
    export interface DeleteProductRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
    }
    /**
     * deleteRemoteProductRequest
     */
    export interface DeleteRemoteProductRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
    }
    /**
     * earningItem
     */
    export interface EarningItem {
        /**
         * int32
         */
        code?: number; // int32
        /**
         * decimal
         */
        value?: number; // double
    }
    /**
     * earningReportRequest
     */
    export interface EarningReportRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * string
         */
        remoteContentId?: string | null;
    }
    /**
     * earningReportResponse
     */
    export interface EarningReportResponse {
        /**
         * boolean
         */
        isCreator?: boolean;
        /**
         * boolean
         */
        isValidator?: boolean;
        /**
         * decimal
         */
        value?: number; // double
        /**
         * dictionary2
         */
        values?: {
            /**
             * decimal
             */
            None?: number; // double
            /**
             * decimal
             */
            Deposit?: number; // double
            /**
             * decimal
             */
            Withdrawal?: number; // double
            /**
             * decimal
             */
            CreatorStake?: number; // double
            /**
             * decimal
             */
            CreatorReward?: number; // double
            /**
             * decimal
             */
            CreatorStakeRefund?: number; // double
            /**
             * decimal
             */
            CreatorBonus?: number; // double
            /**
             * decimal
             */
            ValidationStake?: number; // double
            /**
             * decimal
             */
            ValidationReward?: number; // double
            /**
             * decimal
             */
            ValidationStakeRefund?: number; // double
            /**
             * decimal
             */
            ValidationProfit?: number; // double
            /**
             * decimal
             */
            Exchange?: number; // double
            /**
             * decimal
             */
            UserTransfer?: number; // double
            /**
             * decimal
             */
            Reward?: number; // double
            /**
             * decimal
             */
            MigrationSync?: number; // double
            /**
             * decimal
             */
            CampaignPayment?: number; // double
            /**
             * decimal
             */
            PerformancePayment?: number; // double
            /**
             * decimal
             */
            PerformancePaymentCreator?: number; // double
            /**
             * decimal
             */
            PerformancePaymentAuthenticator?: number; // double
            /**
             * decimal
             */
            PerformancePaymentFacilitator?: number; // double
            /**
             * decimal
             */
            PerformancePaymentPublisher?: number; // double
            /**
             * decimal
             */
            PerformancePaymentDisplayNetwork?: number; // double
            /**
             * decimal
             */
            PerformancePaymentAdvertiser?: number; // double
            /**
             * decimal
             */
            PerformancePaymentBrand?: number; // double
            /**
             * decimal
             */
            GiftCardPayment?: number; // double
            /**
             * decimal
             */
            GiftCardRefund?: number; // double
        } | null;
    }
    /**
     * earningStatisticsDailyItem
     */
    export interface EarningStatisticsDailyItem {
        /**
         * date
         * The date (does not include a time component) of this statistics entry.
         * example:
         * 2020-01-01T00:00:00Z
         */
        date?: string; // string
        /**
         * int32
         */
        week?: number; // int32
        /**
         * decimal
         */
        value?: number; // double
        /**
         * list1
         */
        values?: /* earningItem */ EarningItem[] | null;
    }
    /**
     * earningsStatisticsQueryRequest
     */
    export interface EarningsStatisticsQueryRequest {
        /**
         * objectId
         * Search by the id of the content required.
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * string
         * Search by the remote id ('your' id) of this content.
         * You must request with a token issued on the target remote network for a match to occur.
         */
        remoteContentId?: string | null;
        /**
         * objectId
         * If specified, only the earnings for this user will be returned.
         * example:
         * 000000000000000000000000
         */
        userId?: string; // objectId
        /**
         * boolean
         * If specified, only the earnings for the requesting user will be returned.
         */
        userFromRequest?: boolean;
        /**
         * date
         * Retrieve statistics starting with this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateFrom?: string; // string
        /**
         * date
         * Retrieve statistics up until and including this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateTo?: string; // string
        /**
         * boolean
         * When set, the data will be grouped by week number
         */
        groupByWeek?: boolean;
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * earningsStatisticsQueryResponse
     */
    export interface EarningsStatisticsQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        request?: /* earningsStatisticsQueryRequest */ EarningsStatisticsQueryRequest;
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
        remoteId?: string | null;
        /**
         * string
         */
        remoteUsername?: string | null;
        /**
         * string
         */
        remoteValidatedEmail?: string | null;
        /**
         * string
         */
        remoteVerifiedMobileNumber?: string | null;
        /**
         * cultureInfo
         * example:
         * en-GB
         */
        remoteLocale?: string | null; // string
    }
    /**
     * engagementStatistics
     */
    export interface EngagementStatistics {
        /**
         * int32
         * The total number of views
         */
        viewCount?: number; // int32
        /**
         * int32
         * Views that had a duration less than 25%
         */
        viewD1Count?: number; // int32
        /**
         * decimal
         */
        viewsD1Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 25-49%
         */
        viewD2Count?: number; // int32
        /**
         * decimal
         */
        viewsD2Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 50-74%
         */
        viewD3Count?: number; // int32
        /**
         * decimal
         */
        viewsD3Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 75-100%
         */
        viewD4Count?: number; // int32
        /**
         * decimal
         */
        viewsD4Percentage?: number; // double
        /**
         * int32
         * The total number of likes
         */
        likeCount?: number; // int32
        /**
         * decimal
         */
        likesPercentage?: number; // double
        /**
         * int32
         * The total number of ratings by users (not authenticators)
         */
        ratingCount?: number; // int32
        /**
         * decimal
         */
        ratingsPercentage?: number; // double
        /**
         * int32
         * The total number of times this item was saved.
         */
        saveCount?: number; // int32
        /**
         * decimal
         */
        savesPercentage?: number; // double
        /**
         * int32
         * The amount of times this item was shared.
         */
        shareCount?: number; // int32
        /**
         * decimal
         */
        sharesPercentage?: number; // double
        /**
         * int32
         * The amount of comments.
         */
        commentCount?: number; // int32
        /**
         * decimal
         */
        commentsPercentage?: number; // double
        /**
         * int32
         * The amount of times this item received a click.
         */
        clickCount?: number; // int32
        /**
         * decimal
         */
        clicksPercentage?: number; // double
        /**
         * int32
         * The amount of times this item received a buy event.
         */
        buyCount?: number; // int32
        /**
         * decimal
         */
        buysPercentage?: number; // double
        /**
         * int32
         * The total engagements of this item.
         */
        total?: number; // int32
    }
    /**
     * engagementStatisticsHistorical
     */
    export interface EngagementStatisticsHistorical {
        /**
         * dateTime
         */
        dateFromHistorical?: string; // date-time
        /**
         * dateTime
         */
        dateToHistorical?: string; // date-time
        /**
         * dateTime
         */
        dateFromLatest?: string; // date-time
        /**
         * dateTime
         */
        dateToLatest?: string; // date-time
        /**
         * decimal
         */
        viewsDelta?: number; // double
        /**
         * decimal
         */
        viewsD1Delta?: number; // double
        /**
         * decimal
         */
        viewsD2Delta?: number; // double
        /**
         * decimal
         */
        viewsD3Delta?: number; // double
        /**
         * decimal
         */
        viewsD4Delta?: number; // double
        /**
         * decimal
         */
        likesDelta?: number; // double
        /**
         * decimal
         */
        ratingsDelta?: number; // double
        /**
         * decimal
         */
        savesDelta?: number; // double
        /**
         * decimal
         */
        sharesDelta?: number; // double
        /**
         * decimal
         */
        clicksDelta?: number; // double
        /**
         * decimal
         */
        buysDelta?: number; // double
    }
    /**
     * error400BadRequest
     */
    export interface Error400BadRequest {
        /**
         * dictionary2
         */
        errors?: {
            [name: string]: string[];
        } | null;
        /**
         * string
         */
        title?: string | null;
        /**
         * string
         */
        traceId?: string | null;
        /**
         * boolean
         */
        isSuccess?: boolean;
        loggingLevel?: /**
         * logLevel
         * <br/><br/>Values:<br/>0 = Trace<br/>1 = Debug<br/>2 = Information<br/>3 = Warning<br/>4 = Error<br/>5 = Critical<br/>6 = None
         */
        LogLevel /* int32 */;
        /**
         * string
         */
        message?: string | null;
    }
    /**
     * error404NotFoundResponse
     */
    export interface Error404NotFoundResponse {
        /**
         * boolean
         */
        isSuccess?: boolean;
        loggingLevel?: /**
         * logLevel
         * <br/><br/>Values:<br/>0 = Trace<br/>1 = Debug<br/>2 = Information<br/>3 = Warning<br/>4 = Error<br/>5 = Critical<br/>6 = None
         */
        LogLevel /* int32 */;
        /**
         * string
         */
        message?: string | null;
    }
    /**
     * error409ConflictResponse
     */
    export interface Error409ConflictResponse {
        /**
         * boolean
         */
        isSuccess?: boolean;
        loggingLevel?: /**
         * logLevel
         * <br/><br/>Values:<br/>0 = Trace<br/>1 = Debug<br/>2 = Information<br/>3 = Warning<br/>4 = Error<br/>5 = Critical<br/>6 = None
         */
        LogLevel /* int32 */;
        /**
         * string
         */
        message?: string | null;
    }
    /**
     * exchangeRateItem
     */
    export interface ExchangeRateItem {
        /**
         * string
         */
        assetName?: string | null;
        /**
         * decimal
         */
        price?: number; // double
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
        rates?: /* exchangeRateItem */ ExchangeRateItem[] | null;
        /**
         * dateTime
         * The time at which this request to the token information external API was made.
         */
        utcRequested?: string; // date-time
    }
    /**
     * existenceResponse
     */
    export interface ExistenceResponse {
        /**
         * boolean
         */
        exists?: boolean;
    }
    /**
     * getBrandRequest
     */
    export interface GetBrandRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
    }
    /**
     * getChannelContentRequest
     */
    export interface GetChannelContentRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
    }
    /**
     * getChannelRequest
     */
    export interface GetChannelRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
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
        userId?: string | null; // objectId
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
        roles?: string /* string */[] | null;
        /**
         * string
         */
        email?: string | null;
        /**
         * boolean
         */
        isEmailValidated?: boolean;
        /**
         * boolean
         */
        isAccountVerified?: boolean;
    }
    /**
     * getLanguagesRequest
     */
    export interface GetLanguagesRequest {}
    /**
     * getNotificationsRequest
     */
    export interface GetNotificationsRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        lastId?: string; // objectId
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
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
     * getProductRequest
     */
    export interface GetProductRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
    }
    /**
     * getRemoteProductRequest
     */
    export interface GetRemoteProductRequest {
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        id?: string | null; // objectId
        /**
         * string
         */
        remoteId?: string | null;
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
        userId?: string | null; // objectId
        /**
         * string
         */
        remoteUserId?: string | null;
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
         * objectId
         * WOM's id for this user.
         * example:
         * 000000000000000000000000
         */
        womUserId?: string; // objectId
        /**
         * string
         */
        firstName?: string | null;
        /**
         * string
         */
        lastName?: string | null;
        /**
         * string
         */
        fullName?: string | null;
        /**
         * string
         * The user's remote id (not WOM userId) if it exists.
         */
        remoteUserId?: string | null;
        /**
         * string
         * The user's remote username if it exists.
         */
        remoteUsername?: string | null;
        /**
         * string
         * The remote issuer that created this user, if it exists.
         */
        remoteIssuer?: string | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        walletId?: string; // objectId
        /**
         * boolean
         */
        hasWallet?: boolean;
        /**
         * int32
         * If this user is allowed free stakes, the amount of stakes remaining.
         */
        freeStakesRemaining?: number; // int32
        /**
         * objectId
         * If this user is a member of any organization.
         * example:
         * 000000000000000000000000
         */
        organizationId?: string; // objectId
        /**
         * string
         * Title of the organization.
         */
        organizationTitle?: string | null;
        /**
         * string
         * Unique key of the organization.
         */
        organizationKey?: string | null;
        /**
         * string
         * Unique key of the organization.
         */
        organizationOrigin?: string | null;
        location?: /* location */ Location;
        /**
         * cultureInfo
         * example:
         * en-GB
         */
        locale?: string | null; // string
        /**
         * dateTime
         */
        utcCreated?: string; // date-time
        /**
         * dateTime
         */
        utcUpdated?: string; // date-time
        /**
         * dateTime
         */
        utcLastAuthentication?: string; // date-time
        /**
         * roles
         */
        roles?: string /* string */[] | null;
        /**
         * string
         */
        email?: string | null;
        /**
         * string
         */
        mobileNumber?: string | null;
        /**
         * string
         */
        username?: string | null;
        /**
         * boolean
         */
        isAccountVerified?: boolean;
        /**
         * boolean
         */
        isEmailValidated?: boolean;
        profile?: /* userProfileResponse */ UserProfileResponse;
        /**
         * boolean
         */
        isDisabled?: boolean;
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
        contentId?: string; // objectId
        /**
         * string
         */
        remoteContentId?: string | null;
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
        contentId?: string; // objectId
        /**
         * string
         */
        remoteContentId?: string | null;
    }
    /**
     * getVoucherBrandsRequest
     */
    export interface GetVoucherBrandsRequest {
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * getVoucherBrandsResponse
     */
    export interface GetVoucherBrandsResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* brandVoucherResponse */ BrandVoucherResponse[] | null;
    }
    /**
     * getVoucherCountriesRequest
     */
    export interface GetVoucherCountriesRequest {}
    /**
     * getVoucherCountriesResponse
     */
    export interface GetVoucherCountriesResponse {
        /**
         * list1
         */
        countries?: string[] | null;
        /**
         * string
         */
        message?: string | null;
        /**
         * boolean
         */
        isSuccess?: boolean;
    }
    /**
     * getVoucherInfoRequest
     */
    export interface GetVoucherInfoRequest {
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        userId?: string | null; // objectId
    }
    /**
     * getVoucherInfoResponse
     */
    export interface GetVoucherInfoResponse {
        /**
         * decimal
         */
        monthlyLimitUsd?: number; // double
        /**
         * decimal
         */
        monthlyLimitWom?: number; // double
        /**
         * decimal
         */
        minPriceUsd?: number; // double
        /**
         * decimal
         */
        minPriceWom?: number; // double
        /**
         * decimal
         */
        monthSpentUsd?: number; // double
        /**
         * decimal
         */
        monthSpentWom?: number; // double
        /**
         * decimal
         */
        monthLeftUsd?: number; // double
        /**
         * decimal
         */
        monthLeftWom?: number; // double
        /**
         * string
         */
        message?: string | null;
        /**
         * boolean
         */
        isSuccess?: boolean;
    }
    /**
     * getVoucherTransactionRequest
     */
    export interface GetVoucherTransactionRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        transactionId?: string; // objectId
    }
    /**
     * hour
     */
    export interface Hour {
        /**
         * int32
         */
        hoursSinceEpoch?: number; // int32
        /**
         * boolean
         */
        isDefault?: boolean;
    }
    /**
     * initializeWebRecorderRequest
     */
    export interface InitializeWebRecorderRequest {
        /**
         * string
         */
        organizationPublicId?: string | null;
        remoteProduct?: /* remoteProductDescription */ RemoteProductDescription;
    }
    /**
     * initializeWebRecorderResponse
     */
    export interface InitializeWebRecorderResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        productId?: string; // objectId
        /**
         * boolean
         */
        isCreatedNew?: boolean;
    }
    /**
     * linkRemoteProductRequest
     */
    export interface LinkRemoteProductRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        remoteProductId?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        productId?: string; // objectId
        /**
         * boolean
         */
        link?: boolean;
    }
    /**
     * linkedProductResponse
     */
    export interface LinkedProductResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        name?: string | null;
        /**
         * tags
         */
        tags?: string /* string */[] | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        brandId?: string; // objectId
    }
    /**
     * location
     */
    export interface Location {
        /**
         * string
         */
        countryCode?: string | null;
        /**
         * string
         */
        countryName?: string | null;
        area?: /* area */ Area;
        /**
         * string
         */
        ip?: string | null;
        /**
         * int64
         */
        ipNumber?: number; // int64
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
        message?: string | null;
        /**
         * boolean
         */
        isSuccess?: boolean;
    }
    /**
     * mobileNumberValidity
     * <br/><br/>Values:<br/>0 = Exists<br/>1 = NotFoundInSystem<br/>-2 = PendingVerification<br/>-1 = InvalidFormat
     */
    export type MobileNumberValidity = 0 | 1 | -2 | -1; // int32
    /**
     * notificationItemResponse
     */
    export interface NotificationItemResponse {
        /**
         * dateTime
         */
        utcCreated?: string; // date-time
        /**
         * string
         */
        type?: string | null;
        /**
         * string
         */
        receiverUserId?: string | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        receiverNetworkId?: string; // objectId
        /**
         * boolean
         */
        isImportant?: boolean;
        /**
         * list1
         */
        arguments?: string[] | null;
        /**
         * dictionary2
         */
        keys?: {
            [name: string]: string;
        } | null;
    }
    /**
     * notificationsResponse
     */
    export interface NotificationsResponse {
        /**
         * list1
         */
        items?: /* notificationItemResponse */ NotificationItemResponse[] | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        maxId?: string; // objectId
    }
    /**
     * organizationAcceptInviteRequest
     */
    export interface OrganizationAcceptInviteRequest {
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
     * organizationAnalyzeEmailRequest
     */
    export interface OrganizationAnalyzeEmailRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId?: string; // objectId
        /**
         * string
         */
        email: string;
    }
    /**
     * organizationAuthenticateWithTokenRequest
     */
    export interface OrganizationAuthenticateWithTokenRequest {
        /**
         * string
         */
        email: string;
        /**
         * string
         */
        confirmationToken: string;
        /**
         * string
         */
        password: string;
    }
    /**
     * organizationChannelQueryRequest
     */
    export interface OrganizationChannelQueryRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        merchantId?: string; // objectId
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * organizationChannelQueryResponse
     */
    export interface OrganizationChannelQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* organizationChannelResponse */ OrganizationChannelResponse[] | null;
    }
    /**
     * organizationChannelResponse
     */
    export interface OrganizationChannelResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        name?: string | null;
    }
    /**
     * organizationIdentityRequest
     */
    export interface OrganizationIdentityRequest {
        /**
         * string
         * The key for the organization, usually taken from the CM sub domain.
         */
        organizationKey?: string | null;
    }
    /**
     * organizationIdentityResponse
     */
    export interface OrganizationIdentityResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId?: string; // objectId
        /**
         * string
         */
        organizationTitle?: string | null;
        /**
         * boolean
         */
        hasTheme?: boolean;
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
     * organizationModifyUserRequest
     */
    export interface OrganizationModifyUserRequest {
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
     * organizationPermission
     * <br/><br/>Values:<br/>0 = None<br/>1 = Member<br/>2 = Admin
     */
    export type OrganizationPermission = 0 | 1 | 2; // int32
    /**
     * organizationPurchaseRequest
     */
    export interface OrganizationPurchaseRequest {
        /**
         * string
         */
        sessionId?: string | null;
        /**
         * string
         */
        merchantId?: string | null;
        /**
         * decimal
         */
        value?: number; // double
        /**
         * string
         */
        currencyCode?: string | null;
        /**
         * boolean
         */
        isPaymentAttempted?: boolean;
        /**
         * string
         */
        errorMessage?: string | null;
        /**
         * string
         */
        remoteOrderId?: string | null;
        /**
         * string
         */
        sourceName?: string | null;
        /**
         * string
         */
        sourceUrl?: string | null;
    }
    /**
     * organizationQueryUsersRequest
     */
    export interface OrganizationQueryUsersRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId: string; // objectId
        /**
         * string
         */
        textSearch?: string | null;
        /**
         * list1
         */
        userIds?: string /* objectId */[] | null;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * organizationQueryUsersResponse
     */
    export interface OrganizationQueryUsersResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* getUserResponse */ GetUserResponse[] | null;
    }
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
        organizationId?: string; // objectId
        /**
         * string
         * The title of this organization.
         */
        title?: string | null;
        /**
         * string
         * The key that will used publicly to represent this organization.
         */
        key?: string | null;
        /**
         * string
         * This field is a public merchant id. Instead of Key.
         */
        publicId?: string | null;
        /**
         * tags
         * The mandatory tags of this organization.
         */
        mandatoryTags?: string /* string */[] | null;
        /**
         * list1
         * The users (by id) that have admin rights over this organization.
         */
        adminIds?: string /* objectId */[] | null;
        /**
         * list1
         * The users (by id) that are members of this organization.
         */
        memberIds?: string /* objectId */[] | null;
        /**
         * objectId
         * If created, the identifier of this organization's wallet
         * example:
         * 000000000000000000000000
         */
        walletId?: string; // objectId
        /**
         * boolean
         * True if this organization has a token wallet.
         */
        hasWallet?: boolean;
        /**
         * string
         * The origin of the organization.
         */
        origin?: string | null;
    }
    /**
     * organizationSendInvitationsRequest
     */
    export interface OrganizationSendInvitationsRequest {
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
     * organizationStatisticsQueryRequest
     */
    export interface OrganizationStatisticsQueryRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId?: string; // objectId
        /**
         * date
         * Retrieve statistics starting with this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateFrom?: string; // string
        /**
         * date
         * Retrieve statistics up until and including this date
         * example:
         * 2020-01-01T00:00:00Z
         */
        dateTo?: string; // string
        /**
         * int32
         * The amount of historical comparison sets to generate
         */
        historicalSets?: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * organizationStatisticsQueryResponse
     */
    export interface OrganizationStatisticsQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        request?: /* organizationStatisticsQueryRequest */ OrganizationStatisticsQueryRequest;
        deltaStatistics?: /* engagementStatisticsHistorical */ EngagementStatisticsHistorical;
        /**
         * list1
         */
        sets?: /* organizationStatisticsQuerySetResponse */ OrganizationStatisticsQuerySetResponse[] | null;
        /**
         * int32
         */
        totalRecords?: number; // int32
        /**
         * int32
         */
        returnedRecords?: number; // int32
    }
    /**
     * organizationStatisticsQuerySetResponse
     */
    export interface OrganizationStatisticsQuerySetResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        request?: /* organizationStatisticsQueryRequest */ OrganizationStatisticsQueryRequest;
        summary?: /* engagementStatistics */ EngagementStatistics;
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
        items?: /* dailyAggregatedOrganizationStatistics */ DailyAggregatedOrganizationStatistics[] | null;
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
        organizationId?: string; // objectId
    }
    /**
     * organizationStatisticsResponse
     */
    export interface OrganizationStatisticsResponse {
        /**
         * int32
         */
        campaignsRunning?: number; // int32
        /**
         * decimal
         * The amount of money allocated to this campaign.
         */
        budgetTotal?: number; // double
        /**
         * decimal
         * The amount spent on this campaign so far.
         */
        budgetSpent?: number; // double
        /**
         * decimal
         * The amount being spent per day.
         */
        budgetPerDay?: number; // double
        /**
         * decimal
         * The remaining amount to be spent.
         */
        budgetRemaining?: number; // double
        /**
         * dateTime
         */
        utcPaidUntil?: string; // date-time
        /**
         * boolean
         */
        isCurrentlyPaid?: boolean;
    }
    /**
     * organizationTagsResponse
     */
    export interface OrganizationTagsResponse {
        /**
         * tags
         */
        discoveryTags?: string /* string */[] | null;
    }
    /**
     * organizationUserAuthChallengeRequest
     */
    export interface OrganizationUserAuthChallengeRequest {
        /**
         * string
         */
        email: string;
        /**
         * string
         */
        origin?: string | null;
        /**
         * string
         */
        password: string;
    }
    /**
     * organizationUserWantsForgottenPasswordRequest
     */
    export interface OrganizationUserWantsForgottenPasswordRequest {
        /**
         * string
         */
        email: string;
    }
    /**
     * organizationUserWantsValidationLinkEmailRequest
     */
    export interface OrganizationUserWantsValidationLinkEmailRequest {
        /**
         * string
         */
        email: string;
    }
    /**
     * organizationsResponse
     */
    export interface OrganizationsResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* organizationResponse */ OrganizationResponse[] | null;
    }
    /**
     * paymentType
     * <br/><br/>Values:<br/>0 = None<br/>1 = Creator<br/>2 = Authenticator<br/>3 = Facilitator<br/>4 = Publisher<br/>5 = DisplayNetwork<br/>6 = Advertiser<br/>7 = Brand
     */
    export type PaymentType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7; // int32
    /**
     * performancePaymentsContentPaymentsItem
     */
    export interface PerformancePaymentsContentPaymentsItem {
        /**
         * string
         */
        name?: string | null;
        /**
         * string
         */
        address?: string | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        transactionId?: string; // objectId
        type?: /**
         * paymentType
         * <br/><br/>Values:<br/>0 = None<br/>1 = Creator<br/>2 = Authenticator<br/>3 = Facilitator<br/>4 = Publisher<br/>5 = DisplayNetwork<br/>6 = Advertiser<br/>7 = Brand
         */
        PaymentType /* int32 */;
        /**
         * decimal
         */
        value?: number; // double
    }
    /**
     * performancePaymentsContentPaymentsRequest
     */
    export interface PerformancePaymentsContentPaymentsRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        auditId?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
    }
    /**
     * performancePaymentsContentPaymentsResponse
     */
    export interface PerformancePaymentsContentPaymentsResponse {
        /**
         * int32
         */
        paymentsCount?: number; // int32
        /**
         * list1
         */
        items?: /* performancePaymentsContentPaymentsItem */ PerformancePaymentsContentPaymentsItem[] | null;
    }
    /**
     * performancePaymentsGetRequest
     */
    export interface PerformancePaymentsGetRequest {
        /**
         * int32
         */
        year?: number; // int32
        /**
         * int32
         */
        month?: number; // int32
        /**
         * int32
         */
        day?: number; // int32
        /**
         * boolean
         */
        processPayments?: boolean;
        /**
         * boolean
         */
        reAnalyze?: boolean;
    }
    /**
     * performancePaymentsGetResponse
     */
    export interface PerformancePaymentsGetResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        auditId?: string; // objectId
        /**
         * date
         * example:
         * 2020-01-01T00:00:00Z
         */
        date?: string; // string
        /**
         * dateTime
         */
        utcDate?: string; // date-time
        /**
         * dateTime
         */
        utcGenerated?: string; // date-time
        /**
         * boolean
         */
        isCompleted?: boolean;
        /**
         * decimal
         */
        womEmissionCalculated?: number; // double
        /**
         * decimal
         */
        womEmissionExpected?: number; // double
        /**
         * decimal
         */
        globalContentPoints?: number; // double
        /**
         * decimal
         */
        globalAuthenticationPoints?: number; // double
        /**
         * decimal
         */
        globalPoints?: number; // double
        /**
         * timeSpan
         * example:
         * 0
         */
        timingPerformance?: number; // int64
        /**
         * timeSpan
         * example:
         * 0
         */
        timingPayments?: number; // int64
        /**
         * decimal
         */
        value?: number; // double
        /**
         * dictionary2
         */
        values?: {
            /**
             * decimal
             */
            None?: number; // double
            /**
             * decimal
             */
            Deposit?: number; // double
            /**
             * decimal
             */
            Withdrawal?: number; // double
            /**
             * decimal
             */
            CreatorStake?: number; // double
            /**
             * decimal
             */
            CreatorReward?: number; // double
            /**
             * decimal
             */
            CreatorStakeRefund?: number; // double
            /**
             * decimal
             */
            CreatorBonus?: number; // double
            /**
             * decimal
             */
            ValidationStake?: number; // double
            /**
             * decimal
             */
            ValidationReward?: number; // double
            /**
             * decimal
             */
            ValidationStakeRefund?: number; // double
            /**
             * decimal
             */
            ValidationProfit?: number; // double
            /**
             * decimal
             */
            Exchange?: number; // double
            /**
             * decimal
             */
            UserTransfer?: number; // double
            /**
             * decimal
             */
            Reward?: number; // double
            /**
             * decimal
             */
            MigrationSync?: number; // double
            /**
             * decimal
             */
            CampaignPayment?: number; // double
            /**
             * decimal
             */
            PerformancePayment?: number; // double
            /**
             * decimal
             */
            PerformancePaymentCreator?: number; // double
            /**
             * decimal
             */
            PerformancePaymentAuthenticator?: number; // double
            /**
             * decimal
             */
            PerformancePaymentFacilitator?: number; // double
            /**
             * decimal
             */
            PerformancePaymentPublisher?: number; // double
            /**
             * decimal
             */
            PerformancePaymentDisplayNetwork?: number; // double
            /**
             * decimal
             */
            PerformancePaymentAdvertiser?: number; // double
            /**
             * decimal
             */
            PerformancePaymentBrand?: number; // double
            /**
             * decimal
             */
            GiftCardPayment?: number; // double
            /**
             * decimal
             */
            GiftCardRefund?: number; // double
        } | null;
        /**
         * list1
         */
        items?: /* performancePaymentsItem */ PerformancePaymentsItem[] | null;
        /**
         * string
         */
        url?: string | null;
    }
    /**
     * performancePaymentsItem
     */
    export interface PerformancePaymentsItem {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * string
         */
        title?: string | null;
        /**
         * tags
         */
        tags?: string /* string */[] | null;
        /**
         * decimal
         */
        womPayout?: number; // double
        /**
         * decimal
         */
        womPromotedPayout?: number; // double
        /**
         * decimal
         */
        authenticationPoints?: number; // double
        /**
         * decimal
         */
        contentPoints?: number; // double
        /**
         * decimal
         */
        totalPoints?: number; // double
    }
    /**
     * performancePaymentsQueryRequest
     */
    export interface PerformancePaymentsQueryRequest {
        /**
         * dateTime
         */
        dateFrom?: string; // date-time
        /**
         * dateTime
         */
        dateTo?: string; // date-time
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * performancePaymentsQueryResponse
     */
    export interface PerformancePaymentsQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        request?: /* performancePaymentsQueryRequest */ PerformancePaymentsQueryRequest;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* performancePaymentsGetResponse */ PerformancePaymentsGetResponse[] | null;
    }
    /**
     * productInfo
     */
    export interface ProductInfo {
        /**
         * string
         */
        productImage?: string | null;
        /**
         * string
         */
        productDescription?: string | null;
        /**
         * string
         */
        howToUse?: string | null;
        /**
         * string
         */
        termsAndConditions?: string | null;
        /**
         * string
         */
        expiryAndValidity?: string | null;
        /**
         * string
         */
        brandName?: string | null;
        /**
         * string
         */
        countryName?: string | null;
    }
    /**
     * productResponse
     */
    export interface ProductResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        name?: string | null;
        /**
         * tags
         */
        tags?: string /* string */[] | null;
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        brandId?: string | null; // objectId
        brand?: /* brandResponse */ BrandResponse;
        /**
         * nullable1
         */
        hasRemoteProduct?: boolean | null;
        /**
         * string
         */
        imageUrl?: string | null;
        /**
         * int32
         */
        primaryReferenceCount?: number; // int32
    }
    /**
     * productResponseLegacy
     */
    export interface ProductResponseLegacy {
        /**
         * objectId
         * The product's unique identifier
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         * This product's brand name
         */
        brandName?: string | null;
        /**
         * string
         * The item name of this product.
         */
        item?: string | null;
        /**
         * tag
         * The tag that represents this product's brand.
         * example:
         * string
         */
        tagBrand?: string; // string
        /**
         * tag
         * The main category tag
         * example:
         * string
         */
        tagCategory?: string; // string
        /**
         * tag
         * The sub category tag
         * example:
         * string
         */
        tagSubCategory?: string; // string
        /**
         * tags
         * Extra tags, will not include other tags referenced here.
         */
        extraTags?: string /* string */[] | null;
    }
    /**
     * productsResponse
     */
    export interface ProductsResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* productResponse */ ProductResponse[] | null;
    }
    /**
     * queryActiveCampaignsRequest
     */
    export interface QueryActiveCampaignsRequest {}
    /**
     * queryActiveCampaignsResponse
     */
    export interface QueryActiveCampaignsResponse {
        /**
         * list1
         */
        campaignIds?: string /* objectId */[] | null;
    }
    /**
     * queryBrandsRequest
     */
    export interface QueryBrandsRequest {
        /**
         * list1
         */
        ids?: string /* objectId */[] | null;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryCampaignCreatorsRequest
     */
    export interface QueryCampaignCreatorsRequest {
        /**
         * list1
         */
        contentIds?: string /* objectId */[] | null;
    }
    /**
     * queryCampaignCreatorsResponse
     */
    export interface QueryCampaignCreatorsResponse {
        /**
         * list1
         */
        creators?: /* campaignCreator */ CampaignCreator[] | null;
    }
    /**
     * queryChannelContentsRequest
     */
    export interface QueryChannelContentsRequest {
        /**
         * nullable1
         * If calling user is an admin, they will be able to create a channel content on behalf of other organization.
         * example:
         * 000000000000000000000000
         */
        channelId?: string | null; // objectId
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryChannelPlaylistRequest
     */
    export interface QueryChannelPlaylistRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        channelId?: string; // objectId
        /**
         * string
         */
        merchantId?: string | null;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryChannelPlaylistResponse
     */
    export interface QueryChannelPlaylistResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* channelPlaylistResponse */ ChannelPlaylistResponse[] | null;
    }
    /**
     * queryChannelViewerContentRequest
     */
    export interface QueryChannelViewerContentRequest {
        /**
         * string
         */
        organizationPublicId?: string | null;
        /**
         * string
         */
        channelPublicId?: string | null;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryChannelsRequest
     */
    export interface QueryChannelsRequest {
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryNotificationsRequest
     */
    export interface QueryNotificationsRequest {
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryNotificationsResponse
     */
    export interface QueryNotificationsResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* notificationItemResponse */ NotificationItemResponse[] | null;
    }
    /**
     * queryOrganizationRequest
     */
    export interface QueryOrganizationRequest {
        /**
         * nullable1
         * True if organizations should has a token wallet.
         */
        hasWallet?: boolean | null;
        /**
         * string
         * The name of the organization.
         */
        organizationName?: string | null;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryPrivateChannelsRequest
     */
    export interface QueryPrivateChannelsRequest {
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryPrivateChannelsResponse
     */
    export interface QueryPrivateChannelsResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* organizationChannelResponse */ OrganizationChannelResponse[] | null;
    }
    /**
     * queryProductViewerContentRequest
     */
    export interface QueryProductViewerContentRequest {
        /**
         * string
         */
        organizationPublicId?: string | null;
        /**
         * string
         */
        remoteProductId?: string | null;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryProductViewerContentResponse
     */
    export interface QueryProductViewerContentResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* contentResponse */ ContentResponse[] | null;
    }
    /**
     * queryProductsRequest
     */
    export interface QueryProductsRequest {
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        brandId?: string | null; // objectId
        /**
         * string
         */
        name?: string | null;
        /**
         * string
         */
        brandName?: string | null;
        /**
         * nullable1
         */
        isBrandSet?: boolean | null;
        /**
         * nullable1
         */
        isReferenced?: boolean | null;
        /**
         * nullable1
         */
        sortByBrandAsc?: boolean | null;
        /**
         * nullable1
         */
        sortByNameAsc?: boolean | null;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryRemoteProductsRequest
     */
    export interface QueryRemoteProductsRequest {
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        organizationId?: string | null; // objectId
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        productId?: string | null; // objectId
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryUnlinkedRemoteProductsRequest
     */
    export interface QueryUnlinkedRemoteProductsRequest {
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        organizationId?: string | null; // objectId
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryValidationStatesRequest
     */
    export interface QueryValidationStatesRequest {
        /**
         * list1
         */
        remoteContentIds?: string[] | null;
    }
    /**
     * queryValidationStatesResponse
     */
    export interface QueryValidationStatesResponse {
        /**
         * list1
         */
        states?: /* validationStateResponse */ ValidationStateResponse[] | null;
    }
    /**
     * queryVoucherStatisticsRequest
     */
    export interface QueryVoucherStatisticsRequest {
        /**
         * dateTime
         * Filter gift cards aggregation statistics by created date time. Return statistics created after this time.
         */
        utcStart?: string; // date-time
        /**
         * dateTime
         * Filter gift cards aggregation statistics by created date time. Return statistics created before this time.
         */
        utcEnd?: string; // date-time
        /**
         * boolean
         * When set, the data will be grouped by week number
         */
        groupByWeek?: boolean;
    }
    /**
     * queryVoucherStatisticsResponse
     */
    export interface QueryVoucherStatisticsResponse {
        /**
         * list1
         */
        items?: /* voucherStatisticsResponse */ VoucherStatisticsResponse[] | null;
    }
    /**
     * queryVoucherTransactionRequest
     */
    export interface QueryVoucherTransactionRequest {
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * queryVoucherTransactionResponse
     */
    export interface QueryVoucherTransactionResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* voucherTransactionResponse */ VoucherTransactionResponse[] | null;
    }
    /**
     * remoteProductDescription
     */
    export interface RemoteProductDescription {
        /**
         * string
         */
        publicId?: string | null;
        /**
         * string
         */
        name?: string | null;
        /**
         * string
         */
        brand?: string | null;
        /**
         * string
         */
        url?: string | null;
        /**
         * string
         */
        imageUrl?: string | null;
    }
    /**
     * remoteProductResponse
     */
    export interface RemoteProductResponse {
        linkedProduct?: /* linkedProductResponse */ LinkedProductResponse;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        name?: string | null;
        /**
         * string
         */
        brand?: string | null;
        /**
         * string
         */
        publicId?: string | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        organizationId?: string; // objectId
        /**
         * string
         */
        url?: string | null;
        /**
         * string
         */
        imageUrl?: string | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        linkedProductId?: string; // objectId
    }
    /**
     * remoteProductsResponse
     */
    export interface RemoteProductsResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* remoteProductResponse */ RemoteProductResponse[] | null;
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
        valueWei?: string; // string
        /**
         * decimal
         */
        value?: number; // double
    }
    /**
     * sendForgottenPasswordSmsRequest
     */
    export interface SendForgottenPasswordSmsRequest {
        /**
         * string
         */
        mobileNumber?: string | null;
    }
    /**
     * sendForgottenPasswordSmsResponse
     */
    export interface SendForgottenPasswordSmsResponse {
        /**
         * boolean
         */
        isOk?: boolean;
    }
    /**
     * sendVerificationSmsRequest
     */
    export interface SendVerificationSmsRequest {
        /**
         * string
         */
        mobileNumber?: string | null;
    }
    /**
     * sendVerificationSmsResponse
     */
    export interface SendVerificationSmsResponse {
        /**
         * string
         */
        mobileNumber?: string | null;
        /**
         * string
         */
        mobileNumberE164?: string | null;
    }
    /**
     * statisticsDaily
     */
    export interface StatisticsDaily {
        /**
         * date
         * The date (does not include a time component) of this statistics entry.
         * example:
         * 2020-01-01T00:00:00Z
         */
        date?: string; // string
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * objectId
         * The ID of the content known to WOM.
         * example:
         * 000000000000000000000000
         */
        womContentId?: string; // objectId
        /**
         * string
         * The ID of the content known to the remote network.
         */
        remoteContentId?: string | null;
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        authenticity?: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        creativity?: number | null; // double
        /**
         * nullable1
         * The latest content level value, on this day, of this rating.
         */
        positivity?: number | null; // double
        /**
         * int32
         * The total number of views
         */
        viewCount?: number; // int32
        /**
         * int32
         * Views that had a duration less than 25%
         */
        viewD1Count?: number; // int32
        /**
         * decimal
         */
        viewsD1Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 25-49%
         */
        viewD2Count?: number; // int32
        /**
         * decimal
         */
        viewsD2Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 50-74%
         */
        viewD3Count?: number; // int32
        /**
         * decimal
         */
        viewsD3Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 75-100%
         */
        viewD4Count?: number; // int32
        /**
         * decimal
         */
        viewsD4Percentage?: number; // double
        /**
         * int32
         * The total number of likes
         */
        likeCount?: number; // int32
        /**
         * decimal
         */
        likesPercentage?: number; // double
        /**
         * int32
         * The total number of ratings by users (not authenticators)
         */
        ratingCount?: number; // int32
        /**
         * decimal
         */
        ratingsPercentage?: number; // double
        /**
         * int32
         * The total number of times this item was saved.
         */
        saveCount?: number; // int32
        /**
         * decimal
         */
        savesPercentage?: number; // double
        /**
         * int32
         * The amount of times this item was shared.
         */
        shareCount?: number; // int32
        /**
         * decimal
         */
        sharesPercentage?: number; // double
        /**
         * int32
         * The amount of comments.
         */
        commentCount?: number; // int32
        /**
         * decimal
         */
        commentsPercentage?: number; // double
        /**
         * int32
         * The amount of times this item received a click.
         */
        clickCount?: number; // int32
        /**
         * decimal
         */
        clicksPercentage?: number; // double
        /**
         * int32
         * The amount of times this item received a buy event.
         */
        buyCount?: number; // int32
        /**
         * decimal
         */
        buysPercentage?: number; // double
        /**
         * int32
         * The total engagements of this item.
         */
        total?: number; // int32
    }
    /**
     * statisticsHourly
     */
    export interface StatisticsHourly {
        hour?: /* hour */ Hour;
        /**
         * nullable1
         */
        authenticity?: number | null; // double
        /**
         * nullable1
         */
        creativity?: number | null; // double
        /**
         * nullable1
         */
        positivity?: number | null; // double
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        womContentId?: string; // objectId
        /**
         * string
         */
        remoteContentId?: string | null;
        /**
         * int32
         * The total number of views
         */
        viewCount?: number; // int32
        /**
         * int32
         * Views that had a duration less than 25%
         */
        viewD1Count?: number; // int32
        /**
         * decimal
         */
        viewsD1Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 25-49%
         */
        viewD2Count?: number; // int32
        /**
         * decimal
         */
        viewsD2Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 50-74%
         */
        viewD3Count?: number; // int32
        /**
         * decimal
         */
        viewsD3Percentage?: number; // double
        /**
         * int32
         * Views that had a duration inclusive 75-100%
         */
        viewD4Count?: number; // int32
        /**
         * decimal
         */
        viewsD4Percentage?: number; // double
        /**
         * int32
         * The total number of likes
         */
        likeCount?: number; // int32
        /**
         * decimal
         */
        likesPercentage?: number; // double
        /**
         * int32
         * The total number of ratings by users (not authenticators)
         */
        ratingCount?: number; // int32
        /**
         * decimal
         */
        ratingsPercentage?: number; // double
        /**
         * int32
         * The total number of times this item was saved.
         */
        saveCount?: number; // int32
        /**
         * decimal
         */
        savesPercentage?: number; // double
        /**
         * int32
         * The amount of times this item was shared.
         */
        shareCount?: number; // int32
        /**
         * decimal
         */
        sharesPercentage?: number; // double
        /**
         * int32
         * The amount of comments.
         */
        commentCount?: number; // int32
        /**
         * decimal
         */
        commentsPercentage?: number; // double
        /**
         * int32
         * The amount of times this item received a click.
         */
        clickCount?: number; // int32
        /**
         * decimal
         */
        clicksPercentage?: number; // double
        /**
         * int32
         * The amount of times this item received a buy event.
         */
        buyCount?: number; // int32
        /**
         * decimal
         */
        buysPercentage?: number; // double
        /**
         * int32
         * The total engagements of this item.
         */
        total?: number; // int32
    }
    /**
     * statisticsHourlyUploadRequest
     */
    export interface StatisticsHourlyUploadRequest {
        /**
         * list1
         */
        items?: /* statisticsHourly */ StatisticsHourly[] | null;
    }
    /**
     * streamingInfo
     */
    export interface StreamingInfo {
        /**
         * string
         */
        thumbnailUrl?: string | null;
        /**
         * string
         */
        hlsUrl?: string | null;
        /**
         * timeSpan
         * example:
         * 0
         */
        duration?: number; // int64
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
        sumBalanceWei?: string; // string
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        escrowBalanceWei?: string; // string
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        circulationBalanceWei?: string; // string
        /**
         * decimal
         */
        sumBalance?: number; // double
        /**
         * decimal
         */
        escrowBalance?: number; // double
        /**
         * decimal
         */
        circulationBalance?: number; // double
    }
    /**
     * transactionCreateRequest
     */
    export interface TransactionCreateRequest {
        /**
         * nullable1
         * Optional, set the transaction id for this transaction.
         * example:
         * 000000000000000000000000
         */
        setTransactionId?: string | null; // objectId
        /**
         * decimal
         * The amount to transfer.
         */
        value?: number; // double
        /**
         * string
         * The account in the source wallet. Either WOM or RP.
         */
        addressFrom?: string | null;
        /**
         * string
         * The account in the destination wallet. Either WOM or RP.
         */
        addressTo?: string | null;
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
        transactionId?: string; // objectId
    }
    /**
     * transactionLimitCreateRequest
     */
    export interface TransactionLimitCreateRequest {
        /**
         * decimal
         */
        minimalWithdrawalValue?: number; // double
    }
    /**
     * transactionLimitGetRequest
     */
    export interface TransactionLimitGetRequest {}
    /**
     * transactionLimitGetResponse
     */
    export interface TransactionLimitGetResponse {
        /**
         * decimal
         */
        minimalWithdrawalValue?: number; // double
    }
    /**
     * transactionQueryRequest
     */
    export interface TransactionQueryRequest {
        /**
         * nullable1
         * Administrators only: The user's unique identifier.
         * When not specified the current caller's userid will be used.
         * example:
         * 000000000000000000000000
         */
        userId?: string | null; // objectId
        /**
         * nullable1
         * The wallet to return transactions for.
         * example:
         * 000000000000000000000000
         */
        walletId?: string | null; // objectId
        /**
         * boolean
         * Admin only, return all transactions.
         */
        returnAll?: boolean;
        /**
         * string
         * The address to return transactions for.
         */
        address?: string | null;
        status?: /**
         * transactionStatus
         * <br/><br/>Values:<br/>0 = None<br/>1 = InProgress<br/>2 = Success<br/>-1 = Failure
         */
        TransactionStatus /* int32 */;
        type?: /* transactionType */ TransactionType /* int32 */;
        narrativeType?: /**
         * WOMNarrativeType
         * <br/><br/>Values:<br/>0 = None<br/>100 = Deposit<br/>200 = Withdrawal<br/>300 = CreatorStake<br/>301 = CreatorReward<br/>302 = CreatorStakeRefund<br/>303 = CreatorBonus<br/>400 = ValidationStake<br/>401 = ValidationReward<br/>402 = ValidationStakeRefund<br/>410 = ValidationProfit<br/>500 = Exchange<br/>600 = UserTransfer<br/>700 = Reward<br/>800 = MigrationSync<br/>900 = CampaignPayment<br/>1000 = PerformancePayment<br/>1001 = PerformancePaymentCreator<br/>1002 = PerformancePaymentAuthenticator<br/>1003 = PerformancePaymentFacilitator<br/>1004 = PerformancePaymentPublisher<br/>1005 = PerformancePaymentDisplayNetwork<br/>1006 = PerformancePaymentAdvertiser<br/>1007 = PerformancePaymentBrand<br/>2000 = GiftCardPayment<br/>2100 = GiftCardRefund
         */
        WOMNarrativeType /* int32 */;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * transactionQueryResponse
     */
    export interface TransactionQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /**
         * transactionResponse
         * Describes the current status of any transaction.
         */
        TransactionResponse[] | null;
    }
    /**
     * transactionQueueReportItemResponse
     */
    export interface TransactionQueueReportItemResponse {
        /**
         * string
         */
        name?: string | null;
        /**
         * string
         */
        address?: string | null;
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        balanceWei?: string; // string
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        queuedWei?: string; // string
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        requiredWei?: string; // string
        /**
         * decimal
         */
        balance?: number; // double
        /**
         * decimal
         */
        queued?: number; // double
        /**
         * decimal
         */
        required?: number; // double
    }
    /**
     * transactionResponse
     * Describes the current status of any transaction.
     */
    export interface TransactionResponse {
        type?: /**
         * WOMNarrativeType
         * <br/><br/>Values:<br/>0 = None<br/>100 = Deposit<br/>200 = Withdrawal<br/>300 = CreatorStake<br/>301 = CreatorReward<br/>302 = CreatorStakeRefund<br/>303 = CreatorBonus<br/>400 = ValidationStake<br/>401 = ValidationReward<br/>402 = ValidationStakeRefund<br/>410 = ValidationProfit<br/>500 = Exchange<br/>600 = UserTransfer<br/>700 = Reward<br/>800 = MigrationSync<br/>900 = CampaignPayment<br/>1000 = PerformancePayment<br/>1001 = PerformancePaymentCreator<br/>1002 = PerformancePaymentAuthenticator<br/>1003 = PerformancePaymentFacilitator<br/>1004 = PerformancePaymentPublisher<br/>1005 = PerformancePaymentDisplayNetwork<br/>1006 = PerformancePaymentAdvertiser<br/>1007 = PerformancePaymentBrand<br/>2000 = GiftCardPayment<br/>2100 = GiftCardRefund
         */
        WOMNarrativeType /* int32 */;
        /**
         * string
         * Description
         */
        meta?: string | null;
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        transactionId?: string; // objectId
        /**
         * string
         */
        ethereumTransactionHash?: string | null;
        /**
         * dateTime
         */
        utcCreated?: string; // date-time
        /**
         * string
         */
        from?: string | null;
        /**
         * string
         */
        to?: string | null;
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        valueWei?: string; // string
        status?: /**
         * transactionStatus
         * <br/><br/>Values:<br/>0 = None<br/>1 = InProgress<br/>2 = Success<br/>-1 = Failure
         */
        TransactionStatus /* int32 */;
        /**
         * int32
         */
        durationSeconds?: number; // int32
        /**
         * decimal
         */
        value?: number; // double
    }
    /**
     * transactionStatus
     * <br/><br/>Values:<br/>0 = None<br/>1 = InProgress<br/>2 = Success<br/>-1 = Failure
     */
    export type TransactionStatus = 0 | 1 | 2 | -1; // int32
    /**
     * transactionType
     */
    export type TransactionType = 0 | 1 | 2 | 3 | 4; // int32
    /**
     * updateBrandRequest
     */
    export interface UpdateBrandRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        name?: string | null;
        /**
         * tags
         */
        tags?: string /* string */[] | null;
    }
    /**
     * updateChannelContentRequest
     */
    export interface UpdateChannelContentRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * nullable1
         * If calling user is an admin, they will be able to create a channel content on behalf of other organization.
         * example:
         * 000000000000000000000000
         */
        organizationId?: string | null; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        channelId?: string; // objectId
        /**
         * string
         */
        affiliateLinkUrl?: string | null;
    }
    /**
     * updateChannelRequest
     */
    export interface UpdateChannelRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        name?: string | null;
        /**
         * boolean
         */
        isPrivate?: boolean;
        /**
         * boolean
         */
        isDisabled?: boolean;
    }
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
     * updateProductRequest
     */
    export interface UpdateProductRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        name?: string | null;
        /**
         * tags
         */
        tags?: string /* string */[] | null;
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        brandId?: string | null; // objectId
    }
    /**
     * updateProductRequestLegacy
     */
    export interface UpdateProductRequestLegacy {
        /**
         * string
         */
        remoteId?: string | null;
        /**
         * hashSet1
         */
        upcCodes?: string[] | null;
        /**
         * string
         */
        brandName?: string | null;
        /**
         * string
         */
        itemName?: string | null;
        /**
         * string
         */
        primaryCategory?: string | null;
        /**
         * hashSet1
         */
        secondaryCategories?: string[] | null;
        /**
         * string
         */
        brandProductImageUrl?: string | null;
        /**
         * tags
         */
        tags?: string /* string */[] | null;
    }
    /**
     * updateRemoteProductRequest
     */
    export interface UpdateRemoteProductRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * string
         */
        name?: string | null;
        /**
         * string
         */
        brand?: string | null;
        /**
         * string
         */
        publicId?: string | null;
        /**
         * string
         */
        url?: string | null;
        /**
         * string
         */
        imageUrl?: string | null;
    }
    /**
     * uploadUserProfileImageCommonResponse
     */
    export interface UploadUserProfileImageCommonResponse {
        /**
         * string
         */
        imageUrl?: string | null;
    }
    /**
     * userAuditItem
     */
    export interface UserAuditItem {
        /**
         * date
         * example:
         * 2020-01-01T00:00:00Z
         */
        date?: string; // string
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        auditType?: /**
         * userAuditType
         * <br/><br/>Values:<br/>0 = None<br/>1 = Transaction<br/>2 = Earning
         */
        UserAuditType /* int32 */;
        narrativeType?: /**
         * WOMNarrativeType
         * <br/><br/>Values:<br/>0 = None<br/>100 = Deposit<br/>200 = Withdrawal<br/>300 = CreatorStake<br/>301 = CreatorReward<br/>302 = CreatorStakeRefund<br/>303 = CreatorBonus<br/>400 = ValidationStake<br/>401 = ValidationReward<br/>402 = ValidationStakeRefund<br/>410 = ValidationProfit<br/>500 = Exchange<br/>600 = UserTransfer<br/>700 = Reward<br/>800 = MigrationSync<br/>900 = CampaignPayment<br/>1000 = PerformancePayment<br/>1001 = PerformancePaymentCreator<br/>1002 = PerformancePaymentAuthenticator<br/>1003 = PerformancePaymentFacilitator<br/>1004 = PerformancePaymentPublisher<br/>1005 = PerformancePaymentDisplayNetwork<br/>1006 = PerformancePaymentAdvertiser<br/>1007 = PerformancePaymentBrand<br/>2000 = GiftCardPayment<br/>2100 = GiftCardRefund
         */
        WOMNarrativeType /* int32 */;
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        valueWei?: string; // string
        /**
         * string
         */
        message?: string | null;
        /**
         * decimal
         */
        value?: number; // double
    }
    /**
     * userAuditRequest
     */
    export interface UserAuditRequest {
        /**
         * nullable1
         * example:
         * 000000000000000000000000
         */
        userId?: string | null; // objectId
        /**
         * string
         */
        remoteUserId?: string | null;
    }
    /**
     * userAuditResponse
     */
    export interface UserAuditResponse {
        request?: /* userAuditRequest */ UserAuditRequest;
        /**
         * list1
         */
        items?: /* userAuditItem */ UserAuditItem[] | null;
    }
    /**
     * userAuditType
     * <br/><br/>Values:<br/>0 = None<br/>1 = Transaction<br/>2 = Earning
     */
    export type UserAuditType = 0 | 1 | 2; // int32
    /**
     * userAuthChallengeEmailOrUsernameOrPhoneRequest
     */
    export interface UserAuthChallengeEmailOrUsernameOrPhoneRequest {
        /**
         * string
         */
        usernameOrEmail?: string | null;
        /**
         * string
         */
        email?: string | null;
        /**
         * string
         */
        mobileNumber?: string | null;
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
        locale?: string | null;
        /**
         * string
         * Username, must be unique
         */
        username: string;
        /**
         * string
         * User mobile number. Should be set only if user chose mobile number verification option.
         */
        mobileNumber?: string | null;
        /**
         * string
         * The code received in verification sms. If incorrect
         */
        smsVerificationCode?: string | null;
        /**
         * string
         */
        password: string;
    }
    /**
     * userDisableRequest
     */
    export interface UserDisableRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId: string; // objectId
        /**
         * boolean
         */
        isDisabled?: boolean;
    }
    /**
     * userJwtTokenResponse
     */
    export interface UserJwtTokenResponse {
        user?: /* getUserResponse */ GetUserResponse;
        /**
         * string
         */
        token?: string | null;
    }
    /**
     * userLocaleUpdateRequest
     */
    export interface UserLocaleUpdateRequest {
        /**
         * string
         */
        userId?: string | null;
        /**
         * cultureInfo
         * example:
         * en-GB
         */
        locale?: string | null; // string
    }
    /**
     * userProfileResponse
     */
    export interface UserProfileResponse {
        /**
         * string
         */
        imageUrl?: string | null;
        /**
         * string
         */
        primaryLanguage?: string | null;
    }
    /**
     * userQueryRequest
     */
    export interface UserQueryRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        segmentId?: string; // objectId
        /**
         * list1
         */
        userIds?: string /* objectId */[] | null;
        /**
         * list1
         */
        walletIds?: string /* objectId */[] | null;
        /**
         * string
         */
        userName?: string | null;
        /**
         * string
         */
        email?: string | null;
        /**
         * string
         */
        mobileNumber?: string | null;
        /**
         * string
         */
        textSearch?: string | null;
        /**
         * roles
         */
        rolesAll?: string /* string */[] | null;
        /**
         * roles
         */
        rolesAny?: string /* string */[] | null;
        /**
         * countryInfo
         * example:
         * string
         */
        country?: string | null; // string
        /**
         * string
         */
        region?: string | null;
        /**
         * nullable1
         */
        sortByRegionAsc?: boolean | null;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * userQueryResponse
     */
    export interface UserQueryResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* getUserResponse */ GetUserResponse[] | null;
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
        remove?: boolean;
        /**
         * string
         */
        role?: string | null;
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
        locale?: string | null;
        /**
         * string
         */
        firstName?: string | null;
        /**
         * string
         */
        lastName?: string | null;
        /**
         * string
         */
        email?: string | null;
        /**
         * string
         */
        mobileNumber?: string | null;
        /**
         * string
         */
        smsVerificationCode?: string | null;
    }
    /**
     * userValidationDetails
     */
    export interface UserValidationDetails {
        /**
         * string
         */
        payoutAddress?: string | null;
        /**
         * bigInteger
         * Amount paid out so far in WEI
         * example:
         * 100000000000000000000000
         */
        paidOutWei?: string; // string
        /**
         * bigInteger
         * The content creator's initial WOM stake for this validation in WEI
         * example:
         * 100000000000000000000000
         */
        stakedWei?: string; // string
        /**
         * decimal
         * Amount paid out so far
         */
        paidOut?: number; // double
        /**
         * decimal
         * The content creator's initial WOM stake for this validation
         */
        staked?: number; // double
        /**
         * boolean
         * Is this user the content creator
         */
        isContentCreator?: boolean;
        rating?: /* WOMScore */ WOMScore;
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
        username?: string | null;
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
        requestStakingPromotion?: boolean;
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
        stakeAmount?: number; // double
        /**
         * string
         * Submit for validation on behalf of this user. [Remote server only]
         */
        remoteUserId?: string | null;
        /**
         * boolean
         * If set, this validation sequence will require further steps.
         */
        startWithHold?: boolean;
        /**
         * objectId
         * The wallet id that will supply the stake amount.
         * example:
         * 000000000000000000000000
         */
        stakeWalletId?: string; // objectId
        /**
         * nullable1
         * Optional: Specify a different payout wallet from the staking wallet.
         * example:
         * 000000000000000000000000
         */
        payoutWalletId?: string | null; // objectId
        /**
         * boolean
         * Only available to federated servers
         */
        allowBonus?: boolean;
    }
    /**
     * validationDetailResponse
     */
    export interface ValidationDetailResponse {
        validationState?: /* validationStateResponse */ ValidationStateResponse;
        engagement?: /* engagementStatistics */ EngagementStatistics;
        womQualityScore?: /* WOMQualityScore */ WOMQualityScore;
        userValidationDetails?: /* userValidationDetails */ UserValidationDetails;
    }
    /**
     * validationEndedReason
     * <br/><br/>Values:<br/>0 = None<br/>1 = CompletedNormally<br/>2 = ConsensusNotReached<br/>3 = TerminatedInHold<br/>4 = Deleted
     */
    export type ValidationEndedReason = 0 | 1 | 2 | 3 | 4; // int32
    /**
     * validationEntriesRequest
     */
    export interface ValidationEntriesRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * string
         */
        remoteContentId?: string | null;
        /**
         * int32
         */
        pageIndex: number; // int32
        /**
         * int32
         */
        limit: number; // int32
        /**
         * boolean
         */
        returnQueryCount?: boolean;
    }
    /**
     * validationEntriesResponse
     */
    export interface ValidationEntriesResponse {
        /**
         * dictionary2
         */
        queryStatistics?: {
            [name: string]: string;
        } | null;
        request?: /* validationEntriesRequest */ ValidationEntriesRequest;
        /**
         * int32
         */
        totalPages?: number; // int32
        /**
         * int32
         */
        currentPageIndex?: number; // int32
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
        items?: /* validationEntryResponse */ ValidationEntryResponse[] | null;
    }
    /**
     * validationEntryResponse
     */
    export interface ValidationEntryResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId?: string; // objectId
        /**
         * dateTime
         */
        utcCreated?: string; // date-time
        /**
         * string
         */
        validatorPayoutAddress?: string | null;
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        womStakedWei?: string; // string
        /**
         * decimal
         */
        womStaked?: number; // double
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        transactionId?: string; // objectId
        /**
         * decimal
         */
        creativity?: number; // double
        /**
         * decimal
         */
        authenticity?: number; // double
        /**
         * decimal
         */
        positivity?: number; // double
        /**
         * decimal
         */
        averageScore?: number; // double
        /**
         * decimal
         */
        qualityScore?: number; // double
        /**
         * boolean
         */
        isProcessed?: boolean;
        /**
         * boolean
         */
        isPartOfConsensus?: boolean;
        /**
         * boolean
         */
        isRewarded?: boolean;
        /**
         * boolean
         */
        isRefunded?: boolean;
        /**
         * decimal
         */
        payoutMultiplier?: number; // double
        /**
         * decimal
         */
        payoutPercentage?: number; // double
        /**
         * bigInteger
         * example:
         * 100000000000000000000000
         */
        payoutValueWei?: string; // string
        /**
         * decimal
         */
        payoutValue?: number; // double
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        associatedTransactionId?: string; // objectId
    }
    /**
     * validationReleaseHoldRequest
     */
    export interface ValidationReleaseHoldRequest {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        contentId?: string; // objectId
        /**
         * string
         */
        remoteContentId?: string | null;
        /**
         * boolean
         */
        terminate?: boolean;
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
        contentId?: string; // objectId
        /**
         * string
         */
        remoteContentId?: string | null;
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
        womContentId?: string; // objectId
        /**
         * string
         * Remote content id (if available).
         */
        remoteContentId?: string | null;
        /**
         * dateTime
         */
        utcValidateBy?: string; // date-time
        currentStage?: /**
         * validationStage
         * <br/><br/>Values:<br/>0 = NotStarted<br/>1 = Processing<br/>2 = Ended<br/>3 = Held
         */
        ValidationStage /* int32 */;
        consensusRange?: /* consensusRange */ ConsensusRange;
        validationResult?: /**
         * validationResult
         * <br/><br/>Values:<br/>0 = NotProcessed<br/>1 = AcceptedByConsensus<br/>-1 = RejectedByConsensus
         */
        ValidationResult /* int32 */;
        endedReason?: /**
         * validationEndedReason
         * <br/><br/>Values:<br/>0 = None<br/>1 = CompletedNormally<br/>2 = ConsensusNotReached<br/>3 = TerminatedInHold<br/>4 = Deleted
         */
        ValidationEndedReason /* int32 */;
        /**
         * bigInteger
         * The amount of WOM the creator staked to begin validation in WEI.
         * example:
         * 100000000000000000000000
         */
        womStakedWei?: string; // string
        /**
         * decimal
         * The amount of WOM the creator staked to begin validation.
         */
        womStaked?: number; // double
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
        duration?: number; // int64
        /**
         * int64
         */
        size?: number; // int64
    }
    /**
     * videoDetailsRequest
     */
    export interface VideoDetailsRequest {
        /**
         * boolean
         */
        isReadyForStreaming?: boolean;
        /**
         * string
         */
        hlsUrl?: string | null;
        /**
         * string
         */
        screenGrabUrl?: string | null;
        /**
         * timeSpan
         * example:
         * 0
         */
        duration?: number; // int64
    }
    /**
     * videoDetailsResponse
     */
    export interface VideoDetailsResponse {
        /**
         * boolean
         */
        isReadyForStreaming?: boolean;
        /**
         * string
         */
        hlsUrl?: string | null;
        /**
         * string
         */
        screenGrabUrl?: string | null;
        /**
         * timeSpan
         * example:
         * 0
         */
        duration?: number; // int64
    }
    /**
     * voucherData
     */
    export interface VoucherData {
        /**
         * string
         */
        code?: string | null;
        /**
         * string
         */
        url?: string | null;
        /**
         * string
         */
        pin?: string | null;
        /**
         * string
         */
        validityDate?: string | null;
        /**
         * int64
         */
        orderProductId?: number; // int64
        /**
         * string
         */
        faceValue?: string | null;
        /**
         * string
         */
        voucherCurrency?: string | null;
    }
    /**
     * voucherPurchaseStatus
     * <br/><br/>Values:<br/>0 = None<br/>100 = InProcess<br/>200 = Success<br/>-100 = Failure
     */
    export type VoucherPurchaseStatus = 0 | 100 | 200 | -100; // int32
    /**
     * voucherStatisticsInfo
     */
    export interface VoucherStatisticsInfo {
        /**
         * int32
         */
        totalSpentCount?: number; // int32
        /**
         * decimal
         */
        totalPurchasedInWom?: number; // double
        /**
         * decimal
         */
        totalRefundedInWom?: number; // double
        /**
         * decimal
         */
        totalFailedInWom?: number; // double
        /**
         * list1
         */
        items?: /* voucherTransactionInfo */ VoucherTransactionInfo[] | null;
    }
    /**
     * voucherStatisticsResponse
     */
    export interface VoucherStatisticsResponse {
        /**
         * date
         * example:
         * 2020-01-01T00:00:00Z
         */
        date?: string; // string
        /**
         * int32
         */
        week?: number; // int32
        /**
         * int32
         */
        totalSpentCount?: number; // int32
        /**
         * decimal
         */
        totalPurchasedInWom?: number; // double
        /**
         * decimal
         */
        totalRefundedInWom?: number; // double
        /**
         * dictionary2
         */
        locales?: {
            [name: string]: /* voucherStatisticsInfo */ VoucherStatisticsInfo;
        } | null;
    }
    /**
     * voucherTransactionInfo
     */
    export interface VoucherTransactionInfo {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        userId?: string; // objectId
        transactionStatus?: /**
         * voucherTransactionStatus
         * <br/><br/>Values:<br/>0 = None<br/>50 = Create<br/>100 = Await<br/>200 = WomInProcess<br/>300 = WomSuccess<br/>400 = AwaitPhaze<br/>500 = PhazeInProcess<br/>600 = AwaitRefund<br/>700 = RefundInProgress<br/>800 = RefundSuccess<br/>900 = Success<br/>-300 = RefundFailed<br/>-200 = PhazeFailure<br/>-100 = WomFailure
         */
        VoucherTransactionStatus /* int32 */;
        /**
         * int32
         */
        denomination?: number; // int32
        /**
         * int64
         */
        productId?: number; // int64
        /**
         * decimal
         */
        priceInWom?: number; // double
        /**
         * string
         */
        currency?: string | null;
        /**
         * string
         */
        country?: string | null;
        /**
         * dateTime
         */
        createdUtc?: string; // date-time
        /**
         * nullable1
         */
        processedUtc?: string | null; // date-time
        /**
         * string
         */
        platformIdentifier?: string | null;
        /**
         * cultureInfo
         * example:
         * en-GB
         */
        locale?: string | null; // string
    }
    /**
     * voucherTransactionResponse
     */
    export interface VoucherTransactionResponse {
        /**
         * objectId
         * example:
         * 000000000000000000000000
         */
        id?: string; // objectId
        transactionStatus?: /**
         * voucherPurchaseStatus
         * <br/><br/>Values:<br/>0 = None<br/>100 = InProcess<br/>200 = Success<br/>-100 = Failure
         */
        VoucherPurchaseStatus /* int32 */;
        /**
         * int32
         */
        denomination?: number; // int32
        /**
         * int64
         */
        productId?: number; // int64
        /**
         * decimal
         */
        priceInWom?: number; // double
        /**
         * dateTime
         */
        createdUtc?: string; // date-time
        /**
         * nullable1
         */
        updatedUtc?: string | null; // date-time
        productInfo?: /* productInfo */ ProductInfo;
        /**
         * list1
         */
        giftCardData?: /* voucherData */ VoucherData[] | null;
    }
    /**
     * voucherTransactionStatus
     * <br/><br/>Values:<br/>0 = None<br/>50 = Create<br/>100 = Await<br/>200 = WomInProcess<br/>300 = WomSuccess<br/>400 = AwaitPhaze<br/>500 = PhazeInProcess<br/>600 = AwaitRefund<br/>700 = RefundInProgress<br/>800 = RefundSuccess<br/>900 = Success<br/>-300 = RefundFailed<br/>-200 = PhazeFailure<br/>-100 = WomFailure
     */
    export type VoucherTransactionStatus =
        | 0
        | 50
        | 100
        | 200
        | 300
        | 400
        | 500
        | 600
        | 700
        | 800
        | 900
        | -300
        | -200
        | -100; // int32
    /**
     * voucherValueRestrictions
     */
    export interface VoucherValueRestrictions {
        /**
         * decimal
         */
        maxVal?: number; // double
        /**
         * decimal
         */
        minVal?: number; // double
    }
    /**
     * WOMNarrativeType
     * <br/><br/>Values:<br/>0 = None<br/>100 = Deposit<br/>200 = Withdrawal<br/>300 = CreatorStake<br/>301 = CreatorReward<br/>302 = CreatorStakeRefund<br/>303 = CreatorBonus<br/>400 = ValidationStake<br/>401 = ValidationReward<br/>402 = ValidationStakeRefund<br/>410 = ValidationProfit<br/>500 = Exchange<br/>600 = UserTransfer<br/>700 = Reward<br/>800 = MigrationSync<br/>900 = CampaignPayment<br/>1000 = PerformancePayment<br/>1001 = PerformancePaymentCreator<br/>1002 = PerformancePaymentAuthenticator<br/>1003 = PerformancePaymentFacilitator<br/>1004 = PerformancePaymentPublisher<br/>1005 = PerformancePaymentDisplayNetwork<br/>1006 = PerformancePaymentAdvertiser<br/>1007 = PerformancePaymentBrand<br/>2000 = GiftCardPayment<br/>2100 = GiftCardRefund
     */
    export type WOMNarrativeType =
        | 0
        | 100
        | 200
        | 300
        | 301
        | 302
        | 303
        | 400
        | 401
        | 402
        | 410
        | 500
        | 600
        | 700
        | 800
        | 900
        | 1000
        | 1001
        | 1002
        | 1003
        | 1004
        | 1005
        | 1006
        | 1007
        | 2000
        | 2100; // int32
    /**
     * WOMQualityScore
     */
    export interface WOMQualityScore {
        /**
         * decimal
         * The WOM quality score is the sum of the other ratings multiplied by individual weights.
         */
        quality?: number; // double
        /**
         * decimal
         * The WOM authenticity score as determined by the WOM validation process.
         */
        authenticity?: number; // double
        /**
         * decimal
         * The WOM creativity score as determined by the WOM validation process.
         */
        creativity?: number; // double
        /**
         * decimal
         * The WOM positivity score as determined by the WOM validation process.
         */
        positivity?: number; // double
    }
    /**
     * WOMScore
     */
    export interface WOMScore {
        /**
         * decimal
         * The WOM authenticity score as determined by the WOM validation process.
         */
        authenticity?: number; // double
        /**
         * decimal
         * The WOM creativity score as determined by the WOM validation process.
         */
        creativity?: number; // double
        /**
         * decimal
         * The WOM positivity score as determined by the WOM validation process.
         */
        positivity?: number; // double
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
        walletId?: string | null; // objectId
        /**
         * string
         * If specified the wallet for the given address will be displayed (Admin only)
         */
        publicAddress?: string | null;
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
        walletId?: string; // objectId
        /**
         * boolean
         * Determines if this user has a wallet
         */
        hasWallet?: boolean;
        /**
         * boolean
         * Has the user participated in any WOM or RP token transactions.
         */
        hasTransacted?: boolean;
        /**
         * list1
         * The addresses held in this wallet if available
         */
        items?: /**
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
        addressFrom?: string | null;
        /**
         * string
         * The destination address, must be a valid Ethereum WOM ERC20 destination.
         */
        addressTo?: string | null;
        /**
         * decimal
         * This value is denominated in ETHER (WOM), it is a decimal value where 10.5 WOM tokens should be written as 10.5
         */
        value?: number; // double
    }
}
declare namespace Paths {
    namespace BrandCreate {
        namespace Post {
            export type RequestBody = /* createBrandRequest */ Components.Schemas.CreateBrandRequest;
            namespace Responses {
                export type $200 = /* brandResponse */ Components.Schemas.BrandResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace BrandDelete {
        namespace Post {
            export type RequestBody = /* deleteBrandRequest */ Components.Schemas.DeleteBrandRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace BrandGet {
        namespace Post {
            export type RequestBody = /* getBrandRequest */ Components.Schemas.GetBrandRequest;
            namespace Responses {
                export type $200 = /* brandResponse */ Components.Schemas.BrandResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace BrandQuery {
        namespace Post {
            export type RequestBody = /* queryBrandsRequest */ Components.Schemas.QueryBrandsRequest;
            namespace Responses {
                export type $200 = /* brandsResponse */ Components.Schemas.BrandsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace BrandUpdate {
        namespace Post {
            export type RequestBody = /* updateBrandRequest */ Components.Schemas.UpdateBrandRequest;
            namespace Responses {
                export type $200 = /* brandResponse */ Components.Schemas.BrandResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace CampaignChannelQueryPrivate {
        namespace Post {
            export type RequestBody = /* queryPrivateChannelsRequest */ Components.Schemas.QueryPrivateChannelsRequest;
            namespace Responses {
                export type $200 = /* queryPrivateChannelsResponse */ Components.Schemas.QueryPrivateChannelsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace CampaignChannelQueryPublic {
        namespace Post {
            export type RequestBody = /* organizationChannelQueryRequest */ Components.Schemas.OrganizationChannelQueryRequest;
            namespace Responses {
                export type $200 = /* organizationChannelQueryResponse */ Components.Schemas.OrganizationChannelQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
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
    namespace CampaignGetPromotionDetails {
        namespace Post {
            export type RequestBody = /* campaignGetPromotionDetailsRequest */ Components.Schemas.CampaignGetPromotionDetailsRequest;
            namespace Responses {
                export type $200 = /* campaignGetPromotionDetailsResponse */ Components.Schemas.CampaignGetPromotionDetailsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace CampaignGetTags {
        namespace Post {
            export type RequestBody = /* campaignGetTagsRequest */ Components.Schemas.CampaignGetTagsRequest;
            namespace Responses {
                export type $200 = /* campaignGetTagsResponse */ Components.Schemas.CampaignGetTagsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace CampaignMerchantQuery {
        namespace Post {
            export type RequestBody = /* campaignMerchantQueryRequest */ Components.Schemas.CampaignMerchantQueryRequest;
            namespace Responses {
                export type $200 = /* campaignMerchantQueryResponse */ Components.Schemas.CampaignMerchantQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
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
    namespace CampaignQueryActive {
        namespace Post {
            export type RequestBody = /* queryActiveCampaignsRequest */ Components.Schemas.QueryActiveCampaignsRequest;
            namespace Responses {
                export type $200 = /* queryActiveCampaignsResponse */ Components.Schemas.QueryActiveCampaignsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
            }
        }
    }
    namespace CampaignQueryByContent {
        namespace Post {
            export type RequestBody = /* campaignsContentRequest */ Components.Schemas.CampaignsContentRequest;
            namespace Responses {
                /**
                 * list1
                 */
                export type $200 = /* campaignDetailResponse */ Components.Schemas.CampaignDetailResponse[];
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace CampaignQueryCreators {
        namespace Post {
            export type RequestBody = /* queryCampaignCreatorsRequest */ Components.Schemas.QueryCampaignCreatorsRequest;
            namespace Responses {
                export type $200 = /* queryCampaignCreatorsResponse */ Components.Schemas.QueryCampaignCreatorsResponse;
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
    namespace CatalogueDelete {
        namespace Post {
            export type RequestBody = /* contentDeleteRequest */ Components.Schemas.ContentDeleteRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace CatalogueDeleteByUser {
        namespace Post {
            export type RequestBody = /* contentDeleteByUserRequest */ Components.Schemas.ContentDeleteByUserRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace CatalogueEarnings {
        namespace Post {
            export type RequestBody = /* earningReportRequest */ Components.Schemas.EarningReportRequest;
            namespace Responses {
                export type $200 = /* earningReportResponse */ Components.Schemas.EarningReportResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace CatalogueFlagInappropriate {
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
    namespace CatalogueGet {
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
    namespace CataloguePut {
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
    namespace CatalogueQuery {
        namespace Post {
            export type RequestBody = /* contentQueryRequest */ Components.Schemas.ContentQueryRequest;
            namespace Responses {
                export type $200 = /* contentQueryResponse */ Components.Schemas.ContentQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace CatalogueQueryEarningsStatistics {
        namespace Post {
            export type RequestBody = /* earningsStatisticsQueryRequest */ Components.Schemas.EarningsStatisticsQueryRequest;
            namespace Responses {
                export type $200 = /* earningsStatisticsQueryResponse */ Components.Schemas.EarningsStatisticsQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace CatalogueQueryPromoted {
        namespace Post {
            export type RequestBody = /* contentQueryPromoted */ Components.Schemas.ContentQueryPromoted;
            namespace Responses {
                export type $200 = /* contentQueryPromotedResponse */ Components.Schemas.ContentQueryPromotedResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace CatalogueQueryStatistics {
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
    namespace CatalogueSendStatisticsHourly {
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
    namespace CatalogueStreamUpdate {
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
    namespace ChannelContentCreate {
        namespace Post {
            export type RequestBody = /* createChannelContentRequest */ Components.Schemas.CreateChannelContentRequest;
            namespace Responses {
                export type $200 = /* channelContentResponse */ Components.Schemas.ChannelContentResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ChannelContentDelete {
        namespace Post {
            export type RequestBody = /* deleteChannelContentRequest */ Components.Schemas.DeleteChannelContentRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ChannelContentGet {
        namespace Post {
            export type RequestBody = /* getChannelContentRequest */ Components.Schemas.GetChannelContentRequest;
            namespace Responses {
                export type $200 = /* channelContentResponse */ Components.Schemas.ChannelContentResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ChannelContentQuery {
        namespace Post {
            export type RequestBody = /* queryChannelContentsRequest */ Components.Schemas.QueryChannelContentsRequest;
            namespace Responses {
                export type $200 = /* channelContentsResponse */ Components.Schemas.ChannelContentsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ChannelContentQueryPublic {
        namespace Post {
            export type RequestBody = /* queryChannelViewerContentRequest */ Components.Schemas.QueryChannelViewerContentRequest;
            namespace Responses {
                export type $200 = /* channelViewerContentItemsResponse */ Components.Schemas.ChannelViewerContentItemsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ChannelContentUpdate {
        namespace Post {
            export type RequestBody = /* updateChannelContentRequest */ Components.Schemas.UpdateChannelContentRequest;
            namespace Responses {
                export type $200 = /* channelContentResponse */ Components.Schemas.ChannelContentResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ChannelCreate {
        namespace Post {
            export type RequestBody = /* createChannelRequest */ Components.Schemas.CreateChannelRequest;
            namespace Responses {
                export type $200 = /* channelResponse */ Components.Schemas.ChannelResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ChannelDelete {
        namespace Post {
            export type RequestBody = /* deleteChannelRequest */ Components.Schemas.DeleteChannelRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ChannelGet {
        namespace Post {
            export type RequestBody = /* getChannelRequest */ Components.Schemas.GetChannelRequest;
            namespace Responses {
                export type $200 = /* channelResponse */ Components.Schemas.ChannelResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ChannelQuery {
        namespace Post {
            export type RequestBody = /* queryChannelsRequest */ Components.Schemas.QueryChannelsRequest;
            namespace Responses {
                export type $200 = /* channelsResponse */ Components.Schemas.ChannelsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ChannelQueryPlaylist {
        namespace Post {
            export type RequestBody = /* queryChannelPlaylistRequest */ Components.Schemas.QueryChannelPlaylistRequest;
            namespace Responses {
                export type $200 = /* queryChannelPlaylistResponse */ Components.Schemas.QueryChannelPlaylistResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
            }
        }
    }
    namespace ChannelUpdate {
        namespace Post {
            export type RequestBody = /* updateChannelRequest */ Components.Schemas.UpdateChannelRequest;
            namespace Responses {
                export type $200 = /* channelResponse */ Components.Schemas.ChannelResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace LanguageQuery {
        namespace Post {
            export type RequestBody = /* getLanguagesRequest */ Components.Schemas.GetLanguagesRequest;
            namespace Responses {
                export type $200 = /* allLanguagesResponse */ Components.Schemas.AllLanguagesResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace LocationQueryCountries {
        namespace Post {
            export type RequestBody = /* adminGetCountriesRequest */ Components.Schemas.AdminGetCountriesRequest;
            namespace Responses {
                export type $200 = /* adminAllCountriesResponse */ Components.Schemas.AdminAllCountriesResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace LocationQueryRegions {
        namespace Post {
            export type RequestBody = /* adminGetRegionsByCountryRequest */ Components.Schemas.AdminGetRegionsByCountryRequest;
            namespace Responses {
                export type $200 = /* adminAllRegionsByCountryResponse */ Components.Schemas.AdminAllRegionsByCountryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
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
    namespace NotificationQuery {
        namespace Post {
            export type RequestBody = /* queryNotificationsRequest */ Components.Schemas.QueryNotificationsRequest;
            namespace Responses {
                export type $200 = /* queryNotificationsResponse */ Components.Schemas.QueryNotificationsResponse;
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
    namespace OrganizationGetIdentity {
        namespace Post {
            export type RequestBody = /* organizationIdentityRequest */ Components.Schemas.OrganizationIdentityRequest;
            namespace Responses {
                export type $200 = /* organizationIdentityResponse */ Components.Schemas.OrganizationIdentityResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
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
    namespace OrganizationPurchaseRequest {
        namespace Post {
            export type RequestBody = /* organizationPurchaseRequest */ Components.Schemas.OrganizationPurchaseRequest;
            namespace Responses {
                export interface $200 {}
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace OrganizationQuery {
        namespace Post {
            export type RequestBody = /* queryOrganizationRequest */ Components.Schemas.QueryOrganizationRequest;
            namespace Responses {
                export type $200 = /* organizationsResponse */ Components.Schemas.OrganizationsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
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
            export type RequestBody = /* organizationAnalyzeEmailRequest */ Components.Schemas.OrganizationAnalyzeEmailRequest;
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
            export type RequestBody = /* organizationUserAuthChallengeRequest */ Components.Schemas.OrganizationUserAuthChallengeRequest;
            namespace Responses {
                export type $200 = /* userJwtTokenResponse */ Components.Schemas.UserJwtTokenResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationUserAuthenticateToken {
        namespace Post {
            export type RequestBody = /* organizationAuthenticateWithTokenRequest */ Components.Schemas.OrganizationAuthenticateWithTokenRequest;
            namespace Responses {
                export type $200 = /* userJwtTokenResponse */ Components.Schemas.UserJwtTokenResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationUserMembershipAcceptInvite {
        namespace Post {
            export type RequestBody = /* organizationAcceptInviteRequest */ Components.Schemas.OrganizationAcceptInviteRequest;
            namespace Responses {
                export type $200 = /* userJwtTokenResponse */ Components.Schemas.UserJwtTokenResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace OrganizationUserMembershipInvite {
        namespace Post {
            export type RequestBody = /* organizationSendInvitationsRequest */ Components.Schemas.OrganizationSendInvitationsRequest;
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
            export type RequestBody = /* organizationModifyUserRequest */ Components.Schemas.OrganizationModifyUserRequest;
            namespace Responses {
                export type $200 = /* organizationResponse */ Components.Schemas.OrganizationResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace OrganizationUserQuery {
        namespace Post {
            export type RequestBody = /* organizationQueryUsersRequest */ Components.Schemas.OrganizationQueryUsersRequest;
            namespace Responses {
                export type $200 = /* organizationQueryUsersResponse */ Components.Schemas.OrganizationQueryUsersResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace OrganizationUserSendForgottenPasswordEmail {
        namespace Post {
            export type RequestBody = /* organizationUserWantsForgottenPasswordRequest */ Components.Schemas.OrganizationUserWantsForgottenPasswordRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace OrganizationUserSendValidationLinkEmail {
        namespace Post {
            export type RequestBody = /* organizationUserWantsValidationLinkEmailRequest */ Components.Schemas.OrganizationUserWantsValidationLinkEmailRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace PerformancePaymentsGet {
        namespace Post {
            export type RequestBody = /* performancePaymentsGetRequest */ Components.Schemas.PerformancePaymentsGetRequest;
            namespace Responses {
                export type $200 = /* performancePaymentsGetResponse */ Components.Schemas.PerformancePaymentsGetResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace PerformancePaymentsQuery {
        namespace Post {
            export type RequestBody = /* performancePaymentsQueryRequest */ Components.Schemas.PerformancePaymentsQueryRequest;
            namespace Responses {
                export type $200 = /* performancePaymentsQueryResponse */ Components.Schemas.PerformancePaymentsQueryResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace PerformancePaymentsQueryContent {
        namespace Post {
            export type RequestBody = /* performancePaymentsContentPaymentsRequest */ Components.Schemas.PerformancePaymentsContentPaymentsRequest;
            namespace Responses {
                export type $200 = /* performancePaymentsContentPaymentsResponse */ Components.Schemas.PerformancePaymentsContentPaymentsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace ProductControllerLegacyUpdate {
        namespace Post {
            export type RequestBody = /* updateProductRequestLegacy */ Components.Schemas.UpdateProductRequestLegacy;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace ProductCreate {
        namespace Post {
            export type RequestBody = /* createProductRequest */ Components.Schemas.CreateProductRequest;
            namespace Responses {
                export type $200 = /* productResponse */ Components.Schemas.ProductResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ProductDelete {
        namespace Post {
            export type RequestBody = /* deleteProductRequest */ Components.Schemas.DeleteProductRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ProductGet {
        namespace Post {
            export type RequestBody = /* getProductRequest */ Components.Schemas.GetProductRequest;
            namespace Responses {
                export type $200 = /* productResponse */ Components.Schemas.ProductResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ProductQuery {
        namespace Post {
            export type RequestBody = /* queryProductsRequest */ Components.Schemas.QueryProductsRequest;
            namespace Responses {
                export type $200 = /* productsResponse */ Components.Schemas.ProductsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ProductRemoteCreate {
        namespace Post {
            export type RequestBody = /* createRemoteProductRequest */ Components.Schemas.CreateRemoteProductRequest;
            namespace Responses {
                export type $200 = /* remoteProductResponse */ Components.Schemas.RemoteProductResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ProductRemoteDelete {
        namespace Post {
            export type RequestBody = /* deleteRemoteProductRequest */ Components.Schemas.DeleteRemoteProductRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ProductRemoteGet {
        namespace Post {
            export type RequestBody = /* getRemoteProductRequest */ Components.Schemas.GetRemoteProductRequest;
            namespace Responses {
                export type $200 = /* remoteProductResponse */ Components.Schemas.RemoteProductResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ProductRemoteInitialize {
        namespace Post {
            export type RequestBody = /* initializeWebRecorderRequest */ Components.Schemas.InitializeWebRecorderRequest;
            namespace Responses {
                export type $200 = /* initializeWebRecorderResponse */ Components.Schemas.InitializeWebRecorderResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
            }
        }
    }
    namespace ProductRemoteLink {
        namespace Post {
            export type RequestBody = /* linkRemoteProductRequest */ Components.Schemas.LinkRemoteProductRequest;
            namespace Responses {
                export type $200 = /* remoteProductResponse */ Components.Schemas.RemoteProductResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ProductRemoteQuery {
        namespace Post {
            export type RequestBody = /* queryRemoteProductsRequest */ Components.Schemas.QueryRemoteProductsRequest;
            namespace Responses {
                export type $200 = /* remoteProductsResponse */ Components.Schemas.RemoteProductsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ProductRemoteQueryContent {
        namespace Post {
            export type RequestBody = /* queryProductViewerContentRequest */ Components.Schemas.QueryProductViewerContentRequest;
            namespace Responses {
                export type $200 = /* queryProductViewerContentResponse */ Components.Schemas.QueryProductViewerContentResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
            }
        }
    }
    namespace ProductRemoteQueryUnlinked {
        namespace Post {
            export type RequestBody = /* queryUnlinkedRemoteProductsRequest */ Components.Schemas.QueryUnlinkedRemoteProductsRequest;
            namespace Responses {
                export type $200 = /* remoteProductsResponse */ Components.Schemas.RemoteProductsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ProductRemoteUpdate {
        namespace Post {
            export type RequestBody = /* updateRemoteProductRequest */ Components.Schemas.UpdateRemoteProductRequest;
            namespace Responses {
                export type $200 = /* remoteProductResponse */ Components.Schemas.RemoteProductResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace ProductUpdate {
        namespace Post {
            export type RequestBody = /* updateProductRequest */ Components.Schemas.UpdateProductRequest;
            namespace Responses {
                export type $200 = /* productResponse */ Components.Schemas.ProductResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace TestCancelAndResetStatistics {
        namespace Post {
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace TestEarningsSync {
        namespace Get {
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace TestMigrateEarnings {
        namespace Get {
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace TestMisc {
        namespace Get {
            namespace Parameters {
                /**
                 * string
                 */
                export type Command = string;
            }
            export interface QueryParameters {
                command?: /* string */ Parameters.Command;
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
                export type Name = string;
            }
            export interface QueryParameters {
                name?: /* string */ Parameters.Name;
            }
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
            }
        }
    }
    namespace UserAdminAudit {
        namespace Post {
            export type RequestBody = /* userAuditRequest */ Components.Schemas.UserAuditRequest;
            namespace Responses {
                export type $200 = /* userAuditResponse */ Components.Schemas.UserAuditResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
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
    namespace UserAdminWithdrawalCheck {
        namespace Post {
            export type RequestBody = /* checkWithdrawalRequest */ Components.Schemas.CheckWithdrawalRequest;
            namespace Responses {
                export type $200 = /* checkWithdrawalResponse */ Components.Schemas.CheckWithdrawalResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace UserDisable {
        namespace Post {
            export type RequestBody = /* userDisableRequest */ Components.Schemas.UserDisableRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
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
    namespace UserUpdateLocale {
        namespace Post {
            export type RequestBody = /* userLocaleUpdateRequest */ Components.Schemas.UserLocaleUpdateRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
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
    namespace ValidationQueryStates {
        namespace Post {
            export type RequestBody = /* queryValidationStatesRequest */ Components.Schemas.QueryValidationStatesRequest;
            namespace Responses {
                export type $200 = /* queryValidationStatesResponse */ Components.Schemas.QueryValidationStatesResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
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
            export type RequestBody = /* userAuthChallengeEmailOrUsernameOrPhoneRequest */ Components.Schemas.UserAuthChallengeEmailOrUsernameOrPhoneRequest;
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
    namespace ValidationUserSmsAnalyzeMobileNumber {
        namespace Post {
            export type RequestBody = /* analyzeMobileNumberRequest */ Components.Schemas.AnalyzeMobileNumberRequest;
            namespace Responses {
                export type $200 = /* analyzeMobileNumberResponse */ Components.Schemas.AnalyzeMobileNumberResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
            }
        }
    }
    namespace ValidationUserSmsChangeUserPassword {
        namespace Post {
            export type RequestBody = /* changeUserPasswordViaSmsRequest */ Components.Schemas.ChangeUserPasswordViaSmsRequest;
            namespace Responses {
                export type $200 = /* changeUserPasswordViaSmsResponse */ Components.Schemas.ChangeUserPasswordViaSmsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
            }
        }
    }
    namespace ValidationUserSmsCheckVerificationCode {
        namespace Post {
            export type RequestBody = /* checkSmsCodeRequest */ Components.Schemas.CheckSmsCodeRequest;
            namespace Responses {
                export type $200 = /* checkSmsCodeResponse */ Components.Schemas.CheckSmsCodeResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
            }
        }
    }
    namespace ValidationUserSmsSendForgottenPassword {
        namespace Post {
            export type RequestBody = /* sendForgottenPasswordSmsRequest */ Components.Schemas.SendForgottenPasswordSmsRequest;
            namespace Responses {
                export type $200 = /* sendForgottenPasswordSmsResponse */ Components.Schemas.SendForgottenPasswordSmsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
            }
        }
    }
    namespace ValidationUserSmsSendVerification {
        namespace Post {
            export type RequestBody = /* sendVerificationSmsRequest */ Components.Schemas.SendVerificationSmsRequest;
            namespace Responses {
                export type $200 = /* sendVerificationSmsResponse */ Components.Schemas.SendVerificationSmsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
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
                export type Id = string;
            }
            export interface PathParameters {
                id: /* string */ Parameters.Id;
            }
            export interface RequestBody {
                fileName?: string; // binary
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
    namespace ValidationValidationEntries {
        namespace Post {
            export type RequestBody = /* validationEntriesRequest */ Components.Schemas.ValidationEntriesRequest;
            namespace Responses {
                export type $200 = /* validationEntriesResponse */ Components.Schemas.ValidationEntriesResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
                export type $409 = /* error409ConflictResponse */ Components.Schemas.Error409ConflictResponse;
            }
        }
    }
    namespace VoucherGet {
        namespace Post {
            export type RequestBody = /* getVoucherTransactionRequest */ Components.Schemas.GetVoucherTransactionRequest;
            namespace Responses {
                export type $200 = /* voucherTransactionResponse */ Components.Schemas.VoucherTransactionResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace VoucherGetInfo {
        namespace Post {
            export type RequestBody = /* getVoucherInfoRequest */ Components.Schemas.GetVoucherInfoRequest;
            namespace Responses {
                export type $200 = /* getVoucherInfoResponse */ Components.Schemas.GetVoucherInfoResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace VoucherPurchase {
        namespace Post {
            export type RequestBody = /* createVoucherTransactionRequest */ Components.Schemas.CreateVoucherTransactionRequest;
            namespace Responses {
                export type $200 = /* voucherTransactionResponse */ Components.Schemas.VoucherTransactionResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace VoucherQuery {
        namespace Post {
            export type RequestBody = /* queryVoucherTransactionRequest */ Components.Schemas.QueryVoucherTransactionRequest;
            namespace Responses {
                export type $200 = /* queryVoucherTransactionResponse */ Components.Schemas.QueryVoucherTransactionResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace VoucherQueryBrands {
        namespace Post {
            export type RequestBody = /* getVoucherBrandsRequest */ Components.Schemas.GetVoucherBrandsRequest;
            namespace Responses {
                export type $200 = /* getVoucherBrandsResponse */ Components.Schemas.GetVoucherBrandsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace VoucherQueryCountries {
        namespace Post {
            export type RequestBody = /* getVoucherCountriesRequest */ Components.Schemas.GetVoucherCountriesRequest;
            namespace Responses {
                export type $200 = /* getVoucherCountriesResponse */ Components.Schemas.GetVoucherCountriesResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace VoucherQueryStatistics {
        namespace Post {
            export type RequestBody = /* queryVoucherStatisticsRequest */ Components.Schemas.QueryVoucherStatisticsRequest;
            namespace Responses {
                export type $200 = /* queryVoucherStatisticsResponse */ Components.Schemas.QueryVoucherStatisticsResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
            }
        }
    }
    namespace WalletAdminSetLimits {
        namespace Post {
            export type RequestBody = /* transactionLimitCreateRequest */ Components.Schemas.TransactionLimitCreateRequest;
            namespace Responses {
                export type $200 = /* messageResponseBase */ Components.Schemas.MessageResponseBase;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
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
    namespace WalletGetLimits {
        namespace Post {
            export type RequestBody = /* transactionLimitGetRequest */ Components.Schemas.TransactionLimitGetRequest;
            namespace Responses {
                export type $200 = /* transactionLimitGetResponse */ Components.Schemas.TransactionLimitGetResponse;
                export type $400 = /* error400BadRequest */ Components.Schemas.Error400BadRequest;
                export interface $401 {}
                export type $404 = /* error404NotFoundResponse */ Components.Schemas.Error404NotFoundResponse;
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
