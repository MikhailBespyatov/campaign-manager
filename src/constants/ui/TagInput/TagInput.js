import clsx from 'clsx';
import HashTag from 'constants/ui/HashTag/HashTag';
import debounce from 'lodash-es/debounce';
import OrganizationService from 'modules/Admin/Organization/OrganizationService';
import PropTypes from 'prop-types';
import React from 'react';

// import classes from './TagInput.module.scss';

const initialState = {
    inputText: '',

    isDropdownOpen: false,

    hashTagsList: []
};

class TagInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this.dropdownRef = React.createRef();

        this.state = { ...initialState };
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    onInputChange = ({ target: { value: inputValue } }) => {
        this.setState({ inputText: inputValue });

        this.getTags(inputValue);
    };

    getTags = debounce(async tagQuery => {
        const { onChange, value } = this.props;

        const { isDropdownOpen } = this.state;

        const tags = await OrganizationService.getTags(tagQuery, value);

        this.setState({ hashTagsList: tags });

        if (!isDropdownOpen) {
            this.setState({ isDropdownOpen: true });
        }

        if (!tagQuery || tags.length === 0) {
            this.setState({ isDropdownOpen: false });
        } else if (tags.length === 1) {
            onChange([...value, tags[0]]);

            this.setState({
                isDropdownOpen: false,

                inputText: ''
            });
        }
    }, 300);

    handleClickOutside = () => {
        this.setState({ isDropdownOpen: false });
    };

    selectTag = ({ currentTarget }) => {
        const { onChange, value } = this.props;

        const tag = currentTarget.getAttribute('data-tag');

        onChange([...value, tag]);

        this.setState({
            isDropdownOpen: false,

            inputText: ''
        });
    };

    deleteTag = ({ currentTarget }) => {
        const { onChange, value } = this.props;

        const currentHashTag = currentTarget.getAttribute('data-tag');

        const newValue = value.filter(tag => tag !== currentHashTag);

        onChange(newValue);
    };

    handleDropdownClick = event => {
        event.nativeEvent.stopImmediatePropagation();
    };

    render() {
        const {
            label,

            value,

            classes: {
                root: rootClassName,

                label: labelClassName,

                inputWrapper: wrapperClassName,

                input: inputClassName
            }
        } = this.props;

        const { inputText, isDropdownOpen, hashTagsList } = this.state;

        return (
            <div className={`${rootClassName} d-flex align-items-center`}>
                {/* {label && <label className={`h2 ${classes.label} ${labelClassName}`}>{label}</label>} */}

                {/* <div className={`${classes.inputWrapper} flex-fill d-flex flex-wrap ${wrapperClassName}`}> */}

                <div className={` flex-fill d-flex flex-wrap ${wrapperClassName}`}>
                    {value.map((item, index) => (
                        <HashTag
                            key={`${item}${index}`}
                            className="mr-2 mb-1"
                            title={item}
                            noMargin
                            data-tag={item}
                            onDelete={this.deleteTag}
                        />
                    ))}

                    <div className="position-relative flex-fill">
                        <input
                            //className={`${classes.input} w-100 ${inputClassName}`}

                            type="text"
                            value={inputText}
                            onChange={this.onInputChange}
                        />

                        <div
                            ref={this.dropdownRef}
                            onClick={this.handleDropdownClick}

                            //className={clsx('p-2', classes.dropdown, { [classes.open]: isDropdownOpen })}
                        >
                            {hashTagsList.map((tag, index) => (
                                <div
                                    key={`${tag}${index}`}
                                    className={clsx('font-semi-bold cursor-pointer', {
                                        'mb-2': index !== hashTagsList.length - 1
                                    })}
                                    data-tag={tag}
                                    onClick={this.selectTag}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

TagInput.propTypes = {
    label: PropTypes.string,

    value: PropTypes.arrayOf(PropTypes.string),

    onChange: PropTypes.func.isRequired

    // classes: PropTypes.shape({

    //     root: PropTypes.string,

    //     label: PropTypes.string,

    //     inputWrapper: PropTypes.string,

    //     input: PropTypes.string

    // })
};

TagInput.defaultProps = {
    label: 'Filter',

    value: []

    // classes: {}
};

export default TagInput;
