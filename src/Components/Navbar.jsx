import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { removeTokenFromStorage } from "./utils/localStorage.service";
import styles from "./Navbar.module.css";
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import { yellow } from "@mui/material/colors";

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme, login, setLogout } =
    useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const changeTheme = () => {
    if (isDarkMode) setLightTheme();
    else setDarkTheme();
  };

  const logout = () => {
    setLogout();
    removeTokenFromStorage();
  };

  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
          }`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">
            <img className={`${styles.navLogo}`} src="\images\pokemonLogo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/kanto">
                  Kanto
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/johto">
                  Johto
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/hoenn">
                  Hoenn
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/sinnoh">
                  Sinnoh
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/unova">
                  Unova
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/kalos">
                  Kalos
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/alola">
                  Alola
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/galar">
                  Galar
                </Link>
              </li>
            



              <li className={`nav-item`}>
                <button
                  className={`btn btn-${isDarkMode ? "light" : "dark"} ${styles.btnStyle
                    }`}
                  onClick={changeTheme}
                >
                  {isDarkMode ? <WbSunnySharpIcon sx={{ color: yellow[800] }} /> : "🌙"}{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
