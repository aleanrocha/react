import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjectForm from '../project/ProjectForm'

const Project = () => {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()

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
  const editPost = (project) => {
    setMessage('')
    if (project.project_budget < project.costs) {
      // message
      setMessage('O orçamento não pde ser menor que o custo do projeto!')
      setType('error')
      return false
    }
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(project)
    })
    .then(res => res.json())
    .then(data =>{
      setMessage('Projeto atualizado com sucesso!')
      setType('success')
      setProject(data)
      setShowProjectForm(false)
    }).catch(err => console.log(err))
  }
  const toggleProjectForm = () => {setShowProjectForm(!showProjectForm)}
  const toggleServiceForm = () => {setShowServiceForm(!showServiceForm)}
  return (
    <>
      {project.project_name ? (
        <div className={styles.project_details}>
          <Container customClass='column'>
            {message && <Message type={type} msg={message} />}
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
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText='Concluir edição'
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <div className={styles.align_content}>
                <h2>Adicione um serviço</h2>
                <button className={styles.btn} onClick={toggleServiceForm}>
                  {!showServiceForm ? `Adicionar serviço` : `Fechar`}
                </button>
              </div>
              <div className={styles.project_info}>
                {showServiceForm && <p>Formulário de serviço</p>}
              </div>
            </div>
            <h3>Serviços</h3>
            <Container customClass='start'>
              <p>Itens de serviços</p>
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
export default Project