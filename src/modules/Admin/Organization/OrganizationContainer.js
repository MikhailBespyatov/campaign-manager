import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrganizationComponent from 'modules/Admin/Organization/OrganizationComponent';
import {
  addOrganizationHashTagAction, createOrganizationAction,
  deleteOrganizationHashTagAction,
  fetchOrganizationsAction,
} from 'modules/Admin/Organization/store/actions';
import AddTagModal from 'modules/Admin/components/modals/AddTagModal';
import AddOrganizationModal from 'modules/Admin/components/modals/AddOrganizationModal';
import addOrganizationValidator from 'modules/Admin/Organization/addOrganizationValidator';
import errorToastr from 'libs/toastr/errorToastr';


const OrganizationContainer = (
  {
    organizationList,
    currentPage,
    totalPages,
    fetchOrganizations,
    addOrganizationHashTag,
    deleteOrganizationHashTag,
    createOrganization,
  },
) => {
  const [isAddTagModalOpen, setIsAddTagModalOpen] = React.useState(false);
  const [orgIdForTagAddition, setOrgIdForTagAddition] = React.useState(null);
  const [isAddOrganizationModalOpen, setIsAddOrganizationModalOpen] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        await fetchOrganizations(currentPage);
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  const onInputChange = React.useCallback(
    (value) => {
      console.log('Query to filter:', value);
    },
    [],
  );

  const deleteHashTag = React.useCallback(
    async ({ currentTarget }) => {
      const organizationId = currentTarget.getAttribute('data-organization-id');
      const tag = currentTarget.getAttribute('data-tag');
      try {
        await deleteOrganizationHashTag(organizationId, tag);
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [],
  );

  const openAddTagModal = React.useCallback(
    ({ currentTarget }) => {
      const organizationId = currentTarget.getAttribute('data-organization-id');
      setOrgIdForTagAddition(organizationId);
      setIsAddTagModalOpen(true);
    },
    [],
  );

  const closeAddTagModal = React.useCallback(
    () => {
      setIsAddTagModalOpen(false);
    },
    [],
  );

  const addHashTag = React.useCallback(
    async (value) => {
      try {
        await addOrganizationHashTag(orgIdForTagAddition, value);
        setIsAddTagModalOpen(false);
        setOrgIdForTagAddition(null);
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [orgIdForTagAddition],
  );

  const openAddOrganizationModal = React.useCallback(
    () => {
      setIsAddOrganizationModalOpen(true);
    },
    [],
  );

  const closeAddOrganizationModal = React.useCallback(
    () => {
      setIsAddOrganizationModalOpen(false);
    },
    [],
  );

  const addOrganization = React.useCallback(
    async (formValues) => {
      try {
        await createOrganization(formValues);
        setIsAddOrganizationModalOpen(false);
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [],
  );

  return (
    <>
      <OrganizationComponent
        onInputChange={onInputChange}
        organizationList={organizationList}
        onAddHashTag={openAddTagModal}
        onDeleteHashTag={deleteHashTag}
        onAddOrganization={openAddOrganizationModal}
      />
      <AddTagModal
        isOpen={isAddTagModalOpen}
        onClose={closeAddTagModal}
        onAddTag={addHashTag}
      />
      <AddOrganizationModal
        isOpen={isAddOrganizationModalOpen}
        onClose={closeAddOrganizationModal}
        validate={addOrganizationValidator}
        onAddOrganization={addOrganization}
      />
    </>
  );
};

OrganizationContainer.propTypes = {
  organizationList: PropTypes.shape({}).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  fetchOrganizations: PropTypes.func.isRequired,
  addOrganizationHashTag: PropTypes.func.isRequired,
  deleteOrganizationHashTag: PropTypes.func.isRequired,
  createOrganization: PropTypes.func.isRequired,
};

export default connect(
  ({ organization: { list, pageIndex, totalPages } }) => ({
    organizationList: list,
    currentPage: pageIndex,
    totalPages,
  }),
  {
    fetchOrganizations: fetchOrganizationsAction,
    addOrganizationHashTag: addOrganizationHashTagAction,
    deleteOrganizationHashTag: deleteOrganizationHashTagAction,
    createOrganization: createOrganizationAction,
  },
)(OrganizationContainer);
