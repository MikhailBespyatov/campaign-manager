import React from 'react';
import PropTypes from 'prop-types';
import HashTag from 'constants/ui/HashTag/HashTag';


const HashTagBlock = ({ tags }) => (
  <div>
    <h2 className="mb-2">Hashtags</h2>
    <div className="d-flex flex-wrap">
      {tags.map((tag) => (
        <HashTag
          key={tag}
          title={tag}
          className="mr-2"
        />
      ))}
    </div>
  </div>
);

HashTagBlock.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HashTagBlock;
