import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Label,
} from 'reactstrap';
import PropTypes from "prop-types";
import '../../index.css';
import './styles.css';
import logo from '../../assets/logo.png';


export function Header(props) {
  const { admin } = props;
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div>
      <Navbar color="faded" light>
        <img src={logo} style={{width: '4.3rem'}} alt=''/>
        <NavbarToggler style={{color: '#eabe41'}} onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className='mt-4'>
            {admin && (
              <Fragment>
                <NavItem>
                  <Label className='h4'>
                    Administrador
                  </Label>
                </NavItem>
                <NavItem>
                  <Label className='h4'>
                    Estadísticas
                  </Label>
                </NavItem>
              </Fragment>
            )}
            <NavItem>
              <Label className='h4'>
                Cerrar Sesion
              </Label>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

Header.propTypes = {
  admin: PropTypes.bool,
}

Header.defaultProps = {
  admin: false,
}
