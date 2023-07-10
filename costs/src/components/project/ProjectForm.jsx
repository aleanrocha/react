const ProjectForm = () => {
  return (
    <div>
      <div>
        <input type="text" name="project_name" id="project_name" placeholder="Insira o nome do projeto" />
      </div>
      <div>
        <input type="text" name="project_budget" id="project_budget" placeholder="Insira o raçamento total" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>
            Selecione a categoria
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </div>
  )
}
export default ProjectForm