import { productsData } from 'productsData';

export const App = () => {
  return (
    <div>
      <h1>Picture store</h1>
      <Product title="Mountains" price="10.99" discount={null} />
      <Product title="Ocean" price="8.49" discount={1.5} />
      <Product title="Lake" price="6.80" discount={2.33} />
    </div>
  );
};

const Product = ({ title, price, discount }) => {
  return (
    // <div>
    //   <img
    //     src="https://i.pinimg.com/564x/09/74/d3/0974d3430c55bef1c076466e295a90d0.jpg"
    //     alt="Tacos With Lime"
    //     width="640"
    //   />
    //   <h2>{title}</h2>
    //   {discount && <h3>Discount: {discount}$</h3>}
    //   <p>Price: {price}$</p>
    //   <button type="button">Add to cart</button>
    // </div>
    <section>
      {productsData.map(product => {
        return (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            discount={product.discount}
          />
        );
      })}
    </section>
  );
};
