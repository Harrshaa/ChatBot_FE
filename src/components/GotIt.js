import React from 'react'
import App from '../../App'
import { useEffect,useState } from 'react'

const GotIt = (props)=>{
  const [gotItDone, setGotItDone] = useState(false);
  const initialAction = ()=>{
      props.actions.initialAction();
      document.getElementById("GotIt").style.display = "none";
      setGotItDone(true);
  }
  const afterGotIt = ()=>{
      props.actions.afterGotIt();
  }
  useEffect(()=>{
      if(gotItDone===true){
          afterGotIt();
      }
  },[gotItDone])
  return(
      <button id="GotIt" className="btn" onClick={()=> initialAction()}>Got It!</button>
  );
}
export default GotIt;

