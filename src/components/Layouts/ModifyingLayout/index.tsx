import React, { FC } from 'react';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { SimpleButton } from 'components/common/buttons/SimpleButton';
import { primaryColor, primaryMargin, white } from 'constants/styles';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { IsValid, Noop } from 'types';
import { Noop as NoopClick } from 'constants/global';
import { useHistory, useLocation } from 'react-router';

export interface ModifyingLayoutProps extends IsValid {
    onClickAction?: Noop;
    withoutAction?: boolean;
}

export const ModifyingLayout: FC<ModifyingLayoutProps> = ({
    isValid,
    withoutAction,
    onClickAction = NoopClick,
    children
}) => {
    const history = useHistory();
    const { pathname } = useLocation();

    const isEditPage = pathname.indexOf('edit') !== -1;

    const onClickBackButton = () => history.goBack();
    const onClickAddButton = () => onClickAction();

    return (
        <>
            <Section marginBottom={primaryMargin}>
                <ContentWrapper padding="18px 40px" width="100%">
                    <Section justifyBetween>
                        <Row>
                            <SimpleButton backgroundColor={white} color={primaryColor} onClick={onClickBackButton}>
                                BACK
                            </SimpleButton>
                        </Row>
                        {!withoutAction && (
                            <ManualRoundedButton
                                disabled={!isValid}
                                height="29px"
                                minWidth="97px"
                                onClick={onClickAddButton}
                            >
                                {isEditPage ? 'Edit' : 'Add'}
                            </ManualRoundedButton>
                        )}
                    </Section>
                </ContentWrapper>
            </Section>
            <Section>{children}</Section>
        </>
    );
};
