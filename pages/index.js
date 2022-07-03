import React from 'react';
import { Provider } from 'react-redux'
import { store } from './app/store'
import LandingPage from './LandingPage'
import Navbar from './Main/ComponentsFolder/Navbar';

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <LandingPage/>
    </>
  )
}
