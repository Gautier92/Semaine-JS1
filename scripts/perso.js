let perso, persoX, persoY, dir, arrow, n = 0 
arrow = document.querySelector(".arrow")
let exit = {posX : 660, posY : 468}
let score = 0                       //Number of good answer you did
let scoreinHTML = document.querySelector(".comptscore")
let mapchanging = 0                //The map selector for obstacles
let chestchanging = 0

// Variables of the 3 maps, the images, the chest, and the collisions -------------------------------------------------------------------------------------------------

// MAP 1-----------------------------------------------------------------------------------------------------------------------------------
let coffre1 = {
    posX : 636,
    posY : 60,
    question : 'Laquelle de ces armes n\'existe pas en légendaire?',
    answer1 : ['AR M4', true],
    answer2 : ['Fusil de sniper', false],
    answer3 : ['SCAR', false],
    answer4 : ['Mini-gun', false],

}



let collision1 = [
    {ymin: 12 , ymax: 580 , xmin: -24 , xmax: 24},//buisson gauche
    {ymin: -24 , ymax: 24 , xmin: 36 , xmax: 684},// buisson haut
    {ymin: 516 , ymax: 580 , xmin: -24 , xmax: 684},// buisson bas
    {ymin: -12 , ymax: 432 , xmin: 636 , xmax: 684},//buisson droite
    {ymin: 492 , ymax: 580 , xmin: 624 , xmax: 684},// buisson droite
    {ymin: -12 , ymax: 60 , xmin: 384 , xmax: 456},// rivière verticale
    {ymin: 60 , ymax: 168 , xmin: 384 , xmax: 456},// rivière verticale bis
    {ymin: 84 , ymax: 168 , xmin: 444 , xmax: 684},// rivière horizontale
    {ymin: 420 , ymax: 580 , xmin: 96 , xmax: 210},// arbre 1
    {ymin: 160 , ymax: 264 , xmin: 480 , xmax: 600},// arbre 2

  
  ]
  

//MAP 2--------------------------------------------------------------

let coffre2 = {
    posX : 636,
    posY : 60,
    question : 'Quelle est la bonne orthographe?',
    answer1 : ['Pleasant Park', true],
    answer2 : ['Plesant Park', false],
    answer3 : ['Pleasante Park', false],
    answer4 : ['Pleasant-Park', false],
}


let collision2 = [
    {ymin: 12 , ymax: 580 , xmin: -24 , xmax: 24},//buisson gauche
    {ymin: 516 , ymax: 580 , xmin: -24 , xmax: 684},// buisson bas
    {ymin: -12 , ymax: 580 , xmin: 636 , xmax: 684},//buisson droite
    {ymin: -12 , ymax: 24 , xmin: -24 , xmax: 560},// buisson haut
    {ymin: -12 , ymax: 24 , xmin: 575 , xmax: 684},// buisson haut bis
    {ymin: -12 , ymax: 168 , xmin: -24 , xmax: 348},// riviere horizontale
    {ymin: -12 , ymax: 190 , xmin: 264 , xmax: 348},// riviere verticale
    {ymin: 200 , ymax: 580 , xmin: 264 , xmax: 348},// riviere verticale bis
    {ymin: 300 , ymax: 580 , xmin: 235 , xmax: 456},// lac
    {ymin: 280 , ymax: 400 , xmin: 235 , xmax: 570},// grand arbre
    {ymin: 420 , ymax: 500 , xmin: 125 , xmax: 170},// arbre1
    {ymin: 376 , ymax: 448 , xmin: 170 , xmax: 220},// arbre2
    {ymin: 100 , ymax: 172 , xmin: 396 , xmax: 456},// arbre3
    {ymin: -12 , ymax: 76 , xmin: 370 , xmax: 468},//charrette
    ]

//MAP 3-------------------------------------------------------

let coffre3 = {
    posX : 636,
    posY : 60,
    question : 'Quels sont les dégats d\'une SCAR légendaire?',
    answer1 : ['36', true],
    answer2 : ['55', false],
    answer3 : ['78', false],
    answer4 : ['28', true],
}


