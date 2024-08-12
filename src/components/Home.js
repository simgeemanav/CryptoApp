import React from 'react';
import {  Outlet } from 'react-router-dom';
import Nav from './Nav';
import { CryptoProvider } from '../context/CryptoContext';
import { StorageProvider } from '../context/StorageContext';
function Home() {
  return (
    <>
    <CryptoProvider>
      <StorageProvider>
    <main className='w-full h-full flex flex-col first-letter:content-center
     items-center relative text-white font-nunito'>
      <div className='w-screen h-screen bg-gray-300 fixed -z-10'/>
      <Nav/>
      <Outlet />
      </main>
      </StorageProvider>
    </CryptoProvider>
    
    </>
  );
}

export default Home;
