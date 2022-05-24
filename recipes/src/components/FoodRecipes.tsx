import React, { useState } from 'react';
import { Convert, Recipe } from "./RecipeParser";
import recipes from "./food.json";

import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


const Recipes: React.FC = () => {
    const [show, toggleShow,] = useState(true);

    const parseRecipes = Convert.toRecipe(JSON.stringify(recipes));
    const toggleShowToast = () => showToast;

    function showToast() {
        <>
            <ToastContainer className='p-3' position='middle-center'>
                <Toast>
                    <Toast.Header closeButton={true}>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Test</strong>
                        <small></small>
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    }

    return (
        <Row xs={1} md={2} className="g-4">
            {parseRecipes.map((element) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                        <Card.Body>
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Subtitle className="text-start">Prep Time: {element.prep_time} </Card.Subtitle>
                            <Card.Subtitle className="text-start">Cook Time: {element.cook_time}</Card.Subtitle>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{element.description}</ListGroupItem>
                            </ListGroup>
                            <div>
                                {element.likes} <Button variant="outline-secondary" className='w-25' style={{ margin: "2px" }}><FontAwesomeIcon icon={faThumbsUp} /></Button>
                                <Button variant="outline-secondary" className='w-25' style={{ margin: "2px" }}><FontAwesomeIcon icon={faThumbsDown} /></Button> {element.dislikes}
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <h3 className='text-start'>Ingredients</h3>
                            <ol className="text-start">
                                {element.ingredients.map((ingredient) => (<li>{ingredient}</li>))}
                            </ol>

                            <h3 className='text-start'>Method</h3>
                            <ol className="text-start">
                                {element.instructions.map((instruction) => (<li>{instruction}</li>))}
                            </ol>
                            <Button onClick={toggleShowToast} className="w-100" variant="dark">
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Recipes;