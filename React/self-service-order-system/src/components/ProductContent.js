import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// react解析html

//     https://reactjs.org/docs/dom-elements.html

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      domain: "http://a.itying.com/",
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    let id = this.props.match.params.id;
    this.showDetails(id);
  }

  showDetails = (id) => {
    var api = this.state.domain + "api/productcontent?id=" + id;
    axios
      .get(api)
      .then((response) => {
        this.setState({
          list: response.data.result[0],
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="pcontent">
        <div className="back">
          {" "}
          <Link to="/">返回</Link>
        </div>

        <div className="p_content">
          <div className="p_info">
            <img
              src={`${this.state.domain}${this.state.list.img_url}`}
              alt=""
            />
            <h2>{this.state.list.title}</h2>
            <p className="price">{this.state.list.price}/份</p>
          </div>
          <div className="p_detail">
            <h3 className="second_header">商品详情</h3>
            <div
              className="p_des"
              dangerouslySetInnerHTML={{ __html: this.state.list.content }} //react中如何解析HTML
            ></div>
          </div>
        </div>

        <footer className="p_footer">
          <div className="cart">
            <strong>数量:</strong>
            <div className="cart_num">
              <div className="input_left">-</div>
              <div className="input_center">
                <input
                  type="text"
                  readOnly="readonly"
                  value="1"
                  name="num"
                  id="num"
                />
              </div>
              <div className="input_right">+</div>
            </div>
          </div>

          <button className="add_cart">加入购物车</button>
        </footer>
      </div>
    );
  }
}

export default Content;
