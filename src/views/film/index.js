import React from "react";
import { connect } from "react-redux";
import {
  HeaderWrap,
  FilmWrap,
  SubHeaderWrap,
  TabsWrap,
  SubTabsWrap,
  ListWrap,
  FilmsWrap
} from "./style";
import { Icon } from "antd";
import * as actions from "./store/actionCreates";

class Film extends React.Component {
  nowPlaying = key => {
    if (key === "1") {
      return (
        <FilmsWrap className="smallbody">
          {this.props.nowFilmList.map(item => {
            return (
              <ListWrap key={item.filmId}>
                <div className="movie-item parting movie-item-top">
                  <div className="p-left">
                    <img src={item.poster} alt="fanbufan" />
                  </div>
                  <div className="p-middle">
                    <div className="moviename ng-binding">{item.name}</div>
                    <div className="explain ng-binding">{item.synopsis}</div>
                    <div className="assess parent_score">
                      <div
                        className="fl stars"
                        style={{ backgroundImage: "url(./img/star8.png" }}
                      />
                      <div className="fl score ng-binding">{item.grade}</div>
                    </div>
                  </div>
                  <div className="p-right">
                    <a
                      nav-direction="forward"
                      href="#/tab/movie/cinema/1903/112306"
                    >
                      <span>购买</span>
                    </a>
                  </div>
                </div>
              </ListWrap>
            );
          })}
        </FilmsWrap>
      );
    } else {
      return (
        <FilmsWrap className="smallbody">
          {this.props.soonFilmList.map(item => {
            return (
              <ListWrap key={item.filmId}>
                <div className="movie-item parting movie-item-top">
                  <div className="p-left">
                    <img src={item.poster} alt="fanbufan" />
                  </div>
                  <div className="p-middle">
                    <div className="moviename ng-binding">{item.name}</div>
                    <div className="explain ng-binding">{item.synopsis}</div>
                    <div className="assess parent_score">
                      <div
                        className="fl stars"
                        style={{ backgroundImage: "url(./img/star8.png" }}
                      />
                      <div className="fl score ng-binding">{item.grade}</div>
                    </div>
                  </div>
                </div>
              </ListWrap>
            );
          })}
        </FilmsWrap>
      );
    }
  };

  chgClass = key => {
    this.props.chgBool(key);
  };

  render() {
    return (
      <FilmWrap>
        <HeaderWrap>
          <SubHeaderWrap>
            {" "}
            深圳
            <Icon type="down" className="downarrow" />
          </SubHeaderWrap>
          <SubHeaderWrap> 影院</SubHeaderWrap>
        </HeaderWrap>
        <TabsWrap>
          <SubTabsWrap
            onClick={this.chgClass.bind(this, this.props.keyList[0])}
            key={this.props.keyList[0]}
            className={this.props.bool === "1" ? "active" : "common"}
          >
            正在上映
          </SubTabsWrap>
          <SubTabsWrap
            onClick={this.chgClass.bind(this, this.props.keyList[1])}
            key={this.props.keyList[1]}
            className={this.props.bool === "2" ? "active " : "common"}
          >
            即将上映
          </SubTabsWrap>
        </TabsWrap>
        {this.nowPlaying(this.props.bool)}
      </FilmWrap>
    );
  }
  componentDidMount() {
    this.props.getNowFilmList();
    this.props.getSoonFilmList();
  }
}

export default connect(
  ({ film }) => ({
    nowFilmList: film.nowFilmList,
    soonFilmList: film.soonFilmList,
    keyList: film.keyList,
    bool: film.bool
  }),
  dispatch => ({
    getNowFilmList() {
      dispatch(actions.asyncNowFilmList());
    },
    getSoonFilmList() {
      dispatch(actions.asyncSoonFilmList());
    },
    chgBool(key) {
      dispatch(actions.chgBools(key));
    }
  })
)(Film);
