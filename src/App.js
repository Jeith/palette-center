import {connect} from 'react-redux'
import './App.css';
import apiData from './actions/apiData'
import Color from './components/color'

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

var connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Color)

export default connectComponent;