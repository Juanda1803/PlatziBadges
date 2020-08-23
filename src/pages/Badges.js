import React from "react";
import { Link } from "react-router-dom";

import BadgesList from "../components/BadgesList";
import conflogo from "../images/badge-header.svg";
import "./styles/Badges.css";
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    console.log("3.componentDidMount()");
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
    //this.timeoutId = setTimeout(() => {
    //  this.setState({});
    //}, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  //componentDidUpdate(prevProps, prevState) {
  //  console.log("5. componentDidUpdate()");
  //  console.log({
  //    prevProps: prevProps,
  //    prevState: prevState,
  //  });
  //  console.log({
  //    props: this.props,
  //    state: this.state,
  //  });
  //}
  //componentWillUnmount() {
  //  console.log("6. componentWillUnmount");
  //  //clearTimeout(this.timeoutId);
  //}

  render() {
    console.log("2/4. render()");
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={conflogo}
                alt="conf logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badge={this.state.data} />
            </div>
          </div>
          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
