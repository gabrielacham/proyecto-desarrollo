import React, { createRef } from "react"
import {
  Row,
  Col,
  Label,
  Navbar,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import logo  from '../../assets/logo.png';
import '../../index.css';

const mainPanel = createRef();

 function Admin (props){
  return (
    <div className='px-0 mx-auto admin-wrapper'>
      <div className='admin-main-panel' ref={mainPanel}>
        <div className='admin-content'>
          <div className='admin-container'>
              <Col>
                <div>
                  <Navbar color="faded" light>
                    <img src={logo} style={{width: '4.3rem'}} alt=''/>
                  </Navbar>
                </div>
                <Row>
                  <Label className='h1'>
                    Admin
                  </Label>
                </Row>
              </Col>
            </div>
          </div>
        </div>
      </div>
  )
}

export default withRouter(Admin);
