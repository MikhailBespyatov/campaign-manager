import noVideosProductViewer from 'assets/img/noVideosProductViewer.png';
import { CopyableField } from 'components/common/features/CopyableField';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';
import { useParams } from 'react-router';
import { campaignContentEvents } from 'stores/campaignContent';
import { channelsEffects, channelsStores } from 'stores/channels';
import { organizationsStores } from 'stores/organizations';
import { getFullScriptStringChannelViewer } from 'utils/usefulFunctions';
import { NoVideosContainer, NoVideosText, ProductViewerWrapper } from '../styles';
import { productContentMarginBottom } from './constants';

interface ParamsProps {
    channelId: string;
}
export const Channel = () => {
    const { channelId } = useParams<ParamsProps>();
    const { name } = useStore(channelsStores.item);

    const { publicId: organizationPublicId } = useStore(organizationsStores.item);

    const organizationPublicIdString = typeof organizationPublicId === 'string' ? organizationPublicId : '';

    useEffect(
        () => {
            channelsEffects.getItemById(channelId).then(({ id }) => {
                if (organizationPublicIdString !== '') {
                    const initData = {
                        merchantId: organizationPublicIdString,
                        selector: '#wom-channel-viewer-plugin',
                        channelId: id,
                        color: '#3333FF',
                        textColor: 'white'
                    };
                    // @ts-ignore
                    if (window.womChannelViewer) {
                        // @ts-ignore
                        window.womChannelViewer.check(initData).then(result => {
                            if (result[0].isSuccess) {
                                // @ts-ignore
                                window.womChannelViewer.init(initData);
                            } else {
                                console.log('no videos');
                            }
                        });
                    } else {
                        return;
                    }
                }
            });
            return () => {
                campaignContentEvents.setDefaultValues();
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [channelId, organizationPublicIdString]
    );

    // useEffect(
    //     () => {
    //         console.log('start', channelId, organizationPublicIdString);

    //         !organizationPublicIdString || !channelId
    //             ? document.body.dispatchEvent(new Event('wom-channel-viewer-init', { bubbles: true }))
    //             : organizationPublicIdString &&
    //               channelId &&
    //               document.addEventListener('wom-channel-viewer-init', async () => {
    //                   console.log('finish', channelId);

    //                   await channelsEffects.getItemById(channelId);
    //                   const initData = {
    //                       merchantId: organizationPublicIdString,
    //                       selector: '#wom-channel-viewer-plugin',
    //                       channelId: channelId,
    //                       color: '#3333FF',
    //                       textColor: 'white'
    //                   };
    //                   // @ts-ignore
    //                   const result = await window.womChannelViewer.check(initData);
    //                   // @ts-ignore
    //                   if (result[0].isSuccess) window.womChannelViewer.init(initData);
    //                   else console.log('no videos');
    //               });
    //     },
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     [channelId, organizationPublicIdString]
    // );

    const docs = [{ uri: require('assets/pdf/WOM_Channel_Viewer.pdf') }];

    return (
        <CampaignManagerLayout>
            <Section marginBottom={productContentMarginBottom}>
                <ProductViewerWrapper height="720px">
                    <MarginWrapper marginBottom="20px" marginTop="10px">
                        <Row alignCenter marginBottom="10px" width="300px">
                            <Span noWrap fontWeight="400" lineHeight="17px">
                                {name}
                            </Span>
                        </Row>
                    </MarginWrapper>
                    <MarginWrapper marginBottom="20px">
                        <MarginWrapper marginBottom="20px">
                            <Row>
                                <CopyableField
                                    data={getFullScriptStringChannelViewer(organizationPublicIdString, channelId)}
                                    maxWidth="300px"
                                    subject={`channelId=${channelId}`}
                                />
                            </Row>
                        </MarginWrapper>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div id="wom-channel-viewer-plugin" style={{ width: '245px', height: '530px' }}>
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
                    {organizationPublicIdString && channelId && (
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
