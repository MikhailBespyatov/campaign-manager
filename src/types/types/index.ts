import { defaultTheme } from 'constants/defaults';
import { campaignRoutes } from 'constants/routes';

export type InfoType = 'default' | 'success' | 'error' | 'disabled';
export type NumberOrEmptyString = number | '';
export type Noop = () => void;
export type StatusType = 'running' | 'paused' | 'expired' | 'completed';
export type ThemeProps = typeof defaultTheme;
export type CampaignRoutesType = typeof campaignRoutes;

// export type CardModal = {
//     visible: boolean;
//     id: string;
// };
