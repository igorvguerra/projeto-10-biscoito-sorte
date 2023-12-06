const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const buttonReset = document.querySelector("#buttonReset");
let luck = document.querySelector("#luck")
const cookie = screen1.querySelector("#cookie")

let randomNumber = Math.round(Math.random() * 10);

let phrases = ["Sorte na vida é sentir a felicidade de viver cada momento.", "Nem todas as flores têm a mesma sorte, umas enfeitam a vida e outras enfeitam a morte.", "Talvez o amor seja como a sorte: temos de arriscar para o ter.", "Se a felicidade depende de nossas escolhas, é da sorte a última palavra.", "O mundo tem sorte por ter você do jeito que você é.", "Quando faltar sorte, faça sobrar atitude. O azar morre de medo de pessoas determinadas.", "Pare de procurar eternamente, a felicidade está o seu lado.", "Caso não siga seu caminho, ninguém poderá fazê-lo por você.", "Pense nos seus planos para os próximos cinco anos, e não para os próximos 5 meses.", "Não é a vontade de vencer, mas a vontade de estar preparado para vencer que faz a diferença.", "Quando se decide tomar uma decisão, é preciso colocá-la em prática."]


cookie.addEventListener('click', giveMeLuck)
buttonReset.addEventListener('click', anotherGo)
document.addEventListener('keydown', keydown)


function giveMeLuck(event) {
    toggleScreen()
    luck.innerText = phrases[randomNumber]
}

function anotherGo(event) {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10);
}


function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function keydown(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        anotherGo()
    }
}