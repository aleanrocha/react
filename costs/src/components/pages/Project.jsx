import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { parse, v4 as uuidv4 } from 'uuid'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

const Project = () => {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()
  const [services, setServices] = useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(data => {
        setProject(data)
        setServices(data.services)
      })
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
  const createService = (project) => {
    setMessage('')
    //last service
    const lastService = project.services[project.services.length -1]
    lastService.id = uuidv4()
    const lastServiceCost = lastService.cost
    const newCosts = parseFloat(project.costs) + parseFloat(lastServiceCost) 
    if (newCosts > parseFloat(project.project_budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
      setType('error')
      project.services.pop()
      return false
    }
    // add service cost to project total cost
    project.costs = newCosts
    // update project
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(project)
    })
    .then(res => res.json())
    .then(data => {
      setMessage('Serviçio criado com sucesso!')
      setType('success')
      setShowServiceForm(false)
    }).catch(err => console.log(err))
  }
  const removeService = (id, cost) => {
    setMessage('')
    const servicesUpdated = project.services.filter(service => service.id !== id)
    const projectUpdated = project
    projectUpdated.services = servicesUpdated
    projectUpdated.costs = parseFloat(projectUpdated.costs) - parseFloat(cost)
    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(projectUpdated)
    })
    .then(res => res.json())
    .then(data => {
      setProject(projectUpdated)
      setServices(servicesUpdated)
      setMessage('Serviço removido com sucesso!')
      setType('success')
    }).catch(err => console.log(err))

  }
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
                {showServiceForm && (
                  <ServiceForm 
                    handleSubmit={createService}
                    btnText='Adicionar serviço'
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h3>Serviços</h3>
            <Container customClass='project_card_align'>
              {services.length > 0 && services.map(service => (
                <ServiceCard
                  id={service.id}
                  name={service.name}
                  cost={service.cost}
                  description={service.description}
                  key={service.id}
                  handleRemove={removeService}
                />
                ))
              }
              {services.length === 0 && <p>Não há serviços cadastrados!</p>}
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