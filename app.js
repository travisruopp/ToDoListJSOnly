
class ToDo {
    constructor(toDoText) {
      this.toDoText = toDoText;
      this.createToDoElement();
    }

    createToDoElement(){
      this.toDoElement = document.createElement('li');
      this.toDoElement.textContent = this.toDoText;
      this.toDoElement.addEventListener('dblclick', () => {
        this.toDoElement.remove();
      });
      this.toDoElement.addEventListener('click', () => {
        this.toDoElement.classList.toggle('check-off');
      })
    }
  }
  

  class AddToDo {
    constructor() {
      this.toDoButton = document.querySelector('#to-do-button');
      this.toDoInput = document.querySelector('#to-do-input');
      this.toDoList = document.querySelector('#to-do-list');
      this.addEventListeners();
    }
  
    addToDo(){
      let toDoText = this.toDoInput.value.trim();
      if(toDoText !== ''){
        let newToDo = new ToDo(toDoText);
      this.toDoList.appendChild(newToDo.toDoElement);
      this.toDoInput.value = '';
      }
    }

    addEventListeners() {
      this.toDoButton.addEventListener('click', () => {
        this.addToDo();
      })
      this.toDoInput.addEventListener('keypress', event => {
        if (event.key === 'Enter'){
          this.addToDo();
        }
      })
    }
  }
  
  let myAddToDo = new AddToDo();