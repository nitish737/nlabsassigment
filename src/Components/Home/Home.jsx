import React from 'react' ;
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topabar';
import Content from './Content/Content';
import "./home.scss" ;

const Home = () => {
    return(
        <>
        <div className="home">

        <div className="home__container__navbar">
                <Topbar/>
            </div>

            <div className="home__container">
        
            <div className="home__container__sidebar">
                <Sidebar/>
            </div>
            <div className="home__container__content">
                <Content/>
            </div>
            </div>
        </div>
        </>
    )
}





export default Home ;
















