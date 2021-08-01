import React, { useState, createRef } from "react"
import {
  Row,
  Col,
  Label,
  Card,
  CardBody,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import logo  from '../../assets/logo.png';
import { history } from '../../helpers'
import '../../index.css';
import './styles.css';

const mainPanel = createRef();

function Login(props) {
  const [cedula, setCI] = useState('')
  const [password, setPassword] = useState('')
  const [goto, setGoto] = useState(null)
  if (goto) {
    console.log('gt',  goto);
    console.log(cedula);
    console.log(password);
    history.push('/admin')
  }

  return (
    <div className='px-0 mx-auto admin-wrapper'>
      <div className='admin-main-panel' ref={mainPanel}>
        <div className='login-admin-content admin-content'>
          <div className='admin-container'>
            <Col>
              <Row className='mb-3' />
              {/* Card */}
              <Row className='mx-0 justify-content-center'>
                <Card className='w-50 login-card shadow'>
                  <CardBody>
                    <Row className='mx-0 justify-content-center mb-2'>
                      <Label className='h3'>
                        Bienvenido
                      </Label>
                    </Row>
                    <Row className='mx-0 justify-content-center mb-3'>
                      <img
                        src={logo}
                        style={{width: '4.3rem'}}
                        alt=''
                      />
                    </Row>
                    <FormGroup>
                      <Label for="cedula">
                        Cédula
                      </Label>
                      <Input
                        type="cedula"
                        name="cedula"
                        id="cedula"
                        onChange={({ target }) => {
                          return(setCI(target.value)
                        )}}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">
                        Contraseña
                      </Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        onChange={({ target }) => {
                          return(setPassword(target.value)
                        )}}
                      />
                    </FormGroup>
                    <Row className='mx-0 justify-content-end'>
                      <Button style={{ backgroundColor: '#eabe41', borderColor: '#eabe41' }} onClick={() => setGoto('/delegados')}>
                        Aceptar
                      </Button>
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

export default withRouter(Login);
