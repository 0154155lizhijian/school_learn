import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.styl';
import Recommend from './recommand/Recommand';
import Ranking from './ranking/Ranking';
import Search from './search/Search';
import logo from './assets/imgs/logo.png';
import './assets/stylus/reset.styl'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app skin-app" >
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">React Music</h1>
          </header>
          <div className="music-tab">
            <div className="tab-item">
              <NavLink to="/recommend" className="nav-link">
                <span>推荐</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/ranking" className="nav-link">
                <span>排行榜</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink to="/search" className="nav-link">
                <span>搜索</span>
              </NavLink>
            </div>
          </div>
          <div className="music-view">
            <Switch>
              <Route path="/recommend" component={Recommend} />
              <Route path="/ranking" component={Ranking} />
              <Route path="/search" component={Search} />
              <Redirect from="/" to="/recommend" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
