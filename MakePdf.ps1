$cvDir = "$PSScriptRoot"
$jsonDir = "$cvDir/json"
$reactDir = "$cvDir/component"
$buildDir = "$reactDir/build"

cd $jsonDir

npm start

cd $cvDir

Start-Process powershell -argumentlist " -file RunDemo.ps1 " -WorkingDirectory "$reactDir"

start-sleep -seconds 5

node "$cvDir/pdf/createPdf.js"

Start-Process powershell -argumentlist " -file RunDevelopMove.ps1 " -WorkingDirectory "$reactDir"
