import React from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";

import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ title, price, description, category, image }) => {
  const [rating] = React.useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasPrime] = React.useState(Math.random() < 0.5);
  return (
    <div className="shadow bg-white flex flex-col m-5 relative p-10 z-30">
      <p className="absolute top-3 right-2 text-sm italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => {
            return <StarIcon key={i} className="h-5 text-yellow-500" />;
          })}
      </div>
      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} />
      </div>
      {hasPrime ? (
        <div className=" flex space-x-2 -mt-5 items-center">
          <img
            src="https://links.papareact.com/fdw"
            alt={image}
            className="w-12"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      ) : (
        ""
      )}
      <button className=" mt-auto button">Add to basket</button>
    </div>
  );
};

export default Product;
