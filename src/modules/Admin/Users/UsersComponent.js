import React, {} from 'react';
import * as PropTypes from 'prop-types';
import SearchInput from 'components/forms/inputs/SearchInput/SearchInput';
import AdminTable from 'modules/Admin/components/AdminTable/AdminTable';
import PrimaryButton from 'components/ui/buttons/PrimaryButton';
import SpriteIcon from 'components/icons/SpriteIcon/SpriteIcon';
import PaginationPanel from 'components/ui/PaginationPanel/PaginationPanel';


const UsersComponent = (
  {
    page,
    list,
    totalPages,
    organization,
    searchInputValue,
    onInputChange,
    onPasswordReset,
    onMakeUserMember,
    onMakeUserAdmin,
    onDeleteUser,
    onCreateUser,
    onChangePage,
  },
) => {
  const isAdmin = React.useCallback(
    (userId) => organization.adminIds.includes(userId),
    [organization],
  );
  return (
    <>
      <SearchInput
        inputValue={searchInputValue}
        onChange={onInputChange}
      />
      {list.length > 0 && (
        <>
          <AdminTable
            tHead={(
              <tr>
                <th style={{ width: '50%' }} colSpan={3}>User</th>
                <th>Organization Name</th>
                <th>Actions</th>
              </tr>
            )}
            tBody={list.map((
              {
                userId,
                firstName,
                lastName,
                email,
              },
            ) => (
              <tr key={userId}>
                <td className="font-semi-bold">{firstName}</td>
                <td className="font-semi-bold">{lastName}</td>
                <td className="font-semi-bold">{email}</td>
                <td className="font-semi-bold">{organization.title}</td>
                <td className="font-semi-bold">
                  <div className="d-flex justify-content-around">
                    <PrimaryButton
                      inline
                      size="sm"
                      data-user-id={userId}
                      onClick={onPasswordReset}
                    >
                      PW Reset
                    </PrimaryButton>
                    {isAdmin(userId) ? (
                      <PrimaryButton
                        inline
                        size="sm"
                        data-user-id={userId}
                        onClick={onMakeUserMember}
                      >
                        Admin -
                      </PrimaryButton>
                    ) : (
                      <PrimaryButton
                        inline
                        size="sm"
                        data-user-id={userId}
                        onClick={onMakeUserAdmin}
                      >
                        Admin +
                      </PrimaryButton>
                    )}
                    <PrimaryButton
                      inline
                      size="sm"
                      data-user-id={userId}
                      onClick={onDeleteUser}
                    >
                      Del
                    </PrimaryButton>
                  </div>
                </td>
              </tr>
            ))}
          />
          <PrimaryButton
            inline
            size="sm"
            onClick={onCreateUser}
          >
            <SpriteIcon name="plus-unsafe" />
          </PrimaryButton>
          <div className="d-flex justify-content-center">
            <PaginationPanel
              currentPage={page}
              totalPages={totalPages}
              onChange={onChangePage}
            />
          </div>
        </>
      )}
    </>
  );
};

UsersComponent.propTypes = {
  // Current page number
  page: PropTypes.number.isRequired,
  // List for current page
  list: PropTypes.arrayOf(PropTypes.shape({})),
  organization: PropTypes.shape({
    title: PropTypes.string,
    adminIds: PropTypes.arrayOf(PropTypes.string),
  }),
  totalPages: PropTypes.number.isRequired,
  searchInputValue: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onPasswordReset: PropTypes.func.isRequired,
  onMakeUserMember: PropTypes.func.isRequired,
  onMakeUserAdmin: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  onCreateUser: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

UsersComponent.defaultProps = {
  list: [],
  organization: {},
  searchInputValue: undefined,
};

export default UsersComponent;
