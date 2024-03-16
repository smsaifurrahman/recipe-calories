import { useState } from "react"
import Banner from "./Componets/Header/Banner"
import Header from "./Componets/Header/Header"
import Recipecards from "./Componets/Recipecards/Recipecards"
import Sidebar from "./Componets/Recipecards/Sidebar"

function App() {

  const [foods, setFoods] = useState([]);

  const handleRecipes = (card) => {
    
    const isExits = foods.find(food => card.recipe_id === food.recipe_id);
    if(!isExits) {
      setFoods([...foods,card]);
      
    }
    else {
      alert('already exits')
    }
    


  }

  return (
    <>
     
     <div className='container mx-auto mt-6'>
          <Header></Header>
          <Banner></Banner>
          <div className="flex flex-col-reverse  justify-center md:flex-row gap-4">
              <Recipecards handleRecipes={handleRecipes} ></Recipecards>
              <Sidebar key={foods.id} foods={foods} ></Sidebar>
          </div>
          
          
     </div>
    </>
  )
}

export default App
