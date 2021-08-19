const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let click = 0
let result = 0
let hitPosition


function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  let randomSquare2 = squares[Math.floor(Math.random() * 9)]
  randomSquare2.classList.add('mole')

  let randomSquare3 = squares[Math.floor(Math.random() * 9)]
  randomSquare3.classList.add('mole')

  hitPosition = randomSquare.id
  hitPosition2 = randomSquare2.id
  hitPosition3 = randomSquare3.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition || square.id == hitPosition2 || square.id == hitPosition3 ) {
      countDown()
      result++
      click++
      score.textContent = result
      hitPosition = null
      randomSquare()
      randomSquare2()
      randomSquare3()

    }
  else{
    countDown()
    click++ 
    randomSquare()
    randomSquare2()
    randomSquare3()
  }
  })
})

randomSquare()
randomSquare2()
randomSquare3()

function countDown() {

 if (click === 9) {
   alert('GAME OVER! Your final score is ' + result + '. Play again ?')
   score.textContent = 0
   click = 0
   result = 0
 }

}

