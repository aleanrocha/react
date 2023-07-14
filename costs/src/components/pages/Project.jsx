import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'

const Project = () => {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(err => console.log(err))
    }, 1000)
  }, [id])
  const toggleProjectForm = () => {setShowProjectForm(!showProjectForm)}
  return (
    <>
      {project.project_name ? (
        <div className={styles.project_details}>
          <Container customClass='column'>
            <div className={styles.details_container}>
              <div className={styles.align_content}>
                <h1>Projeto: {project.project_name}</h1>
                <button className={styles.btn} onClick={toggleProjectForm}>
                  {!showProjectForm ? `Editar projeto` : `Fechar`}
                </button>
              </div>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p><span>Categoria:</span> {project.category.name}</p>
                  <p><span>Total do orçamento:</span> R${project.project_budget}</p>
                  <p><span>Total utilizado:</span> R${project.costs}</p>
                </div>
              ) : (
                <div>
                  <p>project form</p>
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
export default Project