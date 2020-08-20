import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Form } from 'react-final-form';
import backgroundImage from 'assets/img/organization-background.jpg';
import organizationLogo from 'assets/img/organization-logo.png';
import PrimaryButton from 'components/ui/buttons/PrimaryButton';
import classes from 'modules/Auth/components/CampaignAuthForm/CampaignAuhForm.module.scss';


const CampaignAuthForm = (
  {
    children,
    formSubtitle,
    initialValues,
    validate,
    onSubmit,
    submitBtnText,
  },
) => (
  <div className="flex-fill d-flex flex-column position-relative">
    <div className="w-100 h-100 position-absolute">
      <img className="w-100 h-100 object-fit-cover" src={backgroundImage} alt="" />
    </div>
    <div className={`w-100 h-100 flex-fill d-flex flex-column justify-content-center align-items-center p-3 ${classes.pageOverlay}`}>
      <div className={clsx(classes.loginForm, 'd-flex flex-column align-items-center p-5 mb-2')}>
        <div className={`${classes.organisationLogo} mb-5`}>
          <img className="w-100 h-100 object-fit-cover" src={organizationLogo} alt="" />
        </div>
        <h1 className="mb-2">Hello @adidas</h1>
        <p className={`m-0 mb-5 text-center font-semi-bold ${classes.formSubtitle}`}>{formSubtitle}</p>
        <Form
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate className="w-100 px-1">
              {children}
              <div className="d-flex justify-content-center">
                <div className={`${classes.submitBtnWrapper} py-5`}>
                  <PrimaryButton>
                    {submitBtnText}
                  </PrimaryButton>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  </div>
);

CampaignAuthForm.propTypes = {
  children: PropTypes.node.isRequired,
  formSubtitle: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({}),
  validate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitBtnText: PropTypes.string.isRequired,
};

CampaignAuthForm.defaultProps = {
  initialValues: undefined,
};

export default CampaignAuthForm;
