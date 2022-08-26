import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import './Collaborators.css'
import { useState } from "react";
import baseCollaborator from '../assets/baseCollaborator';
import { nanoid } from 'nanoid';


const Collaborators = () => {
    const [nameCollaborator, setNameCollaborator] = useState('');
    const [emailCollaborator, setEmailCollaborator] = useState('');
    const [listCollaborator, setListCollaborator] = useState(baseCollaborator);
    const [auxList, setAuxList]= useState(baseCollaborator);


    // Función que envía el formulario
    const enviarFormulario = (e) => {
        e.preventDefault();
        if(!nameCollaborator || !emailCollaborator ){
            alert("Llenar los campos vacios")
        }
        else{
            setListCollaborator([...listCollaborator, {
                id: nanoid(),
                name: nameCollaborator,
                email: emailCollaborator,
            }])
            setAuxList(listCollaborator)
        }
       
    }
    //se crea funcion filtrar
    const searchCollaborator = (searchInput) => {
        setAuxList(listCollaborator)
        if (searchInput !== '') {
            let lisFilter = listCollaborator.filter((ele) => (ele.name.includes(searchInput)))
            setAuxList(lisFilter)
        }
    }

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar><h1>Listado Colaboradores</h1></Navbar>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar un Colaborador"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e) => searchCollaborator(e.target.value)}
                                />
                            </Form>
                        </Navbar>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='containerForm'>
                <Form onSubmit={enviarFormulario}>
                    <Form.Group className="mb-3" name="nameCollaborador" value={nameCollaborator} onChange={e => setNameCollaborator(e.target.value)}>
                        <Form.Label>Nombre del Colaborador</Form.Label>
                        <Form.Control type="type" placeholder="Ingresa su nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" value={emailCollaborator} name="emailCollaborator" onChange={e => setEmailCollaborator(e.target.value)}>
                        <Form.Label>Email del Colaborador</Form.Label>
                        <Form.Control placeholder="Ingresa su email" />
                    </Form.Group>
                    <div className='contentButton'>
                        <Button variant="primary" type="submit">
                            Agregar Colaborador
                        </Button>
                    </div>

                </Form>
            </div>
            <div className='contentCollaborator'>
                <h3>Listado de Colaboradores</h3>
                <ul>
                    {auxList.map(collaborator =>
                        <li key={collaborator.id}> {collaborator.name} - {collaborator.email}
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Collaborators