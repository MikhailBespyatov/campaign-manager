import backImg from 'assets/img/back_arrow.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { MainLayout } from 'components/Layouts/MainLayout';
import { backImgDiameter } from 'components/Layouts/UserAdminLayout/constants';
import { routes } from 'constants/routes';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { userStores } from 'stores/user';

export const UserAdminLayout: FC = ({ children }) => {
    const history = useHistory();
    const { access } = useStore(userStores.auth);

    const onClick = () => history.push(routes.campaignManager.discover.index);

    return (
        <MainLayout>
            <Section>
                <Span fontSize="26px" lineHeight="32px">
                    User Admin
                </Span>
            </Section>
            {access === 1 && (
                <Section alignCenter marginBottom="51px">
                    <Column marginRight="15px">
                        <CustomImg
                            pointer
                            height={backImgDiameter}
                            src={backImg}
                            width={backImgDiameter}
                            onClick={onClick}
                        />
                    </Column>
                    <Span color={blue} fontSize="26px" lineHeight="32px">
                        Go to CampaignManager
                    </Span>
                </Section>
            )}
            {children}
        </MainLayout>
    );
};
