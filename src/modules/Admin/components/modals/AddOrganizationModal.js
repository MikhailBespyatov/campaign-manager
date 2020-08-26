import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'reactstrap/es/Modal';
import { Field, Form } from 'react-final-form';
import ModalBody from 'reactstrap/es/ModalBody';
import PrimaryButton from 'constants/ui/buttons/PrimaryButton';
import classes from 'modules/Admin/components/modals/modals.module.scss';
import TextInputWrapper from 'components/forms/finalFormWrappers/TextInputWrapper';


const AddOrganizationModal = (
  {
    isOpen,
    onClose,
    validate,
    onAddOrganization,
  },
) => (
  <Modal
    isOpen={isOpen}
    toggle={onClose}
    centered
    contentClassName={`${classes.root} p-4`}
  >
    <ModalBody className="p-0">
      <h2 className="text-center mb-4">Add organization</h2>
      <Form
        validate={validate}
        onSubmit={onAddOrganization}
        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            noValidate
          >
            <Field
              name="companyName"
              label="Company Name"
              component={TextInputWrapper}
            />
            <Field
              name="mandatoryTag"
              label="Mandatory Hashtag"
              maxLength={20}
              component={TextInputWrapper}
            />
            <Field
              name="adminFirstName"
              label="Administrators First Name"
              component={TextInputWrapper}
            />
            <Field
              name="adminLastName"
              label="Administrators Family Name"
              component={TextInputWrapper}
            />
            <Field
              name="adminEmail"
              label="Administrators Mail"
              type="email"
              component={TextInputWrapper}
            />
            <div className="d-flex justify-content-center">
              <div className={`${classes.actionBtnContainer}`}>
                <PrimaryButton>
                  SAVE
                </PrimaryButton>
              </div>
            </div>
          </form>
        )}
      />
    </ModalBody>
  </Modal>
);

AddOrganizationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  onAddOrganization: PropTypes.func.isRequired,
};

export default AddOrganizationModal;
