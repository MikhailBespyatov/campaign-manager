import noVideosProductViewer from 'assets/img/noVideosProductViewer.png';
import WOMLogo from 'assets/img/sample_logo.png';
import { CopyableField } from 'components/common/features/CopyableField';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { defaultPage } from 'constants/defaults';
import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';
import { useParams } from 'react-router';
import { campaignContentEvents } from 'stores/campaignContent';
import { organizationsStores } from 'stores/organizations';
import { productsEffects, productsEvents, productsStores } from 'stores/products';
import { getFullScriptStringProductViewer } from 'utils/usefulFunctions';
import { NoVideosContainer, NoVideosText, ProductThumbnail, ProductViewerWrapper } from '../styles';
import { productContentMarginBottom } from './constants';

interface ParamsProps {
    productId: string;
}
export const Product = () => {
    const { productId } = useParams<ParamsProps>();
    const { imageUrl, brand, name, publicId } = useStore(productsStores.item);

    const { publicId: organizationPublicId } = useStore(organizationsStores.item);
    const organizationPublicIdString = typeof organizationPublicId === 'string' ? organizationPublicId : '';

    useEffect(
        () => {
            name &&
                brand &&
                campaignContentEvents.updateValues({
                    tagsAny: [name, brand, `${name} ${brand}`],
                    tagsAll: undefined,
                    pageIndex: defaultPage
                });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [name, brand]
    );

    useEffect(
        () => {
            productsEffects.getItemById(productId).then(({ publicId }) => {
                if (organizationPublicIdString !== '') {
                    const initData = {
                        organizationPublicId: organizationPublicIdString,
                        selector: '#wom-viewer-plugin',
                        remoteProductId: publicId,
                        color: '#3333FF',
                        textColor: 'white'
                    };
                    // @ts-ignore
                    window.wom.check(initData).then(result => {
                        if (result[0].isSuccess) {
                            // @ts-ignore
                            window.wom.init(initData);
                        } else {
                            console.log('no videos');
                        }
                    });
                }
            });
            return () => {
                campaignContentEvents.setDefaultValues();
                productsEvents.resetItem();
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [organizationPublicIdString]
    );

    // useEffect(
    //     () => {
    //         console.log('here publicId', publicId);
    //         console.log(organizationPublicIdString);

    //         !organizationPublicIdString || !publicId
    //             ? document.body.dispatchEvent(new Event('wom-viewer-init', { bubbles: true }))
    //             : organizationPublicIdString &&
    //               publicId &&
    //               document.addEventListener('wom-viewer-init', async () => {
    //                   await productsEffects.getItemById(productId);
    //                   console.log('publicId', publicId);
    //                   const initData = {
    //                       organizationPublicId: organizationPublicIdString,
    //                       selector: '#wom-viewer-plugin',
    //                       remoteProductId: publicId,
    //                       color: '#3333FF',
    //                       textColor: 'white'
    //                   };
    //                   // @ts-ignore
    //                   const result = await window.wom.check(initData);
    //                   // @ts-ignore
    //                   if (result[0].isSuccess) window.wom.init(initData);
    //                   else console.log('no videos');
    //               });
    //     },
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     [publicId]
    // );

    const docs = [{ uri: require('assets/pdf/WOM_Product_Viewer.pdf') }];

    return (
        <CampaignManagerLayout>
            <Section marginBottom={productContentMarginBottom}>
                <ProductViewerWrapper height="720px" width="325px">
                    <Section alignCenter noWrap marginBottom="20px" marginTop="10px">
                        <MarginWrapper marginRight="17px">
                            <ProductThumbnail>
                                <CustomImg src={imageUrl || WOMLogo} />
                            </ProductThumbnail>
                        </MarginWrapper>
                        <Row marginBottom="10px" width="200px">
                            <Span noWrap fontWeight="400" lineHeight="17px">
                                {name}
                            </Span>
                        </Row>
                    </Section>
                    <MarginWrapper marginBottom="20px">
                        <Row marginBottom="20px">
                            <CopyableField
                                data={getFullScriptStringProductViewer(organizationPublicIdString, publicId || '')}
                                maxWidth="300px"
                                subject={`publicId=${publicId}`}
                            />
                        </Row>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div id="wom-viewer-plugin" style={{ width: '245px', height: '530px' }}>
                                <NoVideosContainer>
                                    <CustomImg src={noVideosProductViewer} />
                                    <NoVideosText>
                                        <Span alignCenter color="#fff" fontWeight="400" lineHeight="17px">
                                            There are no videos for this product recorded.
                                        </Span>
                                    </NoVideosText>
                                </NoVideosContainer>
                            </div>
                        </div>
                    </MarginWrapper>
                </ProductViewerWrapper>
                <ContentWrapper
                    borderRadius="8px"
                    padding="15px 40px"
                    style={{ height: '720px', width: 'calc(100% - 400px)', maxWidth: '1000px' }}
                >
                    {organizationPublicIdString && publicId && (
                        <DocViewer
                            config={{
                                header: {
                                    disableHeader: true,
                                    disableFileName: true
                                }
                            }}
                            documents={docs}
                            pluginRenderers={DocViewerRenderers}
                        />
                    )}
                </ContentWrapper>
            </Section>
        </CampaignManagerLayout>
    );
};
