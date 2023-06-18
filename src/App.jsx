import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Dish from "./components/dish";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // const letters = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p"];
    // letters.forEach((letter) => {
      // fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter)
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then((response) => response.json())
      .then((data) => {
        setList((prev) => [...prev, ...data.meals]);
      });
    // });
  }, []);

  return (
    <div>
      <Header />
      <main>
        {list.map((dish) => (
          <Dish
            key={dish.idMeal}
            name={dish.strMeal}
            category={dish.strCategory}
            url={dish.strMealThumb}
          />
        ))}
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
