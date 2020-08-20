import React from 'react';
import PropTypes from 'prop-types';
import Table from 'reactstrap/es/Table';
import classes from 'modules/Admin/components/AdminTable/AdminTable.module.scss';


const AdminTable = ({ tHead, tBody }) => (
  <Table cellSpacing={0}>
    <thead className={classes.tHead}>
      {tHead}
    </thead>
    <tbody className={classes.tBody}>
      {tBody}
    </tbody>
  </Table>
);

AdminTable.propTypes = {
  tHead: PropTypes.node.isRequired,
  tBody: PropTypes.node.isRequired,
};

export default AdminTable;
