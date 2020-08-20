import React from 'react'
import AuthView from './AuthView';

export const HomeView = () => (
  <div className = "home-container">
    <div className = "container">
      <h1 className = "text-center">Muellimler Ucun <br/> Baslanqic Noktesi</h1>
      <AuthView/>
    </div>
  </div>
)

export default HomeView
