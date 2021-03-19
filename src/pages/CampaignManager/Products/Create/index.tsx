import React from 'react';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { ModifyingLayout } from 'components/Layouts/ModifyingLayout';
import { ProductForm } from '../ProductForm';
import { useForm } from 'effector-forms';
import { forms } from 'stores/forms';
import { productFormEvents } from 'stores/forms/productForm';

export const CreateProduct = () => {
    const { eachValid } = useForm(forms.productForm);

    const onSubmit = () => {
        productFormEvents.addSubmit();
        // history.push(globalPrefixUrl + routes.campaignManager.products.index);
    };

    return (
        <CampaignManagerLayout>
            <ModifyingLayout isValid={eachValid} onClickAction={onSubmit}>
                <ProductForm />
            </ModifyingLayout>
        </CampaignManagerLayout>
    );
};
