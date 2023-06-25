import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import frontpage from "../../images/frontpage.jpg";

const Home = () => {
  return (
    <div>
      <img src={frontpage} className="backgroundImg" />
            <div className="opacity"></div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
       
        
      </div>
    </div>
  );
};

export default Home;
