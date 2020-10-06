import { FormikErrors } from 'formik';

export interface Props {
    title: string;
    tags: string[];
    utcToStart: string;
    utcToEnd: string;
    amount: string;
}

export interface SetErrorsCreateCampaign {
    setErrors: (
        errors: FormikErrors<{
            title?: string;
            tags?: string;
            utcToStart?: string;
            utcToEnd?: string;
            amount?: string;
        }>
    ) => void;
}

export interface CreateCampaignRequestProps extends SetErrorsCreateCampaign {
    values: WOM.CampaignUpsertRequest;
}
