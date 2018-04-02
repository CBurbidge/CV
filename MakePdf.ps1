# serve and "https://www.npmjs.com/package/html-pdf" need to be installed

$cvDir = "$PSScriptRoot"
$jsonDir = "$cvDir/json"
$reactDir = "$cvDir/react"
$buildDir = "$reactDir/build"

cd $jsonDir

npm start

cd $reactDir

npm run-script build

cd $cvDir

$serving = Start-Process -FilePath "serve" -WorkingDirectory $buildDir


node "$cvDir/pdf/createPdf.js"

$serving | Stop-Process

