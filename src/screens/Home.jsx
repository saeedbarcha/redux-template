import React, {useEffect, useState} from 'react';
import { Container, Row, Button,Card, Col } from 'react-bootstrap';
import UserCard from '../conponents/UserCard';
import axios from 'axios';
import {useGetUsersQuery} from "../slices/userApiSlice"
const Home = () => {
  // const [users, setUsers] = useState([]);
  const { data: users, refetch, isLoading, error } = useGetUsersQuery()

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => setUsers(data));
  // }, []);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(response => {
  //       setUsers(response.data);
  //     })
  //     .catch(error => {
  //       alert("There was an error fetching the user data!", error);
  //     });
  // }, []);

  return (
    <div>
      <h1>home page</h1>
      <div className='bg-danger' style={{ height: "600px" }}>
        <h1>Hero section</h1>
      </div>
      <div className='bg-primary' style={{ height: "600px" }}>
        <h1>Gallery setion</h1>
      </div>
      <div className='bg-success' style={{ height: "600px" }}>
        <h1>About Us section</h1>
      </div>

      <div className='' style={{ height: "600px" }}>
        <h1>team section</h1>
        <Container>
          <Row>
          {users.map(user => (
          <Col key={user.id} sm={12} md={6} lg={4} xl={3}>
            <UserCard user={user} />
          </Col>
        ))}
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default Home;
