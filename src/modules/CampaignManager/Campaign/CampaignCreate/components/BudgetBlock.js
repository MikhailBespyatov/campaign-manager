import React from 'react';
import { Field } from 'react-final-form';
import BitmapIcon from 'components/icons/BitmapIcon/BitmapIcon';
import PrimaryButton from 'constants/ui/buttons/PrimaryButton';
import TextInputWrapper from 'components/forms/finalFormWrappers/TextInputWrapper';
import womTokenLogo from 'assets/img/wom-token-logo.png';
import classes from 'modules/CampaignManager/Campaign/CampaignCreate/CampaignCreate.module.scss';


const BudgetBlock = () => (
  <div className="d-flex align-items-center">
    <div className={`${classes.financialBlock} mb-2`}>
      <h2 className={classes.darkGrey}>Campaign Budget:</h2>
    </div>
    <div className="d-flex flex-wrap flex-fill justify-content-between">
      <div className="d-flex align-items-center mr-4 mb-2">
        <span className="mr-2">Set budget to</span>
        <div className={classes.budgetAmountInput}>
          <Field
            name="budgetAmount"
            component={TextInputWrapper}
            type="number"
            noMargin
            prependContent={(
              <BitmapIcon
                src={womTokenLogo}
                size="lg"
              />
            )}
          />
        </div>
      </div>
      <div className="d-flex align-items-center mr-4 mb-2">
        <span className="mr-2">Starting on</span>
        <div className={`${classes.startDateInput} mr-2`}>
          <Field
            name="startDate"
            type="date"
            noMargin
            component={TextInputWrapper}
          />
        </div>
        <span className="mr-2">for</span>
        <div className={classes.daysAmountInput}>
          <Field
            name="dayAmount"
            type="number"
            min={1}
            noMargin
            component={TextInputWrapper}
          />
        </div>
        <span className="ml-2">days</span>
      </div>
      <div className={`${classes.submitBtnWrapper} mb-2`}>
        <PrimaryButton>Save</PrimaryButton>
      </div>
    </div>
  </div>
);

export default BudgetBlock;
