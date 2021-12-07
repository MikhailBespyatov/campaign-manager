import history from 'BrowserHistory';
import { routes } from 'constants/routes';
import { createRule, yupCompanyName, yupId, yupProductName, yupString, yupUrl } from 'constants/yupFields';
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
            /* //TODO:  change validation yupCategory  when end point is ready */
            init: '',
            rules: [
                createRule<string>({
                    name: 'category',
                    schema: yupString
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
                    schema: yupUrl
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
            console.log(data);

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

// productForm.fields.category.$value.watch(state => {
//     console.log('category field state', state);
// });

// productForm.fields.imageUrl.$value.watch(state => {
//     console.log('imageUrl field state', state);
// });

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
