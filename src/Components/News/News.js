import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const News = ({ article }) => {
  console.log(article);
  const { title, description, url, urlToImage } = article;
  return (
    <Col className="my-3" sm={12} md={6} lg={6}>
      <Card className="h-100">
        <Card.Header>Featured</Card.Header>
        <Card.Img
          style={{ height: "200px", width: "100%" }}
          variant="top"
          src={urlToImage}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            style={{ color: "white", backgroundColor: "black" }}
            variant="default"
          >
            <a target="_blank" rel="noreferrer" href={url}>
              Read More
            </a>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default News;
