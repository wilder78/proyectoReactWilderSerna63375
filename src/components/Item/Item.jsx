function Item({product}) {
  return (
    <div>
      <img src="assets/logoMs2.png" alt={product.codigo} />
      <h3>{product.title}</h3>
      <h4>Precio: ${product.price}</h4>
    </div>
  );
}

export default Item;
