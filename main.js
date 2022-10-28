const URL = "https://cep.awesomeapi.com.br/json/";
var CEP = 17511685;
var RESOBJ = {
    address:"--",
    state:"--",
    city:"--",
    district:"--"
}
async function getCep(cep) {
    var container = document.getElementById("container_search");
    let dados =  await fetch(cep)
    .then((data)=>{
        return data.json();
    })
    .catch((err)=>{
        console.log(err)
    });
    if( await dados.address == undefined){
        return RESOBJ;
    }
    return dados;
}
async function search(){
    var input = document.getElementById("input_cep");
    var resposta = document.getElementById("resposta");
    CEP = input.value == null ? 00000000 : input.value;
    let response = await getCep(URL+CEP);
    resposta.innerHTML = `<ul>
            <li><h3>Endereço</h3> ${response.address}</li>
            <li><h3>Estado</h3> ${response.state}</li>
            <li><h3>Cidade</h3> ${response.city}</li>
            <li><h3>Distrito</h3> ${response.district}</li>
        </ul>`;
}