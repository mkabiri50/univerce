import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import List from "./List/List";
import "./Lists.scss";

class Lists extends Component {
  state = {
    modalOpen: false,
  };
  editHandler =(info,id) => {
    this.props.onStartEdit(info,id)
    this.props.history.push( `/user/id: ${id} `);
  };
  render() {
    return (
      <React.Fragment>
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
            {this.props.personInfo.map((info,i) => (
          
              <List
                key={info.id} 
                personInfo={info}
                remove={() => this.props.onRemove(i)}
                edit={() => this.editHandler(info,info.id)}
              />
            ))}
          </tbody>
        </table>


      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    personInfo: state.persons.personInfo,
    data: state.persons.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(actions.deletePerson(id)),
    onStartEdit: info => dispatch(actions.startEditing(info)),
    onEdit: i => dispatch(actions.editPerson(i))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
