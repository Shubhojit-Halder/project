import React from 'react';
import { Provider } from 'react-redux'
import { store } from './app/store'
import Landing from './landing'

export default function Home() {
  return (
    <Landing/>
  )
}
