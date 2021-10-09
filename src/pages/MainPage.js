/**
 * MainPage.js
 */

 import React, { Component } from "react";
 import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 import Stepper from "../components/Stepper";
 import InitialFormPage from "../components/InitialFormPage";
 import ViewDetailsPage from "../components/ViewDetailsPage";
import { updateStepper } from '../actions/updateStepper';
 
 class MainPage extends Component {
   constructor(props) {
     super(props);
     this.state = {
        pages: {
            initial: 0,
            view: 1
        }
     }
   }

   componentDidMount = () =>{
       const { updateStepper } = this.props;
       const { pages } = this.state;
       updateStepper(pages.initial);
   }

   _showInitialPage = () =>{
        return <InitialFormPage />
   }

   _showOutputPage = () =>{
        return <ViewDetailsPage />
    }

   render() {
     const {pageToViewReducer} = this.props;
     const data = [
       { key: 0, content: this._showInitialPage() },
       { key: 1, content: this._showOutputPage() },
     ];
 
     return (
       <div>
         <Stepper
           data={data}
           activeKey="key"
           activeValue={pageToViewReducer.result}
         />
       </div>
     );
   }
 }
 
const mapStateToProps = state => ({
    ...state
})
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            updateStepper: updateStepper,
        }, dispatch);
}

 export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
 