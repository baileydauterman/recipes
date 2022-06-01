import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const NoMatches = () => {
    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Alert variant="danger">
                        No recipes where found matching your search term, try another!
                    </Alert>
                    <Col>
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="secondary" />
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default NoMatches;