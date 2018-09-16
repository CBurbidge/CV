$cvDir = "$PSScriptRoot"
$jsonDir = "$cvDir/json"
$reactDir = "$cvDir/component"

cd $jsonDir

npm start

cd $reactDir

Start-Process powershell -argumentlist " -file RunBuild.ps1 " -WorkingDirectory "$reactDir" -NoNewWindow

start-sleep -seconds 1

Start-Process powershell -argumentlist " -file RunDevelopMove.ps1 " -WorkingDirectory "$reactDir" -NoNewWindow

cd $cvDir
