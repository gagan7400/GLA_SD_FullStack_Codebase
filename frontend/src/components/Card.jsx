function Card(props) {
    let {title="default" ,message="default"} = props ;
    //props is used to recive data from parent comp
    return (
        <>
            <div className="card">
                <p>Title : {title}</p>
                <p>Message : {message}</p>
                <button>View Details </button>
            </div>
        </>
    )
}
export default Card ;

// task pricings cards in react 
// 1,4,7,8,11,17,18,20,26,30,35,36,38,39,40,42,44 ,45,48,49,51,63,64,65,