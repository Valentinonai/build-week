import { Card, Form } from "react-bootstrap";
import { SingleJob } from "./SingleJob";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getListWorkAction } from "../redux/action";

export const WorksList = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const findJobs = useSelector((state) => state.linkedin.jobs);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getListWorkAction(query));
  };

  return (
    <>
      <Form className="mt-2" onSubmit={handleSubmit}>
        <Form.Control type="search" value={query} onChange={handleChange} />
      </Form>
      <Card className="mt-2 allCards p-3">
        {findJobs?.data?.map((el) => {
          return <SingleJob key={el?._id} data={el} />;
        })}
      </Card>
    </>
  );
};
