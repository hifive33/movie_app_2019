import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://www.seriouseats.com/thmb/mANmBYm-pJfwrwHksChVWur6w9w=/1500x1125/filters:fill(auto,1)/20210527-baechu-kimchi-vicky-wasik-seriouseats-seriouseats-3-18a2d6d7d1d74a7a82cb13ed350218be.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Ramen",
    image: "https://motto-jp.com/media/wp-content/uploads/2020/03/eyecatch-11.jpeg",
    rating: 4.2
  },
  {
    id: 3,
    name: "Samgyeopsal",
    image: "http://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
    rating: 4.8
  }
];

function Food({ name, picture, rating }) {
  return(
  <div>
    <h3>I like {name}</h3>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} width="150" />
  </div>);
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
    </div>
  );
}

export default App;
