import React, { useState } from 'react';
import './Recipe.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Recipe = ({ recipe: { id, title, description, url, prep_time, cook_time, total_time, from, by, ingredients, instructions, likes, dislikes, video_url, helpful_tip, notes } }) => {
  const [show, setShow] = React.useState(false);
  const showInAndIn = () => setShow(!show);

  return (
    <>
      <Card>
        <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="text-start">Prep Time: {prep_time} </Card.Subtitle>
          <Card.Subtitle className="text-start">Cook Time: {cook_time}</Card.Subtitle>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{description}</ListGroupItem>
          </ListGroup>
          <div>
            {likes} <Button variant="outline-secondary" className='w-25' style={{ margin: "2px" }}><FontAwesomeIcon icon={faThumbsUp} /></Button>
            <Button variant="outline-secondary" className='w-25' style={{ margin: "2px" }}><FontAwesomeIcon icon={faThumbsDown} /></Button> {dislikes}
          </div>
        </Card.Body>
        <Card.Footer>
          <div id={id} className={show ? "open" : "close"}>
            {show ?
              <div>
                <h3 className='text-start'>Ingredients</h3>
                <ol className="text-start">
                  {ingredients.map((ingredient) => (<li key={ingredient}>{ingredient}</li>))}
                </ol>

                <h3 className='text-start'>Method</h3>
                <ol className="text-start">
                  {instructions.map((instruction) => (<li key={instruction}>{instruction}</li>))}
                </ol>
              </div> : null
            }
          </div>
          <Button onClick={showInAndIn} className='w-100' variant='dark'>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Recipe;