import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/typography/Span';
import { InviteForm } from 'components/FormComponents/forms/InviteForm';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { UserAdminLayout } from 'components/Layouts/UserAdminLayout';
import { useStore } from 'effector-react';
import { headersMarginBottom } from 'pages/UserAdmin/constants';
import React, { useEffect, useMemo } from 'react';
import { loadingStores } from 'stores/loading';
import { organizationsEffects, organizationsStores } from 'stores/organizations';
import { getOrganizationId } from 'utils/usefulFunctions';

export const UserAdmin = () => {
    const { adminIds, memberIds } = useStore(organizationsStores.item);
    const loading = useStore(loadingStores.loading);

    const organizationId = getOrganizationId();

    const admins = useMemo(() => adminIds?.length || 0, [adminIds]);
    const members = useMemo(() => memberIds?.length || 0, [memberIds]);
    const all = admins + members;

    useEffect(() => {
        organizationsEffects.getItemById(organizationId);
    }, [organizationId]);

    return (
        <UserAdminLayout>
            <Section noWrap marginBottom="25px">
                <Column marginRight="111px">
                    <Row marginBottom={headersMarginBottom}>
                        {loading ? (
                            <Loader />
                        ) : (
                            <Span fontSize="18px" lineHeight="22px">
                                All ({all}) | Admin ({admins}) | Users ({members})
                            </Span>
                        )}
                    </Row>
                    {/* <Row alignCenter marginBottom="0">
                    <Column marginRight={headersMarginBottom}>
                        <Select values={testSelectArray} />
                    </Column>
                    <RoundedButton>APPLY</RoundedButton>
                </Row> */}
                </Column>
            </Section>
            <Section noWrap marginBottom="25px">
                <Column>
                    <Row marginBottom={headersMarginBottom}>
                        <Span fontSize="18px" lineHeight="22px">
                            Invite new users
                        </Span>
                    </Row>
                    <Row alignCenter marginBottom="0">
                        <InviteForm />
                        {/* <Column marginRight={headersMarginBottom}>
                        <InviteInput error="" label="" name="email" />
                    </Column>
                    <RoundedButton>SEND INVITE</RoundedButton> */}
                    </Row>
                </Column>
            </Section>
            {/* <UserAdminTable /> */}
        </UserAdminLayout>
    );
};
