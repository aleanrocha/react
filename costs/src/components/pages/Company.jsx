import styles from './Company.module.css'
import logo from '../../assets/costs_logo.png'
const Company = () => {
  return (
    <div className={styles.content_container}>
      <div className={styles.logo}>
        <img src={logo} alt="costs" />
      </div>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum sapiente esse eum enim alias laboriosam, similique labore perspiciatis, maxime consequatur veniam! Magni nostrum nemo cupiditate, quasi corrupti doloremque aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt officiis corporis deleniti ullam voluptatibus quam recusandae eaque, asperiores ad, sequi incidunt eveniet ut, consequatur neque nam nisi maiores! Vitae, dolores!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eligendi molestias reprehenderit ducimus quod veritatis eius, voluptate tempore nam ab, animi, mollitia facilis sint neque sunt itaque id iure cumque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, accusamus. Molestiae sint, rem nihil natus, et maxime mollitia vel doloribus minus incidunt corrupti, neque voluptas possimus at a similique facilis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laudantium pariatur cupiditate cumque ut sed non eius fuga! Labore officia molestiae recusandae eos pariatur aliquid doloribus nesciunt quidem ipsam nemo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste alias animi mollitia doloribus eveniet laudantium eius laboriosam nam, amet maxime quibusdam quos porro illum consectetur enim unde adipisci exercitationem provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe illo harum. Sint, accusamus veritatis. Harum aperiam cupiditate sunt omnis quibusdam? Eaque sequi voluptates totam laborum exercitationem voluptatum deserunt libero.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, recusandae libero, placeat fugit minus eius quasi magnam vero debitis dolores vel fuga dicta maiores officia itaque impedit, beatae error ipsum.</p>
      </div>
    </div>
  )
}
export default Company