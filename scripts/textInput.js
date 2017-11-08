class TextInput {

    constructor(root) {
        this.root = root[0];
        this.initialize()
    }

    initialize() {
        console.log('Init')
        let layout = document.querySelector('.layout');
        let input = document.createElement('input');
        let container = document.createElement('div')
        let displayText = document.createElement('button')
        let header = document.createElement('h1')

        header.classList.add(...['input-header', 'qa-input-header'])
        input.classList.add(...['input-text', 'qa-input-text'])
        displayText.classList.add(...['display-text', 'qa-display-text'])

        displayText.addEventListener('click',this.setHeaderText)

        layout.appendChild(container)
        container.appendChild(header)
        container.appendChild(input)
        container.appendChild(displayText)

        displayText.innerText = "Display text"

    }

    setHeaderText() {
        //let input = document.getElementsByTagName('input')[0].value
        let input = document.querySelector('.input-text').value
        let header = document.querySelector('.input-header')

        header.innerText = input


        console.log('yo ' + input)
    }

}

new TextInput(document.getElementsByTagName('body'));
