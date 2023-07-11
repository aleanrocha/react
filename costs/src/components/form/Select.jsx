import styles from './Select.module.css'
const Select = ({text, name, option, hendleOnChange, value}) => {
  return (
    <div className={styles.form_select}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name} >
        <option>Selecione a opção</option>
      </select>
    </div>
  )
}

export default Select