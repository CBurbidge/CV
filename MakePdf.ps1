$cvDir = "$PSScriptRoot"
$jsonDir = "$cvDir/json"
$reactDir = "$cvDir/component"
$buildDir = "$reactDir/build"

cd $reactDir

npm run build-app

cd $cvDir


Try
{
    $proc = Start-Process serve -ArgumentList " -s ./docs "

    start-sleep -seconds 5

    node "$cvDir/pdf/createPdf.js"    
}
Finally
{
    $proc | Stop-Process    
}

#Start-Process powershell -argumentlist " -file RunDevelopMove.ps1 " -WorkingDirectory "$reactDir"
