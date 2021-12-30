import React from 'react'

function Job(props){
    const {job, tagsSearched} = props
    const svgDir = require.context('../images') 
    const skills = [job.role, job.level,...(job.languages), ...(job.tools)]
    
    let classToAdd = "display"
    if(tagsSearched.length>0){
        console.log("Here")
        const tagsPresent = tagsSearched.filter(tag => skills.includes(tag))
        if(tagsPresent.length === 0){
            classToAdd = "hidden"
        }
    }

    const skillParas = skills.map((skill, index) => {
        return( 
                <p 
                    key={index} 
                    onClick={(event)=>props.handleClick(event)} 
                    className="skill">
                    {skill}
                </p>)
    })

    const leftBorder = job.featured ? "5px solid hsl(180, 29%, 50%)" :"none"
    
    const featuredStyle = {borderLeft:leftBorder}
    return (
        <div className={`job ${classToAdd}`} style={featuredStyle}>
            <div className="col1">
                <img src = {svgDir('./'+props.image)} alt={`${job.company} logo`}/>
            </div>
            
            <div className="col2">
                <h4 className="job--title">{job.company} 
                    {job.new && <span className='new'>New!</span>} 
                    {job.featured && <span className='featured'>Featured</span>}
                </h4>
                <h3>{job.position}</h3>
                <div className="job--info">
                    <p>{job.postedAt}
                    <span className="dot">{`\u25CF`}</span>
                    {job.contract}
                    <span className='dot'>{'\u25CF'}</span>
                    {job.location}</p>
                </div>
            </div>

            <div className="job--skills-experience">
                {skillParas}
            </div>
        

        </div>
    )
}
 export default Job