import React from 'react';
import PropTypes from 'prop-types';
import HashTag from 'components/ui/HashTag/HashTag';
import SearchInput from 'components/forms/inputs/SearchInput/SearchInput';
import AdminTable from 'modules/Admin/components/AdminTable/AdminTable';
import PrimaryButton from 'components/ui/buttons/PrimaryButton';
import SpriteIcon from 'components/icons/SpriteIcon/SpriteIcon';
import classes from './Organization.module.scss';


const OrganizationComponent = (
  {
    onInputChange,
    organizationList,
    onAddHashTag,
    onDeleteHashTag,
    onAddOrganization,
  },
) => (
  <>
    <SearchInput
      onChange={onInputChange}
    />
    { Object.values(organizationList).length > 0 && (
      <>
        <AdminTable
          tHead={(
            <tr>
              <th>Organization Name</th>
              <th>Mandatory Hashtags</th>
              <th>WOM</th>
            </tr>
          )}
          tBody={Object.values(organizationList).map((
            {
              organizationId,
              title,
              mandatoryTags,
              wom,
            },
          ) => (
            <tr key={title}>
              <td className={`${classes.sideCell} font-semi-bold`}>{title}</td>
              <td className={`${classes.tagsCell}`}>
                <div className="d-flex flex-wrap">
                  {mandatoryTags.map((tag) => (
                    <HashTag
                      key={tag}
                      title={tag}
                      noMargin
                      className="mr-2 mb-1"
                      data-organization-id={organizationId}
                      data-tag={tag}
                      onDelete={mandatoryTags.length > 1 && onDeleteHashTag}
                    />
                  ))}
                  <PrimaryButton
                    inline
                    className="mb-1"
                    size="sm"
                    data-organization-id={organizationId}
                    onClick={onAddHashTag}
                  >
                    <SpriteIcon name="plus-unsafe" />
                  </PrimaryButton>
                </div>
              </td>
              <td className={`${classes.sideCell} font-semi-bold`}>{wom}</td>
            </tr>
          ))}
        />
        <PrimaryButton
          inline
          className="mb-1"
          size="sm"
          onClick={onAddOrganization}
        >
          <SpriteIcon name="plus-unsafe" />
        </PrimaryButton>
      </>
    )}
  </>
);

OrganizationComponent.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  organizationList: PropTypes.shape({}).isRequired,
  onAddHashTag: PropTypes.func.isRequired,
  onDeleteHashTag: PropTypes.func.isRequired,
  onAddOrganization: PropTypes.func.isRequired,
};


export default OrganizationComponent;
