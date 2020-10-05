import { errorDataMessage } from 'constants/messages';
import { createEffect } from 'effector';
import { CreateOrganizationProps } from 'pages/Admin/CreateOrganization/types';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

const createOrganization = createEffect({
    handler: async ({ values, setErrors }: CreateOrganizationProps) => {
        try {
            loadingEffects.updateLoading();
            await API.admin.createOrganization(values);
            loadingEffects.updateLoading();
        } catch {
            loadingEffects.updateLoading();
            setErrors({
                companyName: errorDataMessage,
                administratorEmail: errorDataMessage
            });
        }
    }
});

const adminEvents = {};
const adminEffects = { createOrganization };
const adminStores = {};

export { adminEffects, adminStores, adminEvents };
