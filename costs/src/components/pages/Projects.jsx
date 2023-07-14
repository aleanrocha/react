import styles from './Projects.module.css'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

const Projects = () => {
  const location = useLocation()
  const [projectC, setProjectC] = useState([])
  let message = ''
  if (location.state) {message = location.state.message}
  useEffect(() => {
    fetch('http://localhost:5000/projects/', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => setProjectC(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/NewProject' text='Criar projeto' />
      </div>
      {message && (<Message msg={message} type='success'/>)}
      <Container customClass='project_card_align'>
        {projectC.length > 0 && 
          projectC.map(project => (
            <ProjectCard 
              name={project.project_name} 
              budget={project.project_budget}
              category={project.category.name}
              id={project.id}
              key={project.id}
            />
          ))
        }
      </Container>
    </div>
  )
}
export default Projects