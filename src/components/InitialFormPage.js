/**
* InitialFormPage.js
*/

import React, { Component } from 'react';
import _ from 'underscore';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import strings from "../constants/strings";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { updateInput } from '../actions/updateInput';
import { fetchDetails } from '../actions/fetchDetails';
import { updateStepper } from '../actions/updateStepper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class InitialFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pages: {
            initial: 0,
            view: 1
        }
    }
  }

  handleOnClick = () => {
     const {simpleReducer, fetchDetails, updateStepper} = this.props;
     const { pages } = this.state;

     if(simpleReducer.result != null && simpleReducer.result.length >0) {
        let url = '/breachedaccount/'+simpleReducer.result+'?truncateResponse=false';
        fetch(url, {
            method: 'GET',
            headers: {
            'hibp-api-key': 'bfed6a051ef3436aa3f16e546d7faa45',
            }
        })
        .then(response => {
            const responsePromise = response.json();
            if(responsePromise != null) {
                responsePromise.then(result => {
                    if(result != null && result.length > 0) {
                        fetchDetails(result[0]);
                        updateStepper(pages.view);
                    }
                });
            }
        })
        .catch(error => {
            alert("Unable to fetch details. Please try using a different number.")
        });
     } else {
        alert("Please input a phone number.")
     }
  }

  handleOnChange = (e) => {
     const {updateInput} = this.props;
     updateInput(e.target.value);
  }

  render() {
     const {simpleReducer} = this.props;
    return (
      <div className="main-ctr">
        <div className="main-panel">
            <Row>
                <Col md={12} className= {"header-panel"}>
                    <div className={"phone-img"}>
                        <img src={"images/icons8-touchscreen.png"} />
                    </div>
                    <div className={"title-label"}>{strings.initial_page_title}</div>
                </Col>
            </Row>
            <Row className="form-panel">
                <Col md={12} className={"input-label"}>
                    <div>{strings.form_input_phone_label_field}</div>
                </Col>
                <Col md={12} className={"input-field"}>
                    <Container>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Control 
                                    type="text" 
                                    placeholder={strings.form_input_phone_placeholder} 
                                    value={simpleReducer.result} 
                                    onChange={this.handleOnChange}
                                    required={true}
                                />
                                <div className={"search-img"} onClick={this.handleOnClick}>
                                    <img src={"images/icons8-search.png"} />
                                </div>
                            </Form.Group>
                        </Form>
                    </Container>
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

InitialFormPage.propTypes = {
  // props definition
}

InitialFormPage.defaultProps = {
  // default props
}


export default connect(mapStateToProps, mapDispatchToProps) (InitialFormPage);
