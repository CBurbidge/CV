$cvDir = "$PSScriptRoot"
$jsonDir = "$cvDir/json"
$reactDir = "$cvDir/component"

Write-Host "Updating the json transformations etc"
cd "$jsonDir"

npm start

cd "$reactDir"
$a = pwd
Write-Host "component dir - $a"
Write-Host "Running the RunBuild script"
Start-Process powershell -argumentlist " -file RunBuild.ps1 " -NoNewWindow -Wait

start-sleep -seconds 1

Write-Host "Running the RunDevelopMove script to revert to repo state"
Start-Process powershell -argumentlist " -file RunDevelopMove.ps1 " -NoNewWindow

cd $cvDir
