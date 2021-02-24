import React from 'react';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { ModifyingLayout } from 'components/Layouts/ModifyingLayout';
import { ProductForm } from '../ProductForm';
import { useForm } from 'effector-forms';
import { forms } from 'stores/forms';
import { useHistory } from 'react-router';
import { useStore } from 'effector-react';
import { themeStores } from 'stores/theme';
import { routes } from 'constants/routes';
import { productFormEvents } from 'stores/forms/productForm';

export const CreateProduct = () => {
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const { eachValid } = useForm(forms.productForm);

    const onSubmit = () => {
        productFormEvents.addSubmit();
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
