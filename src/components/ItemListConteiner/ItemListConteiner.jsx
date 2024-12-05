import { getProducts } from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListConteiner = (props) => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    
    getProducts()
    .then((res) =>{
      console.log(res)
      setProductos(res)
    })
    .catch((err) => {
      console.log(err)
    })
  },[productos])


  return (
    <div>
      <h2>{props.greeting}</h2>
      <ul>
        <ItemList products={productos} />
      </ul>
    </div>
  );
};

export default ItemListConteiner;
