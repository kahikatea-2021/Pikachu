import React from "react";
import pokemonData from "../../src/data/pokemon";
import { Link } from "react-router-dom";

function Battle() {
    function randomPokemon() {
        return Math.floor(Math.random() * 101);
    }

    let pokemon1 = randomPokemon();
    let pokemon2 = randomPokemon();

    console.log(pokemon1);
    console.log(pokemon2);

    return (
        <>
            <div className="flex-auto">
                <h1
                    className="pt-2 pb-2 pl-10 bg-red-400 text-white
    xl:text-3xl
    lg:text-xl
    md:text-md
    sm:text-sm"
                >
                    {" "}
          Pokemon Battle Simulator
        </h1>
                <div className="pl-2 pr-2 bg-gray-200 flex flex-nowrap content-center items-center justify-center">
                    <div className="mt-2 mb-2 border-2 border-black rounded-xl grid grid-cols-3 gap-8">
                        <div>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div>
                            {pokemonData.Pokemon[pokemon2].name}
                            <img
                                src={`/images/front_sprites/Spr_1y_${pokemonData.Pokemon[pokemon2].id}.png`
                                }
                            />
                        </div>
                        <div></div>
                        <div className="flex flex-nowrap content-center items-center justify-center">
                            <Link to="/Battle">
                                <div>Random</div>
                            </Link>
                        </div>
                        <div></div>
                        <div className="pl-2">
                            {pokemonData.Pokemon[pokemon1].name}
                            <img
                                src={
                                    `/images/back_sprites/Spr_b_g1_${pokemonData.Pokemon[pokemon1].id}.webp`
                                }
                            />
                        </div>
                        <div></div>
                        <div></div>
                        <div className="flex-auto p-2 rounded-xl bg-red-400">
                            <p className="text-sm text-white">Player 1: </p>
                            <select
                                className="w-16 text-xs
        border-0 focus:outline-none"
                            >
                                <option value="NA">Jared</option>
                                <option value="EUW">Johann</option>
                                <option value="EUN">Johnny</option>
                                <option value="KR">Lory</option>
                                <option value="BR">Rebecca</option>
                            </select>
                        </div>
                        <div className="flex flex-nowrap content-center items-center justify-center">
                            <Link to="/Battle">
                                <div>
                                    <img
                                        src={"/images/Pokeball_tiny.webp"}
                                    />{" "}
                  Fight
                </div>
                            </Link>
                        </div>
                        <div className="flex-auto p-2 rounded-xl bg-blue-400">
                            {" "}
                            <p className="text-sm text-white">Player 2: </p>
                            <select
                                className="w-16 text-xs
        border-0 focus:outline-none"
                            >
                                <option value="NA">Jared</option>
                                <option value="EUW">Johann</option>
                                <option value="EUN">Johnny</option>
                                <option value="KR">Lory</option>
                                <option value="BR">Rebecca</option>
                            </select>
                        </div>
                    </div>

                    {/* 
                <ul>
                    {pokemonData.Pokemon.map(pokemon => <li key={pokemon.name}>
                        <img src={(process.env.PUBLIC_URL + `/images/back_sprites/Spr_b_g1_${pokemon.id}.webp`)} />
                        <img src={(process.env.PUBLIC_URL + `/images/front_sprites/Spr_1y_${pokemon.id}.png`)} />
                        <img src={(process.env.PUBLIC_URL + `/images/mini_sprites/${pokemon.id}.webp`)} />
                        {pokemon.name}
                    </li>)}
                </ul> */}
                </div>
            </div>
        </>
    );
}

export default Battle;
