import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    isShowing: false
  };

  onShowClick = () => {
    this.setState({
      isShowing: !this.state.isShowing
    });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { isShowing } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name + " "}
                <i className="info" onClick={this.onShowClick}>
                  {isShowing ? "-" : "+"}
                </i>
                <i
                  className="del fas fa-trash"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                </i>
                <Link to={`contact/edit/${id}`}>
                  <i className="ed fas fa-pen"></i>
                </Link>
              </h4>
              {isShowing ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
