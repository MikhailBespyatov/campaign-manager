import { UserAdminTable } from 'components/common/tables/UserAdminTable';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { InviteForm } from 'components/FormComponents/forms/InviteForm';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { useStore } from 'effector-react';
import { headersMarginBottom } from 'pages/UserAdmin/constants';
import React, { useEffect } from 'react';
import { loadingStores } from 'stores/loading';
import { organizationsStores } from 'stores/organizations';
import { usersEffects, usersStores } from 'stores/users';

export const UserAdmin = () => {
    const organizationId = useStore(organizationsStores.organizationId);
    // const { adminIds, memberIds } = useStore(organizationsStores.item);
    const items = useStore(usersStores.items);
    // const loading = useStore(loadingStores.loading);
    const initialLoading = useStore(loadingStores.initialLoading);

    // const admins = useMemo(() => adminIds?.length || 0, [adminIds]);
    // const members = useMemo(() => memberIds?.length || 0, [memberIds]);
    // const all = admins + members;

    useEffect(() => {
        if (organizationId) {
            //organizationsEffects.getItemById(organizationId);
            usersEffects.getOrganizationItemsById(organizationId);
        }
    }, [organizationId]);

    return (
        <CampaignManagerLayout>
            {/*<Section noWrap marginBottom="25px">*/}
            {/*    <Column marginRight="111px">*/}
            {/*        <Row marginBottom={headersMarginBottom}>*/}
            {/*            {loading ? (*/}
            {/*                <Loader />*/}
            {/*            ) : (*/}
            {/*                <Span fontSize="18px" lineHeight="22px">*/}
            {/*                    All ({all}) | Admin ({admins}) | Users ({members})*/}
            {/*                </Span>*/}
            {/*            )}*/}
            {/*        </Row>*/}
            {/*        /!* <Row alignCenter marginBottom="0">*/}
            {/*        <Column marginRight={headersMarginBottom}>*/}
            {/*            <Select values={testSelectArray} />*/}
            {/*        </Column>*/}
            {/*        <RoundedButton>APPLY</RoundedButton>*/}
            {/*    </Row> *!/*/}
            {/*    </Column>*/}
            {/*</Section>*/}
            <Section noWrap marginBottom="40px">
                {/* <ContentWrapper padding="30px 24px" width="100%"> */}
                <Column>
                    <Row marginBottom={headersMarginBottom}>
                        <Span fontWeight="400" lineHeight="17px">
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
                {/* </ContentWrapper> */}
            </Section>
            <Section noWrap>
                <ContentWrapper borderRadius="0px" padding="10px 30px" width="100%">
                    {initialLoading ? <Loader /> : <UserAdminTable {...items} />}
                </ContentWrapper>
            </Section>
        </CampaignManagerLayout>
    );
};
