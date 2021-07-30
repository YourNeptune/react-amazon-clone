import "../css/Home.css";
import Product from './Product'

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        alt="banner-img"
        src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/YzllYTYxOGQt/YzllYTYxOGQt-M2I2ZTU1ZGQt-w3000._CB663476491_.jpg"
      />

      <Product
        id="0001"
        title="KitchenAid KFC3516CU 3.5 Cup Mini Food Processor, Contour Silver"
        image="https://images-na.ssl-images-amazon.com/images/I/51TURhlVHTL.__AC_SX300_SY300_QL70_ML2_.jpg"
        price={49.98}
        rating={5}

      />
    </div>
  );
};

export default Home;
