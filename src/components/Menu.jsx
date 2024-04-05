// Importerar nödvändiga hookar och komponenter från React och andra bibliotek.
import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import Modal from './Modal';
import MealDetail from './MealDetail';
import '../css/Menu.css';
import { Card } from 'react-bootstrap';

// Importerar nödvändiga hookar och komponenter från React och andra bibliotek.
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

// States för att hantera olika delar av komponenten, som laddningsstatus, sökfrågor, menydata, valda måltider, och om en modal är öppen.
const Menu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [menuDataApi, setMenuDataApi] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchBarRef = useRef(null); // Använder useRef för att referera till sökfältets DOM-element.

  // useEffect hook för att hämta standardmåltidsdata när komponenten monteras.
  useEffect(() => {
    fetchDefaultData();
  }, []);

  useEffect(() => {   //fokusera på sökfältet
    
    const timer = setTimeout(() => { 
      if (searchBarRef.current) {
        searchBarRef.current.focus();
      }
    }, 100); 

    return () => clearTimeout(timer); 
  }, [query]); 
  

  // Asynkron funktion för att hämta standardmåltidsdata från API baserat på fördefinierade söktermer.
  const fetchDefaultData = async () => {
    setIsLoading(true);
    const defaultSearchTerms = [
      'pasta', 'sushi', 'seafood', 'pizza', 'chicken', 'beef', 'vegetarian'
    ];

    const fetchPromises = defaultSearchTerms.map(term =>
      fetch(apiUrl + term).then(response => response.json())
    );

    try {
      const results = await Promise.all(fetchPromises);
      const combinedMeals = results.reduce((acc, result) => acc.concat(result.meals || []), []);
      setMenuDataApi(combinedMeals);
    } catch (error) {
      console.error("Failed to fetch default data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Asynkron funktion för att söka efter måltider baserat på användarens sökfråga.
  const search = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    setMenuDataApi(data.meals || []);
    setIsLoading(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (query !== '') {
      search();
    } else {
      fetchDefaultData(); // Hämtar standardmåltidsdata om sökfrågan är tom.
    }
  };
  
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value === '') {
      fetchDefaultData();
    }
  };

  // Öppnar och stänger detaljvy för en måltid.
  const openMealDetail = (meal) => {
    setSelectedMeal(meal);
    setIsModalOpen(true);
  };

  const closeMealDetail = () => {
    setIsModalOpen(false);
  };

  // Renderar menyobjekten som kort med hjälp av bootstrap Card-komponenten.
  const renderMenuItems = () => menuDataApi.map((menu) => (
    <div key={menu.idMeal}  onClick={() => openMealDetail(menu)}>
      <Card className='card-container' style={{ width: '18rem', marginBottom: '1rem' }}>
        <Card.Img className='card-image' variant="top" src={menu.strMealThumb} />
        <Card.Body>
          <Card.Title>{menu.strCategory}</Card.Title>
          <Card.Text>{menu.strMeal}</Card.Text>
          <Card.Text>Pris:${((Math.random() * (25 - 5) + 5).toFixed(2))} </Card.Text>
          <a href="#order" className="order-link" onClick={(e) => e.stopPropagation()}>
        Place Order
      </a>
        </Card.Body>
      </Card>
    </div>
  ));


// Huvudrenderingslogik som visar menykomponenten, inklusive sökfält, menyobjekt och modal för detaljvisning.
  return (
    <>
      <div className='menu-container'>
        <h3 className='menu-header'>Welcome Global tasty</h3>
        <p className='short-info'>
          Globally, food is a vibrant expression of culture and tradition. 
          From the spicy Pad Thai of Bangkok to Italy's comforting pastas, every dish tells a story. 
          Mexico's colorful tacos and India's aromatic curries invite a journey through flavor, while Japan's sushi exemplifies culinary artistry. 
          In Africa, rich stews and injera bread offer a warm embrace of communal dining, and Somalia's savory sambusas and aromatic rice dishes, 
          like Bariis Iskukaris, reflect a unique blend of African and Middle Eastern influences. 
          America's hearty barbecue celebrates simplicity and gathering. Together, these foods create a tapestry of global cuisine, 
          celebrating the diversity and unity of cultural experiences.
        </p>
        <SearchBar
            ref={searchBarRef}
            value={query} 
            isLoading={isLoading} // 
            handleInputChange={handleInputChange} 
            handleFormSubmit={handleFormSubmit} 
        />

        <div className="menu">
          {menuDataApi.length > 0 ? renderMenuItems() : <p>Menu Selected Not Found</p>}
        </div>
        <Modal isOpen={isModalOpen} close={closeMealDetail}>
          <MealDetail meal={selectedMeal} />
        </Modal>
      </div>
    </>
  );
};

export default Menu;
