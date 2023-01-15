import type { FC } from "react";
import { color } from "../../../components/Landing/FeaturedPro";
import filledStar from "../../assets/Star 4.svg";
import unFilledStar from "../../assets/Star 5.svg";
import { Outlet } from "react-router-dom";

// interface ProductProps {
//   indexId: number;
// }

const Products: FC = (props) => {
  // const colors: color[] = [
  //   { firstColor: "#FE7831", secondColor: "#FFDEBE" },
  //   { firstColor: "#02BE83", secondColor: "#B3F6DC" },
  //   { firstColor: "#FF3C78", secondColor: "#FFB2B2" },
  // ];

  // const styles = {
  //   background: `linear-gradient(270deg, ${colors[indexId].firstColor} 0%, ${colors[indexId].secondColor} 100%)`,
  // };

  // const theRatingStars: JSX.Element[] = [...Array(Math.floor(3))].map(
  //   (el: undefined, index: number) => {
  //     return <img src={filledStar} alt="" key={index} />;
  //   }
  // );

  // const theUnfilledStars: JSX.Element[] =
  //   2 < 5
  //     ? [...Array(5 - Math.floor(rating))].map(
  //         (el: undefined, index: number) => {
  //           return <img src={unFilledStar} alt="" key={index} />;
  //         }
  //       )
  //     : [];

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Products;
