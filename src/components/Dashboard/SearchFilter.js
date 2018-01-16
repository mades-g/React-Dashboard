import React from 'react';
import { connect } from 'react-redux';
import { toggleMobileNavVisibility } from '../../reducers/Layout';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';

const SearchFilter = ({
  showMobileMenu,
  toggleMobileNavVisibility
}) => (
    <Navbar fluid={true}>
        <Navbar.Form pullLeft>
          <FormGroup>
            <span className="input-group-addon"><i className="fa fa-search"></i></span>
            <FormControl type="text" placeholder="Type to search" />
          </FormGroup>
        </Navbar.Form>
    </Navbar>
  );

const mapDispatchToProp = dispatch => ({
  toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
});

export default connect(null, mapDispatchToProp)(SearchFilter);