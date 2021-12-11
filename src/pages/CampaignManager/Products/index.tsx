import editButtonIcon from 'assets/img/edit_icon.svg';
import moreButtonIcon from 'assets/img/gray_arrow.svg';
import WOMLogo from 'assets/img/wom_logo.svg';
import { ImgButton } from 'components/common/buttons/ImgButton';
import { AddButton } from 'components/common/buttons/NewDesign/AddButton';
import { CopyableField } from 'components/common/features/CopyableField';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Table } from 'components/common/tables/NewDesign/Table';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { OverflowAutoLayout } from 'components/Layouts';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { EmptyLayout } from 'components/Layouts/EmptyLayout';
import { PaginationLayout } from 'components/Layouts/PaginationLayout';
import { defaultProductsValues } from 'constants/defaults/products';
import { product, productsEdit, routes } from 'constants/routes';
import { primaryMargin, white } from 'constants/styles';
import { useStore } from 'effector-react';
import { copyButtonIconDiameter } from 'pages/CampaignManager/Campaign/Create/Steps/Channels/constants';
import { ChannelNameSpan } from 'pages/CampaignManager/Campaign/Create/Steps/Channels/styles';
import { editButtonDiameter } from 'pages/CampaignManager/Channels/constants';
import {
    emptyProductSubtitle,
    emptyProductTitle,
    moreButtonIconHeight,
    moreButtonIconWidth,
    noProductsContentPadding,
    productParameters,
    productsContentPadding
} from 'pages/CampaignManager/Products/constants';
import { ProductThumbnail } from 'pages/CampaignManager/Products/styles';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { organizationsStores } from 'stores/organizations';
import { productsEffects, productsEvents, productsStores } from 'stores/products';
import { themeStores } from 'stores/theme';
import { DataTable } from 'types';
import { getFullScriptStringProductViewer } from 'utils/usefulFunctions';

const { setIsFirstToFalse, /*invokeGetProducts,*/ updateValues } = productsEvents;
const { getItems } = productsEffects;

export const Products = () => {
    const history = useHistory();
    const organizationId = useStore(organizationsStores.organizationId);
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const { items, totalRecords } = useStore(productsStores.items);
    const isFirst = useStore(productsStores.isFirst);
    const { limit, pageIndex } = useStore(productsStores.values);
    const loading = useStore(productsEffects.getItems.pending);
    const contentWrapperPadding = items?.length ? productsContentPadding : noProductsContentPadding;
    const contentWrapperBackground = items?.length ? white : 'transparent';
    const { publicId: organizationPublicId } = useStore(organizationsStores.item);
    const organizationPublicIdString = typeof organizationPublicId === 'string' ? organizationPublicId : '';

    const onClickAddButton = () => history.push(globalPrefixUrl + routes.campaignManager.products.create);
    const onClickEditButton = (id: string) => () => history.push(globalPrefixUrl + productsEdit + `/${id}`);
    const onClickMoreButton = (id: string) => () => window.open(globalPrefixUrl + product + `/${id}`, '_blank');
    const onClickHowItWork = () => history.push(globalPrefixUrl + routes.campaignManager.products.help);

    //Mock
    // const products = productsMock;
    // const productViewerLink = 'https://something.yeay.com/?merchantid=22&channelid&channelid';
    // const products: typeof productsMock = [];

    const dataTable: DataTable[] | undefined = items?.map(({ id = '', name, imageUrl, publicId = '' /*brand*/ }) => ({
        cells: [
            <Row key={id} alignCenter noWrap>
                <MarginWrapper marginLeft="8px" marginRight="17px">
                    <ProductThumbnail>
                        <CustomImg src={imageUrl || WOMLogo} />
                    </ProductThumbnail>
                </MarginWrapper>
                <ChannelNameSpan>{name}</ChannelNameSpan>
            </Row>,
            <Row key={id}>
                <CopyableField
                    data={getFullScriptStringProductViewer(organizationPublicIdString, publicId || '')}
                    subject={`publicId=${publicId}`}
                />
            </Row>,
            <Row key={id} alignCenter>
                <MarginWrapper marginRight="10px">
                    <ImgButton
                        backgroundColor="transparent"
                        height={editButtonDiameter}
                        width={editButtonDiameter}
                        onClick={onClickEditButton(id)}
                    >
                        <CustomImg
                            height={copyButtonIconDiameter}
                            src={editButtonIcon}
                            width={copyButtonIconDiameter}
                        />
                    </ImgButton>
                </MarginWrapper>
                <ImgButton backgroundColor="transparent" height="39px" width="36px" onClick={onClickMoreButton(id)}>
                    <CustomImg height={moreButtonIconHeight} src={moreButtonIcon} width={moreButtonIconWidth} />
                </ImgButton>
            </Row>
        ],
        alignment: ['start', ...new Array(2).fill('center')]
    }));

    const onPaginationChange = (current: number) =>
        updateValues({
            pageIndex: current
        });

    const onSizeChange = (current: number, size: number) =>
        updateValues({
            pageIndex: current,
            limit: size
        });

    useEffect(() => {
        if (isFirst) {
            getItems({ organizationId, ...defaultProductsValues });
            setIsFirstToFalse();
        } else {
            getItems({ organizationId, pageIndex, limit, returnQueryCount: true });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CampaignManagerLayout>
            <Section alignCenter justifyBetween noWrap marginBottom={primaryMargin}>
                <AddButton onClick={onClickAddButton}>Add Product</AddButton>
                <Span pointer uppercase color="#3333FF" textDecoration="underline" onClick={onClickHowItWork}>
                    How it works
                </Span>
            </Section>
            <Section>
                <ContentWrapper backgroundColor={contentWrapperBackground} padding={contentWrapperPadding} width="100%">
                    {loading ? (
                        <Loader />
                    ) : !items?.length ? (
                        <EmptyLayout subtitle={emptyProductSubtitle} title={emptyProductTitle} />
                    ) : (
                        <PaginationLayout
                            limit={limit}
                            pageIndex={pageIndex}
                            totalRecords={totalRecords}
                            onPaginationChange={onPaginationChange}
                            onSizeChange={onSizeChange}
                        >
                            <OverflowAutoLayout>
                                <Table columnSizes={[3, /*2,*/ 5, 1, 1]} columns={productParameters} data={dataTable} />
                            </OverflowAutoLayout>
                        </PaginationLayout>
                    )}
                </ContentWrapper>
            </Section>
        </CampaignManagerLayout>
    );
};
