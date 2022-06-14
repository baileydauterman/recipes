import React from 'react';
import recipes from "./food.json";
import { Convert } from "./RecipeParser";
import Recipe from "./Recipe"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import NoMatches from './NoMatches';

const RecipesPage = () => {

    const [query, setQuery] = React.useState('');
    const parseRecipes = Convert.toRecipe(JSON.stringify(recipes));
    let recipesCount = 0;

    return (
        <>
            <Container style={{ padding: "1% 0 1% 0" }}>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={event => setQuery(event.target.value)}
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Container>

            <Container fluid>
                <Row xs={1} md={2} lg={3} xl={4}>
                    {parseRecipes.filter(recipe => {
                        if (query === '') {
                            recipesCount++;
                            return recipe
                        } else if (recipe.title.toLowerCase().includes(query.toLowerCase())) {
                            recipesCount++;
                            return recipe
                        } else if (recipe.ingredients.toString().toLowerCase().includes(query.toLowerCase())) {
                            recipesCount++;
                            return recipe
                        } else if (recipe.instructions.toString().toLowerCase().includes(query.toLowerCase())) {
                            recipesCount++;
                            return recipe
                        }
                    }).map((recipe) => (
                        <Col>
                            <Recipe recipe={recipe} style={{paddingTop: "1rem"}} />
                        </Col>
                    ))}
                </Row>

                {recipesCount === 0 &&
                    <NoMatches />}
            </Container>
        </>
    );
};

export default RecipesPage;
