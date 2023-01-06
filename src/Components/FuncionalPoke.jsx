import React, { useState, useEffect } from 'react'
import '../styles/pokeappi.css'


const FuncionalPoke = ({ id, name, img, type }) => {
        
      const [clase, setClase] = useState("")
      useEffect(() => {
        switchCLass(type)
      }, [])

       const switchCLass = (response) => {
        switch (response) {
            case "fire":
                setClase("red");
                break;
            case "water":
                setClase("blue");
                break;
            case "earth":
                setClase("brown");
                break;
            case "grass":
                setClase("green")
                break;
            case "bug":
                setClase("green")
                break;
            case "poison":
                setClase("purple")
                break;
            case "normal":
                setClase("silver")
                break;
            case "electric":
                setClase("gold")
                break;
            case "ground":
                setClase("brown")
                break;
            case "fairy":
                setClase("pink")
                break;
            case "fighting":
                setClase("orange")
                break;
            case "psychic":
                setClase("purple")
                break;
            case "ghost":
                setClase("purple")
                break;
            case "ice":
                setClase("ice")
                break;
            case "dragon":
                setClase("blue")
                break;
            case "steel":
                setClase("grey")
                break;
            case "dark":
                setClase("black")
                break;
            case "rock":
                setClase("brown")
                break;



            default:
                setClase("silver")
                break;
        }

    }
    
   


    return (
        <div className='container'>
            <div className='cardContainer'>
                <div className={clase}>
                    <img style={{ width: '250px', height: '150px' }} src={img} alt="" />
                    <h2>{name}</h2>
                    <h3>#{id}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                     </div>

                </div>
            </div>
        </div>
    )
}

export default FuncionalPoke