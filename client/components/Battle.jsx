import React, { useState } from "react";
import pokemonData from "../../src/data/pokemon";
import usersData from "../../src/data/users";
import { Link } from "react-router-dom";
import pokemon from "../../src/data/pokemon";

const playerOneList = usersData.Users.map(user => <option value={user.name} key={user.name}>
    {user.name}
</option>)

const playerTwoList = usersData.Users.map(user => <option value={user.name} key={user.name}>
    {user.name}
</option>)

const defaultPlayers = {
    playerOne: 'Jared',
    playerTwo: 'Lory'
}


function Battle() {
    function randomPokemon() {
        return Math.floor(Math.random() * 151);
    }

    const [pokemonIds, setPokemonIds] = useState([1, 150])
    const [playerNames, setPlayerNames] = useState({ ...defaultPlayers })

    function battleResult(playerNames, pokemonIds) {
        const number = Math.floor(Math.random() * 100)
        if (number >= 50) {
            return {
                winner: playerNames.playerOne,
                winnerPokemon: pokemonIds[0],
                loser: playerNames.playerTwo,
                loserPokemon: pokemonIds[1]
            }
        }
        else {
            return {
                winner: playerNames.playerTwo,
                winnerPokemon: pokemonIds[1],
                loser: playerNames.playerOne,
                loserPokemon: pokemonIds[0]
            }
        }
    }


    function handleChange(evt) {
        const { name, value } = evt.target
        setPlayerNames({
            ...playerNames,
            [name]: value
        })
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        const result = battleResult(playerNames, pokemonIds)
        const history = document.getElementById('history')
        const logEntry = document.createElement("div")
        const description = document.createElement("p");
        logEntry.innerHTML = `${result.winner} and ${result.winnerPokemon} has beaten ${result.loser} and ${result.loserPokemon}`
        const winnerPokemon = document.createElement("img")
        winnerPokemon.innerHTML = `<img src=\`/images/front_sprites/Spr_1y_${pokemonData.Pokemon[winnerPokemon]}.png\`} />`
        
        history.appendChild(logEntry)
        logEntry.appendChild(description)
        logEntry.appendChild(winnerPokemon)
    }



    const onClickHandler = evt => {
        const id1 = randomPokemon()
        const id2 = randomPokemon()
        setPokemonIds([id1, id2])
    }

    return (
        <>
            <div className="flex-auto">
                <h1 className="pt-2 pb-2 pl-60 bg-red-400 text-white 
    xl:text-3xl
    lg:text-xl
    md:text-md
    sm:text-sm"
                > Pokemon Battle Simulator
        </h1>
                <div className="pl-2 pr-2 bg-gray-200 flex flex-nowrap content-center items-center justify-center">
                    <div className="mt-2 mb-2 border-2 border-black rounded-xl grid grid-cols-3 gap-8">
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                            {pokemonData.Pokemon[pokemonIds[1]].name}
                            <img src={`/images/front_sprites/Spr_1y_${pokemonData.Pokemon[pokemonIds[1]].id}.png`} />
                        </div>
                        <div></div>
                        <div className="flex flex-nowrap content-center items-center justify-center">

                            <div>
                                <button onClick={onClickHandler}>
                                    Random
                                    </button>
                            </div>

                        </div>
                        <div></div>
                        <div className="pl-2">
                            {pokemonData.Pokemon[pokemonIds[0]].name}
                            <img
                                src={`/images/back_sprites/Spr_b_g1_${pokemonData.Pokemon[pokemonIds[0]].id}.webp`}
                            />
                        </div>
                        <div></div>
                        <div></div>

                        
                            <div className="flex-auto p-2 rounded-xl bg-red-400">
                                <p className="text-sm text-white">Player 1: </p>
                                <select name='playerOne' value={playerNames.playerOne} onChange={handleChange} className="w-16 text-xs border-0 focus:outline-none">
                                    {playerOneList}
                                </select>
                            </div>
                            <div className="flex flex-nowrap content-center items-center justify-center">
                                <div>
                                    <img onClick={handleSubmit}  src={"/images/Pokeball_tiny.webp"} /> Fight
                                </div>
                            </div>
                            <div className="flex-auto p-2 rounded-xl bg-blue-400">
                                <p className="text-sm text-white">Player 2: </p>
                                <select name='playerTwo' value={playerNames.playerTwo} onChange={handleChange} className="w-16 text-xs border-0 focus:outline-none">
                                    {playerTwoList}
                                </select>
                            </div>
                    </div>
                </div>
            <div id='history'>
                <p>History</p>
            </div>
            </div>
        </>
    );
}

export default Battle;
