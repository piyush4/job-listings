import logo from './logo.svg';
import './App.css';

import React, {Fragment} from 'react'
import data from './data/data.json'
import Job from './components/Job'
import Header from './components/Header'

function App() {
  const [selectedSkills, setSelectedSkills] = React.useState([])

  function handleRemove(skillToRemove){
    setSelectedSkills(prevSkills => {
      return prevSkills.filter(skill=>skill!==skillToRemove)
    })
  }
  function handleClick(event){
    const itemToAdd = event.target.textContent
    !(selectedSkills.includes(itemToAdd)) && setSelectedSkills(()=>{
      return ([...selectedSkills, itemToAdd])
    })
  }
  function handleClear(){
    setSelectedSkills([])
  }
  const listJobs = data.map(job =>{
    const parts = job.logo.split('/')
    
    return (<Job 
      key = {job.id} 
      job = {job} 
      directory={'.'+parts[0]+'/'+parts[1]} 
      image={parts[2]}
      handleClick = {handleClick}
      tagsSearched = {selectedSkills}
      />)
  })
  return (
    <Fragment>
      <Header 
        selectedSkills = {selectedSkills} 
        handleRemove = {handleRemove}
        handleClear = {handleClear}/>
      <div className="jobList">{listJobs}</div>
    </Fragment>
  );
}

export default App;
