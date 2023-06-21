import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Dish from "./components/dish";
import {sharedData} from "./contexts/shared"

const App = () => {
  const [list, setList] = useState([]);
  const [name,setName] = useState("")
  const [category,setCategory] = useState("")
  const [area,setArea] = useState("")
  const [data,setData] = useState([]);

  useEffect(() => {
    // fetching data from the api with the letters
    const letters = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p"];
    letters.forEach((letter) => {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter)
      .then((response) => response.json())
      .then((data) => {
        setList((prev) => [...prev, ...data.meals]);
      });
    });
  }, []);

  // filtering out the list with the data given as input in the input boxes
  useEffect(()=>{
    let source = list.filter((element)=>{
      return element.strMeal.toLowerCase().startsWith(name.toLowerCase()) && element.strCategory.toLowerCase().startsWith(category.toLowerCase()) && element.strArea.toLowerCase().startsWith(area.toLowerCase())
    })
    setData(source)
  },[name,category,area])

  useEffect(() => {
    setData(list)
  },[list])

  return (
    <div>
      {/* using context api to pass hooks */}
      <sharedData.Provider value={{setName,setCategory,setArea}}>
        <Header />
      </sharedData.Provider>
      <main>
        {data.map((dish) => (
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

// rendering the app to the window
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);