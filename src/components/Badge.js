import React from "react";

import "../styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
//import React from "react";
//import conflogo from "../images///badge-header.svg";
//import "../styles/Badge.css";
//
//class Badge extends React.Component {
//  render() {
//    let props = this.props;
//    return (
//      <div className="Badge">
//        <div //className="Badge__header">
//          <img src={conflogo} alt="" ///>
//        </div>
//        <div //className="Badge__section-nam//e">
//          <img //className="Badge__avatar" //src={props.avatarUrl} //alt="" />
//          <h1>
//            {props.firstName} <br /> //{props.lastName}
//          </h1>
//        </div>
//        <div //className="Badge__section-inf//o">
//          <h3>{props.jobTitle}</h3>
//          <div>@{props.twitter}</div>
//        </div>
//        <div //className="Badge__footer">#pl//atziconf</div>
//      </div>
//    );
//  }
//}
//
//export default Badge;
