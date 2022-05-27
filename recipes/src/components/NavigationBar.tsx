import React, { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavigationBar: React.FC = () => {
    const [show, toggleShow] = useState(true);

    return (
        <>
            <Navbar variant='dark' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Bailey</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="https://baileydauterman.github.io">Home</Nav.Link>
                            <Nav.Link href="https://baileydauterman.github.io/recipes">Recipes</Nav.Link>
                            <Nav.Link href="https://baileydauterman.github.io/travels">Travels</Nav.Link>
                            <Nav.Link href="https://baileydauterman.github.io/projects" disabled>Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;