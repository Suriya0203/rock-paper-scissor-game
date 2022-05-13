const selectionsbuttons=document.querySelectorAll('[data-selection]')

const computerscorespan = document.querySelector('[data-computer-score]')
const yourscorespan = document.querySelector('[data-your-score]')
//console.log(selectionsbuttons)
const SELECTIONS = [
    {
      name: 'rock',
      beats: 'scissors'
    },
    {
      name: 'paper',
      beats: 'rock'
    },
    {
      name: 'scissors',
      beats: 'paper'
    }
  ]

selectionsbuttons.forEach(selectionbutton=>{
    selectionbutton.addEventListener('click',e=>{
        const selectionName=selectionbutton.dataset.selection
        const selection=SELECTIONS.find(selection=> selection.name==selectionName)
        //console.log(yourscorespan)
        makeselection(selection)

    })
})

function makeselection(selection){
    const computerSelection=randomselection()
    const yourwinner=iswinner(selection,computerSelection)
    const computerwinner=iswinner(computerSelection,selection)
    document.getElementById("left-side").innerHTML=selection.name
    document.getElementById("right-side").innerHTML=computerSelection.name
    if(yourwinner){
        incrementscore(yourscorespan)
        document.getElementById("result").innerHTML='You win'
    }
    else if(computerwinner){
        incrementscore(computerscorespan)
        document.getElementById("result").innerHTML='Computer win'
    }
    else{
      document.getElementById("result").innerHTML='Match draw'
    }
}
function incrementscore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
    //if (scoreSpan==5){
    //    alert(1234)
    //}
    console.log(parseInt(scoreSpan))
  }
function randomselection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
  }
function iswinner(selection, opponentSelection) {
    
    return selection.beats === opponentSelection.name
  }
