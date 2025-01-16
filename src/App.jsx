import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// 1. Використовуючи механізм routes, створіть додаток, присвячений відомому художнику.
// Один маршрут має вести на біографію художника,
// інший — на його найвідомішу картину,
// третій — на зібрання його картин.
// Додайте до Завдання 1 механізм посилань, який дозволяє переходити з головної сторінки за посиланнями на маршрути.
// Додайте до Завдання 1 передачу параметрів під час переходу на маршрут.

const Home = () => (
  <div>
    <img src="davinci.jpg" style={{width: "40%"}}></img>
    <h1>Leonardo Da Vinci</h1>
    <nav>
      <ul>
        <li><Link to="/biography">Biography</Link></li>
        <li><Link to="/masterpiece">Masterpiece</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  </div>
);

const Biography = () => (
  <div>
    <h2>Leonardo Da Vinci's biography</h2>
    <p>Leonardo di ser Piero da Vinci(15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.While his fame initially rested on his achievements as a painter, he has also become known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, astronomy, botany, cartography, painting, and palaeontology. Leonardo is widely regarded to have been a genius who epitomised the Renaissance humanist ideal,and his collective works comprise a contribution to later generations of artists matched only by that of his younger contemporary Michelangelo.</p>
    <Link to="/">Main page</Link>
    <img src="lastsupper.jpg" alt="" />
  </div>
);

const Masterpiece = () => (
  <div>
    <h2>Leonardo Da Vinci's masterpiece</h2>
    <p>Mona Lisa</p>
    <img src="monalisa.jpg" style={{width: "40%"}}></img>
    <br />
    <Link to="/">Main page</Link>
  </div>
);

const Gallery = () => (
  <div>
    <h2>Leonardo Da Vinci's paintings</h2>
    <ul>
      <li><Link to="/gallery/1">Last supper</Link></li>
      <li><Link to="/gallery/2">Louvre Virgin of the Rocks</Link></li>
      <li><Link to="/gallery/3">Vitruvian man</Link></li>
    </ul>
    <Link to="/">Main page</Link>
  </div>
);

const Painting = () => {
  const { id } = useParams();

  const paintings = {
    1: {
      title: "Last supper",
      description: "Published in 1495–1498.",
      image: "/public/lastsupper.jpg",
    },
    2: {
      title: "Virgin of the Rocks",
      description: "Published in 1483–1486.",
      image: "/public/thevirginoftherocks.jpg",
    },
    3: {
      title: "Vitruvian man",
      description: "Published in 1490.",
      image: "/public/vitruvianman.jpg",
    },
  };

  

  const painting = paintings[id];

  if (!painting) {
    return (
      <div>
        <h2>Painting not found</h2>
        <Link to="/gallery">back to gallery</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{painting.title}</h2>
      <img src={painting.image} alt={painting.title} style={{ width: '400px' }} />
      <p>{painting.description}</p>
      <Link to="/gallery">Back to gallery</Link>
    </div>
  );
};


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biography" element={<Biography />} />
      <Route path="/masterpiece" element={<Masterpiece />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery/:id" element={<Painting />} />
    </Routes>
  </Router>
);

export default App;
