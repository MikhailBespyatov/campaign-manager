import React from 'react';
import BitmapIcon from 'components/icons/BitmapIcon/BitmapIcon';
import womTokenLogo from 'assets/img/wom-token-logo.png';
import classes from 'modules/CampaignManager/Campaign/CampaignCreate/CampaignCreate.module.scss';


const FinancialsBlock = () => (
  <div className={`${classes.financialBlock} d-flex flex-column justify-content-end`}>
    <h1 className="mb-4">Financials</h1>
    <div className="mb-4">
      <span className="text-grey d-block h3 mb-2">Estimated cost per sale:</span>
      <div className="d-flex align-items-center">
        <BitmapIcon src={womTokenLogo} size="xl" className="mr-1" />
        <div>
          <p className="h1 font-semi-bold mb-1">31.03</p>
          <p className="text-grey">$ 3.10 est</p>
        </div>
      </div>
    </div>
    <div>
      <span className="text-grey d-block h3 mb-2">Confidense:</span>
      <p className="h1 font-semi-bold mb-1">85%</p>
    </div>
  </div>
);

export default FinancialsBlock;
