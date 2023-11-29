import React from "react";
import { useHistory } from "react-router-dom";

const Category = () => {
  const history = useHistory();
  const categories = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/09/Channel_1_Israel_DSC0021.jpg",
      text: "office",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/bc/V%C4%83nph%C3%B2ngph%E1%BA%A9m-InsideStationeryShop03012009606.jpg",
      text: "stationery",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Kitchen_utensils-01.jpg",
      text: "kitchen",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Mug_of_Tea.JPG",
      text: "drinkware",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Travel-map.svg",
      text: "travel",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Exploring_the_green_outdoors_%28Unsplash%29.jpg",
      text: "outdoors",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Negative-space-man-controls-all-video-games.jpg",
      text: "gaming",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Farmerstown_Furniture.jpg",
      text: "furniture",
    },
  ];
  const handleClick = (text) => {
    history.push(`/search?Category=${text}`);
  };
  return (
    <>
      <div className="category-bar">
        {categories.map((category, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleClick(category.text)}
          >
            <img src={category.image} alt="category" />
            <p>{category.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
