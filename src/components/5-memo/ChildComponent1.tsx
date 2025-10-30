import  { memo } from "react";
type propstype={
    value:number
}
const Child = ( props:propstype) => {
  console.log("New Child rendered");
  return <p>Child Value: {props.value}</p>;
};

export default memo(Child)