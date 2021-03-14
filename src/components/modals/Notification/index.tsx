// import errorImg from 'assets/error_notification.svg';
// import successImg from 'assets/success.svg';
import { ContentText, StyledNotification, Wrapper } from 'components/modals/Notification/styles';
import { useStore } from 'effector-react';
import React from 'react';
import { alertsStores } from 'stores/alerts';

export const NotificationModal = () => {
    const { type, message, active } = useStore(alertsStores.alertStore);

    return (
        <Wrapper active={active}>
            <StyledNotification active={active}>
                {/* <Column marginRight="26px">
                    {type === 'error' ? (
                        <CustomImg height={successImgDiameter} src={errorImg} width={successImgDiameter} />
                    ) : (
                        <CustomImg height={successImgDiameter} src={successImg} width={successImgDiameter} />
                    )}
                </Column> */}
                <ContentText error={type === 'error'}>{message}</ContentText>
            </StyledNotification>
        </Wrapper>
    );
};
