import React from 'react'
import {Fragment} from 'react'
function Header(props){
    const {selectedSkills, handleClear} = props
    const svgDir = require.context('../images/')
    const searchedSkills = selectedSkills.map((skill, index) =>{
        
        return (<Fragment key={index}><p className= "searched-items" key={index}>{skill}</p>
        <span className="remove" onClick={()=>props.handleRemove(skill)}><img src={svgDir('./icon-remove.svg')}/></span></Fragment>)
    })
    const toDisplay = selectedSkills.length === 0
    
    return(
        <header className='header'>
            <div className={toDisplay && "hidden"}>
                <div className="search-bar">
                    <div className="search-collection">
                        {searchedSkills}
                    </div>
                    <button onClick={handleClear} className="clear">Clear</button>
                </div>
                
            </div>
            
        </header>)
}
export default Header