import { defaultTheme } from 'constants/defaults';
import { campaignRoutes } from 'constants/routes';

export type InfoType = 'default' | 'success' | 'error' | 'disabled';
export type NumberOrEmptyString = number | '';
export type Noop = () => void;
export type StatusType = 'running' | 'paused' | 'expired' | 'completed' | 'draft';
export type ThemeProps = typeof defaultTheme;
export type CampaignRoutesType = typeof campaignRoutes;
export type AlignmentType = 'start' | 'center' | 'end';
export type SubjectType = string | boolean;
export type OkHandlerType = (subject: SubjectType) => Promise<void>;
export type SortType = 'none' | 'descending' | 'ascending';

/**
 * contentOrderByProperty
 * <br/><br/>Values:<br/>0 = Default<br/>1 = Likes<br/>2 = DateAddedUtc<br/>3 = Views<br/>4 = ViewD1Count<br/>5 = ViewD2Count<br/>6 = ViewD3Count<br/>7 = ViewD4Count<br/>8 = BuyCount<br/>9 = ClickCount<br/>10 = CommentCount<br/>11 = ShareCount<br/>12 = RatingCount<br/>13 = SaveCount<br/>14 = ValidationTimer
 */

export enum FilterProperty {
    Default,
    Likes,
    DateAddedUtc,
    Views,
    ViewD1Count,
    ViewD2Count,
    ViewD3Count,
    ViewD4Count,
    BuyCount,
    ClickCount,
    CommentCount,
    ShareCount,
    RatingCount,
    SaveCount,
    ValidationTimer
}

// export type CardModal = {
//     visible: boolean;
//     id: string;
// };
