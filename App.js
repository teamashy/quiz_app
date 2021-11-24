import React, {useState, useEffect} from 'react';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium';

function App() {
const [questions, setQuestions]= useState([]);

 useEffect(() => {
   fetch(API_URL)
   .then((res) => res.json())
   .then((data) =>{
     setQuestions(data.results);
     console.log(data);
   });
 }, []);



  return (

    questions.length > 0? (


      <div className="container">
      <div className='bg-white text-purple-800 p-10 rounded shadow-md'>
        <h2 className='text-2xl'

        dangerouslySetInnerHTML= {{__html: questions[0].question}}
        />
      </div>

    <div className='mt-6 grid grid-cols-2 gap-6 '>
      <button className='bg-white  p-4 text-purple-800 font-semibold rounded shadow '>
        {questions[0].correct_answer}
      </button>
      <button className='bg-white  p-4 text-purple-800 font-semibold rounded shadow '>
      {questions[0].incorrect_answers[0]}
      </button>
      <button className='bg-white  p-4 text-purple-800 font-semibold rounded shadow'>
      {questions[0].incorrect_answers[1]}
      </button>
      <button className='bg-white  p-4 text-purple-800 font-semibold rounded shadow'>
      {questions[0].incorrect_answers[2]}
      </button>

      </div>
    </div>


    ) : (
      <h1 className= 'text-2xl text-white font-bold'>loading.....</h1>
    )

   
   
  );
}

export default App;
