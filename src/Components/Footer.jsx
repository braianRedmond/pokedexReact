import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';
import styles from "./Footer.module.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer>
      <div className={styles.footerWrapper}>
        <button className={`btn btn-danger ${styles.top}`} onClick={scrollToTop}>Volver al inicio</button>
        <div style={{backgroundColor:'grey', textAling:'center'}}><p> Made with React by Braian Redmond </p></div>
      </div>

    </footer >
  )
}

export default Footer