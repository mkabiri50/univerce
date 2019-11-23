import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Formik } from "formik";
import FormikStyle from "../Ui/form";
import './AddUser.scss'
import * as actions from "../../store/actions/index";
import * as yup from "yup";

class AddUser extends Component {
  render() {
    console.log(this.props)
    const validationSchema = yup.object().shape({
      firstName: yup
        .string()
        .label("First Name")
        .required(),
      family: yup
        .string()
        .label("Family")
        .required(),
      email: yup
        .string()
        .label("Email")
        .email()
        .required(),
      age: yup
        .number()
        .required()
        .label("Age")
    });
    return (
      <Formik
        initialValues={{ firstName: "", family: "", email: "", age: "" }}
        onSubmit={(values, actions) => {
          this.props.omSubmit(values);
          setTimeout(() => {
            actions.setSubmitting(false);
            this.props.history.push("/lists");
          }, 100);
        }}
        validationSchema={validationSchema}
      >
        {formikProps => (
          <div className="User-Form">
            <FormikStyle
              label="First Name"
              formikProps={formikProps}
              formikKey="firstName"
              autoFocus
            />
            <FormikStyle
              label="Family"
              formikProps={formikProps}
              formikKey="family"
            />
            <FormikStyle
              label="Email"
              formikProps={formikProps}
              formikKey="email"
            />
            <FormikStyle
              label="Age"
              formikProps={formikProps}
              formikKey="age"
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
    personInfo: state.persons.personInfo
  };
};
const mapDispatchToProps = dispatch => {
  return {
    omSubmit: values => dispatch(actions.addPerson(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
