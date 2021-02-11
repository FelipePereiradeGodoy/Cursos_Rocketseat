var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
var ulElement = document.createElement('ul');
var div = document.querySelector('div');
div.appendChild(ulElement);

function removeCarregando(){
    const carregando = document.querySelector('#carregando');
    ulElement.removeChild(carregando);
}

function addLi(){
    var liElement = document.createElement('li');
    var liText = document.createTextNode(inputElement.value);

    removeCarregando();
    liElement.appendChild(liText);
    ulElement.appendChild(liElement);
}

function addCarregando(){
    var liElement = document.createElement('li');
    var liText = document.createTextNode('Carregando...');
    
    liElement.setAttribute('id', 'carregando');
    liElement.appendChild(liText);
    ulElement.appendChild(liElement);
}

function buscaRetornaPerfilGitHub(){
    addCarregando();
    var caminho = 'https://api.github.com/users/';
    caminho += inputElement.value;
    
    axios.get(caminho)
        .then(function(response){
            console.log(response);
            addLi();
        })
        .catch(function(error){
            removeCarregando();
            console.warn("Usuario não existe");
            alert("Usuario não existe");
        });

}

