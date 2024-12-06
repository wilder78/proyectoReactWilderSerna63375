// import { getProducts } from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListConteiner = (props) => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLC/search?q=celulares')
    .then((data) => {
      console.log(data)
      return data.json()
    })
    .then((datos) => {
      setProductos(datos.results)
      console.log(datos)
    })
    .catch((error) => {
      console.log(error)
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
