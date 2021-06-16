import deleteImg from 'assets/img/remove_action.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
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
import { Loader } from 'components/dynamic/Loader';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { noContentMessage } from 'constants/messages';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { themeStores } from 'stores/theme';
import { userStores } from 'stores/user';
import { userAdminEffects } from 'stores/userAdmin';
import { usersStores } from 'stores/users';
import Swal from 'sweetalert2';
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
            <Row alignCenter justifyCenter noWrap marginBottom="0">
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
            <Row alignCenter justifyCenter noWrap marginBottom="0">
                {/* <Column marginRight={tableMargin}> */}
                <LegendaryTableSpan>Email</LegendaryTableSpan>
                {/* </Column>
                <CustomImg height={arrowImgHeight} src={arrowImg} width={arrowImgWidth} /> */}
            </Row>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <Row alignCenter justifyCenter noWrap marginBottom="0">
                <LegendaryTableSpan>Username</LegendaryTableSpan>
            </Row>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <Row alignCenter justifyCenter noWrap marginBottom="0">
                <LegendaryTableSpan>Role</LegendaryTableSpan>
            </Row>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <Row alignCenter justifyCenter noWrap marginBottom="0">
                <LegendaryTableSpan>Actions</LegendaryTableSpan>
            </Row>
        </LegendaryTableColumn>
    </LegendaryTableRow>
);
const Item = ({ userId, email, roles, username }: WOM.GetUserResponse) => {
    //const globalPrefix = useStore(themeStores.globalPrefix);
    const { userTableLogo } = useStore(themeStores.theme);
    const { user } = useStore(userStores.user);
    const loading = useStore(usersStores.loading);

    // const [checked, setChecked] = useState(false);

    // const onChange = (checked: boolean) => setChecked(checked);

    const removeHandler = () =>
        Swal.fire({
            title: 'Are you sure you want to delete a user ' + username,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            showLoaderOnConfirm: true,
            preConfirm: () =>
                userAdminEffects.removeItemById(userId).catch(error => {
                    Swal.showValidationMessage(`Request failed: ${error}`);
                }),
            allowOutsideClick: () => !Swal.isLoading()
        }).then(result => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: `A user ${username} deleted`
                });
            }
        });

    return (
        <TableRow>
            <TableColumn>
                <Row alignCenter justifyCenter noWrap marginBottom="0">
                    {/* <Column marginRight={tableMargin}>
                        <Checkbox onChange={onChange} />
                    </Column> */}
                    <Column marginRight={tableMargin}>
                        <CustomImg
                            borderRadius={companyImgBorderRadius}
                            height={companyImgDiameter}
                            src={userTableLogo}
                            //width={companyImgDiameter}
                        />
                    </Column>
                    {/* <TableSpan>{globalPrefix}</TableSpan> */}
                </Row>
            </TableColumn>
            <TableColumn>
                <Row alignCenter justifyCenter noWrap marginBottom="0">
                    <TableSpan>{email}</TableSpan>
                </Row>
            </TableColumn>
            <TableColumn>
                <Row alignCenter justifyCenter noWrap marginBottom="0">
                    <TableSpan>{username || noContentMessage}</TableSpan>
                </Row>
            </TableColumn>
            <TableColumn>
                <Row alignCenter justifyCenter noWrap marginBottom="0">
                    <TableSpan>{retrieveRoleAndConvert(roles || [])}</TableSpan>
                </Row>
            </TableColumn>
            {/* <TableColumn>
                <RoleSelect reverse={checked} values={selectTestArray} />
            </TableColumn> */}
            <TableColumn>
                <Row alignCenter justifyCenter noWrap marginBottom="0">
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
