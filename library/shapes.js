//instance of a shape
class Shape {
    //make up properties of shape with constructor
    constructor(){
        this.color=""
    }
    setColor(color){
        this.color=(color)
    }

}

//<polygon points="150, 18 244, 182 56, 182" fill="purple" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">npm</text></svg>

class Circle extends Shape {
    render(){
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`
    }
}
class Triangle extends Shape {
    render(){
        return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render(){
        return `<rect width="100" height="100" rx="15" fill="${this.color}"/>`
    }
}
module.exports = {Circle, Square, Triangle}