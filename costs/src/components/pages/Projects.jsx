import styles from './Projects.module.css'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'

const Projects = () => {
  const location = useLocation()
  const [projectC, setProjectC] = useState([])
  const [removeLoading, setRemoveLoading] = useState
  (false)
  const [projectMessage, setProjectMessage] = useState('')
  let message = ''
  if (location.state) {message = location.state.message}
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects/', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then(data => {
        setProjectC(data) 
        setRemoveLoading(true)
      }).catch(err => console.log(err))
    }, 1000)
  }, [])
  const removeProject = (id) => {
    setProjectMessage('')
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      setProjectC(projectC.filter(project => project.id !== id))
      setProjectMessage('Projeto removido com sucsso!')
    }).catch(err => console.log(err))
  }
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/NewProject' text='Criar projeto' />
      </div>
      {message && (<Message msg={message} type='success'/>)}
      {projectMessage && (<Message msg={projectMessage} type='success'/>)}
      <Container customClass='project_card_align'>
        {projectC.length > 0 && 
          projectC.map(project => (
            <ProjectCard 
              name={project.project_name} 
              budget={project.project_budget}
              category={project.category.name}
              id={project.id}
              key={project.id}
              handleRemove={removeProject}
            />
          ))
        }
        {!removeLoading && <Loading />}
        {removeLoading && projectC.length === 0 && <p className={styles.alignP}>Não há projetos cadastrados!</p>}
      </Container>
    </div>
  )
}
export default Projects