import { useState } from "react"

export function OneWay(){
    const [userName, setUserName] = useState();

    function handleNameChage(event){
        setUserName(event.target.value);
    }

    return(
        <div className="container-fluid">
            <h2>One Way Binding</h2>
            <label htmlFor="">User Name</label>
            <input type="text" onChange={handleNameChage} value={userName}/>

            <h3>Hello ! {userName}</h3>
        </div>
    )
}