import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { InviteInput } from 'components/common/inputs/InviteInput';
import { Select } from 'components/common/inputs/Select';
import { UserAdminTable } from 'components/common/tables/UserAdminTable';
import { Span } from 'components/common/TextComponents/Span';
import { Column, Row, Section } from 'components/common/wrappers/FlexWrapper';
import { UserAdminLayout } from 'components/Layouts/UserAdminLayout';
import { headersMarginBottom, testSelectArray } from 'pages/UserAdmin/constants';
import React from 'react';

export const UserAdmin = () => (
    <UserAdminLayout>
        <Section noWrap marginBottom="25px">
            <Column marginRight="111px">
                <Row marginBottom={headersMarginBottom}>
                    <Span fontSize="18px" lineHeight="22px">
                        All (5) | Admin (2) | Users (3)
                    </Span>
                </Row>
                <Row alignCenter marginBottom="0">
                    <Column marginRight={headersMarginBottom}>
                        <Select values={testSelectArray}>Bulk Actions</Select>
                    </Column>
                    <RoundedButton>APPLY</RoundedButton>
                </Row>
            </Column>
            <Column>
                <Row marginBottom={headersMarginBottom}>
                    <Span fontSize="18px" lineHeight="22px">
                        Invite new users
                    </Span>
                </Row>
                <Row alignCenter marginBottom="0">
                    <Column marginRight={headersMarginBottom}>
                        <InviteInput error="" label="" name="email" />
                    </Column>
                    <RoundedButton>SEND INVITE</RoundedButton>
                </Row>
            </Column>
        </Section>
        <UserAdminTable />
    </UserAdminLayout>
);
