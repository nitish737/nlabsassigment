
import React from "react";
import "./sidebar.scss" ; 
const Sidebar = () => {
    const links = [
        {
            name : "Add keyword",
            icon : "fas fa-home",
            link : "",
            active : true
        },
        {
            name : "Matches",
            icon : "fas fa-user-friends",
            link : "",
            
        },
        {
            name : "Manage sources",
            icon : "fas fa-credit-card",
            link : "",
            active : false
        },
        {
            name : "Integration",
            icon : "fas fa-credit-card",
            link : "",
            active : false
        },
        {
            name : "Alerts",
            icon : "fas fa-credit-card",
            link : "",
            active : false
        }

    ] ;

    return(
        <>
        <div className="sidebar">
            <div className="sidebar__links">
            {
                links.map((obj, index)=>{
                    return(
                        <React.Fragment key={index}>
                        <div className={obj.active ? "sidebar__links__each active": "sidebar__links__each"} key={index}>
                            <div className="sidebar__links__each__icon">
                                <i className={obj.icon}></i>
                            </div>
                            <div className="sidebar__links__each__name">
                                {obj.name}
                            </div>
                        </div>
                        </React.Fragment>
                    )
                })
            }
            <div className="sidebar__links__toggle">
                <div className="sidebar__links__toggle__icon">
                    <i className="fas fa-star"></i>
                </div>
                <div className="sidebar__links__toggle__name">
                    <span>
                        Settings
                    </span>
                </div>
                <div className="sidebar__links__toggle__indicator">
                    <i className="fas fa-sort-down"></i>
                </div>
            </div>
            <div className="sidebar__links__extra-links">
                <span>
                    Billings
                </span>
            </div>
            </div>
        </div>
        </>
    )
}


export default Sidebar ;
















