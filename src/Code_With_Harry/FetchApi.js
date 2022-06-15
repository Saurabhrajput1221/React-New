import React, { useEffect, useState } from "react";

export default function FetchApi() {
  //   const [Users, fetchUsers] = useState([]);
  const [PracticeApi, SetPracticeApi] = useState([]);
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


  {    /* ***************Api 2 Practice************************************ */  }
 useEffect(()=>{
     fetch('https://reqres.in/api/users?page=2')
     .then((PrApi)=> PrApi.json())
     .then((PrApi)=>{
         console.log(PrApi);
         SetPracticeApi(PrApi);
     })
         
     
 }, [])

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

      {/* ***************Api 2 Practice************************************ */}
      <div>
          {PracticeApi.map((item, id)=>{
              return(
                  <li key={id}>
                      {/* <p>{item.emails}</p> */}
                  </li>
              )
          })}
      </div>
    </>
  );
}
