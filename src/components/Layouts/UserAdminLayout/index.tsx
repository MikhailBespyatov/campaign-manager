import backImg from 'assets/img/back_arrow.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { Span } from 'components/common/TextComponents/Span';
import { Column, Section } from 'components/common/wrappers/FlexWrapper';
import { MainLayout } from 'components/Layouts/MainLayout';
import { backImgDiameter } from 'components/Layouts/UserAdminLayout/constants';
import React, { FC } from 'react';
import { useHistory } from 'react-router';

export const UserAdminLayout: FC = ({ children }) => {
    const history = useHistory();

    const onClick = () => history.goBack();

    return (
        <MainLayout>
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
                <Span fontSize="26px" lineHeight="32px">
                    User Admin
                </Span>
            </Section>
            {children}
        </MainLayout>
    );
};
