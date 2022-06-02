const casas$$ = document.querySelector(".casas")




const getCasas = async ()=> {
    const casasApi = await fetch("http://localhost:5000/casas");
    const casasJson = await casasApi.json();
    console.log(casasJson)
    pintandoCasa(casasJson)
}






const pintandoCasa = (arraycards) => {
    for (const casa of arraycards.casas) {
        const divCasa$$ = document.createElement("div")
        const tituloCasa$$ = document.createElement("h2");
        const escudo$$ = document.createElement("img");
        const animal$$ = document.createElement("p");


        tituloCasa$$.textContent = casa.name;
        escudo$$.src= casa.escudo;
        animal$$.textContent = "Animal: " + casa.animal;

        divCasa$$.appendChild(tituloCasa$$);
        divCasa$$.appendChild(escudo$$);
        divCasa$$.appendChild(animal$$);
        casas$$.appendChild(divCasa$$);
        divCasa$$.className= "casita";
        casas$$.className = "casaPoke";
        tituloCasa$$.className = "titulocasa";
    }
}

getCasas()