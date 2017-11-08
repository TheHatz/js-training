class TextInput {

    constructor(root) {
        this.root = root[0];
        this.initialize()
    }

    initialize() {
        console.log('Init')
        let layout = document.querySelector('.layout');
        let input = document.createElement('input');
        layout.appendChild(input)
        input.value = "Hello George";

    }

}

new TextInput(document.getElementsByTagName('body'));
