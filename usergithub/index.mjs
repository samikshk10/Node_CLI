import chalkAnimation from 'chalk-animation';
import prompts from 'prompts';
import figlet  from 'figlet';
import ora from 'ora';
import inquirer from 'inquirer';
const questions=[{
    type:'number',
    name:'age',
    message:'what is your legal age of license',
},
{
    type:'text',
    name:'name',
    message:'what is your name?',
}
];
// (async ()=>{
//     const response = await prompts(questions);
// })();

// prompts(questions).then(response=>{
//     chalkAnimation.karaoke(`The legal age for drinking is: ${response.age}. Also your display name is ${response.name}`)
//     //console.log(response);
// });

// figlet.text(
//     "HELLO FROM SAMIK",
//     {
//       font: "Ghost",
//       horizontalLayout: "default",
//       verticalLayout: "default",
//       width: 80,
//       whitespaceBreak: true,
//     },
//     function (err, data) {
//       if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//       }
//       console.log(data);
//     }
//   );


//const spinner = ora('loading questions').start();


//	spinner.color = 'yellow';
const spinner = ora('loading questions').start();
setTimeout(() => {
	spinner.color = 'yellow';

    spinner.text='loaded questions';
    spinner.succeed();

        inquirer.prompt([{
           name: 'firstName',
           message: 'What is your first name?',
           type: 'input',
         },
         {
           name: 'options',
           message: 'Which programming language do you know?',
           type: 'checkbox',
           choices: ['PHP', 'JS','Python','Ruby','React'],
           validate: (options) => {
             if (!options.length) {
               return 'Choose at least one of the above, use space to choose the option'
             }
             return true;
           }
         },
           {
               name: 'brands',
               message: 'Which laptop brand you currently use?',
               type: 'list',
               choices: ['DELL', 'ACER','HP','APPLE','MSI','LENOVO'],
               validate: (options) => {
                 if (!options.length) {
                   return 'Choose at least one of the above, use enter to choose the option'
                 }
           
                 return true;
               }
             },
             {
               name: 'password',
               message: 'Enter your password:',
               type: 'password',
               mask: true,
             },
       ])
  



    

}, 2000);
    
         
         









//console.log(response);

