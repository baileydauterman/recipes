import React from 'react';
import recipes from "./food.json";
import { Convert } from "./RecipeParser";
import { useTheme } from '@mui/material/styles';

import Recipe from "./Recipe";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const NoMatches = () => {
    <Box>
        <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
        </Alert>
    </Box>
}

const parseRecipes = Convert.toRecipe(JSON.stringify(recipes));


const RecipesPage = (query) => {

    let recipesCount = 0;
    let searchString = query.query.toString();
    const theme = useTheme();

    return (
        <>
            <Container>
                <Row xs={1} md={2} lg={3} xl={4}>
                    {parseRecipes.filter((r) => {
                        if (searchString === '') {
                            recipesCount++
                            return r
                        } else if (r.title.toLowerCase().includes(searchString.toLowerCase())) {
                            recipesCount++
                            return r
                        } else if (r.ingredients.toString().toLowerCase().includes(searchString.toLowerCase())) {
                            recipesCount++
                            return r
                        } else if (r.instructions.toString().toLowerCase().includes(searchString.toLowerCase())) {
                            recipesCount++
                            return r
                        }
                    }).map((r) =>
                        <Col>
                            <br />
                            <Recipe recipe={r}/>
                        </Col>
                    )}

                    {recipesCount === 0 ? <NoMatches /> : null}
                </Row>
            </Container>
        </>
    )
};

export default RecipesPage;
