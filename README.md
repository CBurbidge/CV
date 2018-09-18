Repo for my CV, composed of 3 projects

### json

JSON resume json object 

### component

react component 

### pdf

project to automate creation of various pdf files

### Links

[HTML version](https://chestercodes.github.io/CV/?logoPrefix=CV)

[Printed version](https://chestercodes.github.io/CV/?print=true)

[Printed winops version](https://chestercodes.github.io/CV/?print=true&type=winops)

[Printed dotnet version](https://chestercodes.github.io/CV/?print=true&type=dotnet)

## Running

To run locally, one should:
- cd to all of the folders and run `npm install` or `yarn`
- cd to json directory and run `npm start` to generate the other json files

To build the component:

- cd to the component directory, run the RunBuildMove.ps1 file
- cd to repo directory and run UpdateJsonBuildComponent.ps1 file

To build the pdfs one should:

- cd to component directory and run RunDevelopMove.ps
- cd to repo dir and run the MakePdf.pd1 file

To publish the site to the docs dir one should

- cd to component directory and run RunDevelopMove.ps
- change the url site in PublishToDocs.ps1 if need be
- run the PublishToDocs.ps1 file

### Todo - make the above less painful