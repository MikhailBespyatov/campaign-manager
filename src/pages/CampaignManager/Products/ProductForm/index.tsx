import React, { useEffect } from 'react';
import { useForm } from 'effector-forms';
import { forms } from 'stores/forms';
import { useStore } from 'effector-react';
import { themeStores } from 'stores/theme';
import { useHistory, useLocation, useParams } from 'react-router';
import { routes } from 'constants/routes';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { TitleFormSpan } from 'components/common/typography/TitleFormSpan';
import { FlexGrow, Section } from 'components/grid/wrappers/FlexWrapper';
import { inputHalfHorizontalMargin } from 'pages/CampaignManager/Channels/ChannelForm/constants';
import { FormTextInput } from 'components/common/inputs/NewDesign/TextInput';
import { productInputMarginBottom } from 'pages/CampaignManager/Products/ProductForm/constants';
import { ImageInput } from 'components/common/inputs/ImageInput';
import { getFlexBasisPercent } from 'utils/usefulFunctions';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { red } from 'constants/styles';
import { modalEvents } from 'stores/modal';
import { productsEffects } from 'stores/products';

const { name, brand, publicId, url } = forms.productForm.fields;

export interface ProductFormProps {}

export const ProductForm = () => {
    const history = useHistory();
    const { fields, reset } = useForm(forms.productForm);
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const isEditPage = useLocation().pathname !== globalPrefixUrl + routes.campaignManager.products.create;
    const { productId } = useParams();
    const flexBasisInput = getFlexBasisPercent(2);

    // const onChangeProductName = (e: ChangeEvent<HTMLInputElement>) => fields.productName.onChange(e.target.value);
    // const onChangeBrandName = (e: ChangeEvent<HTMLInputElement>) => fields.brandName.onChange(e.target.value);
    // const onChangeProductCategory = (e: ChangeEvent<HTMLInputElement>) =>
    //     fields.productCategory.onChange(e.target.value);
    // const onChangeProductId = (e: ChangeEvent<HTMLInputElement>) => fields.productId.onChange(e.target.value);
    // const onChangeProductURL = (e: ChangeEvent<HTMLInputElement>) => fields.productUrl.onChange(e.target.value);
    const onChangeThumbnailImage = (url: string) => fields.imageUrl.onChange(url);

    const onClickRemoveButton = () => {
        productsEffects.removeProduct(productId);
        history.push(globalPrefixUrl + routes.campaignManager.products.index);
        modalEvents.closeAsyncModal();
        reset();
    };

    const OnClickConfirmationModal = () => {
        modalEvents.openAsyncModal({
            title: 'Delete Product',
            content: 'Do you really want delete product?',
            onOk: onClickRemoveButton
        });
    };

    //Mock
    useEffect(() => {
        isEditPage && productsEffects.getItemById(productId);
        reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ContentWrapper padding="40px 80px 75px" width="100%">
            <Section marginBottom="40px">
                <TitleFormSpan>{isEditPage ? 'Edit' : 'Add'} product</TitleFormSpan>
            </Section>
            <Section marginBottom="42px">
                <ImageInput
                    description={`${isEditPage ? 'Edit' : 'Add'} product thumbnail image here`}
                    label="Thumbnail Image"
                    value={fields.imageUrl.value}
                    onChange={onChangeThumbnailImage}
                />
            </Section>
            <Section marginBottom={productInputMarginBottom}>
                <FlexGrow flexBasis={flexBasisInput}>
                    <ContentWrapper paddingRight={inputHalfHorizontalMargin} width="100%">
                        <FormTextInput
                            required
                            field={name}
                            label="Product Name"
                            placeholder="Type product name here..."
                        />
                    </ContentWrapper>
                </FlexGrow>
                <FlexGrow flexBasis={flexBasisInput}>
                    <ContentWrapper paddingLeft={inputHalfHorizontalMargin} width="100%">
                        <FormTextInput
                            required
                            field={brand}
                            label="Brand Name"
                            placeholder="Type brand name here..."
                        />
                    </ContentWrapper>
                </FlexGrow>
            </Section>
            <Section marginBottom={productInputMarginBottom}>
                <FormTextInput field={publicId} label="Public ID" placeholder="Type public id here..." />
                {/*{isEditPage && (*/}
                {/*    <FlexGrow flexBasis={flexBasisInput}>*/}
                {/*        <ContentWrapper paddingLeft={inputHalfHorizontalMargin} width="100%">*/}
                {/*            <FormTextInput*/}
                {/*                disabled*/}
                {/*                field={id}*/}
                {/*                label="Product ID"*/}
                {/*                placeholder="Type product ID here..."*/}
                {/*            />*/}
                {/*        </ContentWrapper>*/}
                {/*    </FlexGrow>*/}
                {/*)}*/}
            </Section>
            <Section>
                <FormTextInput required field={url} label="Product URL" placeholder="Type product URL here..." />
            </Section>
            {isEditPage && (
                <Section marginTop="50px">
                    <ManualRoundedButton
                        background="#FFEEEE"
                        borderRadius="8px"
                        height="48px"
                        mainColor={red}
                        width="223px"
                        onClick={OnClickConfirmationModal}
                    >
                        REMOVE PRODUCT?
                    </ManualRoundedButton>
                </Section>
            )}
        </ContentWrapper>
    );
};
