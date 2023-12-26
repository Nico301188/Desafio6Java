
console.log(document.title)

function createFullName(HTMLList) {
    let fullName = "";
    let contadorCampo = 1;
    for (let index = 0; index < HTMLList.length; index++) {
        const element = HTMLList[index];
        if (element.tagName === "DD" && element.innerText) {
            if (fullName) {
                fullName = fullName.concat(" ")
            }
            if (contadorCampo <= 2) {
                fullName = fullName.concat(`${element.innerText}`);
            }
            else {
                fullName = fullName.concat(`${element.innerText.toUpperCase()}`);
            }
            contadorCampo++;
        }
    }
    return `"${fullName}"`;
}


//como pintar

// suponiendo que elemnt es DD

// elemnt.ineerHTML ="Nicolas <span style=color:'red;'>Gutierrez</span>"

// const setColor= (string, color) =>`Nicolas  style=color:${color};'>${string}`


function getDuplicateString() {
    let colorName;
    let colorLastName;
    let lastName;
    let lastName2;
    let name;
    let name2;
    const dataColection = document.getElementsByTagName("DD")
    const fistPeopleNames = []
    const secondPeopleNames = []
    const fistPeopleNames1 = []
    const secondPeopleNames1 = []
    for (let i = 0; i < 2; i++) {
        const element = dataColection[i];
        fistPeopleNames.push(dataColection[i])
    }
    for (let i = 4; i < 6; i++) {
        const element = dataColection[i];
        secondPeopleNames.push(dataColection[i])
    }
    for (let index = 0; index < fistPeopleNames.length; index++) {
        // debugger
        name = fistPeopleNames[index];
        // debugger
        for (let i = 0; i < secondPeopleNames.length; i++) {
            name2 = secondPeopleNames[i];
            // debugger
            if (name.innerText === name2.innerText && name.innerText !== "" && name2.innerText !== "") {
                if (colorName === undefined) {
                    colorName = window.prompt("hay coincidendia de nombres \n elija un color por favor: red / blue / yellow")
                }
                name.style = `color: ${colorName}`
                name2.style = `color: ${colorName}`
            }else {
                
                console.log("No hay coincidencia de nombres")
            }
        }
    }
    //compara apellidos
    for (let i = 2; i < 4; i++) {
        const element = dataColection[i];
        fistPeopleNames1.push(dataColection[i])
    }
    for (let i = 6; i < 8; i++) {
        const element = dataColection[i];
        secondPeopleNames1.push(dataColection[i])
    }
    for (let index = 0; index < fistPeopleNames1.length; index++) {
        lastName = fistPeopleNames1[index];
        for (let i = 0; i < secondPeopleNames1.length; i++) {
            lastName2 = secondPeopleNames1[i];
            // debugger
            if (lastName.innerText === lastName2.innerText && lastName.innerText !== "" && lastName2.innerText !== "") {
                if (colorLastName === undefined) {
                    colorLastName = window.prompt("Se encontraron coincidencias en el apellido \n elija un color por favor: red / blue / yellow")
                }
                lastName.style = `color: ${colorLastName}`
                lastName2.style = `color: ${colorLastName}`
            } else {
                
               console.log("No hay coincidencia de apellidos")
            }
        }
    }
    colorLastName = undefined
    colorName = undefined
    //console.log(fistPeopleNames + secondPeopleNames)
}

getDuplicateString()



function completarNombres() {
    const primerIntegrante = obtenerDatosFormulario("primerIntegrante");
    const segundoIntegrante = obtenerDatosFormulario("segundoIntegrante");

    mostrarNombresCompletos(primerIntegrante, "Integrante 1");
    mostrarNombresCompletos(segundoIntegrante, "Integrante 2");

    verificarCoincidencias(primerIntegrante, segundoIntegrante);
}

function obtenerDatosFormulario(id) {
    const formulario = document.getElementById("formularioIntegrantes");
    const integrante = formulario.elements[id];
    return {
        primerNombre: integrante.primerNombre.value || '',
        segundoNombre: integrante.segundoNombre.value || '',
        primerApellido: integrante.primerApellido.value || '',
        segundoApellido: integrante.segundoApellido.value || ''
    };
}