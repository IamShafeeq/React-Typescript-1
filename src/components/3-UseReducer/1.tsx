import { useReducer } from "react";

const myreducer = (state:number,action:number) => {
    
 if(state==0 && action==-1){
  return state
 }

 return state+action
};

  const UseReducer0=()=> {
  const [data, setData] = useReducer(myreducer, 10);

  return (
    <div>
    The Data:{data}    
    <button onClick={()=> setData(+1)}> Increment  </button> --- 
    <button onClick={()=>setData(-1)}> Decerement  </button>
    </div>
  );
}
export default UseReducer0