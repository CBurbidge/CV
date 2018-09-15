$cvDir = "$PSScriptRoot"
$jsonDir = "$cvDir/json"
$reactDir = "$cvDir/component"

cd $jsonDir

npm start

cd $cvDir

Start-Process powershell -argumentlist " -file RunBuild.ps1 " -WorkingDirectory "$reactDir"

Start-Process powershell -argumentlist " -file RunDevelopMove.ps1 " -WorkingDirectory "$reactDir"
