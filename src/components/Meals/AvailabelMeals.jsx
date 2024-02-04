import React, { useEffect, useState } from 'react'

import classes from './AvailabelMeals.Module.css'
import Card from '../Card/Card';
import MealItem from './MealItem/MealItem';


const AvailabelMeals = () => {
 const [meals, setMeals] = useState([])
 const [isLoading, setIsLoading] = useState(true)
 const [httpError, setHttpError] = useState(null)
  
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://uploadfiles-d1492-default-rtdb.firebaseio.com/meals.json"
      );

      if(!response.ok){
        throw new Error('Something went wrong!')
      }
      const responseData = await response.json();
      console.log(responseData);
      const loadedMeals = [];

      for(const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      } 

      setMeals(loadedMeals);
      setIsLoading(false)
    }

    fetchMeals().catch((error) => {
       setIsLoading(false);
       setHttpError(error.message);
    })
    

  }, [])

  if(isLoading){
    return <section className={classes.mealsLoading}>
       <p>Loading...</p>
    </section>
  }

  if(httpError){
    return <section className={classes.mealsError}>
      <p>{httpError}</p>
    </section>
  }

   const mealsList = meals.map((meal) => (
     <MealItem key={meal.id} name={meal.name}
      id={meal.id} description={meal.description} price={meal.price} />
   ));
  return (
        <section className={classes.meals}>
          <Card>
           <ul>
              {mealsList}
           </ul>
           </Card>
        </section>
  )
}

export default AvailabelMeals