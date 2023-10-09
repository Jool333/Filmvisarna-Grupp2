# Filmvisarna-Grupp2

Måste installera npm och react bootstrap i react-mappen för att kunna köra projektet
Kommandon: 
npm install
npm install react-bootstrap bootstrap

Måste även installera sass i react-mappen för att utveckla i projektet
Kommandon:
npm install sass -save-dev


Installera detta för icons. 
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+G3OXz5gHOXMx4r+OGHfXe7f5R5vM5j6bqYjBxiWw2vI1ezj" crossorigin="anonymous"> finns i index.html

Backend använder:
 EntityFrameworkCore
 EntityFrameworkCore.Tools
 EntityFrameworkCore.Sqlite
Startar inte backend pga error med EntityFrameworkCore prova ominstallera Core och se om det fungerar nu.

Kravspec 
Bort med användarnamn, In med förnamn, efternamn och telefonnummer. 
Epost om du är guest. 

When you have cloned this repo go to the db folder and copy Filmvisarna.db-template and rename it Filmvisarna.db before you start backend server
The backend will connect to Filmvisarna.db
If you make changes to the db you want commit, stop the server and copy Filmvisarna.db as a db-template and commit. 
