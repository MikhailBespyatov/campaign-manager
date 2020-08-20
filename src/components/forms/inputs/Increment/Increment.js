import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SpriteIcon from 'components/icons/SpriteIcon/SpriteIcon';
import classes from './Increment.module.scss';

class Increment extends React.PureComponent {
  componentDidMount() {
    const { value, onChange } = this.props;
    if (typeof value !== 'number') {
      const parsedValue = this.parseValue();
      setTimeout(() => {
        onChange(parsedValue);
      }, 0);
    }
  }

  componentDidUpdate(prevProps) {
    const { value: valuePrev } = prevProps;
    const { value, onChange } = this.props;
    if (typeof value !== 'number' && value !== valuePrev) {
      const parsedValue = this.parseValue();
      onChange(parsedValue);
    }
  }

  handleIncrement = () => {
    const { maxValue, onChange } = this.props;
    const parsedValue = this.parseValue();
    if (parsedValue < maxValue) {
      onChange(parsedValue + 1);
    }
  };

  handleDecrement = () => {
    const { minValue, onChange } = this.props;
    const parsedValue = this.parseValue();
    if (parsedValue > minValue) {
      onChange(parsedValue - 1);
    }
  };

  parseValue() {
    const { value } = this.props;
    const parsedValue = Number.parseInt(value, 10);
    if (Number.isNaN(parsedValue)) { return 1; }
    return parsedValue;
  }

  render() {
    const {
      className, hashTag,
      label, value,
    } = this.props;

    return (
      <div
        className={clsx(
          classes.root,
          'd-flex align-items-center',
          { [classes.hashTag]: hashTag },
          className,
        )}
      >
        <div className={`${classes.label} pr-2`}>{label}</div>
        <div className={`${classes.controlWrapper} d-flex align-items-center p-1`}>
          <SpriteIcon
            name="prev-icon"
            size="sm"
            className="cursor-pointer"
            onClick={this.handleDecrement}
          />
          <span className={`${classes.valueBlock} d-block text-center`}>{value}</span>
          <SpriteIcon
            name="next-icon"
            size="sm"
            className="cursor-pointer"
            onClick={this.handleIncrement}
          />
        </div>
      </div>
    );
  }
}

Increment.propTypes = {
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  className: PropTypes.string,
  hashTag: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

Increment.defaultProps = {
  className: '',
  hashTag: false,
};

export default Increment;
