import { FormTextInput } from 'components/common/inputs/NewDesign/TextInput';
import { TitleFormSpan } from 'components/common/typography/TitleFormSpan';
import { FlexGrow, Section } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { routes } from 'constants/routes';
import { tertiaryMargin } from 'constants/styles';
import { useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { inputHalfHorizontalMargin } from 'pages/CampaignManager/Channels/ChannelForm/constants';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { forms } from 'stores/forms';
import { productsEffects, productsStores } from 'stores/products';
import { themeStores } from 'stores/theme';
import { getFlexBasisPercent } from 'utils/usefulFunctions';

const { name, brand, publicId, url, imageUrl } = forms.productForm.fields;

export interface ProductFormProps {}
interface ParamsProps {
    productId: string;
}

export const ProductForm = () => {
    const { reset } = useForm(forms.productForm);
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const { imageUrl: imageUrlValue } = useStore(productsStores.item);
    const isEditPage = useLocation().pathname !== globalPrefixUrl + routes.campaignManager.products.create;
    const { productId } = useParams<ParamsProps>();
    const flexBasisInput = getFlexBasisPercent(2);

    // const onChangeProductName = (e: ChangeEvent<HTMLInputElement>) => fields.productName.onChange(e.target.value);
    // const onChangeBrandName = (e: ChangeEvent<HTMLInputElement>) => fields.brandName.onChange(e.target.value);
    // const onChangeProductCategory = (e: ChangeEvent<HTMLInputElement>) =>
    //     fields.productCategory.onChange(e.target.value);
    // const onChangeProductId = (e: ChangeEvent<HTMLInputElement>) => fields.productId.onChange(e.target.value);
    // const onChangeProductURL = (e: ChangeEvent<HTMLInputElement>) => fields.productUrl.onChange(e.target.value);
    // const onChangeThumbnailImage = (url: string) => fields.imageUrl.onChange(url);

    useEffect(() => {
        isEditPage ? productsEffects.getItemById(productId) : productsEffects.resetItem();
        isEditPage && imageUrlValue && imageUrl.set(imageUrlValue);

        reset();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Section marginBottom="24px">
                <TitleFormSpan>{isEditPage ? 'Edit' : 'Add New'} product</TitleFormSpan>
            </Section>

            <Section marginBottom={tertiaryMargin}>
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
            <Section marginBottom={tertiaryMargin}>
                {/* <FlexGrow flexBasis={flexBasisInput}>
                    <ContentWrapper paddingRight={inputHalfHorizontalMargin} width="100%">
                        <FormTextInput
                            disabled
                            // required
                            field={category}
                            label="Product Category"
                            //placeholder="Type product category here..."
                        />
                    </ContentWrapper>
                </FlexGrow> */}
                <FlexGrow flexBasis={flexBasisInput}>
                    <ContentWrapper width="100%">
                        <FormTextInput
                            required
                            field={publicId}
                            label="Product ID"
                            placeholder="Type product ID here..."
                        />
                    </ContentWrapper>
                </FlexGrow>

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
            <Section marginBottom={tertiaryMargin}>
                <FormTextInput required field={url} label="Product URL" placeholder="Paste product URL here..." />
            </Section>
            <Section>
                <FormTextInput required field={imageUrl} label="Image URL" placeholder="Paste image URL here..." />
            </Section>
        </>
    );
};
