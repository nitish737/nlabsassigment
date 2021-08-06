import React from 'react' ;
import "./topbar.scss" ;
import logo from './../../images/logo.PNG' ;
const Topbar = () => {
    return(
        <>
        <div className="topbar">
            <div className="topbar__logo">
                <div className="topbar__logo__image">
                    <img src={logo} alt="" />
                </div>
                <div className="topbar__logo__text">
                    <span className="light">
                        Term
                    </span>
                    <span className="dark">
                        Monitor
                    </span>
                </div>
            </div>
            <div className="topbar__full">
                <div className="topbar__full__left">
                    <span className="heading">
                        KEYWORDS
                    </span>
                </div>
                <div className="topbar__full__right">
                    <div className="search">
                        <div className="search__input">
                            <input type="text" />
                        </div>
                        <div className="search__button">
                            <button>Submit <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user__icon">
                            <span>A</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}





export default Topbar ;










