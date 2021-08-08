import React, { createRef, useState, useEffect } from "react"
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
import axios from 'axios';
import '../../index.css';

const mainPanel = createRef();

function Admin (props){
  const [usersData, setUsersData] = useState([]);
  const [isLoggedin, setLogged] = useState(true);

  const usersTableColumns = [
    { title: 'Cedula', field: 'cedula', editable: 'never' },
    { title: 'Tipo', field: 'tipo' },
    { title: 'Nombre', field: 'nombre' },
    { title: 'Apellido', field: 'apellido' },
    { title: 'Email', field: 'email' },
    { title: 'Clave', field: 'clave' },
    { title: 'Telefono', field: 'telefono' },
    { title: 'Carrera', field: 'carrera' },
    { title: 'Materias', field: 'materias' },
  ]
  const subjectsTableColumns = [
    { title: 'NRC', field: 'nrc', editable: 'never' },
    { title: 'Nro Interacciones', field: 'n_niteracciones' },
    { title: 'Profesor', field: 'profesor' },
    { title: 'Delegado', field: 'delegado' },
    { title: 'Nro Inscritos', field: 'n_inscritos' },
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
  const subjects = []
  const interactions = []

  useEffect(() => {
    const fetchData = async () => {
      const userData = await axios.get('http://localhost:3001/careers')
      console.log(userData);
      const newUser = {
        cedula: 25083768,
        idCarrera: 1,
        isAdmin: true,
        rol: 'Admin',
        nombre: 'Gabriela',
        apellido: 'Albornoz',
        email: 'g1@gmail.com',
        clave: '1234',
        telefono: '1234',
      }
      // const newCarrera = {
      //   nombre_carrera: 'Matematicas'
      // }
      // axios
      //   .post('http://localhost:3001/careers', newCarrera)
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err));
    }

    if (isLoggedin) {
      fetchData()
    }
}, [isLoggedin]);


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
                        <div className='shadow' style={{ maxWidth: '100%', width: '100%' }}>
                          <MaterialTable
                            title="Usuarios"
                            columns={usersTableColumns}
                            data={users}
                            icons={TableIcons}
                          />
                        </div>
                      </Row>
                      {/* Subjects Table */}
                      <Row className='mx-0 justify-content-center mb-3'>
                        <div className='shadow' style={{ maxWidth: '100%', width: '100%' }}>
                          <MaterialTable
                            title="Materias"
                            columns={subjectsTableColumns}
                            data={subjects}
                            icons={TableIcons}
                          />
                        </div>
                      </Row>
                      {/* Interactions Table */}
                      <Row className='mx-0 justify-content-center mb-3'>
                        <div style={{ maxWidth: '100%', width: '100%' }}>
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

export default withRouter(Admin);
