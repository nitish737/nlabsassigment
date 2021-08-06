import React from 'react' ;
import SearchResults from '../SearchResults/SearchResults';
import "./content.scss" ;

const Content = () => {
    return(
        <>
        <div className="home__content">
            <div className="home__content__search">
                <div className="home__content__search__left">
                    <span className="main">
                        Add Another Keyword
                    </span>
                    <span className="numeric">
                        1/3
                    </span>
                    <span className="upgrade">
                        UPGRADE
                    </span>
                </div>
                <div className="home__content__search__right">
                    <span>
                        Advance search
                    </span>
                </div>


            </div>
            <div className="home__content__search__input">
                <div className="home__content__search__input__icon">
                    <i className="fas fa-search"></i>
                </div>
                <div className="home__content__search__input__query">
                    <input type="text" placeholder="Enter your filters here" />
                </div>
                <div className="home__content__search__input__button">
                    <button>
                        SAVE FILTERS
                    </button>
                </div>
            </div>
            <div className="search-results-container">
                <SearchResults/>
            </div>
        </div>
        </>
    )
}




export default Content ;

















