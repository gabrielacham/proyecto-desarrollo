import React, { createRef, useState, useEffect } from "react"
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { alpha } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import TableIcons  from '../../components/TableIcons';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import '../../index.css';

const mainPanel = createRef();

function Admin (props){
  const [users, setUsersData] = useState([]);
  const [subjects, setSubjectsData] = useState([]);
  const [interactions, setInteractionsData] = useState([]);
  const [isLoggedin, setLogged] = useState(true);

  const usersTableColumns = [
    { title: 'Cedula', field: 'cedula' },
    { title: 'Tipo', field: 'rol' },
    { title: 'Nombre', field: 'nombre' },
    { title: 'Apellido', field: 'apellido' },
    { title: 'Email', field: 'email' },
    { title: 'Clave', field: 'clave' },
    { title: 'Telefono', field: 'telefono' },
    { title: 'Carrera', field: 'id_carrera' },
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

  useEffect(() => {
    const fetchData = async () => {
      const userData = await axios.get('http://localhost:3001/users')
      const interactionsData = await axios.get('http://localhost:3001/interactions')
      const subjectsData = await axios.get('http://localhost:3001/class')
      console.log(userData);
      console.log(interactionsData);
      console.log(subjectsData);
      setUsersData(userData.data)
      setSubjectsData(subjectsData.data)
      setInteractionsData(interactionsData.data)
      const newSubject = {
        nrc: 25083,
        idCarrera: 4,
        numInscritos: 20,
        numInteracciones: 2,
        cedulaProfesor: 25083768,
        cedulaDelegado: 25083575,
      }
      axios
        .post('http://localhost:3001/class', newSubject)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    if (isLoggedin) {
      fetchData()
    }
}, [isLoggedin]);

function createUser(newData) {
  axios
    .put('http://localhost:3001/users/newData', newData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
function updateUser(newData) {
  axios
    .put(`http://localhost:3001/users/${newData.cedula}/`, newData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}


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
                            editable ={{
                              onRowAdd: (newData, oldData) => createUser(newData),
                              onRowUpdate: (newData, oldData) => updateUser(newData),
                            }}
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
