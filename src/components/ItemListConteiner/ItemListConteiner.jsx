import { Item } from "../Item/Item";

const ItemListConteiner = () => {
  const productos = ["Camisetas","Sudaderas","Tenis","Pantalonetas","Busos"]

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((item) => (
          <Item key={item} nombre={item}/>
        ))}
      </ul>
    </div>
  );
};

export default ItemListConteiner;

