import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Skeleton from '@mui/material/Skeleton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Recipe = (props) => {
    const theme = useTheme();
    const anchor = 'right';

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        console.log('handleDrawerOpen');
        setOpen(true);
    };

    const handleDrawerClose = () => {
        console.log('handleDrawerClose');
        setOpen(false);
    };

    const details = (ingredients, instructions) => (
        <Box
            role="presentation"
            onClick={handleDrawerOpen}
            onKeyDown={handleDrawerOpen}
        >
            <List>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Ingredients</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding='checkbox'>
                                            <Checkbox
                                                color="primary"
                                                inputProps={{
                                                    'aria-label': 'select all desserts',
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>Ingredient</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ingredients.map((ingredient) => (
                                        <TableRow key={ingredient.name}>
                                            <Checkbox
                                                color="primary"
                                                inputProps={{
                                                    'aria-label': 'select all desserts',
                                                }}
                                            />
                                            <TableCell align="left">{ingredient}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Instructions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding='checkbox'>
                                            <Checkbox
                                                color="primary"
                                                inputProps={{
                                                    'aria-label': 'select all desserts',
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>Method</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {instructions.map((instruction) => (
                                        <TableRow key={instruction.name}>
                                            <Checkbox
                                                color="primary"
                                                inputProps={{
                                                    'aria-label': 'select all desserts',
                                                }}
                                            />
                                            <TableCell align="left">{instruction}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
            </List>
        </Box>
    );

    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <CardActionArea onClick={handleDrawerOpen}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Skeleton variant="rectangular" width={100} height={100} />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto', overflow: "hidden", textOverflow: "ellipsis", width: '16rem' }}>
                                <Typography noWrap component="div" variant="h7">
                                    {props.recipe.title}
                                </Typography>
                                <Typography noWrap variant="subtitle2" color="text.secondary" component="div">
                                    {props.recipe.description}
                                </Typography>
                            </CardContent>

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <IconButton aria-label="share">
                                    <IosShareIcon />
                                </IconButton>
                                <IconButton aria-label="favorite">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="open">
                                    <ArrowForwardIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </CardActionArea>
                <SwipeableDrawer
                    anchor="right"
                    open={open}
                    onClose={handleDrawerClose}
                    onOpen={handleDrawerOpen}
                    disableSwipeToOpen={true}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, pt: 2 }}>
                        <IconButton aria-label="close" onClick={handleDrawerClose}>
                            <ArrowBackIosNewIcon />
                        </IconButton>
                    </Box>

                    {details(props.recipe.ingredients, props.recipe.instructions, anchor)}
                </SwipeableDrawer>
            </Card>
        </>
    );
}

export default Recipe;