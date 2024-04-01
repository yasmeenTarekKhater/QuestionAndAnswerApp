import { Button, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

import FormInputs from "./components/FormInputs";
import QuestionList from "./components/Q&AList";
import { questionAndAnswerList } from "./data";


function App() {
  const [data,setData]=useState(questionAndAnswerList);
  const dataLocal=JSON.parse(localStorage.getItem("questionsAndAnswers"));

  const notify = (message,type) =>{
    if(type==="success") toast.success(message);
    else if(type==="error") toast.error(message);
  };

  const addhandle=()=>{
    localStorage.setItem("questionsAndAnswers",JSON.stringify([...questionAndAnswerList]));
    setData([...questionAndAnswerList]);
    notify("تم الاضافه بنجاح","success")
  }

  const deleteAllHandle=()=>{
    localStorage.removeItem("questionsAndAnswers");
    questionAndAnswerList.splice(0,questionAndAnswerList.length);
    setData([]);//delete all items in browser screen but array still have data so i should splice it
    // console.log(questionAndAnswerList)
    notify("تم حذف الكل بنجاح","success")

  }

  const deleteOneHandle=(questionId)=>{
    if(dataLocal != null){
      const foundedQuestionIndex=questionAndAnswerList.findIndex(item=>item.id===questionId);
      questionAndAnswerList.splice(foundedQuestionIndex,1);
      localStorage.setItem("questionsAndAnswers",JSON.stringify([...questionAndAnswerList]));
      setData([...questionAndAnswerList]);
      notify("تم حذف السؤال بنجاح","success")

      //handle if all items deleted from local storage donot show مسح الكل button
      if (questionAndAnswerList.length===0){
        deleteAllHandle();
      }
    }
  }

  

  return (
    <div className="App text-center">
      <Container>
        <Row className="justify-content-center py-5">
          <Col sm="3" className="mt-2">
            <h3>أساله و اجوبه شاءعه</h3>
          </Col>
          <Col sm="9" >
            <FormInputs addhandle={addhandle} notify={notify}/>
            <QuestionList data={dataLocal} deleteOneHandle={deleteOneHandle}/>
            {dataLocal != null ?(
              <Button onClick={deleteAllHandle} className="btn btn-danger w-50 ms-5">
              مسح الكل
            </Button>
            ):null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
