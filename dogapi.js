'use strict'

async function pesquisarFotos(raca){

    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch(url) //FETCH é uma ferramenta que faz resuisição web e retorna uma resposta do servidor
    const data = await response.json()

    return data.message
}

function criarImage (link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link
    galeria.appendChild(novaImg)
}

async function preencherFotos (){
    const raca = document.getElementById('raca').value 
    const fotos = await pesquisarFotos(raca)
    const galeria = document.getElementById('galeria')
    
    galeria.replaceChildren('')

    fotos.forEach(criarImage)
}

document.getElementById('pesquisar').addEventListener('click', preencherFotos)