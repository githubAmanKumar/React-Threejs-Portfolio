import React from 'react'
import './Projects.css'
import GenericProject from '../GenericProject/GenericProject'

function Project() {
  return (
    <div className="projects">
      <h2 className="head">&lt;Projects&gt;</h2>
      <div className="cards">
        <GenericProject ImgPath='reactWeatherApp.png' ProjectLink='https://githubamankumar.github.io/React-Weather-App/' ProjectName="Weather App"/>       

        <GenericProject ImgPath='bubbleImg.png' ProjectLink='https://githubamankumar.github.io/bubbleGame/'ProjectName="Bubble Game"/> 

        <GenericProject ImgPath='NiccoloMirandaCloneImg.png' ProjectLink='https://githubamankumar.github.io/Niccolo-Miranda-Clone/'ProjectName="Niccolo Miranda"/>   
             
        <GenericProject ImgPath='TicTacToeImg.png' ProjectLink='https://githubamankumar.github.io/Tic-Tac-Toe-JS/'ProjectName="Tic-Tac-Toe"/>        
      </div>
    </div>
  )
}

export default Project