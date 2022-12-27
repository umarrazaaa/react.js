import React , {useState} from "react";


const styles = {
    heading:{
        color:"red",
        textAlign:"center",
        fontFamily:"calibri",
        fontSize:"46px"
    }
}

const UseState = () => {

    // define useState hook at top level

    const[count,setCount] = useState(10);

    return(
        <>
            <button style={styles.heading} onClick={()=> setCount(count + 1)} >increase</button>
            <h1 style={styles.heading} >{count}</h1>
            <button style={styles.heading} onClick={()=> (count === 0 ? setCount(0):setCount(count - 1))} >decrease</button>

        </>
    )
}

export default UseState;