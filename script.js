const totalmusica = 12
const musica = document.getElementById('musica')
const capa = document.getElementById('imagem')
const nome_music = document.getElementById('namemusic')
const avançar = document.getElementById('avançar')
const voltar = document.getElementById('voltar')
const play_pause = document.getElementById('playpause')

let tocamusica = 0
let musica_atual = 1

function trocarnomecapa(){

    switch(musica_atual){
        case 1:
        nome_music.innerHTML = 'Believer';
        capa.src = "imagens/Believer.jpg"
        document.body.style.background = 'linear-gradient(to right, #050607, #F3AD33, #20B9AA, #7172E5, #050607 )';
        break
        case 2:
        nome_music.innerHTML = 'Bad Liar';
        capa.src = "imagens/Bad_liar.jpg"
        document.body.style.background = 'linear-gradient(to right, #49181C, #76202A, #C52E43, #EA697B, #C52E43, #76202A, #49181C)';
        break
        case 3:
        nome_music.innerHTML = 'Bones';
        capa.src = "imagens/Bones.jpg"
        document.body.style.background = 'linear-gradient(#DFD8C8, #817A72)';
        break
        case 4:
        nome_music.innerHTML = 'Children of the Sky';
        capa.src = "imagens/Children.jpg"
        document.body.style.background = 'linear-gradient(#207B97, #F3E2E2, #2A1C11)';
        break
        case 5:
        nome_music.innerHTML = 'Enemy';
        capa.src = "imagens/Enemy.jpg"
        document.body.style.background = 'linear-gradient(#2B2011, #351E58, #2B2011)';
        break
        case 6:
        nome_music.innerHTML = 'Next to Me';
        capa.src = "imagens/Next_to_me.jpg"
        document.body.style.background = 'linear-gradient(135deg, #0B2228, #913E8B, #2A3975, #0B2228)';
        break
        case 7:
        nome_music.innerHTML = 'On Top of The World';
        capa.src = "imagens/Top_the_world.jpg"
        document.body.style.background = 'linear-gradient(-135deg, #011029, #508B8D)';
        break
        case 8:
        nome_music.innerHTML = 'Sharks';
        capa.src = "imagens/Sharks.jpg"
        document.body.style.background = 'linear-gradient(#E1DACA, #9A191D)';
        break
        case 9:
        nome_music.innerHTML = 'Symphony';
        capa.src = "imagens/Symphony.jpg"
        document.body.style.background = 'linear-gradient(to right, #A02E2E, #7B131B, #A02E2E)';
        break
        case 10:
        nome_music.innerHTML = 'Thunder';
        capa.src = "imagens/Thunder.png"
        document.body.style.background = 'linear-gradient(#7DEAEB, #DDA9D5, #2F7590)';
        break
        case 11:
        nome_music.innerHTML = 'Whatever It Takes';
        capa.src = "imagens/Whatever.jpg"
        document.body.style.background = 'linear-gradient(#A80F39, #955297, #3C1826)';
        break
        case 12:
        nome_music.innerHTML = 'Wrecked';
        capa.src = "imagens/Wrecred.jpg"
        document.body.style.background = 'linear-gradient(#CCC5B1, #CCC5B1, #D1753F, #040A06)';
        break
    }
}


function tocarmusica(){
    musica.play()
    tocamusica = 1
    play_pause.classList.remove('bi-play-circle-fill')
    play_pause.classList.add('bi-pause-circle-fill')
}
function pausarmusica(){
    musica.pause()
    tocamusica = 0
    play_pause.classList.remove('bi-pause-circle-fill')
    play_pause.classList.add('bi-play-circle-fill')
}

function TocarOuPausar(){
    if (tocamusica === 0){
        tocarmusica()
    }else{
        pausarmusica()
    }
}

function avançarmusica(){
    if(musica_atual === 12){
        musica_atual = 1
    }else{
        musica_atual = musica_atual + 1
    }
    musica.src = "musicas/"+ musica_atual + ".mp3"
    tocarmusica()
    trocarnomecapa()
}

function voltarmusica(){
    if(musica_atual === 1){
        musica_atual = totalmusica
    }else{
        musica_atual = musica_atual - 1
    }
    musica.src = "musicas/"+ musica_atual + ".mp3"
    tocarmusica()
    trocarnomecapa()
}

play_pause.addEventListener('click', TocarOuPausar)
avançar.addEventListener('click', avançarmusica)
voltar.addEventListener('click', voltarmusica)


