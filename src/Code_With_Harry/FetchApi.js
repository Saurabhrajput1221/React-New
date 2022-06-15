import React, { useEffect, useState } from "react";

export default function FetchApi() {
  //   const [Users, fetchUsers] = useState([]);
  // const [data, setdata] = useState([]);
  const [Img, setImg] = useState([]);

  //   {
  /* ******************Fetch Api******************** */
  {
    /* ***************Api 1************************************ */
  }
  //       const getData = () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         fetchUsers(res);
  //       });
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);

  {
    /* ***************Api 2 Practice************************************ */
  }
  // useEffect(() => {
  //   fetch(
  //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=6163cbe259744c738cdacf330afb4d17"
  //   )
  //     .then((PrApi) => PrApi.json())
  //     .then((PrApi) => {
  //       console.log(PrApi);
  //       setdata(PrApi.articles);
  //     });
  // }, []);
  {
    /* ***************Api 3 Practice at my own (Dirnk Api)************************************ */
  }
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=6163cbe259744c738cdacf330afb4d17")
      .then((dogImg) => dogImg.json())
      .then((dogImg) => {
        console.log(dogImg);
        setImg(dogImg.sources);
      });
  }, []);

  return (
    <>
      {/* <div> Fetching Api Data </div> */}
      {/* ***************Api 1************************************ */}
      {/* <ul>
        {Users.map((item, id) => {
          return (
            <li key={id}>
              <p> Name = {item.name}</p>
              <h1>This is my mail Id = {item.email}</h1>
              <p>This is UserName = {item.username}</p>
              <p>This is city address = {item.address.city}</p>
              <p>This is Zip Code = {item.address.zipcode}</p>
            </li>                
          );
        })}
      </ul> */}

      {/* ***************Api 2 Practice (News Api)************************************ */}
      {/* <div>
          {PracticeApi.map((page, id)=>{
              return(
                  <li key={id}>
                      
                  </li>
              )
          })}
      </div> */}
      {/* ***************Api 2 Practice (News Api)************************************ */}
      {/* <div className="container" >
        <div className="row">
          {data.map((value) => {
            return (
              <div className="col-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={value.urlToImage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">
                      {value.description}
                    </p>
                    <a href={value.url} className="btn btn-primary">
                      Read More
                    </a>
                    <p>{value.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      {/* ***************Api 3 Practice At my own (Drink Api) ************************************ */}

      <div className="container">
        <div className="row">
            {Img.map((value) => {
              return(
                <div className="col-3">

                <div className="card">
                  <h1>{value.title}</h1>
             <div className="card-body" key={value.id}>
               <h5 className="card-title">{value.category}</h5>
               <p className="card-text">{value.description}</p>
               <a href={value.url} className="btn btn-primary">Read More</a>
             </div>
           </div>
            </div>
               )
            })}
          </div>
      </div>
    </>
  );
}
