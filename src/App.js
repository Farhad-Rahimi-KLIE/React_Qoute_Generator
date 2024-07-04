import React, { useEffect,useRef, useState } from "react";
import './App.css'
const App = () => {
  const [qoute,setQoute] = useState('');
  const refQoute = useRef();
  const colors = ['#ffff00','#98ee90','#ffa500','#ff68ff','#a9a9e7'];
  
   const getQoute = ()=>{
     fetch("https://type.fit/api/quotes").then((res)=> res.json()).then((data)=>{
      console.log(data)
      let RandomData = Math.floor(Math.random()*data.length);
      setQoute(data[RandomData]);
    })
   }
  
   useEffect(()=>{
    getQoute();
   },[])
  
   useEffect(()=>{
    refQoute.current.style.color = colors[Math.floor(Math.random()*colors.length)];
   },[qoute])
  return (
      <div className="App">
      <div className="qoute">
       <p ref={refQoute}>{qoute.text}</p>
       <p>Author : {qoute.author}</p>
       <div className="BtnContainer">
         <button onClick={getQoute} className="btn">Get Qoute </button>
       </div>
      </div>
     </div>
  )
}

export default App

