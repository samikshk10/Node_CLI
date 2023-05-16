import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialcharacters = "!@#$%^&*_-=+";
let password = "";

const generatepassword = (length, number, specialchar) => {
    let characters= alphabets;
    if (number) {
        characters += numbers;
    }
    if (specialchar) {
        characters += specialcharacters;
    }
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    chalkAnimation.rainbow(`Your password is: ${password}`).start();

};



inquirer.prompt([{
    name: 'passwordlength',
    message: 'Please enter length of password',
           type: 'input',
            validate: (value) => {
                if(!value)
                {
                    return 'Please enter length of password';
                }
            
                    return true; 
            }
                
         },
         {
           name: 'specialchar',
           message: 'Do you want a specialcharacter in password?',
           type: 'confirm',
           choices: ['PHP', 'JS','Python','Ruby','React'],
           validate: (value) => {
             if (!value.length) {
               return 'Please choose option yes or no'
             }
             return true;
            }
        },
        {
            name: 'number',
            message: 'Do you want number in password',
            type: 'confirm',
            validate: (value) => {
                if (!value.length) {
                    return 'Please choose option yes or no'
                 }                    
                 return true;
               }
             },
       ])
       .then((response)=>{  
                generatepassword(response.passwordlength,response.number,response.specialchar);
       });
