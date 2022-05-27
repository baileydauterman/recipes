import React, { useState } from 'react';
import { Convert } from "./RecipeParser";
import Recipe from "./Recipe"
import recipes from "./food.json";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Recipes = () => {
    const [show, toggleShow,] = useState(true);

    const parseRecipes = Convert.toRecipe(JSON.stringify(recipes));

    return (
        <Container fluid>
            <Row xs={1} md={2} className="g-4">
                {parseRecipes.map((recipe) => (
                    <Col>
                        <Recipe recipe={recipe} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Recipes;