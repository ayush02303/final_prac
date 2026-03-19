const Third = ()=>{

    const fruits = [ "apple" , "cider" , "vinegar"]
    return(
        <>
        <h1>I exist</h1>
        <ul>{ fruits.map( item => <li key={item}>{item}</li>)}</ul>
        </>
    )

}
export default Third 