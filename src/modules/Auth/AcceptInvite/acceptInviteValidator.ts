// import {
//     matchPasswordsMessage,
//     passwordLengthMessage,
//     passwordPatternMessage,
//     repeatPasswordMessage,
//     requiredFieldMessage
// } from 'constants/messages';

const acceptInviteValidator = () => {
    const errors = {};
    const _regex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;

    // if (!password) {
    //     errors.password = [requiredFieldMessage];
    // } else if (password.length < 8) {
    //     errors.password = [passwordLengthMessage];
    // } else if (!regex.test(password)) {
    //     errors.password = [passwordPatternMessage];
    // }

    // if (errors.password && !confirmPassword) {
    //     errors.confirmPassword = [repeatPasswordMessage];
    // } else if (password !== confirmPassword) {
    //     errors.confirmPassword = [matchPasswordsMessage];
    // }

    return errors;
};

export default acceptInviteValidator;
