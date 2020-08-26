import TextInput from 'components/forms/inputs/TextInput/TextInput';
import React, { useMemo } from 'react';

export const TextInputWrapper = ({
    helperText,

    input,

    meta: { submitError, dirtySinceLastSubmit, touched, error, submitting },

    ...rest
}) => {
    const showError = ((submitError && !dirtySinceLastSubmit) || error) && touched && !submitting;

    const getHelperText = useMemo(() => {
        if (!showError) return helperText;

        return error || submitError;
    }, [showError, error, submitError, helperText]);

    return <TextInput hasError={showError} helperText={getHelperText} {...input} {...rest} />;
};

export default TextInputWrapper;
