class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement=previousOperandTextElement;
    this.currentOperandTextElement=currentOperandTextElement;
    this.clear()
    
    }
    clear(){
        this.currentOperand=''
        this.previouOperand=''
        this.operation=undefined

    }
    appendNum(number){
       console.log(this.currentOperand=number)

    }
    delete(){

    }
    chooseOpe(operation){

    }
    compute(){

    }
    updateDisplay(){
      console.log( this.currentOperandTextElement.innertText=this.currentOperand)
    }
}


const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        calculator.appendNum(button.innertText)
        calculator.updateDisplay()
    })
})

calculator.updateDisplay();
calculator.appendNum();