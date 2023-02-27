import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";


const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="plant images/africanViolet.png"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
            africanViolet<br></br>
            price: $20
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="plant images/birdsNestfern.png"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            birdsNestfern
            <br></br>
            price: $20
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="plant images/moneyTree.png"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            moneyTree
            <br></br>
            price: $20
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="plant images/christmasCactus.png"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                christmasCactus
                <br></br>
            price: $20
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="plant images/spiderPlant.png"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                spiderPlant
                <br></br>
            price: $20
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="plant images/parlorPalm.png"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            hinduRopepplant
            <br></br>
            price: $20
            </Link>
          </button>
        </div>
      </div>
    </div>

);
}
export default Categories;
