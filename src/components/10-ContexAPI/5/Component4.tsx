import { useContext } from "react"
import trainerNameContext from "./ContextData"

function Component4() {

    const {trainer}=useContext(trainerNameContext)

    function subject(trainer){

        switch(trainer){
            case "Andy Smith": return " TypeScript Programming"
            case "Jordan H": return " Java Sprign Boot"
            case "Shafeeq": return " HTML and CSS"
            case "Cameron" : return "Javascript Programming"
        }
    }

    return (
      <>
        <div style={{backgroundColor:'#d3dcf5',padding:20,width:1000}}>
          <h2> Component-4</h2>
          Trainer Name:<b>{trainer} </b>
          <br/>
          and he teaches {subject(trainer)}
        </div>
      </>
    )
  }
  
  export default Component4
  