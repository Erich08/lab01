import React from 'react';
import Form from 'react-bootstrap/Form';

class FilteredBeast extends React.Component {
  render() {
    return (
      <div>
        <Form.Select
          aria-label='Default select example'
          onChange={this.props.handleChange}
        >
          <option value='default'>All Beasts</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
          <option value='100'>One Hundred</option>
        </Form.Select>
      </div>
    );
  }
}

export default FilteredBeast;
