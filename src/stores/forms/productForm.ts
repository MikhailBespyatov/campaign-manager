import history from 'BrowserHistory';
import { routes } from 'constants/routes';
import { createRule, yupCategory, yupCompanyName, yupId, yupProductName, yupString, yupUrl } from 'constants/yupFields';
import { createEffect, createEvent, createStore, forward } from 'effector';
import { createForm } from 'effector-forms';
import { API } from 'services';
// import { productsEffects } from 'stores/products';
import { loadingEffects } from 'stores/loading';
import { themeStores } from 'stores/theme';

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
                    schema: yupProductName
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
            init: '',
            rules: [
                createRule<string>({
                    name: 'productId',
                    schema: yupId
                })
            ]
        },
        category: {
            /* //TODO:  change to empty string when end point is ready */
            init: 'Cosmetics',
            rules: [
                createRule<string>({
                    name: 'category',
                    schema: yupCategory
                })
            ]
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
                    /* //TODO add validation back to yupUrl if necessary */
                    schema: yupString
                })
            ]
        }
    },
    validateOn: ['change', 'blur', 'submit']
});

//using form for different events
const editSubmit = createEvent();
const addSubmit = createEvent();

const isCreateProduct = createStore<boolean>(false)
    .on(addSubmit, _ => true)
    .on(editSubmit, _ => false);

export const handleProduct = createEffect({
    handler: async (values: WOM.CreateRemoteProductRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const isCreate = isCreateProduct.getState();
            const data = isCreate ? await API.products.createProduct(values) : await API.products.updateProduct(values);

            loadingEffects.updateInitialLoading();
            history.push(themeStores.globalPrefixUrl.getState() + routes.campaignManager.products.index);

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

//form will submit by triggered events
forward({ from: [addSubmit, editSubmit], to: productForm.submit });

forward({ from: productForm.formValidated, to: handleProduct });

// productForm.submit.watch();
// const submitForm = createEvent();
//
// forward({ from: productForm.formValidated, to: submitForm });
// submitForm.watch(res => console.log(res, 'submitForm'));

//using endpoint for submit
// sample({
//     source: productForm.formValidated,
//     clock: addSubmit,
//     target: productsEffects.createProduct,
//     fn: ({ name, brand, imageUrl, url, publicId }) => ({ name, brand, imageUrl, url, publicId })
// });

// addSubmitEvent.watch(res => console.log(res, 'addSubmitEvent'));

//using endpoint for submit
// sample({
//     source: productForm.formValidated,
//     clock: editSubmit,
//     target: productsEffects.updateProduct
//     // fn: values => ({ ...values })
// });

//reset form
forward({
    from: [handleProduct.doneData],
    to: productForm.resetValues
});

export const productFormEvents = { editSubmit, addSubmit };
