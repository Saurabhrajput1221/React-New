import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import NewsItems from "./NewsItems";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page , setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

 const fetchMoreData = async () =>{
    setPage(page +1)
     const url = `https;//newsapi.org`
     let data = await fetch(url);
     let parseData = await data.json();
     setArticles(articles.concat[parseData.articles])
     setTotalResults(parseData.totalResults);
  }
  return (
    <>
      <NewsItems />

    </>
  );
}
News.defaultProps = {
  country : 'in',
  pageSize: 8,
  categery: 'general'
}
News.propTypes ={
  country: propTypes.string,
  pageSize: propTypes.number,
  categery: propTypes.string

}
