import React from 'react';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { ModifyingLayout } from 'components/Layouts/ModifyingLayout';
import { useForm } from 'effector-forms';
import { forms } from 'stores/forms';
import { ProductForm } from 'pages/CampaignManager/Products/ProductForm';
import { useHistory } from 'react-router';
import { useStore } from 'effector-react';
import { themeStores } from 'stores/theme';
import { productFormEvents } from 'stores/forms/productForm';
import { routes } from 'constants/routes';

export const EditProduct = () => {
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const { eachValid } = useForm(forms.productForm);

    const onSubmit = () => {
        productFormEvents.editSubmit();
        history.push(globalPrefixUrl + routes.campaignManager.products.index);
    };

    return (
        <CampaignManagerLayout>
            <ModifyingLayout isValid={eachValid} onClickAction={onSubmit}>
                <ProductForm />
            </ModifyingLayout>
        </CampaignManagerLayout>
    );
};
