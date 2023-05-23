function createCalculator(){
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    run(){
      this.clickButtons();
    },

    clearDisplay(){
      this.display.value = '';
    },

    deleteLast(){
      this.display.value = this.display.value.slice(0, -1);
    },

    makeOperation(){
      let operation = this.display.value;

      try {
        operation = eval(operation);

        if(!operation){
          alert('Conta inválida!');
          return
        }

        this.display.value = String(operation);
      } catch(e) {
        alert('Conta inválida!');
        return;
      }
  
    }, 

    clickButtons(){
      document.addEventListener('click', (e) => {
        const el = e.target;

        if(el.classList.contains('btn-num')){
          this.btnSendDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')){
          this.deleteLast();
        }

        if(el.classList.contains('btn-eq')){
          this.makeOperation();
        }
      });
    },
    
    btnSendDisplay(value){
      this.display.value += value;
    },
  };
}

const calculator = createCalculator();
calculator.run();