
import React from "react";
import './../styles/App.css';

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [suggest, setSuggest] = React.useState(fruits);

  function userSearch(e) {
    const search = e.target.value.toLowerCase();
    const valArr = fruits.filter((item) => {
      if(item.includes(search)){
        return search;
      }
    })

    setSuggest(valArr);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input type='text' onChange={userSearch}/>
        <ul>
          {suggest.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>

    </div>
  )
}

export default App
