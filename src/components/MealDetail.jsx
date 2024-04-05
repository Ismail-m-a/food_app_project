// MealDetail.js som ska visas i modal förster

const MealDetail = ({ meal }) => {
    if (!meal) return <div>Välja olika maträtter</div>;
  
    return (
      <>
      
      <div className="meal-detail">
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ maxWidth: '100%' }} />
        <p className="modal-category"><strong>Category:</strong> {meal.strCategory}</p>
        <p className="meal-text">Instructions: {meal.strInstructions}</p>
        
       
        {/* kommer tillbaka */}
      </div>
      </>
      
    );
  };
  
  export default MealDetail;
  