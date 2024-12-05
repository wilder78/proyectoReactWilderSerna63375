function Item({product}) {
  return (
    <div>
      <img src={product.img} alt="" />
      <h3>{product.nombre}</h3>
      <h4>Precio: ${product.precio}</h4>
    </div>
  );
}

export default Item;
