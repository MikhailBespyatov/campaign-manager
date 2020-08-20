import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getUsersForPageAction,
  makeUserAdminAction,
  makeUserMemberAction,
  removeUserFromOrgAction,
  sendInviteToOrgAction,
  sendPasswordResetEmailAction,
} from 'modules/Admin/Users/store/actions';
import UsersComponent from 'modules/Admin/Users/UsersComponent';
import AddUserModal from 'modules/Admin/components/modals/AddUserModal';
import addUserValidator from 'modules/Admin/Users/addUserValidator';
import errorToastr from 'libs/toastr/errorToastr';
import successToastr from 'libs/toastr/successToastr';

const initialState = {
  isSyncing: false,
  isAddUserModalOpen: false,
};

class UsersContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  componentDidMount() {
    const { currentPage, textSearch } = this.props;
    this.getAdminUsersForPageInternal(currentPage, textSearch);
  }

  onInputChange = (query) => {
    this.getAdminUsersForPageInternal(0, query);
  };

  async getAdminUsersForPageInternal(pageParam, searchQuery) {
    const { getUsersForPage } = this.props;

    this.setState({ isSyncing: true });

    try {
      await getUsersForPage(pageParam, searchQuery);
    } catch (e) {
      errorToastr(e.message);
    }

    this.setState({ isSyncing: false });
  }

  getPageList() {
    const { currentPage, list, listPerPage } = this.props;

    if (listPerPage[currentPage]) {
      return listPerPage[currentPage].map((userId) => list[userId]);
    }
    return [];
  }

  resetUserPassword = async ({ currentTarget }) => {
    const { sendPasswordResetEmail } = this.props;
    const userId = currentTarget.getAttribute('data-user-id');
    try {
      await sendPasswordResetEmail(userId);
    } catch (e) {
      errorToastr(e.message);
    }
  };

  addAdminPermission = async ({ currentTarget }) => {
    const { makeUserAdmin } = this.props;
    const userId = currentTarget.getAttribute('data-user-id');
    try {
      await makeUserAdmin(userId);
    } catch (e) {
      errorToastr(e.message);
    }
  };

  removeAdminPermission = async ({ currentTarget }) => {
    const { makeUserMember } = this.props;
    const userId = currentTarget.getAttribute('data-user-id');
    try {
      await makeUserMember(userId);
    } catch (e) {
      errorToastr(e.message);
    }
  };

  deleteUser = async ({ currentTarget }) => {
    const { removeUserFromOrg } = this.props;
    const userId = currentTarget.getAttribute('data-user-id');
    try {
      await removeUserFromOrg(userId);
    } catch (e) {
      errorToastr(e.message);
    }
  };

  openAddUserModal = () => {
    this.setState({ isAddUserModalOpen: true });
  };

  closeAddUserModal = () => {
    this.setState({ isAddUserModalOpen: false });
  };

  sendInvitationEmail = async (formValues) => {
    const { sendInviteToOrg, orgId } = this.props;
    try {
      await sendInviteToOrg(orgId, {
        ...formValues,
        permission: Number.parseInt(formValues.permission, 10),
      });
      successToastr('Invitation email was sent successfully');
      this.setState({ isAddUserModalOpen: false });
    } catch (e) {
      errorToastr(e.message);
    }
  };

  onChangePage = (pageIndex) => {
    const { textSearch } = this.props;
    this.getAdminUsersForPageInternal(pageIndex, textSearch);
  };

  render() {
    const { isSyncing, isAddUserModalOpen } = this.state;
    const {
      currentPage,
      totalPages,
      organization,
      textSearch,
    } = this.props;

    return (
      <>
        <UsersComponent
          searchInputValue={textSearch}
          page={currentPage}
          totalPages={totalPages}
          list={this.getPageList()}
          organization={organization}
          onInputChange={this.onInputChange}
          onPasswordReset={this.resetUserPassword}
          onMakeUserMember={this.removeAdminPermission}
          onMakeUserAdmin={this.addAdminPermission}
          onDeleteUser={this.deleteUser}
          onCreateUser={this.openAddUserModal}
          onChangePage={this.onChangePage}
        />
        <AddUserModal
          isOpen={isAddUserModalOpen}
          onClose={this.closeAddUserModal}
          validate={addUserValidator}
          onAddUser={this.sendInvitationEmail}
        />
      </>
    );
  }
}

UsersContainer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  textSearch: PropTypes.string,
  totalPages: PropTypes.number.isRequired,
  list: PropTypes.shape({}).isRequired,
  listPerPage: PropTypes.shape({}).isRequired,
  orgId: PropTypes.string.isRequired,
  organization: PropTypes.shape({
    title: PropTypes.string,
  }),
  getUsersForPage: PropTypes.func.isRequired,
  sendInviteToOrg: PropTypes.func.isRequired,
  sendPasswordResetEmail: PropTypes.func.isRequired,
  makeUserAdmin: PropTypes.func.isRequired,
  makeUserMember: PropTypes.func.isRequired,
  removeUserFromOrg: PropTypes.func.isRequired,
};

UsersContainer.defaultProps = {
  organization: undefined,
  textSearch: undefined,
};

export default connect(
  ({ users }) => users,
  {
    getUsersForPage: getUsersForPageAction,
    sendPasswordResetEmail: sendPasswordResetEmailAction,
    makeUserAdmin: makeUserAdminAction,
    makeUserMember: makeUserMemberAction,
    removeUserFromOrg: removeUserFromOrgAction,
    sendInviteToOrg: sendInviteToOrgAction,
  },
)(UsersContainer);
