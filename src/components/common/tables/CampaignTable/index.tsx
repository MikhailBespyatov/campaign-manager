import productImg from 'assets/img/product_img.svg';
import removeButtonImg from 'assets/img/remove_button_img.svg';
import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { PercentageGrowth } from 'components/common/features/PercentageGrowth';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import {
    removeButtonImgDiameter,
    tableBorderSpacing,
    tableProductImgDiameter,
    testArray
} from 'components/common/tables/CampaignTable/constants';
import {
    LegendaryTableColumn,
    LegendaryTableRow,
    TableColumn,
    TableRow
} from 'components/common/tables/CampaignTable/styles';
import { Table } from 'components/common/tables/Table';
import { TableSpan } from 'components/common/TextComponents/TableSpan';
import { TableSubSpan } from 'components/common/TextComponents/TableSubSpan';
import { Column, Row } from 'components/common/wrappers/FlexWrapper';
import { TableWrapper } from 'components/common/wrappers/TableWrapper';
import React from 'react';
import { padding } from '../../../../constants';

export const CampaignTable = () => (
    <TableWrapper>
        <Table borderSpacing={tableBorderSpacing}>
            <LegendaryTableRow>
                <LegendaryTableColumn>
                    <TableSpan legendary>Campaign Name</TableSpan>
                </LegendaryTableColumn>
                <LegendaryTableColumn>
                    <TableSpan legendary>product</TableSpan>
                </LegendaryTableColumn>
                <LegendaryTableColumn>
                    <TableSpan legendary>Budget</TableSpan>
                </LegendaryTableColumn>
                <LegendaryTableColumn>
                    <TableSpan legendary>Spend</TableSpan>
                </LegendaryTableColumn>
                <LegendaryTableColumn>
                    <TableSpan legendary>Preview</TableSpan>
                </LegendaryTableColumn>
                <LegendaryTableColumn>
                    <TableSpan legendary>View</TableSpan>
                </LegendaryTableColumn>
                <LegendaryTableColumn>
                    <TableSpan legendary>Engage</TableSpan>
                </LegendaryTableColumn>
                <LegendaryTableColumn>
                    <TableSpan legendary>Click</TableSpan>
                </LegendaryTableColumn>
                <LegendaryTableColumn>
                    <TableSpan legendary>Buy</TableSpan>
                </LegendaryTableColumn>
                <LegendaryTableColumn>
                    <TableSpan legendary></TableSpan>
                </LegendaryTableColumn>
            </LegendaryTableRow>
            {testArray.map(i => (
                <TableRow key={i}>
                    <TableColumn>
                        <TableSpan>New Shoes</TableSpan>
                    </TableColumn>
                    <TableColumn>
                        <TableSpan>
                            <Column>
                                <Row marginBottom="15px">Niterunner</Row>
                                <Row marginBottom="0">
                                    <CustomImg
                                        height={tableProductImgDiameter}
                                        src={productImg}
                                        width={tableProductImgDiameter}
                                    />
                                </Row>
                            </Column>
                        </TableSpan>
                    </TableColumn>
                    <TableColumn>
                        <TableSpan>20000</TableSpan>
                    </TableColumn>
                    <TableColumn>
                        <Column>
                            <Row marginBottom="7px">
                                <TableSpan>10000</TableSpan>
                            </Row>
                            <Row marginBottom="0">
                                <TableSubSpan>50%</TableSubSpan>
                            </Row>
                        </Column>
                    </TableColumn>
                    <TableColumn>
                        <Column>
                            <Row marginBottom="7px">
                                <TableSpan>1m 23</TableSpan>
                            </Row>
                            <Row marginBottom="0">
                                <PercentageGrowth type="success">2</PercentageGrowth>
                            </Row>
                        </Column>
                    </TableColumn>
                    <TableColumn>
                        <Column>
                            <Row noWrap marginBottom="7px">
                                <TableSpan>1m 1</TableSpan>
                            </Row>
                            <Row noWrap marginBottom="0">
                                <Column marginRight="5px">
                                    <TableSubSpan>89%</TableSubSpan>
                                </Column>
                                <PercentageGrowth type="error">3</PercentageGrowth>
                            </Row>
                        </Column>
                    </TableColumn>
                    <TableColumn>
                        <Column>
                            <Row noWrap marginBottom="7px">
                                <TableSpan>1m 1</TableSpan>
                            </Row>
                            <Row noWrap marginBottom="0">
                                <Column marginRight="5px">
                                    <TableSubSpan>89%</TableSubSpan>
                                </Column>
                                <PercentageGrowth type="error">3</PercentageGrowth>
                            </Row>
                        </Column>
                    </TableColumn>
                    <TableColumn>
                        <Column>
                            <Row noWrap marginBottom="7px">
                                <TableSpan>1m 1</TableSpan>
                            </Row>
                            <Row noWrap marginBottom="0">
                                <Column marginRight="5px">
                                    <TableSubSpan>89%</TableSubSpan>
                                </Column>
                                <PercentageGrowth type="error">3</PercentageGrowth>
                            </Row>
                        </Column>
                    </TableColumn>
                    <TableColumn>
                        <Column>
                            <Row noWrap marginBottom="7px">
                                <TableSpan>1m 1</TableSpan>
                            </Row>
                            <Row noWrap marginBottom="0">
                                <Column marginRight="5px">
                                    <TableSubSpan>89%</TableSubSpan>
                                </Column>
                                <PercentageGrowth type="error">3</PercentageGrowth>
                            </Row>
                        </Column>
                    </TableColumn>
                    <TableColumn>
                        <Column>
                            <Row marginBottom={padding}>
                                <RoundedButton
                                    reverse
                                    Img={
                                        <CustomImg
                                            height={removeButtonImgDiameter}
                                            src={removeButtonImg}
                                            width={removeButtonImgDiameter}
                                        />
                                    }
                                >
                                    Remove
                                </RoundedButton>
                            </Row>
                            <Row>
                                <RoundedButton>Details</RoundedButton>
                            </Row>
                        </Column>
                    </TableColumn>
                </TableRow>
            ))}
        </Table>
    </TableWrapper>
);
