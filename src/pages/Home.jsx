import React, { useState } from "react";
//import { useAuth } from "../context/AuthProvider";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { Button, Col, Row } from "react-bootstrap";

const Home = () => {
  //const { user } = useAuth();
  const [showTaskDone, setShowTaskDone] = useState(false);

  return (
    <>
      <Row className="pt-4">
        <Col>
          <TaskForm />

          <header className="d-flex justify-content-between my-3">
            <span className="h5">
              {showTaskDone ? "Tasks done" : "Tasks to do"}
            </span>

            <Button
              variant="dark"
              className="btn-sm"
              onClick={() => setShowTaskDone(!showTaskDone)}
            >
              {showTaskDone ? "Show tasks to do" : "Show tasks done"}
            </Button>
          </header>

          <TaskList done={showTaskDone} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
