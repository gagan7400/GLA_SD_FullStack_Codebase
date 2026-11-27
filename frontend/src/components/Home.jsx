import logo from "../assets/hero.png";
import Card from "./Card.jsx";
function Home() {
    return (
        <div className="home">
            <h1 style={{ color: "red", border: "solid" }}> Hello Home </h1>
            <img src={logo} alt=""></img>
            <img src="favicon.svg" alt="" />
            <div className="cards">
                <Card title="first card" message="first msg"></Card>
                <Card title="second card" message="second msg"></Card>
                <Card title="third card" message="third msg"></Card>
                <Card message="fourth msg"></Card>
            </div>
        </div>
    )
}
export default Home;

// inline css:- {color:"red"}
// class :- className
// for :- htmlFor





//absent:- 1,4,5,11,15,17,27,30,31,33,39,40,47,48,49,51,52,55,65,