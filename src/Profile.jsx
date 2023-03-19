const values = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
  { title: 'Mango', id: 4 },
  { title: 'Orange', id: 5 },
  { title: 'Banana', id: 6 },
  { title: 'Onion', id: 7 },
  { title: 'Tomato', id: 8 },
  { title: 'Potato', id: 9 },
];

const Product = () => {
  const listItems = values.map((product) => {
    return <li className="py-2 text-xl font-bold" key={product.id}>{product.id} {product.title}</li>
  });

  return <ul>{listItems}</ul>
}

export default Product;