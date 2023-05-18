import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import Anime from '../Anime/Anime';
import AnimeList from '../AnimeList/AnimeList';
import MangaList from '../MangaList.js/MangaList';
import Manga from '../Manga/Manga';

export default function App() {
  const [user, setUser] = useState("null");
  
  return (
    <div className="App">
      {user ? (
      <>
        <NavBar user ={user}/>
          <Routes>
            <Route path="anime/" element={<AnimeList />} />
            <Route path="anime/:id" element={<Anime />} />
            <Route path="manga/" element ={<MangaList/>}/>
            <Route path="manga/:id" element={<Manga />} />
          </Routes>
        </>
        ):(
            <AuthPage path ="/" setUser={setUser}/>
        )}
    </div>
  );
}

