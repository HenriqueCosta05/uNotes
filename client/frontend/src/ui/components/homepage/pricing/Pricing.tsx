import { Button, Card, CardTitle } from "react-bootstrap";

interface PricingProps {
  cardTitle: string;
  cardPrice: string;
  cardDescription: string;
  features: Array<string>;
  buttonText: string;
}
export default function Pricing({cardTitle, cardDescription, cardPrice, features, buttonText}: PricingProps) {
  
  return (
    <section id="pricing">
      <Card className="sm:w-9/10 mb-12 lg:w-72 rounded-2 mt-28 mx-2" style={{ backgroundColor: "rgb(233 213 255)" }}>
        <Card.Body style={{ color: "rgb(46 16 101)", borderRadius:"15px", display:"flex", flexDirection: "column", }}>
          <Card.Title style={{fontSize: "36px", fontWeight: "900"}} className="m-auto">{cardTitle}</Card.Title>
          <Card.Subtitle style={{fontSize: "24px", textAlign: "center"}}>{cardPrice}</Card.Subtitle>
          <Card.Text>
            {cardDescription}
            {features && features.map((feature, index) => {
              return <li key={index}>{feature}</li>
            }
            )}
          </Card.Text>
        <Button variant="primary" style={{margin: "auto"}}>{buttonText}</Button>
        </Card.Body>
        </Card>
    </section>
  )
}
