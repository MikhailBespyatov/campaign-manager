import PropTypes from 'prop-types';
import clsx from 'clsx';
import React, { PureComponent } from 'react';
import SpriteIcon from 'components/icons/SpriteIcon/SpriteIcon';
import classes from './PaginationPanel.module.scss';

class PaginationPanel extends PureComponent {
  renderPages = () => {
    const { totalPages, currentPage } = this.props;
    const pages = [];

    for (let i = 0; i < totalPages; i += 1) {
      pages.push(
        <div
          key={i}
          role="presentation"
          className={clsx(
            classes.page,
            {
              [classes.activePage]: i === currentPage,
            },
          )}
          data-page={i}
          onClick={this.handleClickPage}
        >
          {i + 1}
        </div>,
      );
    }
    return pages;
  };

  handleClickSwitchNext = () => {
    const { totalPages, onChange, currentPage } = this.props;

    if (currentPage < totalPages - 1) {
      onChange(currentPage + 1);
    }
  };

  handleClickSwitchPrev = () => {
    const { onChange, currentPage } = this.props;

    if (currentPage > 0) {
      onChange(currentPage - 1);
    }
  };

  handleClickPage = (e) => {
    const { onChange } = this.props;
    const page = Number.parseInt(e.currentTarget.getAttribute('data-page'), 10);
    onChange(page);
  };

  render() {
    const { totalPages, currentPage } = this.props;

    if (totalPages < 2) {
      return null;
    }

    return (
      <div className={`d-flex pt-4 ${classes.paginationPanel}`}>
        <div
          className={clsx(
            classes.switch,
            {
              [classes.disabled]: currentPage === 0,
            },
          )}
          role="presentation"
          onClick={this.handleClickSwitchPrev}
        >
          <SpriteIcon name="prev-icon" size="sm" />
        </div>
        <div className={`${classes.pages} d-flex align-items-center`}>
          {this.renderPages()}
        </div>
        <div
          className={clsx(
            classes.switch,
            {
              [classes.disabled]: currentPage === totalPages - 1,
            },
          )}
          role="presentation"
          onClick={this.handleClickSwitchNext}
        >
          <SpriteIcon name="next-icon" size="sm" />
        </div>
      </div>
    );
  }
}

PaginationPanel.propTypes = {
  totalPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PaginationPanel;