let collision3 = [
    {ymin: -12 , ymax: 580 , xmin: -24 , xmax: 24},//buisson gauche
    {ymin: -12 , ymax: 580 , xmin: 636 , xmax: 684},//buisson droite
    {ymin: -12 , ymax: 24 , xmin: -24 , xmax: 96},// buisson haut
    {ymin: -12 , ymax: 24 , xmin: 110 , xmax: 684},// buisson haut bis
    {ymin: 340 , ymax: 504 , xmin: 216 , xmax: 504},// champs
    {ymin: -12 , ymax: 52 , xmin: 468 , xmax: 624 },// tracteur
    {ymin: -12 , ymax: 52 , xmin: 168 , xmax: 336 },// cabane bois
    {ymin: 148 , ymax: 232 , xmin: 60 , xmax: 144},// arbre1
    {ymin: 208 , ymax: 304 , xmin: 384 , xmax: 456},// arbre2
    {ymin: -12 , ymax: 136 , xmin: 540 , xmax: 612},// arbre3
    {ymin: 148 , ymax: 208 , xmin: 588 , xmax: 636},// cimetière 1
    {ymin: 232 , ymax: 268 , xmin: 588 , xmax: 636},// cimetière 2
    {ymin: 525 , ymax: 580 , xmin: -24 , xmax: 540},// buisson bas
    {ymin: 525 , ymax: 580 , xmin: 600 , xmax: 684},// buisson bas bis
    {ymin: 388 , ymax: 484 , xmin: 84 , xmax: 132},// tonneau
    {ymin: 418 , ymax: 484 , xmin: 156 , xmax: 192},// sacs
  ]

//Tableau des différentes variables -----------------------------------------------------------------------------------------------------------

let maps =  [ ["sprites/map.png",[coffre1],[collision1]],
             ["sprites/map2.png",[coffre2],[collision2]],
             ["sprites/map3.png",[coffre3],[collision3]]]





