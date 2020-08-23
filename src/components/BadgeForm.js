import React from "react";

class BadgeForm extends React.Component {
  handleClick = (e) => {
    console.log("Button was clicked");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
//import React from "react";
//
//class BadgeForm extends React.//Component {
//  handleClick = (e) => {
//    console.log("Button was clicked")//;
//  };
//  handleSubmit = (e) => {
//    e.preventDefault();
//    console.log("Form was submit");
//    console.log(this.state);
//  };
//  render() {
//    return (
//      <div>
//        <h1>New Attendant</h1>
//
//        <form onSubmit={this.//handleSubmit}>
//          <div //className="form-group">
//            <label>First Name</label>
//            <input
//              value={this.props.//formValues.firstName}
//              onChange={this.props.//onChange}
//              className="form-control//"
//              type="text"
//              name="firstName"
//            />
//          </div>
//
//          <div //className="form-group">
//            <label>Last Name</label>
//            <input
//              value={this.props.//formValues.lastName}
//              onChange={this.props.//onChange}
//              className="form-control//"
//              type="text"
//              name="lastName"
//            />
//          </div>
//
//          <div //className="form-group">
//            <label>Email</label>
//            <input
//              value={this.props.//formValues.email}
//              onChange={this.props.//onChange}
//              className="form-control//"
//              type="email"
//              name="email"
//            />
//          </div>
//
//          <div //className="form-group">
//            <label>Job Title</label>
//            <input
//              value={this.props.//formValues.jobTitle}
//              onChange={this.props.//onChange}
//              className="form-control//"
//              type="text"
//              name="jobTitle"
//            />
//          </div>
//
//          <div //className="form-group">
//            <label>Twitter</label>
//            <input
//              value={this.props.//formValues.twitter}
//              onChange={this.props.//onChange}
//              className="form-control//"
//              type="text"
//              name="twitter"
//            />
//          </div>
//
//          <button onClick={this.//handleClick} //className="btn //btn-primary">
//            Save
//          </button>
//        </form>
//      </div>
//    );
//  }
//}
//
//export default BadgeForm;
