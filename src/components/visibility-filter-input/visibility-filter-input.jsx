import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import { setFilter } from '../../actions/actions';

function VisibilityFilterInput(props) {
  return <Form.Control style={{ width: '500px', marginTop: '20px' }}
    onChange={e => props.setFilter(e.target.value)}
    value={props.visibilityFilter}
    placeholder="Filter movies"
  />;
}

export default connect(
  null,
  { setFilter }
)(VisibilityFilterInput);