/**
* ViewDetailsPage.js
*/

import React, { Component } from 'react';
import _ from 'underscore';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import strings from "../constants/strings";
import { updateInput } from '../actions/updateInput';
import { fetchDetails } from '../actions/fetchDetails';
import { updateStepper } from '../actions/updateStepper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ViewDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pages: {
            initial: 0,
            view: 1
        }
    }
  }

  handleOnClickBack = (e) => {
     const {updateStepper, updateInput} = this.props;
     const {pages} = this.state;
     updateInput("");
     updateStepper(pages.initial);
  }

  retrieveCompomisedDataString = (dataList) => {
    let compromisedDataStr = "";
    dataList.map((field, index) =>{
        compromisedDataStr = compromisedDataStr+field;
        if(index < (dataList.length-1)){
            compromisedDataStr = compromisedDataStr+ ", "
        }
    })
    return compromisedDataStr;
  }

  render() {
     const {simpleReducer, fetchDetailsReducer} = this.props;
     let viewData = fetchDetailsReducer.result;

    return (
      <div className="main-ctr">
        <div className="main-panel main-view-panel">
            <Row>
                <Col md={12} className= {"header-view-panel"}>
                    <div className={"avatar-img"}>
                        <img alt={"avatar-logo"} src={"images/Avatar.png"} />
                    </div>
                    <div className={"user-label"}>
                        <div className={"user-label-name"}>{strings.user_name_label}</div>
                        <div className={"user-label-phoneno"}>{simpleReducer.result}</div>
                    </div>
                </Col>
            </Row>
            <Row className="form-panel view-panel">
                <Col md={12} className={"view-fetch-header"}>
                    <div className={"fetch-img"}>
                        <img alt={"fetched-logo"} src={viewData.LogoPath} />
                    </div>
                    <div className={"fetch-title"}>{viewData.Title}</div>
                </Col>
                <Col md={12} className={"description-main-col"}>
                    <div className={"description-dscp"} dangerouslySetInnerHTML={{ __html: viewData.Description}} />
                    <div className={"description-compromised"}>
                        <span className="compromised-label">{strings.label_compromised_data}</span>
                        <span className="compromised-value">{this.retrieveCompomisedDataString(viewData.DataClasses)}</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12} className={"back-btn-col"}>
                    <Button variant="secondary" onClick={this.handleOnClickBack}>{strings.label_back}</Button>
                </Col>
            </Row>
        </div>
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
            updateInput: updateInput, 
            fetchDetails: fetchDetails,
            updateStepper: updateStepper,
        }, dispatch);
}

ViewDetailsPage.propTypes = {
  // props definition
}

ViewDetailsPage.defaultProps = {
  // default props
}


export default connect(mapStateToProps, mapDispatchToProps) (ViewDetailsPage);
