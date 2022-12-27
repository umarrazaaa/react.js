import React from "react";

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)


function PropsProps(props) {
  return (
    

  <div>
      <div style={{justifyContent:'center',marginLeft:'100px'}}>
        <h1>Learning {props.name} </h1>
        <p> The <b>var</b> has a <i><b>function</b></i> scope not a <i><b>Block</b></i> scope</p>
        <p> The <b>let</b> has a <i><b>Block</b></i> scope</p>
        <p> The <b>const</b> has a <i><b>Block</b></i> scope</p>
        <p>const is variable that once it has been created , its value can never change</p>
        
      <details>
        <summary>Const KeyWord</summary>
        <p>
          
          It does not define a constant value. It defines a constant reference to a value.
    <br></br>
          Because of this you can NOT:
    <br></br>

          Reassign a constant value
    <br></br>

          Reassign a constant array
    <br></br>

          Reassign a constant object
    <br></br>

          But you CAN:
    <br></br>

          Change the elements of constant array
    <br></br>

          Change the properties of constant object 
</p>
      </details>




    </div>
    </div>
  );
}

export default PropsProps;
