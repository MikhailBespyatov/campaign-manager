import classes from 'components/forms/inputs/SearchInput/SearchInput.module.scss';
// import debounce from 'constants/ui/TagInput/node_modules/lodash-es/debounce';
import TextInput from 'components/forms/inputs/TextInput/TextInput';
import PropTypes from 'prop-types';
import React from 'react';

const SearchInput = ({ inputValue, label, onChange }) => {
    const [inputText, setInputText] = React.useState('');

    React.useState(() => {
        setInputText(inputValue);
    }, []);

    const triggerOnChange = React.useCallback(
        () => {},

        // debounce((query) => {

        //   onChange(query);

        // }, 500),

        []
    );

    const onInputChange = React.useCallback(
        ({ target: { value } }) => {
            setInputText(value);

            triggerOnChange(value);
        },

        [triggerOnChange]
    );

    return (
        <div className="mb-4">
            <div className="d-flex align-items-center w-100">
                <label className={`${classes.inputLabel} mr-4`}>{label}</label>

                <div className="flex-grow-1">
                    <TextInput noMargin value={inputText} onChange={onInputChange} />
                </div>
            </div>
        </div>
    );
};

SearchInput.propTypes = {
    inputValue: PropTypes.string,

    label: PropTypes.string,

    onChange: PropTypes.func.isRequired
};

SearchInput.defaultProps = {
    inputValue: '',

    label: 'Search'
};

export default SearchInput;
