import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { ModifyingLayout } from 'components/Layouts/ModifyingLayout';
import { useForm } from 'effector-forms';
import React from 'react';
import { forms } from 'stores/forms';
import { productFormEvents } from 'stores/forms/productForm';
import { ProductForm } from '../ProductForm';

export const CreateProduct = () => {
    const { eachValid } = useForm(forms.productForm);

    const onSubmit = () => {
        productFormEvents.addSubmit();
        // history.push(globalPrefixUrl + routes.campaignManager.products.index);
    };

    return (
        <CampaignManagerLayout>
            <ModifyingLayout isValid={eachValid} page="Product" onClickAction={onSubmit}>
                <ProductForm />
            </ModifyingLayout>
        </CampaignManagerLayout>
    );
};
