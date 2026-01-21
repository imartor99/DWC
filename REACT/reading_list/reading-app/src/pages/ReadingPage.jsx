import React from 'react';
import ReadingList from '../components/ReadingList';
import Booklist from '../components/Booklist';

export default function ReadingPage() {
  return (
    <div className='reading-page'>
      <h1>Mi Biblioteca</h1>
      <Booklist />
    </div>
  );
}
