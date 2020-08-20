import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'reactstrap/es/Modal';
import ModalBody from 'reactstrap/es/ModalBody';
import PrimaryButton from 'components/ui/buttons/PrimaryButton';
import classes from 'modules/Admin/components/modals/modals.module.scss';
import { Field, Form } from 'react-final-form';
import TextInputWrapper from 'components/forms/finalFormWrappers/TextInputWrapper';
import UserPermissionRadioWrapper from 'components/forms/finalFormWrappers/UserPermissionRadioWrapper';


const AddUserModal = (
  {
    isOpen,
    onClose,
    validate,
    onAddUser,
  },
) => (
  <Modal
    isOpen={isOpen}
    toggle={onClose}
    centered
    contentClassName={`${classes.root} p-4`}
  >
    <ModalBody className="p-0">
      <h2 className="text-center mb-4">Add user</h2>
      <Form
        initialValues={{ permission: '2' }}
        validate={validate}
        onSubmit={onAddUser}
        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            noValidate
          >
            <Field
              name="firstName"
              label="User's First Name"
              component={TextInputWrapper}
            />
            <Field
              name="lastName"
              label="User's Family Name"
              component={TextInputWrapper}
            />
            <Field
              name="email"
              label="User's Mail"
              type="email"
              component={TextInputWrapper}
            />
            <Field
              name="permission"
              label="Administrator"
              component={UserPermissionRadioWrapper}
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

AddUserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  onAddUser: PropTypes.func.isRequired,
};

export default AddUserModal;
