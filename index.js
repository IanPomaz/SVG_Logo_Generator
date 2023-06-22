const inquirer = require('inquirer')
const fs = require('fs')
const { Circle, Square, Triangle} = require('./library/shapes')
const SVG = require('./library/svg')

function userPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo'
        },        
        {
            type: 'input',
            name: 'textcolor',
            message: 'What color do you want the text to be:'
        },        
        {
            type: 'input',
            name: 'backgroundcolor',
            message: 'What color would you like the background to be:'
        },        
        {
            type: 'list',
            name: 'shapes',
            message: "What shape",
            choices: ['Circle', 'Square', 'Triangle']
        },

    ])
    .then((responses)=>{
        let logo;
        switch(responses.shapes){
            case 'Circle':
                logo = new Circle ()
                break;
                case 'Square':
                    logo=new Square ()
                    break;
                    case 'Triangle':
                        logo=new Triangle ()
                        break;
        }
        logo.setColor(responses.backgroundcolor)
        const myLogo = new SVG()
        myLogo.setShape(logo)
        myLogo.setText(responses.text, responses.textcolor)
        if(responses.text.length > 3) {
            console.log("Please no more than 3 characters.")
            userPrompt()
        }
        else {
            //utilize writefile to generate the svg
            fs.writeFile('SVG File/logo.svg', myLogo.getSVGString(), function (
                err
              ) {
                if (err) {
                  console.error('Error writing SVG file:', err);
                } else {
                  console.log('SVG file created!');
                }
              });
            }
          });
      }
      
      userPrompt();