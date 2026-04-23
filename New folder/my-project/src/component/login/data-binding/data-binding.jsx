import { useEffect, useState } from "react";


export function DataBinding(){
    const [val, setVal]= useState();
    const [mfd, setMfd]= useState();
    const [title] = useState('Data Binding');
    useEffect(()=>{
         setMfd(Date());
         setVal('bg-dark p-2')
    },[])
    return(
       <div className="container-fliuid">
         <h2 className={`text-center text-warning ${val}`}>{title.toUpperCase} data binding</h2>
         current data and time : {mfd}
        </div>
    )
}