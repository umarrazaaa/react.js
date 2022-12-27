import React , {useState , useEffect}  from "react";


const UseEffect = () => {

    const [screenWidth , setScreenWidth] = useState(window.screen.width);

    const currentScreenWidth =()=>{
        setScreenWidth(()=>window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize",currentScreenWidth);
        document.title= screenWidth;
        return () => {
            window.removeEventListener("resize", currentScreenWidth);
          };
    },[screenWidth])

    return(
        <>
            <h1 style={{textAlign:'center'}}>My Screen width is {screenWidth} </h1>
        </>
    )
}

export default UseEffect;