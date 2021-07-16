let invalid = `

_________ _                 _______  _       _________ ______  
\__   __/( (    /||\     /|(  ___  )( \      \__   __/(  __  \ 
   ) (   |  \  ( || )   ( || (   ) || (         ) (   | (  \  )
   | |   |   \ | || |   | || (___) || |         | |   | |   ) |
   | |   | (\ \) |( (   ) )|  ___  || |         | |   | |   | |
   | |   | | \   | \ \_/ / | (   ) || |         | |   | |   ) |
___) (___| )  \  |  \   /  | )   ( || (____/\___) (___| (__/  )
\_______/|/    )_)   \_/   |/     \|(_______/\_______/(______/ 
                                                               

`

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What is your password?", function(password) {
    if(password.length >= 10) {
        console.log("Thank you for your password.");
    } else {
        console.log(invalid);
    }
    reader.close();
  });