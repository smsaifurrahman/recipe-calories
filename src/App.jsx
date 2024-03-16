import { useState } from "react"
import Banner from "./Componets/Header/Banner"
import Header from "./Componets/Header/Header"
import Recipecards from "./Componets/Recipecards/Recipecards"
import Sidebar from "./Componets/Recipecards/Sidebar"
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [foods, setFoods] = useState([]);
  const [cookingLists, setCookingLists] = useState([]);

  const handleRecipes = (card) => {
    
    const isExits = foods.find(food => card.recipe_id === food.recipe_id);
    if(!isExits) {
      setFoods([...foods,card]);
      toast.success("Food item added successfully!");
      
    }
    else {
      toast.warn("Food item has already been added")
    }
  }

  const handlePreparing = (foodObj) => {
   
     const newFoods = foods.filter(food => food.recipe_id !== foodObj.recipe_id);
    //  console.log(newFoods);
     setFoods(newFoods);


     setCookingLists([...cookingLists,foodObj]);
     console.log(cookingLists);
    //  console.log(foods)
  }

  return (
    <>
     
     <div className='container mx-auto mt-6'>
          <Header></Header>
          <Banner></Banner>
          <div className="flex flex-col-reverse  justify-center md:flex-row gap-0 px-2 md:px-0">
              <Recipecards handleRecipes={handleRecipes} ></Recipecards>
              <Sidebar 
                key={foods.recipe_id} 
                foods={foods} 
                handlePreparing= {handlePreparing}
                cookingLists={cookingLists}
                ></Sidebar>
          </div>
          
          
     </div>
     <ToastContainer />
    </>
  )
}

export default App
