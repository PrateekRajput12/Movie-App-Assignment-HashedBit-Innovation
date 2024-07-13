// assets/assets.jsx
import DeadpoolImg from './Deadpool.avif'
import Jatiye from './jatiye.avif';
import BadNewzImg from './BadNewz.jpg';
import TheHiestImg from './TheHiest.avif';
import RamBharoseImg from './RamBharose.avif'
import Gharat from './gharat.avif';

export const movies = [
  { id: 1, title: 'Deadpool & Wolverine', image: DeadpoolImg,genre: [
    "Drama"
  ], },
  { id: 2, title: 'Carry On Jattiye"', image: Jatiye,  genre: [
    "Drama"
  ] },
  { id: 3, title: 'Bad Newz', image: BadNewzImg },
  { id: 4, title: 'The Hiest', image: TheHiestImg ,genre: [
    "Action",
    "Comedy",
    "Suspense",
    "Thriller"
  ], },
  { id: 5, title: 'Ram Bharose', image: RamBharoseImg, genre: [
    "Drama"
  ] },
  { id: 6, title: 'Gharat Ganpati', image: Gharat, genre: [
    "Drama",
    "Family"
  ] }
];
