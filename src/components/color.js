import React from 'react';
import ButtonAppBar from './SearchAppBar.js';
import Footer from './footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import apiData from '../actions/apiData'

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newArr: []
        }
        
    }

    componentWillReceiveProps(nextProps){
    }

    componentWillMount(){
        let tempState = [];

        var p = new Promise(function (resolve, reject) {
            for (var i = 0; i < 21; i++){
                var letters = '0123456789ABCDEF';
                let color = '';
                
                for (var p = 0; p < 6; p++) {
                  color += letters[Math.floor(Math.random() * 16)];
                }
                
                fetch('https://www.thecolorapi.com/scheme?hex=' + color + '&mode=monochrome&count=5')
                .then((response => response.json()))

                .then(response => {
                    tempState.push(response.colors);
                })
            }

            setTimeout(()=>{
                resolve(tempState);
            }, 800)
            
        })
        .then((tempState1) => {

            this.setState({newArr: 'hello'})

            this.setState({newArr: tempState1},
                function(){
                    this.props.onFetch(this.state.newArr);
                });
                
        });
    }
      
    render() {
        
        
        let colorPallet = [];
        let mainPallet = [];
        let mainColorName = [];
        let colors = this.props.colorData

        if(colors.length > 0){
            
        for( let i = 0; i < colors.length; i++){
            let cArray = colors[i];
            let colorArray = [];
            let colorName = '';

            for ( let c in cArray){
                colorArray.push(cArray[c].hex.value);
                colorName = cArray[c].name.value;
            }

            mainColorName.push(colorName);

            colorPallet = colorArray.map( col => {
                return <div key={col} style={{backgroundColor: col, height: '100%', width: '54px'}} className="theColors"><div className="transDiv"><p className="toptobottom"><span className="letterSpacing">{col[1]}</span><span className="letterSpacing">{col[2]}</span><span className="letterSpacing">{col[3]}</span><span className="letterSpacing">{col[4]}</span><span className="letterSpacing">{col[5]}</span><span className="letterSpacing">{col[6]}</span></p></div></div>
            })

            mainPallet.push(colorPallet);

        }
    }

        return (
            <div>
                <ButtonAppBar/>
                <div className="homeContainer">
                    <h1 className='titleText'>The Palette Center</h1>
                    <div className="buttons">
                        <Link to="/" style={{textDecoration: 'none', color: 'white'}}><button>Monochrome</button></Link>
                        <Link to="/analogic" style={{textDecoration: 'none', color: 'white'}}><button>Analogic</button></Link>
                        <Link to="/triadic" style={{textDecoration: 'none', color: 'white'}}><button>Triadic</button></Link>
                        <Link to="/tetratic" style={{textDecoration: 'none', color: 'white'}}><button>Tetradic</button></Link>
                    </div>
                    <div className="refresh">
                        <button onClick={()=>{window.location.reload()}}>Generate New Color Set</button>
                    </div>
                    <div className="randomSchemeContainer">
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[0]}
                                    {console.log(mainPallet[0])}
                                </div>
                                <p style={{fontSize: '15px', color: '#222'}} onClick={()=>{ localStorage.setItem("palette1", mainPallet[0]); localStorage.setItem("paletteName1", mainColorName[0]); }}>{mainColorName[0]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[1]}
                                </div>
                                <p>{mainColorName[1]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[2]}
                                </div>
                                <p>{mainColorName[2]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[3]}
                                </div>
                                <p>{mainColorName[3]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[4]}
                                </div>
                                <p>{mainColorName[4]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[5]}
                                </div>
                                <p>{mainColorName[5]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[6]}
                                </div>
                                <p>{mainColorName[6]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[7]}
                                </div>
                                <p>{mainColorName[7]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[8]}
                                </div>
                                <p>{mainColorName[8]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[9]}
                                </div>
                                <p>{mainColorName[9]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[10]}
                                </div>
                                <p>{mainColorName[10]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[11]}
                                </div>
                                <p>{mainColorName[11]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[12]}
                                </div>
                                <p>{mainColorName[12]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[13]}
                                </div>
                                <p>{mainColorName[13]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[14]}
                                </div>
                                <p>{mainColorName[14]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[15]}
                                </div>
                                <p>{mainColorName[15]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[16]}
                                </div>
                                <p>{mainColorName[16]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[17]}
                                </div>
                                <p>{mainColorName[17]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[18]}
                                </div>
                                <p>{mainColorName[18]}</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[19]}
                                </div>
                                <p>{mainColorName[19]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        );
    }}

    function mapStateToProps(state){
        return{
          colorData: state.apiInfo
        }
      }
      
      function mapDispatchToProps(dispatch){
        return {
          onFetch: (response) => dispatch(apiData(response))
        }
      }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Color);