import { Button, Card } from "react-bootstrap";

interface FeaturesProps {
  cardTitle: string;
  cardDescription: string;
  imgUrl: string;
  buttonText: string;
}

export default function Features({ cardTitle, cardDescription, imgUrl, buttonText }: FeaturesProps) {
  return (
    <section id="features">
      <Card className=" sm:w-9/10 lg:w-64 rounded-2 mt-28 mx-2">
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body style={{backgroundColor: "rgb(46 16 101)", color: "rgb(255, 250, 255)"}}>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>
          {cardDescription}
        </Card.Text>
        <Button variant="primary" style={{margin: "auto"}}>{buttonText}</Button>
      </Card.Body>
    </Card>
    </section>
    
  );
}