import { useState, useEffect } from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})
  useEffect(() => {
    fetch('http://localhost:5000/categories/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setCategories(data))
    .catch(err => console.log(err))
  },[])
  const submit = (e) => {
    e.preventDefault()
    //console.log(project)
    handleSubmit(project)
  }
  const handleChange = (e) => {setProject({ ...project, [e.target.name]: e.target.value })}
  const handleCategory = (e) => {
    setProject({ ...project, category: {
      id: [e.target.value],
      name: e.target.options[e.target.selectedIndex].text
    } })
  }
  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type='text'
        text='Nome do projeto:'
        name='project_name'
        id='project_name'
        placeholder='Insira o nome do projeto'
        handleOnChange={handleChange}
        value={project.project_name ? project.project_name : ''}
      />
      <Input
        type='number'
        text='Orçamento do projeto:'
        name='project_budget'
        id='project_budget'
        placeholder='Insira o orçamento'
        handleOnChange={handleChange}
        value={project.project_budget ? project.project_budget : ''}
      />
      <Select 
        name='category_id'
        text='Selecione a categoria'
        option={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}
export default ProjectForm