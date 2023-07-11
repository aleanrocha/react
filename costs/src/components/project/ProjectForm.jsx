import { useState, useEffect } from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = ({btnText}) => {
  const [categories, setCategories] = useState([])
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
  return (
    <form className={styles.form}>
      <Input
        type='text'
        text='Nome do projeto:'
        name='project_name'
        id='project_name'
        placeholder='Insira o nome do projeto'
      />
      <Input
        type='number'
        text='Orçamento do projeto:'
        name='project_budget'
        id='project_budget'
        placeholder='Insira o orçamento'
      />
      <Select 
        name='category_id'
        text='Selecione a categoria'
        option={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}
export default ProjectForm