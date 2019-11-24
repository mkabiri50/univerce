
import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import { Formik } from "formik";
import FormikStyle from "../Ui/form";
import * as actions from "../../store/actions/index";
class EditUser extends Component {
  state = {
    data: []
  };
  componentWillMount() {
    this.setState({ data: this.props.data });
  }

  handelChange = (event, key) => {
    this.setState(preveState => {
      return {
        data: {
          ...preveState.data,
          [key]: {
            ...preveState.data[key],
            value: event
          }
        }
      };
    });
  };

  render() {
    
    const { data } = this.state;
    if (data.length ===0){
      return <Redirect to='/houses' />
   }
    return (
  
      <Formik
        initialValues={{ firstName: data.firstName, family:data.family, email:data.email, age:data.age }}
        onSubmit={(values, actions) => {
          this.props.onEdit(values, data.id);
          setTimeout(() => {
            actions.setSubmitting(false);
            this.props.history.push("/lists");
          }, 100);
        }}
   
      >
        {formikProps => (
          <div >
            <FormikStyle
              label="First Name"
              formikProps={formikProps}
              formikKey="firstName"
              placeholder={data.firstName}
              autoFocus
            />
            <FormikStyle
              label="Family"
              formikProps={formikProps}
              formikKey="family"
              placeholder={data.family}
            />
            <FormikStyle
              label="Email"
              formikProps={formikProps}
              formikKey="email"
              placeholder={data.email}
            />
            <FormikStyle
              label="Age"
              formikProps={formikProps}
              formikKey="age"
              placeholder={data.age}
            />

            <button
            style={{color:"white", backgroundColor:'#2699FB'}}
              type="submit"
              onClick={formikProps.handleSubmit}
              disabled={formikProps.isSubmitting}
            >
              Add
            </button>
            <button
              type="buttom"
              className="outline"
              onClick={()=>this.props.history.replace('/lists')}
            >
              Cancel
            </button>
          </div>
        )}
      </Formik>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.persons.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
     onEdit: (id,values) => dispatch(actions.editPerson(id,values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
