import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArticlesContainer } from './ArticlesContainer';
import Footer from './Footer';

const MainContainer = () => (
  <div>
    <Routes>
      <Route path='/' element={
        <ArticlesContainer pathName='/' />
      } />
      <Route path='arstechnica' element={
        <ArticlesContainer pathName='arstechnica' />
      } />
      <Route path='associatedpress' element={
        <ArticlesContainer pathName='associatedpress' />
      } />
      <Route path='cnn' element={
        <ArticlesContainer pathName='cnn' />
      } />
      <Route path='espn' element={
        <ArticlesContainer pathName='espn' />
      } />
      <Route path='fortune' element={
        <ArticlesContainer pathName='fortune' />
      } />
      <Route path='reuters' element={
        <ArticlesContainer pathName='reuters' />
      } />
      <Route path='techcrunch' element={
        <ArticlesContainer pathName='techcrunch' />
      } />
      <Route path='wallstreetjournal' element={
        <ArticlesContainer pathName='wallstreetjournal' />
      } />
      <Route path='time' element={
        <ArticlesContainer pathName='time' />
      } />
      <Route path='usatoday' element={
        <ArticlesContainer pathName='usatoday' />
      } />
    </Routes>
    <Footer />
  </div>
)

export default MainContainer;