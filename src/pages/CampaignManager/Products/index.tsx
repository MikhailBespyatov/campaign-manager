import React, { useEffect } from 'react';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { FlexGrow, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { TagFilter } from 'components/filters/TagFilter';
import { AddButton } from 'components/common/buttons/NewDesign/AddButton';
import { useHistory } from 'react-router';
import { useStore } from 'effector-react';
import { themeStores } from 'stores/theme';
import { product, productsEdit, routes } from 'constants/routes';
import { Select } from 'components/common/inputs/Select';
import {
    emptyProductSubtitle,
    emptyProductTitle,
    filtersMarginRight,
    moreButtonIconDiameter,
    productParameters,
    productsContentPadding,
    productsSelectorMock
} from 'pages/CampaignManager/Products/constants';
import { PaginationLayout } from 'components/Layouts/PaginationLayout';
import { Table } from 'components/common/tables/NewDesign/Table';
import { editButtonDiameter } from 'pages/CampaignManager/Channels/constants';
import { DataTable } from 'types';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import {
    channelLogoDiameter,
    copyButtonIconDiameter
} from 'pages/CampaignManager/Campaign/Create/Steps/Channels/constants';
import defaultChannelImg from 'assets/img/wom_logo.svg';
import { ChannelNameSpan } from 'pages/CampaignManager/Campaign/Create/Steps/Channels/styles';
import { ImgButton } from 'components/common/buttons/ImgButton';
import { blue5 } from 'constants/styles';
import editButtonIcon from 'assets/img/edit_icon.svg';
import moreButtonIcon from 'assets/img/gray_arrow.svg';
import { EmptyLayout } from 'components/Layouts/EmptyLayout';
import { CopyableField } from 'components/common/features/CopyableField';
import { OverflowAutoLayout } from 'components/Layouts';
import { productsEffects, productsEvents, productsStores } from 'stores/products';
import { Loader } from 'components/common/blocks/Loader';

const { setIsFirstToFalse, invokeGetProducts, updateValues } = productsEvents;

export const Products = () => {
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const { items, totalRecords } = useStore(productsStores.items);
    const isFirst = useStore(productsStores.isFirst);
    const { limit, pageIndex } = useStore(productsStores.values);
    const loading = useStore(productsEffects.getItems.pending);

    const onClickAddButton = () => history.push(globalPrefixUrl + routes.campaignManager.products.create);
    const onClickEditButton = (id: string) => () => history.push(globalPrefixUrl + productsEdit + `/${id}`);
    const onClickMoreButton = (id: string) => () => history.push(globalPrefixUrl + product + `/${id}`);

    //Mock
    // const products = productsMock;
    const productViewerLink = 'https://something.yeay.com/?merchantid=22&channelid&channelid';
    // const products: typeof productsMock = [];

    const dataTable: DataTable[] | undefined = items?.map(({ id = '', name, imageUrl, brand }) => ({
        cells: [
            <Row key={id} alignCenter>
                <MarginWrapper marginLeft="8px" marginRight="17px">
                    <CustomImg
                        height={channelLogoDiameter}
                        src={imageUrl || defaultChannelImg}
                        width={channelLogoDiameter}
                    />
                </MarginWrapper>
                <ChannelNameSpan>{name}</ChannelNameSpan>
            </Row>,
            <ChannelNameSpan key={id}>{brand}</ChannelNameSpan>,
            <CopyableField key={id} copyData={productViewerLink} />,
            <ImgButton
                key={id}
                backgroundColor={blue5}
                height={editButtonDiameter}
                width={editButtonDiameter}
                onClick={onClickEditButton(id)}
            >
                <CustomImg height={copyButtonIconDiameter} src={editButtonIcon} width={copyButtonIconDiameter} />
            </ImgButton>,
            <ImgButton key={id} backgroundColor={blue5} height="39px" width="36px" onClick={onClickMoreButton(id)}>
                <CustomImg height={moreButtonIconDiameter} src={moreButtonIcon} width={moreButtonIconDiameter} />
            </ImgButton>
        ],
        alignment: ['start', ...new Array(5).fill('center')]
    }));
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
            invokeGetProducts();
            setIsFirstToFalse();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CampaignManagerLayout>
            <Section marginBottom="8px">
                <ContentWrapper padding={productsContentPadding} width="100%">
                    <Row noWrap>
                        <FlexGrow marginRight={filtersMarginRight}>
                            <TagFilter
                                defaultChecked
                                tagsValues={['test']}
                                onChange={(checked: boolean, values: string[]) => {}}
                            />
                        </FlexGrow>
                        <Row marginRight={filtersMarginRight}>
                            <Select height="57px" values={productsSelectorMock} width="190px" />
                        </Row>
                        <AddButton onClick={onClickAddButton}>Add New</AddButton>
                    </Row>
                </ContentWrapper>
            </Section>
            <Section>
                <ContentWrapper padding={productsContentPadding} width="100%">
                    {loading ? (
                        <Loader />
                    ) : !items?.length ? (
                        <EmptyLayout
                            subtitle={emptyProductSubtitle}
                            title={emptyProductTitle}
                            onClickAddButton={onClickAddButton}
                        />
                    ) : (
                        <PaginationLayout
                            limit={limit}
                            pageIndex={pageIndex}
                            totalRecords={totalRecords}
                            onPaginationChange={onPaginationChange}
                            onSizeChange={onSizeChange}
                        >
                            <OverflowAutoLayout>
                                <Table columnSizes={[2, 2, 5, 1, 1]} columns={productParameters} data={dataTable} />
                            </OverflowAutoLayout>
                        </PaginationLayout>
                    )}
                </ContentWrapper>
            </Section>
        </CampaignManagerLayout>
    );
};