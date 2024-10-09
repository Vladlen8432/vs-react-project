export const App = () => {
  return (
    <div>
      <h1>Picture store</h1>
      <Product name="Mountains" price="10.99" />
      <Product name="Ocean" price="8.49" />
      <Product name="Lake" price="6.80" />
    </div>
  );
};

const Product = ({ name, price }) => {
  return (
    <div>
      <img
        src="https://i.pinimg.com/564x/09/74/d3/0974d3430c55bef1c076466e295a90d0.jpg"
        alt="Tacos With Lime"
        width="640"
      />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};
