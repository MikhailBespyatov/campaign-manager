import editButtonIcon from 'assets/img/edit_icon.svg';
import moreButtonIcon from 'assets/img/gray_arrow.svg';
import WOMLogo from 'assets/img/wom_logo.svg';
import { ImgButton } from 'components/common/buttons/ImgButton';
import { AddButton } from 'components/common/buttons/NewDesign/AddButton';
import { CopyableField } from 'components/common/features/CopyableField';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Table } from 'components/common/tables/NewDesign/Table';
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

    const onClickAddButton = () => history.push(globalPrefixUrl + routes.campaignManager.products.create);
    const onClickEditButton = (id: string) => () => history.push(globalPrefixUrl + productsEdit + `/${id}`);
    const onClickMoreButton = (id: string) => () => history.push(globalPrefixUrl + product + `/${id}`);

    //Mock
    // const products = productsMock;
    // const productViewerLink = 'https://something.yeay.com/?merchantid=22&channelid&channelid';
    // const products: typeof productsMock = [];

    const dataTable: DataTable[] | undefined = items?.map(
        ({ id = '', name, imageUrl /*, publicId = '', */ /*brand*/ }) => ({
            cells: [
                <Row key={id} alignCenter noWrap>
                    <MarginWrapper marginLeft="8px" marginRight="17px">
                        <ProductThumbnail>
                            <CustomImg src={imageUrl || WOMLogo} />
                        </ProductThumbnail>
                    </MarginWrapper>
                    <ChannelNameSpan>{name}</ChannelNameSpan>
                </Row>,
                // <ChannelNameSpan key={id}>{brand}</ChannelNameSpan>,
                // TODO change mock link to product viewer link
                <Row key={id}>
                    <CopyableField subject="https://something.yeay.com/?merchantid=22&channelid..." />
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
        })
    );
    //
    // const dataTable: DataTable[] = products.map(({ productName, channelName, productViewerLink }) => ({
    //     cells: [
    //         <Row key={productName} alignCenter>
    //             <MarginWrapper marginLeft="8px" marginRight="17px">
    //                 <CustomImg height={channelLogoDiameter} src={mockChannelImg} width={channelLogoDiameter} />
    //             </MarginWrapper>
    //             <ChannelNameSpan>{productName}</ChannelNameSpan>
    //         </Row>,
    //         <ChannelNameSpan key={channelName}>{channelName}</ChannelNameSpan>,
    //         <CopyableField key={productName} copyData={productViewerLink} />,
    //         <ImgButton
    //             key={productName}
    //             backgroundColor={blue5}
    //             height={editButtonDiameter}
    //             width={editButtonDiameter}
    //             onClick={onClickEditButton(productName)}
    //         >
    //             <CustomImg height={copyButtonIconDiameter} src={editButtonIcon} width={copyButtonIconDiameter} />
    //         </ImgButton>,
    //         <ImgButton
    //             key={productName}
    //             backgroundColor={blue5}
    //             height="39px"
    //             width="36px"
    //             onClick={onClickMoreButton(productName)}
    //         >
    //             <CustomImg height={moreButtonIconDiameter} src={moreButtonIcon} width={moreButtonIconDiameter} />
    //         </ImgButton>
    //     ],
    //     alignment: ['start', ...new Array(5).fill('center')]
    // }));
    //
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
            //invokeGetProducts();
            getItems({ organizationId, ...defaultProductsValues });
            setIsFirstToFalse();
        } else {
            getItems({ organizationId, pageIndex, limit, returnQueryCount: true });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CampaignManagerLayout>
            <Section alignCenter noWrap marginBottom={primaryMargin}>
                {/*<FlexGrow marginRight={filtersMarginRight}>*/}
                {/*    <TagFilter*/}
                {/*        defaultChecked*/}
                {/*        tagsValues={['test']}*/}
                {/*        onChange={(checked: boolean, values: string[]) => {}}*/}
                {/*    />*/}
                {/*</FlexGrow>*/}
                {/*<Row marginRight={filtersMarginRight}>*/}
                {/*    <Select height="57px" values={productsSelectorMock} width="190px" />*/}
                {/*</Row>*/}

                {/* <MarginWrapper marginRight="10px">
                    <Search />
                    </MarginWrapper> */}
                <AddButton onClick={onClickAddButton}>Add Product</AddButton>
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
