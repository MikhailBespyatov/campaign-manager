import deleteImg from 'assets/img/remove_action.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Table } from 'components/common/tables/Table';
import { deleteImgDiameter } from 'components/common/tables/UserAdminTable/constants';
import {
    LegendaryTableColumn,
    LegendaryTableRow,
    TableColumn,
    TableRow
} from 'components/common/tables/UserAdminTable/styles';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { noContentMessage } from 'constants/messages';
import { formGrey5 } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { message } from 'stores/alerts';
import { modalEvents } from 'stores/modal';
import { userStores } from 'stores/user';
import { userAdminEffects } from 'stores/userAdmin';
import { usersStores } from 'stores/users';
import { retrieveRoleAndConvert } from 'utils/usefulFunctions';

const LegendaryTableSpan: FC = ({ children }) => (
    <Span color={formGrey5} fontSize="12px" fontWeight="400" lineHeight="15px">
        {children}
    </Span>
);

const TableSpan: FC = ({ children }) => (
    <Span fontWeight="400" lineHeight="17px">
        {children}
    </Span>
);

const LegendaryItem = () => (
    // const [checked, setChecked] = useState(false);

    // const onChange = (checked: boolean) => setChecked(checked);

    <LegendaryTableRow>
        {/* <LegendaryTableColumn> */}
        {/* <Row alignCenter noWrap marginBottom="0"> */}
        {/* <Column marginRight={tableMargin}>
                        <Checkbox onChange={onChange} />
                    </Column> */}
        {/* <Column marginRight={tableMargin}> */}
        {/* <LegendaryTableSpan>Company</LegendaryTableSpan> */}
        {/* </Column>
                <CustomImg height={arrowImgHeight} src={arrowImg} width={arrowImgWidth} /> */}
        {/* </Row> */}
        {/* </LegendaryTableColumn> */}
        <LegendaryTableColumn>
            <Row alignCenter noWrap marginBottom="0">
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
    // const { userTableLogo } = useStore(themeStores.theme);
    const { user } = useStore(userStores.user);
    const loading = useStore(usersStores.loading);

    // const [checked, setChecked] = useState(false);

    // const onChange = (checked: boolean) => setChecked(checked);

    const removeHandler = () =>
        modalEvents.openAsyncModal({
            title: 'Are you sure you want to delete a user ' + username,
            content: '',
            closeText: 'No',
            okText: 'Yes',
            onOk: async () => {
                try {
                    await userAdminEffects.removeItemById(userId);
                    await modalEvents.closeAsyncModal();
                } catch (error) {
                    message.error('An error occurred while deleting the user');
                }
            }
        });

    return (
        <TableRow>
            {/* <TableColumn>
                <Row alignCenter noWrap marginBottom="0"> */}
            {/* <Column marginRight={tableMargin}>
                        <Checkbox onChange={onChange} />
                    </Column> */}
            {/* <Column marginRight={tableMargin}>
                        <CustomImg
                            borderRadius={companyImgBorderRadius}
                            height={companyImgDiameter}
                            src={userTableLogo}
                            //width={companyImgDiameter}
                        />
                    </Column> */}
            {/* <TableSpan>{globalPrefix}</TableSpan> */}
            {/* </Row>
            </TableColumn> */}
            <TableColumn>
                <Row alignCenter noWrap marginBottom="0">
                    <TableSpan>{email}</TableSpan>
                    <LegendaryTableSpan>&nbsp;&nbsp;{user?.userId === userId && ' (You)'}</LegendaryTableSpan>
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
