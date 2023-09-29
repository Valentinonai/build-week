import { Container, Row } from "react-bootstrap";
import SingleJob from "./SingleJob";
import { useEffect, useState } from "react";
import Company from "./Company";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH } from "../redux/action";

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => {
    return state.searchJobs.content;
  });
  useEffect(() => {
    fetchJobs();
  }, []);
  const fetchJobs = async () => {
    const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs");
    if (response.ok) {
      const res = await response.json();
      const job = res.data;
      console.log(job);
      dispatch({ type: SEARCH, payload: job });
    } else {
      console.log("Error1");
    }
  };
  return (
    <Container>
      <Row></Row>
      <Row md={4} xs={1}>
        {jobs.map((job) => {
          return <SingleJob job={job} key={job._id} />;
        })}
        ;
      </Row>
      <Company />
      <Category />
    </Container>
  );
};
export default Jobs;
