import React, { Component } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      domain: "http://a.itying.com/",
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    var api = this.state.domain + "api/productlist";
    axios
      .get(api)
      .then((response) => {
        this.setState({
          list: response.data.result,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="home">
        <button>
          <Link to="/login">跳转到登陆页面</Link>
        </button>
        <div className="list">
          {/* 列表二维数组循环 */}
          {this.state.list.map((value, key) => {
            return (
              <div className="item" key={key}>
                <h3 className="item_cate">{value.title}</h3>
                <ul className="item_list">
                  {value.list.map((item, key) => {
                    return (
                      <li key={key}>
                        <Link to={`/pcontent/${item._id}`}>
                          <div className="inner">
                            <img
                              src={`${this.state.domain}${item.img_url}`}
                              alt=""
                            />

                            <p className="title">{item.title}</p>
                            <p className="price">${item.price}</p>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
