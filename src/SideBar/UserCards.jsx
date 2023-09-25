import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BsPersonAdd } from "react-icons/bs";

const UserCards = () => {
  const [users, setusers] = useState([]);
  const fetchUsers = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        setusers(data.filter((_, i) => i < 5));
      } else {
        throw new Error(resp.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //   return users && users.map((comm) => <h1>ciao</h1>);

  return (
    users &&
    users.map((user) => (
      <div className='user-card'>
        <Row>
          <Col xs='auto'>
            <img
              src={
                user.image ? user.image : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
              alt='user img'
              className='img-fluid object-fit-cover rounded-circle'
              width={50}
            />
          </Col>
          <Col className='p-0 text-start'>
            <p>
              {user.name} {user.surname}
            </p>
            <span className='d-block'>{user.title}</span>

            <Button variant='outline-secondary' className='rounded-4 py-1 mt-2 '>
              <BsPersonAdd /> Segui
            </Button>
          </Col>
        </Row>
      </div>
    ))
  );
};

export default UserCards;
