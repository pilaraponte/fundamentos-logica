

function App() {

  function adivinhar(){
    let aleatorio = Math.ceil(Math.random()*10)

    let palpite = Number(prompt("Chute um número de 0 a 10"))
 
    console.log(aleatorio);
    

    if (palpite === aleatorio){
      console.log("Parabéns, você acertou!")
    }else{
      console.log("Ahh, não foi dessa vez!")
    }
  }

  return (
    <>
    <h1>Exercício 1</h1>
    <button onClick={adivinhar}>Adivinhar</button>
    </>
  )
}

export default App
