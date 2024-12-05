import { useEffect } from "react";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {
    // console.log("Anda a buscar los productos.")
    
  },[])

  return (
    <>
      <Navbar />
      <ItemListConteiner />
    </>

  )
}

export default App;