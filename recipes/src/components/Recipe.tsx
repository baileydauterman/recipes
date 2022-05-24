import React, { useState } from 'react';
import recipes from "./food.json";

import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Recipe: React.FC = () => {
  const [show, toggleShow] = useState(true);

  return (
    <>
        <Card style={{ width: '18rem', margin: '5' }}>
            <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
            <Card.Body>
                <Card.Title>Title Goes Here</Card.Title>
                <Card.Subtitle>05/19/2022</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </>
  );
};

export default Recipe;