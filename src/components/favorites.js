import React from 'react';
import ButtonAppBar from './SearchAppBar.js';
import Footer from './footer';

class Favorites extends React.Component {
    render() {
        var palette1 = localStorage.getItem("palette1");
        var paletteName1 = localStorage.getItem("paletteName1");
    return(
        <div>
            <ButtonAppBar />
            <div className="homeContainer">
                <h1 className='titleText'>My Favorites</h1>
                <div className="randomSchemeContainer">
                    <div className="randomScemeCard">
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <div className="randomColorSceme">
                                {palette1}
                            </div>
                            <p style={{fontSize: '15px', color: '#222'}}>{paletteName1}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}}

export default Favorites;