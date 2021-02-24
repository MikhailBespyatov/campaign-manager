import { createForm } from 'effector-forms';
import { createRule, yupCompanyName, yupDefault, yupUrl } from 'constants/yupFields';
import { createEvent, forward, sample } from 'effector';
import { channelForm } from 'stores/forms/channelForm';
import { productsEffects } from 'stores/products';

export const productForm = createForm({
    fields: {
        id: {
            init: ''
            // rules: [
            //     createRule<string>({
            //         name: 'productId',
            //         schema: yupId
            //     })
            // ]
        },
        name: {
            init: '',
            rules: [
                createRule<string>({
                    name: 'productName',
                    schema: yupCompanyName
                })
            ]
        },
        brand: {
            init: '',
            rules: [
                createRule<string>({
                    name: 'brandName',
                    schema: yupCompanyName
                })
            ]
        },
        publicId: {
            init: ''
            // rules: [
            //     createRule<string>({
            //         name: 'productCategory',
            //         schema: yupDefault
            //     })
            // ]
        },
        url: {
            init: '',
            rules: [
                createRule<string>({
                    name: 'productUrl',
                    schema: yupUrl
                })
            ]
        },
        imageUrl: {
            init: '',
            rules: [
                createRule<string>({
                    name: 'thumbnailImage',
                    schema: yupDefault
                })
            ]
        }
    },
    validateOn: ['change', 'blur', 'submit']
});

//using form for different events
const editSubmit = createEvent();
const addSubmit = createEvent();

//form will submit by triggered events
forward({ from: [addSubmit, editSubmit], to: productForm.submit });

//using endpoint for submit
sample({
    source: productForm.$values,
    clock: addSubmit,
    target: productsEffects.createProduct,
    fn: ({ name, brand, imageUrl, url, publicId }) => ({ name, brand, imageUrl, url, publicId })
});

//using endpoint for submit
sample({
    source: productForm.$values,
    clock: editSubmit,
    target: productsEffects.updateProduct
    // fn: values => ({ ...values })
});

//reset form
forward({
    from: [productsEffects.createProduct.doneData, productsEffects.updateProduct.doneData],
    to: channelForm.resetValues
});

// Set form when get data from endpoint
forward({
    from: productsEffects.getItemById.doneData,
    to: productForm.setForm
});

export const productFormEvents = { editSubmit, addSubmit };
