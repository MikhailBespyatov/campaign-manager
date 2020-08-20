import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'reactstrap/es/Modal';
import ModalBody from 'reactstrap/es/ModalBody';
import TextInput from 'components/forms/inputs/TextInput/TextInput';
import PrimaryButton from 'components/ui/buttons/PrimaryButton';
import TextButton from 'components/ui/buttons/TextButton';
import errorMessages from 'constants/errorMessages';
import classes from 'modules/Admin/components/modals/modals.module.scss';

const validateTag = (tag) => {
  let error;
  if (!tag) {
    error = errorMessages.requiredField;
  } else if (tag.includes(' ') || tag.includes('#') || tag.length > 20) {
    error = errorMessages.tagIsInvalid;
  }
  return error;
};

const AddTagModal = ({ isOpen, onClose, onAddTag }) => {
  const [inputText, setInputText] = React.useState('');
  const [errorText, setErrorText] = React.useState(undefined);

  const onInputChange = React.useCallback(
    ({ target: { value } }) => {
      setInputText(value);
      setErrorText(validateTag(value));
    },
    [],
  );

  const cancel = React.useCallback(
    () => {
      setInputText('');
      onClose();
    },
    [],
  );

  const addTag = React.useCallback(
    () => {
      const error = validateTag(inputText);
      if (error) {
        setErrorText(error);
        return;
      }

      onAddTag(inputText);
      setInputText('');
    },
    [inputText],
  );

  return (
    <Modal
      isOpen={isOpen}
      toggle={onClose}
      centered
      contentClassName={`${classes.root} p-4`}
    >
      <ModalBody className="p-0">
        <h2 className="text-center mb-4">Add hashtag</h2>
        <div className="mb-4">
          <TextInput
            maxLength={20}
            value={inputText}
            onChange={onInputChange}
            helperText={errorText}
            hasError={Boolean(errorText)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <div className={`${classes.actionBtnContainer} mr-4`}>
            <PrimaryButton onClick={addTag} disabled={!inputText || errorText}>
              OK
            </PrimaryButton>
          </div>
          <div className={classes.actionBtnContainer}>
            <TextButton onClick={cancel}>
              Cancel
            </TextButton>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

AddTagModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddTag: PropTypes.func.isRequired,
};

export default AddTagModal;
