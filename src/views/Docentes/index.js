import React, { createRef, useState } from "react"
import {
  Row,
  Col,
  Label,
  Card,
  CardBody,
  Input,
  FormGroup,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import MaterialTable from 'material-table';
import TableIcons  from '../../components/TableIcons';
import Navbar from '../../components/Navbar';
import '../../index.css';

const mainPanel = createRef();

function Docentes (props){
  const usersTableColumns = [
    { title: 'Cedula', field: 'cedula', editable: 'never' },
    { title: 'Nombre', field: 'nombre' },
    { title: 'Apellido', field: 'apellido' },
    { title: 'Email', field: 'email' },
    { title: 'Clave', field: 'clave' },
    { title: 'Telefono', field: 'telefono' },
    { title: 'Carrera', field: 'carrera' },
    { title: 'Materias', field: 'materias' },
  ]
  const interactionsTableColumns = [
    { title: 'ID', field: 'id', editable: 'never' },
    { title: 'NRC', field: 'nrc' },
    { title: 'Materia', field: 'materia' },
    { title: 'Profesor', field: 'profesor' },
    { title: 'Delegado', field: 'delegado' },
    { title: 'Hora Inicio', field: 'hora_inicio' },
    { title: 'Hora Fin', field: 'hora_fin' },
    { title: 'Asistencia', field: 'asistencia' },
    { title: 'Observaciones Profesor', field: 'observaciones_P' },
    { title: 'Observaciones Delegado', field: 'observaciones_D' },
    { title: 'Nivel de Incidencia', field: 'nivel_incidencia' },
    { title: 'Descripcion', field: 'descripcion_incidencia' },
  ]
  const users = []
  const interactions = []
  const subjectsList = [
    { nombre: 'Matematica Básica' },
    { nombre: 'Trigonometría' },
    { nombre: 'Cálculo II' },
  ]

  const [subject, setSubject] = useState('');

  function renderOptions(data) {
  return (
      data.map((prop, key) => {
          return (
            <option className='my-1' key={key}>
              {prop.nombre}
            </option>
          );
      })
  );
}

  return (
    <div className='px-0 mx-auto admin-wrapper'>
      <div className='admin-main-panel' ref={mainPanel}>
        <div className='admin-content'>
          <div className='admin-container'>
              <Col>
                <div>
                  <Navbar />
                </div>
                {/* Subject Row */}
                <Row className='w-100 mx-0 my-3'>
                  <Col className='p-0'>
                    <Label className='h4'>
                      Materias
                    </Label>
                    <Col className='p-0'>
                    <FormGroup>
                      <Input
                        className='shadow'
                        type="select"
                        name="materias"
                        id="materias"
                        onChange={({ target }) => setSubject(target.value)}
                      >
                        {subjectsList ? renderOptions(subjectsList) : <option>''</option>}
                      </Input>
                    </FormGroup>
                    </Col>
                  </Col>
                </Row>
                {/* Card */}
                <Row className='mx-0 justify-content-center'>
                  <Card className='login-card shadow'>
                    <CardBody>
                      {/* Users Table */}
                      <Row className='mx-0 justify-content-center mb-3'>
                        <div className='shadow' style={{ maxWidth: '100%', width: '100%' }}>
                          <MaterialTable
                            title="Usuarios"
                            columns={usersTableColumns}
                            data={users}
                            icons={TableIcons}
                          />
                        </div>
                      </Row>

                      {/* Interactions Table */}
                      <Row className='mx-0 justify-content-center mb-3'>
                        <div className='shadow' style={{ maxWidth: '100%', width: '100%' }}>
                          <MaterialTable
                            title="Interacciones"
                            columns={interactionsTableColumns}
                            data={interactions}
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

export default withRouter(Docentes);
