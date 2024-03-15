import Banner from "./Componets/Header/Banner"
import Header from "./Componets/Header/Header"
import Recipecards from "./Componets/Recipecards/Recipecards"
import Sidebar from "./Componets/Recipecards/Sidebar"

function App() {

  return (
    <>
     
     <div className='container mx-auto mt-6'>
          <Header></Header>
          <Banner></Banner>
          <div className="flex flex-col-reverse justify-center md:flex-row gap-4">
              <Recipecards></Recipecards>
              <Sidebar></Sidebar>
          </div>
          
          
     </div>
    </>
  )
}

export default App
