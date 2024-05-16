import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then((t) => setData(t));
        console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{display:"flex",flexWrap:'wrap',justifyContent:'space-around'}}>
      {data.map((p) => (
       

<>
<Card style={{ width: '18rem',marginTop:"20px" }}>
      <Card.Header>Name:  {p.name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> Username: {p.username}</ListGroup.Item>
        <ListGroup.Item>Email: {p.email}</ListGroup.Item>
        <ListGroup.Item>Phone: {p.phone}</ListGroup.Item>
      </ListGroup>
    </Card>
    </>
    

        
       
      ))}
    </div>
  );
}

export default Fetch;
