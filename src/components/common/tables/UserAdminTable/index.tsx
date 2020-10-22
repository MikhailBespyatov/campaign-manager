import deleteImg from 'assets/img/delete.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Loader } from 'components/common/Loader';
import { Table } from 'components/common/tables/Table';
import {
    companyImgBorderRadius,
    companyImgDiameter,
    deleteImgDiameter,
    tableMargin
} from 'components/common/tables/UserAdminTable/constants';
import {
    LegendaryTableColumn,
    LegendaryTableRow,
    TableColumn,
    TableRow
} from 'components/common/tables/UserAdminTable/styles';
import { Span } from 'components/common/typography/Span';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { noContentMessage } from 'constants/messages';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { themeStores } from 'stores/theme';
import { userStores } from 'stores/user';
import { userAdminEffects, userAdminStores } from 'stores/userAdmin';
import { retrieveRoleAndConvert } from 'utils/usefulFunctions';

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

const LegendaryItem = () => (
    // const [checked, setChecked] = useState(false);

    // const onChange = (checked: boolean) => setChecked(checked);

    <LegendaryTableRow>
        <LegendaryTableColumn>
            <Row alignCenter noWrap marginBottom="0">
                {/* <Column marginRight={tableMargin}>
                        <Checkbox onChange={onChange} />
                    </Column> */}
                {/* <Column marginRight={tableMargin}> */}
                <LegendaryTableSpan>Company</LegendaryTableSpan>
                {/* </Column>
                <CustomImg height={arrowImgHeight} src={arrowImg} width={arrowImgWidth} /> */}
            </Row>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <Row alignCenter noWrap marginBottom="0">
                {/* <Column marginRight={tableMargin}> */}
                <LegendaryTableSpan>Email</LegendaryTableSpan>
                {/* </Column>
                <CustomImg height={arrowImgHeight} src={arrowImg} width={arrowImgWidth} /> */}
            </Row>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <LegendaryTableSpan>Username</LegendaryTableSpan>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <LegendaryTableSpan>Role</LegendaryTableSpan>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <LegendaryTableSpan>Actions</LegendaryTableSpan>
        </LegendaryTableColumn>
    </LegendaryTableRow>
);
const Item = ({ userId, email, roles, username }: WOM.GetUserResponse) => {
    //const globalPrefix = useStore(themeStores.globalPrefix);
    const { secondaryLogo } = useStore(themeStores.theme);
    const { user } = useStore(userStores.user);
    const loading = useStore(userAdminStores.loading);

    // const [checked, setChecked] = useState(false);

    // const onChange = (checked: boolean) => setChecked(checked);

    const removeHandler = () => userAdminEffects.removeItemById(userId);

    return (
        <TableRow>
            <TableColumn>
                <Row alignCenter noWrap marginBottom="0">
                    {/* <Column marginRight={tableMargin}>
                        <Checkbox onChange={onChange} />
                    </Column> */}
                    <Column marginRight={tableMargin}>
                        <CustomImg
                            borderRadius={companyImgBorderRadius}
                            height={companyImgDiameter}
                            src={secondaryLogo}
                            //width={companyImgDiameter}
                        />
                    </Column>
                    {/* <TableSpan>{globalPrefix}</TableSpan> */}
                </Row>
            </TableColumn>
            <TableColumn>
                <TableSpan>{email}</TableSpan>
            </TableColumn>
            <TableColumn>
                <TableSpan>{username || noContentMessage}</TableSpan>
            </TableColumn>
            <TableColumn>
                <TableSpan>{retrieveRoleAndConvert(roles || [])}</TableSpan>
            </TableColumn>
            {/* <TableColumn>
                <RoleSelect reverse={checked} values={selectTestArray} />
            </TableColumn> */}
            <TableColumn>
                <Row alignCenter noWrap marginBottom="0">
                    {/* <Column marginRight={tableMargin}>
                        <RoundedButton>RESET PASSWORD</RoundedButton>
                    </Column> */}
                    {user?.userId !== userId &&
                        (loading ? (
                            <Loader />
                        ) : (
                            <CustomImg
                                pointer
                                height={deleteImgDiameter}
                                src={deleteImg}
                                width={deleteImgDiameter}
                                onClick={removeHandler}
                            />
                        ))}
                </Row>
            </TableColumn>
        </TableRow>
    );
};

export const UserAdminTable = ({ items }: WOM.OrganizationQueryUsersResponse) => (
    // <Table border={tableBorder} borderCollapse="collapse" borderRadius={tableRowBorderRadius}>
    <Table>
        <LegendaryItem />
        {items?.map(i => (
            <Item key={i.userId} {...i} />
        ))}
    </Table>
);
