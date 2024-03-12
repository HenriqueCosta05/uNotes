import { Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle } from "react-bootstrap";
import React, { useState } from 'react';

interface NoteProps {
  title: string;
  description: string;
  files?: [];
  noteId: string;
  imgLink?: string;
}

interface NoteListProps {
  notesNumber: number,
  
}

export default function NoteList({notesNumber}: NoteListProps, {title, description, files, noteId, imgLink}: NoteProps) {
  const [cards, setCards] = useState([]);

  const cardsNumber = notesNumber;

  useState(() => {
    const tempCards = [];
    for (let i = 0; i < cardsNumber; i++) {
      tempCards.push(i);
    }
    setCards(tempCards);
  }, []);

  return (
    <div className="flex justify-center items-start mx-auto flex-wrap">
      {cards.map((cardNumber: number) => (
        <Note key={cardNumber} title={title} description={description} noteId={noteId} />
      ))}
    </div>
  );
}

interface NoteProps {
  title: string;
  description: string;
}

function Note({ title, description, noteId, imgLink}: NoteProps) {
  return (
    <Card className="m-2" onClick={() => {}} style={{width: "20" + "rem"}}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          {description}
        </CardText>
        <CardImg src={imgLink}></CardImg>
      </CardBody>
      <CardFooter>
        <CardText>Note id: {noteId}</CardText>
      </CardFooter>
    </Card>
  );
}
