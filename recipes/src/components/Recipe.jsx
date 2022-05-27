import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Recipe = ({ recipe: { id, title, description, url, prep_time, cook_time, servings, ingredients, instructions, likes, dislikes, video_url, helpful_tip, notes } }) => {
  const [show, setShow] = React.useState(false);
  const [like, setLikes] = React.useState(likes);
  const [dislike, setDislikes] = React.useState(dislikes);

  const showInAndIn = () => setShow(!show);
  const increaseLikes = () => setLikes(like + 1);
  const increaseDislikes = () => setDislikes(dislike + 1);

  return (
    <>
      <Card
        bg="dark"
        key="dark"
        text="white">
        <Card.Img variant="top" src="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ListGroup horizontal style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>

            <ListGroupItem><Card.Subtitle className="text-center">Prep Time: {prep_time} </Card.Subtitle></ListGroupItem>
            <ListGroupItem><Card.Subtitle className="text-center">Cook Time: {cook_time}</Card.Subtitle></ListGroupItem>
            <ListGroupItem><Card.Subtitle className="text-center">Servings: {servings}</Card.Subtitle></ListGroupItem>
          </ListGroup>
          <br />

          <Button onClick={increaseLikes} variant="outline-secondary" className='w-25' style={{ margin: "2px" }}><FontAwesomeIcon icon={faThumbsUp} /><br></br>{likes}</Button>
          <Button onClick={increaseDislikes} variant="outline-secondary" className='w-25' style={{ margin: "2px" }}><FontAwesomeIcon icon={faThumbsDown} /><br></br>{dislikes}</Button>
        </Card.Body>
        <Card.Footer>
          <div id={id} className={show ? "open" : "close"}>
            {show ?
              <div>
                <h3 className='text-start'>Ingredients</h3>
                <ol className="text-start">
                  {ingredients.map((ingredient) => (<li key={ingredient} style={{padding: "1%"}}><b>{ingredient}</b></li>))}
                </ol>

                <h3 className='text-start'>Method</h3>
                <ol className="text-start">
                  {instructions.map((instruction) => (<li key={instruction} style={{padding: "1%"}}><b>{instruction}</b></li>))}
                </ol>
              </div> : null
            }
          </div>
          <Button onClick={showInAndIn} className='w-100' variant='secondary'>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Recipe;