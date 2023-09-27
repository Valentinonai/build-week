import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsPersonAdd } from "react-icons/bs";

const UserCards = (props) => {
  const [users, setusers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
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
        setusers(data.filter((_, i) => i < props.userMax));
        setIsLoading(true);
      } else {
        throw new Error(resp.status);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const goToUser = (userId) => {
    navigate("/profile/" + userId);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //   return users && users.map((comm) => <h1>ciao</h1>);

  return (
    users &&
    users.map((user, i) => (
      <div className='user-card' key={`user${i}`}>
        <Row>
          <Col xs='auto'>
            <img
              src={
                user.image ? user.image : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
              alt='user img'
              className='img-fluid object-fit-cover rounded-circle'
              width={50}
              onClick={() => goToUser(user._id)}
            />
          </Col>
          <Col className='p-0 text-start'>
            <p onClick={() => goToUser(user._id)}>
              {user.name} {user.surname}
            </p>
            <span className='d-block' onClick={() => goToUser(user._id)}>
              {user.title}
            </span>

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
