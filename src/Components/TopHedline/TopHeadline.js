import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import News from "../News/News";
const TopHeadline = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=18d02da3b3f44530b826851cd8a3850c";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <Container>
      <Row>
        {articles.map((article) => (
          <News article={article}></News>
        ))}
      </Row>
    </Container>
  );
};

export default TopHeadline;
