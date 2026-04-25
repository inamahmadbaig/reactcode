
export function EventDemo(){

    function InsertClick(...msg){
        console.log(msg);
    }
    return(
        <div className="container-fluid">
            <h2>Event Demo</h2>
            <button onClick={()=> InsertClick(1, 'TV',true)}>insert</button>
        </div> 
    )    
}


