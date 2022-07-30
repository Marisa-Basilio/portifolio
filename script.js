
// consumo de api
// vamos declarar uma variavel
const URL = "https://reqres.in/api/users?page=2";
fetch(URL)
   .then(response => response.json ())
   .then((data) => console.log(data.data));
    console.log(response)

function fazGet(URL) {
    
    const request = new XMLHttpRequest()
    request.open("GET", URL, true)
    request.send()
    return request.response
}
function carregararElementosNaPagina(json) {
    const table = document.createElement('table1');
    for (let usuario of json)  {
        
    }
    
}
function criarLinha(usuario){
    console.log(usuario)
    linha = document.createElement("tr")
    tdId = document.createElement("td")
    tdFirstNome = document.createElement("td")
    tdLasttName = document.createElement("td")
    tdemail = document.createElement("td")
    tdAvatar = document.createComment("td")
    tdId.innerHTML = usuario.tdId
    tdFirstNome.innerHTML = usuario.tdFirstNome
    tdLasttName.innerHTML = usuario.tdLasttName
    tdEmail.innerHTML = usuario.tdEmail
    tdAvatar.innerHTML = usuario.tdAvatar

    linha.appendChild(tdId)
    linha.appendChild(tdFirstNome)
    linha.appendChild(tdLasttName)
    linha.appendChild(tdEmail)
    linha.appendChild(tdAvatar)
    return linha;
}

function table() { 
    const data = fazGet (URL)
    let usuarios = JSON.parse(data);
    let table1 = document.getElementById("table");
    usuarios.forEach(element => {
        let linha = criarLinha(element);
        table1.appendChild(linha);
    });


}

//funçoes {{assincronas
fetch
   .then(response => response.json ())
   .then((data) => console.log(data.data));

    
   

