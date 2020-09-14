import companyImg from 'assets/img/adidas.svg';
import deleteImg from 'assets/img/delete.svg';
import arrowImg from 'assets/img/select_arrow_dark.svg';
import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { RoleSelect } from 'components/common/inputs/RoleSelect';
import { testArray } from 'components/common/tables/CampaignTable/constants';
import { Table } from 'components/common/tables/Table';
import {
    arrowImgHeight,
    arrowImgWidth,
    companyImgBorderRadius,
    companyImgDiameter,
    deleteImgDiameter,
    selectTestArray,
    tableMargin
} from 'components/common/tables/UserAdminTable/constants';
import {
    LegendaryTableColumn,
    LegendaryTableRow,
    TableColumn,
    TableRow
} from 'components/common/tables/UserAdminTable/styles';
import { Span } from 'components/common/TextComponents/Span';
import { Column, Row } from 'components/common/wrappers/FlexWrapper';
import { BooleanCheckbox as Checkbox } from 'components/FormComponents/BooleanCheckbox';
import React, { FC, useState } from 'react';

const LegendaryTableSpan: FC = ({ children }) => (
    <Span fontSize="18px" fontWeight="bold" lineHeight="22px">
        {children}
    </Span>
);

const TableSpan: FC = ({ children }) => (
    <Span fontSize="18px" lineHeight="22px">
        {children}
    </Span>
);

const LegendaryItem = () => {
    const [checked, setChecked] = useState(false);

    const onChange = (checked: boolean) => setChecked(checked);

    return (
        <LegendaryTableRow active={checked}>
            <LegendaryTableColumn>
                <Row alignCenter noWrap>
                    <Column marginRight={tableMargin}>
                        <Checkbox onChange={onChange} />
                    </Column>
                    <Column marginRight={tableMargin}>
                        <LegendaryTableSpan>Company Name</LegendaryTableSpan>
                    </Column>
                    <CustomImg height={arrowImgHeight} src={arrowImg} width={arrowImgWidth} />
                </Row>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <Row alignCenter noWrap>
                    <Column marginRight={tableMargin}>
                        <LegendaryTableSpan>Email</LegendaryTableSpan>
                    </Column>
                    <CustomImg height={arrowImgHeight} src={arrowImg} width={arrowImgWidth} />
                </Row>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <LegendaryTableSpan>Role</LegendaryTableSpan>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <LegendaryTableSpan>Actions</LegendaryTableSpan>
            </LegendaryTableColumn>
        </LegendaryTableRow>
    );
};

const Item = () => {
    const [checked, setChecked] = useState(false);

    const onChange = (checked: boolean) => setChecked(checked);

    return (
        <TableRow active={checked}>
            <TableColumn>
                <Row alignCenter noWrap>
                    <Column marginRight={tableMargin}>
                        <Checkbox onChange={onChange} />
                    </Column>
                    <Column marginRight={tableMargin}>
                        <CustomImg
                            borderRadius={companyImgBorderRadius}
                            height={companyImgDiameter}
                            src={companyImg}
                            width={companyImgDiameter}
                        />
                    </Column>
                    <TableSpan>Company Name</TableSpan>
                </Row>
            </TableColumn>
            <TableColumn>
                <TableSpan>SomeEmail@email.email</TableSpan>
            </TableColumn>
            <TableColumn>
                <RoleSelect reverse={checked} values={selectTestArray} />
            </TableColumn>
            <TableColumn>
                <Row alignCenter noWrap>
                    <Column marginRight={tableMargin}>
                        <RoundedButton>RESET PASSWORD</RoundedButton>
                    </Column>
                    <CustomImg pointer height={deleteImgDiameter} src={deleteImg} width={deleteImgDiameter} />
                </Row>
            </TableColumn>
        </TableRow>
    );
};

export const UserAdminTable = () => (
    // <Table border={tableBorder} borderCollapse="collapse" borderRadius={tableRowBorderRadius}>
    <Table>
        <LegendaryItem />
        {testArray.map(i => (
            <Item key={i} />
        ))}
    </Table>
);
