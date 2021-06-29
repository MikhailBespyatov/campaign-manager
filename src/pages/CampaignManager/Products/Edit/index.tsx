import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { ModifyingLayout } from 'components/Layouts/ModifyingLayout';
import { useForm } from 'effector-forms';
import { ProductForm } from 'pages/CampaignManager/Products/ProductForm';
import { productEditAddFormWidth } from 'pages/CampaignManager/Products/ProductForm/constants';
import React from 'react';
import { forms } from 'stores/forms';
import { productFormEvents } from 'stores/forms/productForm';

export const EditProduct = () => {
    const { eachValid } = useForm(forms.productForm);

    const onSubmit = () => {
        productFormEvents.editSubmit();
        // history.push(globalPrefixUrl + routes.campaignManager.products.index);
    };

    return (
        <CampaignManagerLayout>
            <ModifyingLayout
                isValid={eachValid}
                page="Product"
                width={productEditAddFormWidth}
                onClickAction={onSubmit}
            >
                <ProductForm />
            </ModifyingLayout>
        </CampaignManagerLayout>
    );
};
