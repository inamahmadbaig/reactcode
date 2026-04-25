import { useState } from "react"

export function StyleBinding(){

    const [textColor , setTextColor] = useState({color:'black'});

    function GetColore(color){
        setTextColor({color:color})
    }
    function ResetColor(){
        setTextColor({color:'black'})
    }

    return(
        <div className="container-fluid">
            <h2>Style Binding</h2>
            <div className="d-flex">
                <div onMouseOver={()=> GetColore('red')} onMouseOut={()=> ResetColor('black')} style={{backgroundColor:'red',height:'50px',width:'50px'}}></div>
                <div onMouseOver={()=> GetColore('green')} onMouseOut={()=> ResetColor('black')} style={{backgroundColor:'green', height:'50px',width:'50px'}}></div>
                <div onMouseOver={()=> GetColore('blue')} onMouseOut={()=> ResetColor('black')} style={{backgroundColor:'blue', height:'50px',width:'50px'}}></div>
            </div>
            <div>
                <h1 style={textColor}>Mariyam Fatima Baig</h1>
            </div>
        </div>
    )
}