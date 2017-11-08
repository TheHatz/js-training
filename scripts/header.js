class Header {

  constructor(root) {
      this.root = root[0];
      this.initialize();
  }

  initialize(){
    let header = document.createElement('header');
    let main  = document.querySelector('.layout');
    this.root.insertBefore(header, main);
    header.style.height = '1.5rem';
    header.style.width = '100vw';
  }

}


new Header(document.getElementsByTagName('body'))
