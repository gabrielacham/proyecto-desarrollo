import React, { createRef, useState, useEffect } from "react"
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
import axios from 'axios';
import '../../index.css';

const mainPanel = createRef();

function Delegados (props){
  const [isLoggedin, setLogged] = useState(true);

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
  const interactions = []

  const [subject, setSubject] = useState('');
  const [subjectsList, setSubjectList] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const subjects = await axios.get(`http://localhost:3001/users/${25083575}`)
      const interactionsData = await axios.get(`http://localhost:3001/interactions/delegado/${25083575}`)
      const subjectsData = await axios.get('http://localhost:3001/class')
      setSubjectList(subjects.data)
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
                        style={{ height: '3.2rem' }}
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

export default withRouter(Delegados);
