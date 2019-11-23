import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import List from "./List/List";
import "./Lists.scss";

class Lists extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.personInfo.map((info, i) => (
              <List
                key={i}
                personInfo={info}
                remove={() => this.props.onRemove(i)}
              />
          ))}
        </tbody>
      </table>
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
    onRemove: i => dispatch(actions.deletePerson(i))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
