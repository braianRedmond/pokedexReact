import { useState, useEffect } from "react";
import axios from "axios";
import FuncionalPoke from "../Components/FuncionalPoke"

const pokemonHoenn = []
const Hoenn = () => {

    window.scrollTo(0, 0)


    const [data, setData] = useState([]);
    const [index, setIndex] = useState(252)
    const [clase, setClase] = useState('')

    const switchClass = (resp) => {
        switch (resp) {
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
    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then(res => {
                if (pokemonHoenn.length <= 134) {
                    console.log(pokemonHoenn.length)
                    console.log(res)
                    pokemonHoenn.push(res.data)
                };
                if ((index > 251) && (index <= 386)) {
                    setIndex(index + 1)
                };


            }
            )
    }, [index])


    return (
        <>
            <h1><img className="hoenn" src="./images/hoen.png" alt="" /></h1>
            <div className="card-grid container">
                {pokemonHoenn.map(resp => <FuncionalPoke key={resp.id} name={resp.name} id={resp.id} img={resp.sprites.other.home.front_default} type={resp.types[0].type.name} />)}
            </div>
        </>
    );
};

export default Hoenn;