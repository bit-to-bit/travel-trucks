// import { useState, useEffect, useRef } from 'react';
// import ErrorMessage from './components/errorMessage/ErrorMessage';
// import ImageGallery from './components/imageGallery/ImageGallery';
// import SearchBar from './components/searchBar/SearchBar';
// import { fetchPhotos } from './api/photos';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import MovieDetailsPage from './pages/movieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/moviesPage/MoviesPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import Navigation from './components/navigation/Navigation';
import MovieCast from './components/movieCast/MovieCast';
import MovieReviews from './components/movieReviews/MovieReviews';
import Header from './components/header/Header';

import css from './App.module.css';
import CatalogPage from './pages/catalogPage/CatalogPage';

const App = () => {
  return (
    <div>
      <Header />
      <main className={css.main}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
