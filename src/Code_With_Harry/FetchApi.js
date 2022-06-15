import React, { useEffect, useState } from "react";

export default function FetchApi() {
  const [Users, fetchUsers] = useState([]);
  //   {
  /* ******************Fetch Api******************** */
  //   }
  // Data will be calling again and again that's why we are us UseEffect Hook to To stop data rendering agian and again
  //   <h6>Fetch Api </h6>;
  /***************Without UseEffect**************************** */
  //  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6163cbe259744c738cdacf330afb4d17').then(
  //    response =>{
  //      return response.json();
  //    }
  //  ).then(
  //    data =>{
  //    window.document(data);
  //    }
  //  )
  //  console.log((5+6))
  // document.write(6+7)

  /***************With UseEffect**************************** */
  //   useEffect(() => {
  //     fetch(
  //       "https://newsapi.org/v2/top-headlines?country=us&apiKey=6163cbe259744c738cdacf330afb4d17"
  //     )
  //       .then((resposne) => {
  //          resposne.json();
  //       })
  //       .then((response) => {
  //         console.log(resposne);
  //         setdata(resposne);
  //       });
  //   }, []);

  
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchUsers(res);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {/* <div> Fetching Api Data </div> */}
      <ul>
        {Users.map((item, id )=>{
           return          <li key={id}>
           <p> Name = {item.name}</p>
           <h1>This is my mail Id = {item.email}</h1> 
            <p>This is UserName = {item.username}</p>
            <p>This is city address =  {item.address.city}</p>
            <p>This is Zip Code =  {item.address.zipcode}</p>
         </li>
       })}
      </ul>
      {/* <ul>
        {Users.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul> */}
    </>
  );
}
