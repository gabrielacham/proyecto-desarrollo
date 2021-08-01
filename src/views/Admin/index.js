import React, { createRef, useState } from "react"
import {
  Row,
  Col,
  Label,
  Button,
  Card,
  CardBody,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import MaterialTable from 'material-table';
import TableIcons  from '../../components/TableIcons';
import Navbar from '../../components/Navbar';
import '../../index.css';

const mainPanel = createRef();

function Admin (props){
  const usersTableColumns = [
    { title: 'ID', field: 'id_producto', editable: 'never' },
  ]
  const users = []

  return (
    <div className='px-0 mx-auto admin-wrapper'>
      <div className='admin-main-panel' ref={mainPanel}>
        <div className='admin-content'>
          <div className='admin-container'>
              <Col>
                <div>
                  <Navbar admin />
                </div>

                {/* Button Row */}
                <Row className='mx-0 justify-content-end mb-5'>
                  <Button className='shadow' style={{ backgroundColor: '#eabe41', borderColor: '#eabe41' }}>
                    Generar Reporte
                  </Button>
                </Row>
                {/* Card */}
                <Row className='mx-0 justify-content-center'>
                  <Card className='login-card shadow'>
                    <CardBody>
                      {/* Users Table */}
                      <Row className='mx-0 justify-content-center mb-3'>
                        <div style={{ maxWidth: '100%' }}>
                          <MaterialTable
                            title="Usuarios"
                            columns={usersTableColumns}
                            data={users}
                            icons={TableIcons}
                          />
                        </div>
                      </Row>
                      {/* Products Table */}
                      <Row className='mx-0 justify-content-center mb-3'>
                        <div style={{ maxWidth: '100%' }}>
                          <MaterialTable
                            title="Materias"
                            columns={usersTableColumns}
                            data={users}
                            icons={TableIcons}
                          />
                        </div>
                      </Row>
                      {/* Products Table */}
                      <Row className='mx-0 justify-content-center mb-3'>
                        <div style={{ maxWidth: '100%' }}>
                          <MaterialTable
                            title="Interacciones"
                            columns={usersTableColumns}
                            data={users}
                            icons={TableIcons}
                          />
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Row>
              </Col>
            </div>
          </div>
        </div>
      </div>
  )
}

export default withRouter(Admin);
