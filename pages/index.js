import React from 'react';
import { Provider } from 'react-redux'
import { store } from './app/store'
import Landing from './landing'
import Navbar from './Main/ComponentsFolder/Navbar';

export default function Home() {
  return (
    <>
    <Navbar/>
    {/* <Landing/> */}
    </>
  )
}
