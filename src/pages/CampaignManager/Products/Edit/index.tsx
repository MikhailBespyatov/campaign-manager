import React from 'react';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { ModifyingLayout } from 'components/Layouts/ModifyingLayout';
import { useForm } from 'effector-forms';
import { forms } from 'stores/forms';
import { ProductForm } from 'pages/CampaignManager/Products/ProductForm';
import { productFormEvents } from 'stores/forms/productForm';

export const EditProduct = () => {
    const { eachValid } = useForm(forms.productForm);

    const onSubmit = () => {
        productFormEvents.editSubmit();
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
