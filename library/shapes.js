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

class Circle extends Shape {
    render(){
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}
class Triangle extends Shape {
    render(){
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render(){
        return `<rect x="50" y="20" fill="${this.color}"/>`
    }
}
module.exports = {Circle, Square, Triangle}