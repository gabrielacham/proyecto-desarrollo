import React, { createRef, useState } from "react"
import {
  Row,
  Col,
  Label,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '../../index.css';

const mainPanel = createRef();

 function Docentes (props){
  return (
    <div className='px-0 mx-auto admin-wrapper'>
      <div className='admin-main-panel' ref={mainPanel}>
        <div className='admin-content'>
          <div className='admin-container'>
              <Col>
                <div>
                  <Navbar admin />
                </div>
                <Row>
                  <Label className='h1'>
                    Docentes
                  </Label>
                </Row>
              </Col>
            </div>
          </div>
        </div>
      </div>
  )
}

export default withRouter(Docentes);
