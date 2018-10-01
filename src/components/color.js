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
        for (var i = 0; i < 9; i++){
        var letters = '0123456789ABCDEF';
        let color = '';

        for (var p = 0; p < 6; p++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        // console.log(color);
        fetch('http://www.thecolorapi.com/scheme?hex=' + color + '&mode=monochrome&count=5')
        .then((response => response.json()))
        .then(response => {
            
            let tempState = this.state.newArr;

            tempState.push(response);
            this.setState({newArr: tempState},
                function(){
                    // console.log("array in state: " + this.state.newArr);
                });
                console.log(response)
            return response;
        })
        
    }

    this.props.onFetch(this.state.newArr);

}
      
    render() {
        
        let colorArray = [];
        let colors = this.props.colorData
        
        
       
        for( let c in colors){
            colorArray.push(colors[c]);
        }

        

        let colorPallet = [];
        let mainPallet = [];

        colorArray.forEach(colorObj => {

            // console.log("color map:" + typeof(colorObj))

            let tempArray = [];

            for( let x in colorObj){
                tempArray.push(colorObj)
            }

            colorPallet = tempArray.map( col => {
                    //  return <div style={{backgroundColor: 'rgba(' + col.rgb.r + ',' + col.rgb.b + ',' + col.rgb.g + '1)', height: '100%', width: '45.19px'}}></div>
                return <div style={{backgroundColor: col.hex, height: '100%', width: '45.19px'}}>{console.log(col.colors[0].hex.value)}</div>

            })

            //mainPallet.push(colorPallet);
        })
        
       
        console.log(colorPallet);

        

        return (
            <div>
                <ButtonAppBar/>
                <div className="homeContainer">
                    <h1 className='titleText'>Palette</h1>
                    <div className="randomSchemeContainer">
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    {colorPallet}
                                </div>
                                <p style={{fontSize: '15px', color: '#222'}}>Color Name</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    <div style={{backgroundColor: '#fdffc2', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#edefc2', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#dddfc2', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#cdcfc2', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#bdbfc2', height: '100%', width: '45.19px'}}></div>
                                </div>
                                <p>Color Name</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    <div style={{backgroundColor: '#388de7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#387dd7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#386dc7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#385db7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#384da7', height: '100%', width: '45.19px'}}></div>
                                </div>
                                <p>Color Name</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    <div style={{backgroundColor: '#d6f7a7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#d6e7b7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#d6d7c7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#d6c7d7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#d6b7e7', height: '100%', width: '45.19px'}}></div>
                                </div>
                                <p>Color Name</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    <div style={{backgroundColor: '#123456', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#234567', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#345678', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#456789', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#56789f', height: '100%', width: '45.19px'}}></div>
                                </div>
                                <p>Color Name</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    <div style={{backgroundColor: '#697b65', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#696b65', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#695b65', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#694b65', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#693b65', height: '100%', width: '45.19px'}}></div>
                                </div>
                                <p>Color Name</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    <div style={{backgroundColor: '#fdffc2', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#edefc2', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#dddfc2', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#cdcfc2', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#bdbfc2', height: '100%', width: '45.19px'}}></div>
                                </div>
                                <p>Color Name</p>
                            </div>
                        </div>
                        <div className="randomScemeCard">
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="randomColorSceme">
                                    <div style={{backgroundColor: '#388de7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#387dd7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#386dc7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#385db7', height: '100%', width: '45.19px'}}></div>
                                    <div style={{backgroundColor: '#384da7', height: '100%', width: '45.19px'}}></div>
                                </div>
                                <p>Color Name</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }}
    
    export default Color;