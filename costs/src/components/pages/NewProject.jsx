import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

const NewProject = () => {
  const navigate = useNavigate()
  const createPost = (project) => {
    // initialize costs and services
    project.costs = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then((res) => res.json())
    .then((data) => {
      // redirect
      navigate('/Projects', {message: 'Projeto criado com sucesso!'})
    })
    .catch(err => console.log(err))
  }
  return (
    <div className={styles.project_container}>
      <h1>Criar projeto</h1>
      <p>Crie seus projetos para depois adicionar os serviços!</p>
      <ProjectForm handleSubmit={createPost} btnText='Criar projeto' />
    </div>
  )
}
export default NewProject