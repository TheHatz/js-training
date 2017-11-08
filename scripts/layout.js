class Layout{

    constructor(root) {
        this.root = root;
        this.parent = document.getElementsByTagName("body")[0];
        this.initialize();
        this.boxBkgdPrimary = ['blue','qa-blue'];
        this.boxBkgdSecondary = ['red','qa-red'];
    }

    initialize() {
        console.log(this.root);
        this.createButton();
        this.createColorDiv();

    }

    createColorDiv() {
        let boxList = ['main-div', 'qa-main-div'];
        let colorDiv = document.createElement('div')
        this.root.appendChild(colorDiv)
        colorDiv.classList.add(...boxList);
    }

    test(val){
      let arr = ['main-div', 'qa-main-div']
      return [...arr, ...val];
    }

    createButton() {
        let nextButton = document.createElement('button')
        this.root.appendChild(nextButton)
        nextButton.innerText = 'Submit'
        nextButton.setAttribute('class', 'qa-button')
        nextButton.addEventListener('click', this.toggleColor.bind(this))
    }

    toggleColor(){
      let _this = this;
      let box = document.querySelector('.main-div');
      let current = box.getAttribute('class').indexOf(this.boxBkgdPrimary[1]);
      box.className = '';
      if(current === -1){
        box.classList.add(...this.test(this.boxBkgdPrimary))
      }else{
        box.classList.add(...this.test(this.boxBkgdSecondary))
      }
    }
}

new Layout(document.querySelector('.layout'));