function init(){
    // Création du personnage et placement du personnage
    perso = document.createElement("img")
    let srcImgPerso = "sprites/face_sprite0.png"
    perso.setAttribute('src', srcImgPerso)
    perso.setAttribute('id', 'charac')
    persoX = 48 //placement de départ
    persoY = 24
    document.querySelector('body').appendChild(perso)    //on le fait apparaîttre
    placePerso()
    console.log(srcImgPerso)
}
// Déplacement du personnage
window.addEventListener('keydown',
    function(e){
    switch (e.keyCode) {
        // Vers le haut
        case 90 :
        dir = 0
            persoY -= 12
            console.log(persoY)
            if (persoY < 0 || persoY > window.innerHeight) {  //si le perso est contre le mur, on ajoute les 12pixels et seulement après on effectue le déplacement
                persoY += 12
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/back_sprite" + n + ".png"
            break;
            // À droite
        case 68 :
        dir = 1
            persoX += 12
            console.log(persoX)
            if (persoX < 0 || persoX > window.innerWidth-1) {
                persoX -= 12
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/right_sprite" + n + ".png"
            break;
            // Vers le bas
        case 83 :
        dir = 2
            persoY += 12
            console.log(persoY)
            srcImgPerso = "sprites/face_sprite" + n + ".png"
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY -= 12
            }
            else{
                placePerso()
            }

            break;
            // À gauche
        case 81 :
        dir = 3
            persoX -= 12
            console.log(persoX)
            if (persoX < 0 || persoX > window.innerWidth-1) {
                persoX += 12
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/left_sprite" + n + ".png"
            break;
        default:
    }
    //Emplacement des collisions en fonction des différentes maps
    for (var i = 0; i < maps[mapchanging][2][0].length; i++) {
        if ((persoY > maps[mapchanging][2][0][i].ymin && persoY < maps[mapchanging][2][0][i].ymax) && (persoX > maps[mapchanging][2][0][i].xmin && persoX < maps[mapchanging][2][0][i].xmax)){
            if (dir == 0){
                persoY += 12
            }
            else if (dir == 1){
                persoX -= 12
            }
            else if (dir == 2){
                persoY -= 12
            }
            else if (dir == 3){
                persoX += 12
            }
        }
        else{
            placePerso()
        }
}

    n++
    if (n == 4) {
        n = 0
    } 
    

    perso.setAttribute('src', srcImgPerso)

    if (persoX == exit.posX && persoY == exit.posY) {
        enterNewMap()

    } //Coffre & question----------------------------------------------------------------------------------------
    if (persoX == coffre1.posX && persoY == coffre1.posY) {
    document.querySelector('.popup').style.display = "flex"
    document.querySelector('.question').innerHTML = maps[mapCounter][1][0].question

    var element0 = document.querySelector('.reponse0js')
    var element1 = document.querySelector('.reponse1js')
    var element2 = document.querySelector('.reponse2js')
    var element3 = document.querySelector('.reponse3js')


    element0.innerHTML = maps[mapCounter][1][0].answer1[0]
    element1.innerHTML = maps[mapCounter][1][0].answer2[0]
    element2.innerHTML = maps[mapCounter][1][0].answer3[0]
    element3.innerHTML = maps[mapCounter][1][0].answer4[0]

    if (maps[0][1][0].answer1[1]==true) {
        element0.previousSibling.previousSibling.classList.add('true')
    }
    if (maps[0][1][0].answer2[1]==true) {
        element1.previousSibling.previousSibling.classList.add('true')
    }
    if (maps[0][1][0].answer3[1]==true) {
        element2.previousSibling.previousSibling.classList.add('true')
    }
    if (maps[0][1][0].answer4[1]==true) {
        element3.previousSibling.previousSibling.classList.add('true')
    }

//Saving score of the question

    document.querySelector('.confirm').addEventListener('click', scoring)
    
    function scoring() {
    
        console.log('.confirm')
        if (element0.previousSibling.previousSibling.classList.contains('true') && element0.previousSibling.previousSibling.checked == true  ) {
            console.log('u win')
            score++
            scoreinHTML.innerHTML = score
        }
        if (element1.previousSibling.previousSibling.classList.contains('true') && element1.previousSibling.previousSibling.checked == true  ) {
            console.log('u win')
            score++
            scoreinHTML.innerHTML = score
            
            
    
    
        }
        if (element2.previousSibling.previousSibling.classList.contains('true') && element2.previousSibling.previousSibling.checked == true  ) {
            console.log('u win')
            score++
            scoreinHTML.innerHTML = score
    
        }
        if (element3.previousSibling.previousSibling.classList.contains('true') && element3.previousSibling.previousSibling.checked == true  ) {
            console.log('u win')
            score++
            scoreinHTML.innerHTML = score
    
        }
        document.querySelector('.popup').style.display = "none"
        document.querySelector('.confirm').removeEventListener('click', scoring) 
        if (score==3){
            scoreinHTML.innerHTML='Congratulations, you WIN !'
        }
    }

} else {
    document.querySelector('.popup').style.display = "none"
} 
        
}
)




let mapCounter = 0 // on fait un compteur de map pour savoir sur quelle map enchainer

function enterNewMap(){
    mapCounter++
    console.log(mapCounter)
    let changeMap = document.querySelector('#map')
    changeMap.setAttribute('src', maps[mapCounter][0])
    if (mapCounter == 1){
      persoX = 0
      document.querySelector('.arrow').style.left = "561px"
      document.querySelector('.arrow').style.top = "12px"
      document.querySelector('.arrow').setAttribute('src', 'sprites/arrowToZheSky.png')
      exit ={posX:564, posY:12}
      mapchanging++

      //Supprime les .coffre

      let imgCoffre3 = document.createElement('img')
      imgCoffre3.classList.add('coffre')
      imgCoffre3.setAttribute('src', 'images/Coffreboisfermé.png')
      posCoffre3 = {posX : maps[1][1][0].posX, posY : maps[1][1][0].posY}
      console.log(posCoffre3)
      imgCoffre3.style.left = posCoffre3.posX +'px'
      imgCoffre3.style.top = posCoffre3.posY +'px'
    


    }
    else if(mapCounter == 2){
      persoY = 540
      document.querySelector('.arrow').style.left = "103px"
      document.querySelector('.arrow').style.top = "12px"
      document.querySelector('.arrow').setAttribute('src', 'sprites/redArrowToZheSky.png')
      exit ={posX:108, posY:12}
      mapchanging++
    }
    //else if(mapCounter == 3){

//    }

}
function placePerso(){
    perso.style.top = persoY + 'px'
    perso.style.left = persoX + 'px'
    console.log(parseInt(perso.style.left))
    console.log(parseInt(perso.style.top))
}





init()
