import React from "react";
import { Accordion } from "react-bootstrap";

const QuestionList = ({ data,deleteOneHandle }) => {
  return (
    <Accordion defaultActiveKey="0" className="px-5 ms-5 py-3">
      {data != null ? (
        data.map((item, index) => {
          return (
            <Accordion.Item key={index} eventKey={item.id}>
              <Accordion.Header>
                <div className="m-auto"> {item.question}</div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between">
                  <p>{item.answer}</p>
                  <button onClick={()=>deleteOneHandle(item.id)} className="btn btn-danger d-inline">delete</button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })
      ) : (
        <h5>لا يوجد اساله الان </h5>
      )}
    </Accordion>
  );
};

export default QuestionList;
