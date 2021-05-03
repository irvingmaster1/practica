let _main3 = document.querySelector('#contenedor') 
let _main = document.querySelector('#contenedor') 
let _main2 = document.querySelector('#contenedor') 

_main3.addEventListener('onmouseenter', pokemon3);
_main.addEventListener('click', pokemon);
_main2.addEventListener('dblclick', pokemon2);



function pokemon(){
    fetch("http://pokeapi.co/api/v2/pokemon/charizard")
    .then((resp)=>resp.json())
    .then((res)=>{
        _main.innerHTML=`<div class="toño">
            <h2>${res.name}</h2>
            <img src='${res.sprites.front_shiny}' width='200px'></img>
            <div class="info">
                <h3>Estadisticas</h3>
                <div>
                    <p><span>${res.stats[0].stat.name} : </span>
                    <span>${res.stats[0].base_stat}</span></p>
                    <p><span>${res.stats[1].stat.name} : </span>
                    <span>${res.stats[1].base_stat}</span></p>
                    <p><span>${res.stats[2].stat.name} : </span>
                    <span>${res.stats[2].base_stat}</span></p>
                    <p><span>${res.stats[3].stat.name} : </span>
                    <span>${res.stats[3].base_stat}</span></p>
                    <p><span>${res.stats[4].stat.name} : </span>
                    <span>${res.stats[4].base_stat}</span></p>
                    <p><span>${res.stats[5].stat.name} : </span>
                    <span>${res.stats[5].base_stat}</span></p>
                    </div>
                    <h3>Movimientos</h3>
                    <p><span>${res.moves[66].move.name}: learned at lvl </span>
                    <span>${res.moves[66].version_group_details[0].level_learned_at}</span></p>
                    <span>${res.moves[10].move.name}: learned at lvl </span>
                    <span>${res.moves[10].version_group_details[0].level_learned_at}</span>
                    <p><span>${res.moves[9].move.name}: learned at lvl </span>
                    <span>${res.moves[9].version_group_details[0].level_learned_at}</span></p>
                    <span>${res.moves[3].move.name}: learned at lvl </span>
                    <span>${res.moves[3].version_group_details[0].level_learned_at}</span>
                    <p><span>${res.moves[22].move.name}: learned at lvl </span>
                    <span>${res.moves[22].version_group_details[0].level_learned_at}</span></p>
                <h3>Tipo</h3>
                    <span>${res.types[0].type.name}</span>
                    <div><img src="img/fuego1.png"  class="fire"></div>
            </div>
            </div>


            
        `;
        
        console.log(res);
    })
}
function pokemon2(){
    fetch("http://pokeapi.co/api/v2/pokemon/charmander")
    .then((resp)=>resp.json())
    .then((res)=>{
        _main.innerHTML=`<div class="toño">
            <h2>${res.name}</h2>
            <img src='${res.sprites.front_shiny}' width='200px'></img>
            <div>
                <h3>Estadisticas</h3>
                <div>
                    <p><span>${res.stats[0].stat.name} : </span>
                    <span>${res.stats[0].base_stat}</span></p>
                    <p><span>${res.stats[1].stat.name} : </span>
                    <span>${res.stats[1].base_stat}</span></p>
                    <p><span>${res.stats[2].stat.name} : </span>
                    <span>${res.stats[2].base_stat}</span></p>
                    <p><span>${res.stats[3].stat.name} : </span>
                    <span>${res.stats[3].base_stat}</span></p>
                    <p><span>${res.stats[4].stat.name} : </span>
                    <span>${res.stats[4].base_stat}</span></p>
                    <p><span>${res.stats[5].stat.name} : </span>
                    <span>${res.stats[5].base_stat}</span></p>
                    </div>
                    <h3>Movimientos</h3>
                    <p><span>${res.moves[66].move.name}: learned at lvl </span>
                    <span>${res.moves[66].version_group_details[0].level_learned_at}</span></p>
                    <span>${res.moves[10].move.name}: learned at lvl </span>
                    <span>${res.moves[10].version_group_details[0].level_learned_at}</span>
                    <p><span>${res.moves[9].move.name}: learned at lvl </span>
                    <span>${res.moves[9].version_group_details[0].level_learned_at}</span></p>
                    <span>${res.moves[3].move.name}: learned at lvl </span>
                    <span>${res.moves[3].version_group_details[0].level_learned_at}</span>
                    <p><span>${res.moves[22].move.name}: learned at lvl </span>
                    <span>${res.moves[22].version_group_details[0].level_learned_at}</span></p>
                <h3>Tipo</h3>
                    <span>${res.types[0].type.name}</span>
                    <div><img src="img/fuego1.png"  class="fire"></div>
            </div>
            </div>


            
        `;
        
        console.log(res);
    })
}
function pokemon3(){
    fetch("http://pokeapi.co/api/v2/pokemon/charmeleon")
    .then((resp)=>resp.json())
    .then((res)=>{
        _main.innerHTML=`<div class="toño">
            <h2>${res.name}</h2>
            <img src='${res.sprites.front_shiny}' width='200px'></img>
            <div>
                <h3>Estadisticas</h3>
                <div>
                    <p><span>${res.stats[0].stat.name} : </span>
                    <span>${res.stats[0].base_stat}</span></p>
                    <p><span>${res.stats[1].stat.name} : </span>
                    <span>${res.stats[1].base_stat}</span></p>
                    <p><span>${res.stats[2].stat.name} : </span>
                    <span>${res.stats[2].base_stat}</span></p>
                    <p><span>${res.stats[3].stat.name} : </span>
                    <span>${res.stats[3].base_stat}</span></p>
                    <p><span>${res.stats[4].stat.name} : </span>
                    <span>${res.stats[4].base_stat}</span></p>
                    <p><span>${res.stats[5].stat.name} : </span>
                    <span>${res.stats[5].base_stat}</span></p>
                    </div>
                    <h3>Movimientos</h3>
                    <p><span>${res.moves[66].move.name}: learned at lvl </span>
                    <span>${res.moves[66].version_group_details[0].level_learned_at}</span></p>
                    <span>${res.moves[10].move.name}: learned at lvl </span>
                    <span>${res.moves[10].version_group_details[0].level_learned_at}</span>
                    <p><span>${res.moves[9].move.name}: learned at lvl </span>
                    <span>${res.moves[9].version_group_details[0].level_learned_at}</span></p>
                    <span>${res.moves[3].move.name}: learned at lvl </span>
                    <span>${res.moves[3].version_group_details[0].level_learned_at}</span>
                    <p><span>${res.moves[22].move.name}: learned at lvl </span>
                    <span>${res.moves[22].version_group_details[0].level_learned_at}</span></p>
                <h3>Tipo</h3>
                    <span>${res.types[0].type.name}</span>
                    <div><img src="img/fuego1.png"  class="fire"></div>
            </div>
            </div>


            
        `;
        
        console.log(res);
    })
}