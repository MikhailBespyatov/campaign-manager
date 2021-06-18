import successImg from 'assets/img/big_success.svg';
import womLogo from 'assets/img/wom_logo.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { defaultFontSize } from 'constants/defaults';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { onSubmit, successImgDiameter, womImgHeight, womImgWidth } from 'pages/SignUp/CreateWallet/Success/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';
import { currencyToText } from 'utils/usefulFunctions';

export const Success = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Form src={womLogo} subtitle="You have successfully purchased WOM." title="Success!" onSubmit={onSubmit}>
                <Row marginBottom="32px" marginTop="34px">
                    <CustomImg height={successImgDiameter} src={successImg} width={successImgDiameter} />
                </Row>
                <Row alignCenter>
                    <Column marginRight="15px">
                        <Span fontSize="40px" fontWeight="bold" lineHeight="48px">
                            500.00
                        </Span>
                    </Column>
                    <CustomImg height={womImgHeight} src={womLogo} width={womImgWidth} />
                </Row>
                <Row marginBottom="45px">
                    <Span fontSize={defaultFontSize} fontWeight="500" letterSpacing="0.0950226px" lineHeight="17px">
                        {currencyToText(171717)}
                    </Span>
                </Row>
                <Row marginBottom="62px">
                    <Span alignCenter fontSize="16px" lineHeight="24px">
                        Lorem ipsum dolor sit amet consectetur adipisicingdi, at veritatis nisi numquam aut maxime
                        similpedit, nostrum quibusdam. Iusto?
                    </Span>
                </Row>
                <Button background={blue} disabled={loading}>
                    {loading ? <Loader /> : 'GO TO CAMPAIGN MANAGER'}
                </Button>
            </Form>
        </AuthLayout>
    );
};
