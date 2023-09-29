import { useEffect, useState } from "react";
import { Col, Container, Pagination, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addErrorMessageAction,
  fetchPost,
  hasErrorTrueAction,
  isLoadingFalseAction,
  isLoadingTrueAction
} from "../redux/action";
import SinglePost from "./SinglePost";
import FormHome from "./FormHome";
import NewsSidebar from "../SideBar/NewsSidebar";
import PromoCard from "../SideBar/PromoCard";
import SidebarFooter from "../SideBar/SidebarFooter";
import Sidebar from "./Sidebar";

const Home = () => {
  const posts = useSelector(state => state.post.data);
  const isLoading = useSelector(state => state.currentUser.isLoading);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState("");
  const [postText, setPostText] = useState();
  const [modifica, setModifica] = useState(false);
  const [idPost, setIdPost] = useState("");

  const fetchUser = async () => {
    try {
      dispatch(isLoadingTrueAction());
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        }
      });
      if (resp.ok) {
        const data = await resp.json();
        setProfile(data);
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(resp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("si e' verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
  const delPost = async postId => {
    try {
      console.log("cancella");
      dispatch(isLoadingTrueAction());
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        }
      });
      if (resp.ok) {
        dispatch(fetchPost());
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(resp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("si e' verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
  useEffect(() => {
    dispatch(fetchPost());
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [page, setPage] = useState(1);

  return isLoading ? (
    <div className="mt-5 d-flex justify-content-center">
      <Spinner
        animation="border"
        role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <Container
      fluid="lg"
      className="my-3">
      <Row>
        <Col
          xs={12}
          md={2}
          lg={2}>
          <Sidebar profile={profile} />
        </Col>
        <Col
          xs={12}
          md={10}
          lg={7}>
          <FormHome
            profile={profile}
            handleClose={handleClose}
            handleShow={handleShow}
            show={show}
            setPostText={setPostText}
            postText={postText}
            modifica={modifica}
            setModifica={setModifica}
            idPost={idPost}
          />

          {posts &&
            profile &&
            posts
              .filter(elem => elem.user._id === profile._id)
              .toReversed()
              .map((elem, i) => (
                <SinglePost
                  elem={elem}
                  key={`post${i}`}
                  cancella={delPost}
                  profile={profile}
                  handleClose={handleClose}
                  handleShow={handleShow}
                  show={show}
                  setPostText={setPostText}
                  setModifica={setModifica}
                  setIdPost={setIdPost}
                />
              ))}
          <hr />

          {console.log(posts, "LEG")}
          {posts.toReversed().map(
            (elem, i) =>
              i >= page * 5 - 5 &&
              i < page * 5 && (
                <SinglePost
                  elem={elem}
                  key={`post${i}`}
                  cancella={delPost}
                  profile={profile}
                  handleClose={handleClose}
                  handleShow={handleShow}
                  show={show}
                  setPostText={setPostText}
                  setModifica={setModifica}
                  setIdPost={setIdPost}
                />
              )
          )}
          <div className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Item
                active={page === 1}
                onClick={() => {
                  setPage(1);
                }}>
                {1}
              </Pagination.Item>
              <Pagination.Item
                active={page === 2}
                onClick={() => {
                  setPage(2);
                }}>
                {2}
              </Pagination.Item>
              <Pagination.Item
                active={page === 3}
                onClick={() => {
                  setPage(3);
                }}>
                {3}
              </Pagination.Item>
              <Pagination.Item
                active={page === 4}
                onClick={() => {
                  setPage(4);
                }}>
                {4}
              </Pagination.Item>
              <Pagination.Item
                active={page === 5}
                onClick={() => {
                  setPage(5);
                }}>
                {5}
              </Pagination.Item>
              <Pagination.Item
                active={page === 6}
                onClick={() => {
                  setPage(6);
                }}>
                {6}
              </Pagination.Item>
              <Pagination.Item
                active={page === 7}
                onClick={() => {
                  setPage(7);
                }}>
                {7}
              </Pagination.Item>
              <Pagination.Item
                active={page === 8}
                onClick={() => {
                  setPage(8);
                }}>
                {8}
              </Pagination.Item>
              <Pagination.Item
                active={page === 9}
                onClick={() => {
                  setPage(9);
                }}>
                {9}
              </Pagination.Item>
              <Pagination.Item
                active={page === 10}
                onClick={() => {
                  setPage(10);
                }}>
                {10}
              </Pagination.Item>
            </Pagination>
          </div>
        </Col>
        <Col
          xs={12}
          lg={3}>
          <NewsSidebar />
          <div style={{ position: "sticky", top: "100px" }}>
            <PromoCard />
            <SidebarFooter />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
