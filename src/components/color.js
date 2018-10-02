import React from 'react';
import ButtonAppBar from './SearchAppBar.js';

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
            for (var i = 0; i < 13; i++){
                var letters = '0123456789ABCDEF';
                let color = '';
                
                for (var p = 0; p < 6; p++) {
                  color += letters[Math.floor(Math.random() * 16)];
                }
                // console.log(color);
                fetch('http://www.thecolorapi.com/scheme?hex=' + color + '&mode=monochrome&count=5')
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

            // console.log("tempstate: " + tempState1);
            this.setState({newArr: 'hello'})

            this.setState({newArr: tempState1},
                function(){
                    // console.log("array in state: " + this.state.newArr);
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
                console.log("inside loop: " + cArray[c].hex.value)
                colorArray.push(cArray[c].hex.value);
                colorName = cArray[c].name.value;
            }

            mainColorName.push(colorName);

            colorPallet = colorArray.map( col => {
                return <div key={col} style={{backgroundColor: col, height: '100%', width: '45.19px'}}></div>
            })

            mainPallet.push(colorPallet);

        }
        console.log(colorPallet[0]);
        console.log(mainPallet[0]);
    }

        return (
            <div>
                <ButtonAppBar/>
                <div className="homeContainer">
                    <h1 className='titleText'>Palette Center</h1>
                    <div className="randomSchemeContainer">
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {mainPallet[0]}
                                </div>
                                <p style={{fontSize: '15px', color: '#222'}}>{mainColorName[0]}</p>
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
                    </div>
                </div>
            </div>
        );
    }}
    
    export default Color;