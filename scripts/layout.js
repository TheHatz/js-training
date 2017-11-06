class Layout{

    constructor(root) {
        this.root = root;
        this.initialize();
    }

    initialize() {
        console.log(this.root)
        this.createButton()
        this.createColorDiv()

    }

    createColorDiv() {
        let colorDiv = document.createElement('div')
        this.root.appendChild(colorDiv)
        colorDiv.style.background = 'blue'
        colorDiv.setAttribute('class', 'main-div qa-main-div qa-blue')
    }

    createButton() {
        let nextButton = document.createElement('button')
        this.root.appendChild(nextButton)
        nextButton.innerText = 'Submit'
        nextButton.addEventListener('click',this.toggleColor)
    }

    toggleColor(){
        let box = document.querySelector('.main-div')
        if (box.style.background !== 'red'){
            box.style.background = 'red'
            box.classList.add('qa-red')
            box.classList.remove('qa-blue')
        } else {
            box.style.background = 'blue'
            box.classList.add('qa-blue')
            box.classList.remove('qa-red')
        }

    }


}

new Layout(document.querySelector('.layout'))
