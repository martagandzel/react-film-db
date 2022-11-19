import './App.css';
import { useState, useEffect } from 'react';
import WelcomeMessage from './WelcomeMessage';
import MovieList from './MovieList';

function App() {

  // const films = [
  //   {
  //     id: 13,
  //     title: "Rogue One: A Star Wars Story",
  //     description: "Unlikely heroes band together to steal the plans to the Death Star.",
  //     year: "2016",
  //     poster: "https://play-lh.googleusercontent.com/proxy/jfgYDXy8i85f0uTzXp_FNKBGBiypsAt3Sgdh--ahSXL3APpWD3lxrwGtYwinvqIN8RN87hl-wm9H99A_-9wwuWvsps0oywXV2Vex8TWIilI1m9e8YbEWGEptUh_iGePzEKKONSCWiizTjVDlYqJeSA5kR7ULsGOgQAkk2Q=w240-h480"
  //   },
  //   {
  //     id: 14,
  //     title: "The Lord of the Rings: The Fellowship of the Ring",
  //     description: "In the first part of J.R.R. Tolkien's epic masterpiece, The Lord of the Rings, a shy young hobbit named Frodo Baggins inherits a simple gold ring. He knows the ring has power, but not that he alone holds the secret to the survival--or enslavement--of the entire world. Now Frodo, accompanied by a wizard, an elf, a dwarf, two men and three loyal hobbit friends, must become the greatest hero the world has ever known to save the land and the people he loves.",
  //     year: "2002",
  //     poster: "https://play-lh.googleusercontent.com/OkbZGHFUkGrqnPycygoqxbAJBE1WzR28vQbifQ-c5aNAapFl8F-eGeipwkweFVYYSMQQTcMvcDte_7HpwA=w240-h480"
  //   },
  //   {
  //     id: 15,
  //     title: "Captain Marvel",
  //     description: "Marvel Studios' Captain Marvel takes you on a spectacular adventure from the 1990s, tracing the path of Carol Danvers (Brie Larson) as she becomes one of the most powerful heroes in the universe. When a galactic war reaches Earth, she meets young agent Nick Fury (Samuel L. Jackson) at the center of a maelstrom, leading to her ultimate destiny as an Avenger!",
  //     year: "2019",
  //     poster: "https://play-lh.googleusercontent.com/MNuc8SF0HDLNyj3CrLEIrRARm3HTwj7mN7pWhB_LvhxpELLayZdmA6stzkcycF6bXE_EzYb2Jgdasg-0yg=w240-h480"
  //   },
  //   {
  //     id: 16,
  //     title: "Wonder Woman",
  //     description: "Before she was Wonder Woman, she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, when an American pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, convinced she can stop the threat. Fighting alongside man in a war to end all wars, Diana will discover her full powers…and her true destiny.",
  //     year: "2017",
  //     poster: "https://play-lh.googleusercontent.com/Uqks7qgYX1BBWaqDk3ue2Dyq9Fe50vnZ3VN7VAwrop91KaOVXtRRhi3Vtg1BJvxOWs-8tBjIxtdoWNJ1wP8=w240-h480"
  //   },
  //   {
  //     id: 17,
  //     title: "Collateral Beauty",
  //     description: "When a successful New York ad executive suffers a personal tragedy and retreats from life, his friends devise a drastic plan to reach him before he loses everything. Pushing him to the very edge, they force him to confront the truth in surprising and profoundly human ways. From Oscar-winning director David Frankel, this thought-provoking drama explores how even the deepest tragedy can reveal moments of beauty, and how the constants of love, time and loss interlock in a life fully lived.",
  //     year: "2016",
  //     poster: "https://play-lh.googleusercontent.com/KM6fMtzUqgFv6PpoPTTu2qCaOzx4ygvf7bKZvvf_f-Wi7RDwDn3Fj11ZyOm2vShejDKqSA=w240-h480"
  //   }
  // ]

  const [films, setFilms] = useState([]);

  const URL = 'http://localhost:5000/films'

  useEffect(() => {

    fetch(URL)
      .then(res => res.json())
      .then(data => setFilms(data))
      .catch(err => console.log(err))

  }, [])

  return (
    <div className="App">
      <WelcomeMessage />
      <MovieList
        films={films}
      />
    </div>
  );
}

export default App;
