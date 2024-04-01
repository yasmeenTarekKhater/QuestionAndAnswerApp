import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { questionAndAnswerList } from '../data';

const FormInputs = ({addhandle,notify}) => {
  const [question,setQuestion]=useState('');
  const [answer,setanswer]=useState('');

  const addNewQuestion=()=>{
    if(question === "" || answer === ""){
      notify('من فضلك ادخل البيانات','error');
    }else{
      questionAndAnswerList.push({id:Math.random(),question,answer});
    setQuestion('');
    setanswer('');
    addhandle();
    // console.log(questionAndAnswerList)
    }
    
  }

  return (
   <Row className="justify-content-center">
    <Col md="4" className='my-2'>
    <Form.Control type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="ادخل السوءال" />
    </Col>
    <Col md="4" className='my-2'>
    <Form.Control type="text" value={answer} onChange={(e)=>setanswer(e.target.value)} placeholder="ادخل الأجابه" />
    </Col>
    <Col md="3" className='my-2'>
    <button onClick={addNewQuestion} className='btn-color ' variant="primary" type="submit">
        أضف
    </button>
    </Col>
    
   </Row>
  )
}

export default FormInputs