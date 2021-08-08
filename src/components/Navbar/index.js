import React, { useState, useEffect, Fragment } from 'react';
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
import { withRouter } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header(props) {
  const { admin, history } = props;
  const [collapsed, setCollapsed] = useState(true);
  const [adminColor, setColor] = useState({color: '#343a40'});
  const [statColor, setStatColor] = useState({color: '#343a40'});

  const toggleNavbar = () => setCollapsed(!collapsed);
  useEffect(() => {
    if (history.location.pathname === '/admin') {
      setColor({color: '#eabe41'})
      setStatColor({color: '#343a40'})
    }
    if (history.location.pathname === '/estadisticas') {
      setStatColor({color: '#eabe41'})
        setColor({color: '#343a40'})
    }
  }, [history]);

  return (
    <div>
      <Navbar color="faded" light>
        <img src={logo} style={{width: '4.3rem'}} alt=''/>
        <div>
          { admin ? null : (<NotificationsIcon style={{ color: '#eabe41', width: '5rem', height: '2.5rem' }} />)}
          <NavbarToggler style={{color: '#eabe41'}} onClick={toggleNavbar} className="mr-2" />
        </div>
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar className='mt-4'>
              {admin && (
                <Fragment>
                  <NavItem>
                    <NavLink
                      to={`/admin`}
                      className="navbar-option-link h4"

                      style={adminColor}
                    >
                      Administrador
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to={`/estadisticas`}
                      className="navbar-option-link h4"
                      style={statColor}
                    >
                      Estadísticas
                    </NavLink>
                  </NavItem>
                </Fragment>
              )}
              <NavItem>
                <NavLink
                  to={`/login`}
                  className="navbar-option-link h4 text-dark"
                >
                  Cerrar Sesión
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);

Header.propTypes = {
  admin: PropTypes.bool,
}

Header.defaultProps = {
  admin: false,
}
