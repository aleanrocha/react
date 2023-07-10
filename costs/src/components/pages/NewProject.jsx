import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

const NewProject = () => {
  return (
    <div className={styles.project_container}>
      <h1>Criar projeto</h1>
      <p>Crie seus projetos para depois adicionar os serviços!</p>
      <ProjectForm />
    </div>
  )
}
export default NewProject