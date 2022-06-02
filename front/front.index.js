const casas$$ = document.querySelector(".casas");

const personaje$$ = document.querySelector(".personajes")



const getCasas = async ()=> {
    const casasApi = await fetch("http://localhost:5000/casas");
    const casasJson = await casasApi.json();
    console.log(casasJson)
    pintandoCasa(casasJson)
    pintandopPersonaje(casasJson)
}






const pintandoCasa = (arraycards) => {
    for (const casa of arraycards.casas) {
        const divCasa$$ = document.createElement("div")
        const tituloCasa$$ = document.createElement("h2");
        const escudo$$ = document.createElement("img");
        const animal$$ = document.createElement("p");
        const divNuevo$$ = document.createElement("div")
        

        tituloCasa$$.textContent = casa.name;
        escudo$$.src= casa.escudo;
        animal$$.textContent = casa.fundador;
        escudo$$.addEventListener("click", function(){
            document.querySelector(".divNuevo").style.display = "block";
        });

        divCasa$$.appendChild(tituloCasa$$);
        divCasa$$.appendChild(escudo$$);
        divCasa$$.appendChild(animal$$);
        casas$$.appendChild(divCasa$$);
        casas$$.appendChild(divNuevo$$)
        escudo$$.className = "escudo";
        
        animal$$.className = "animales";
        tituloCasa$$.className = "titulocasa";
       
        console.log(casa);
      
        divCasa$$.className= "casita";
        divNuevo$$.className = "divNuevo tow";
        
        
        
        for (const chaval of casa.personajes) {
            const personajesCasa$$ = document.createElement("p");
            personajesCasa$$.textContent = chaval.name;
            divNuevo$$.appendChild(personajesCasa$$)

            
        }

        
    }
}

getCasas()


const pintandopPersonaje = (arraycards) => {
    for (const casa of arraycards.casas) {
        console.log(casa);
        for (const personaje of casa.personajes) {
            
        
        const divpersonaje$$ = document.createElement("div")
        const titulopersonaje$$ = document.createElement("h2");
        const foto$$ = document.createElement("img");
        const casa$$ = document.createElement("p");
        const age$$ = document.createElement("p");
        

        


        titulopersonaje$$.textContent = personaje.name;
        foto$$.src= personaje.photo;
        casa$$.textContent = "Casa: " + personaje.house;
        age$$.textContent = "Edad: " + personaje.age;

        divpersonaje$$.appendChild(titulopersonaje$$);
        divpersonaje$$.appendChild(foto$$);
        divpersonaje$$.appendChild(casa$$);
        divpersonaje$$.appendChild(age$$);
        personaje$$.appendChild(divpersonaje$$);

        foto$$.className = "foto_personaje";
        divpersonaje$$.className= "personajito";
        casa$$.className = "casa_edad";
        titulopersonaje$$.className = "titulo_personaje";
        age$$.className = "casa_edad";
    }
    }
}

const pintandopVarita = (arraycards) => {
    for (const casa of arraycards.casas) {
        console.log(casa);
        for (const personaje of casa.personajes.varitas) {
            

            const divpersonaje$$ = document.createElement("div")
            const titulopersonaje$$ = document.createElement("h2");
            const foto$$ = document.createElement("img");
            const casa$$ = document.createElement("p");
            const age$$ = document.createElement("p");

            


            titulopersonaje$$.textContent = personaje.name;
            foto$$.src= personaje.photo;
            casa$$.textContent = "Casa: " + personaje.house;
            age$$.textContent = "Edad: " + personaje.age;

            divpersonaje$$.appendChild(titulopersonaje$$);
            divpersonaje$$.appendChild(foto$$);
            divpersonaje$$.appendChild(casa$$);
            divpersonaje$$.appendChild(age$$);
            personaje$$.appendChild(divpersonaje$$);

            foto$$.className = "foto_personaje";
            divpersonaje$$.className= "personajito";
            casa$$.className = "casa_edad";
            titulopersonaje$$.className = "titulo_personaje";
            age$$.className = "casa_edad";
                
            }
            
        
        
    }
    }




    
