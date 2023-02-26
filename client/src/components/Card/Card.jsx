
import React from 'react';
import "./Card.scss";

function Card() {
  return(
    <div className="san">
      <img className="one" alt="" src="" />
      <div>
        <h2>picture</h2>
        <p>price</p>
      </div>
    </div>
  );
}

export default Card;

// const Card = ({ item }) => {
//   console.log(item);
//   return (
//     <Link className="link" to={`/product/${item.id}`}>
//       <div className="card">
//         <div className="image">
//           {item?.attributes.isNew && <span>New release</span>}
//           <img
//             src={item.img}
//             alt=""
//             className="mainImg"
//           />
//           <img
//             src={item.img2}
//             alt=""
//             className="secondImg"
//           />
//         </div>
//         <h2>{item?.attributes.title}</h2>
//         <div className="prices">
//           <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
//           <h3>${item?.attributes.price}</h3>
//         </div>
//       </div>
//     </Link>
//   );
// };


