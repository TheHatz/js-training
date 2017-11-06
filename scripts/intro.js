console.log('this is the window: ', window)
const foo = {
    'name' : 'this is a property called name',
    'test3' : function () {
        console.log('Hello world',this.name)
    }
}

function test() {
    let b = 'trey'
    foo.test3()
    console.log(b)
    console.log(this.name)
}



test()

b = 'george'

test()


console.log('b is: ' + b)