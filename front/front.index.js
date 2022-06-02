const casas$$ = document.querySelector(".casas");

const personaje$$ = document.querySelector(".personajes")

const varitaje$$ = document.querySelector(".varitas")

const getCasas = async ()=> {
    const casasApi = await fetch("http://localhost:5000/casas");
    const casasJson = await casasApi.json();
    console.log(casasJson)
    pintandoCasa(casasJson)
    pintandopPersonaje(casasJson)
}

const getVaritas = async ()=> {
    const varitasApi = await fetch("http://localhost:5000/varitas");
    const varitasJson = await varitasApi.json();
    console.log(varitasJson)
    pintandoVarita(varitasJson)
    
}







const pintandoCasa = (arraycards) => {
    for (const casa of arraycards.casas) {
        const divCasa$$ = document.createElement("div")
        const tituloCasa$$ = document.createElement("h2");
        const escudo$$ = document.createElement("img");
        const animal$$ = document.createElement("p");
        
        

        tituloCasa$$.textContent = casa.name;
        escudo$$.src= casa.escudo;
        animal$$.textContent = casa.fundador;
       

        divCasa$$.appendChild(tituloCasa$$);
        divCasa$$.appendChild(escudo$$);
        divCasa$$.appendChild(animal$$);
        casas$$.appendChild(divCasa$$);
        

        escudo$$.className = "escudo";
        
        animal$$.className = "animales";
        tituloCasa$$.className = "titulocasa";
       
        console.log(casa);
      
        divCasa$$.className= "casita";
        
        
        
        
        for (const chaval of casa.personajes) {
            const personajesCasa$$ = document.createElement("p");
            
            personajesCasa$$.textContent = chaval.name;
            divCasa$$.appendChild(personajesCasa$$);
            console.log(chaval.name);
            personajesCasa$$.className="pe"
        }

        
    }
}




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
const pintandoVarita = (arraycards) => {
    for (const varita of arraycards.varita) {
        const divVarita$$ = document.createElement("div")
        const tituloVarita$$ = document.createElement("h2");
        const nucleo$$ = document.createElement("p");
        const material$$ = document.createElement("p");
        const longitud$$ = document.createElement("p");
        

        tituloVarita$$.textContent = "Dueño: " + varita.master;
        nucleo$$.textContent= "Nucleo: " + varita.nucleo;
        material$$.textContent = varita.madera;
        longitud$$.textContent = "Largo: " + varita.largo + " cm";
       

        divVarita$$.appendChild(tituloVarita$$);
        divVarita$$.appendChild(nucleo$$);
        divVarita$$.appendChild(material$$);
        divVarita$$.appendChild(longitud$$);
        varitaje$$.appendChild(divVarita$$)
        

        divVarita$$.className= "varitaje"
        
        
    }
}

    

    getCasas()
    getVaritas()

    
