import './App.css';
import { useEffect, useState } from 'react';

// Custom hook 

const useAnimalSearch = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery'); 
    search(lastQuery); // Keeps last search query if browser is refreshed
    console.log(lastQuery);
  }, []);

  const search = async (q) => {
    const response = await fetch(
      'http://localhost:8080?' + new URLSearchParams({q})
    );
    const data = await response.json();
    setAnimals(data);

    localStorage.setItem('lastQuery', q); 
    console.log(data);
  };

  return {search, animals}
}

const App = () => {
  
  const { search, animals } = useAnimalSearch()

  return (
    <div className="App">
      <h1>Animal Farm</h1>
      <input 
        type="text" 
        placeholder="search" 
        onChange={(e) => search(e.target.value)}
      />
      <ul>
        {animals.map((animal) =>(
          <Animal key={animal.id} {...animal} />
        ))}

        {animals.length === 0 && 'No animals found!'}
      </ul>

    </div>
  );
}

const Animal = ({type, name, age}) => {
  return (
    <li>
      <strong>{type}</strong> {name} ({age} years old)
    </li>
  );
}

export default App;
