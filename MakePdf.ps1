$cvDir = "$PSScriptRoot"
$jsonDir = "$cvDir/json"
$reactDir = "$cvDir/component"
$buildDir = "$reactDir/build"

# publish to use blank homepage 
cd $reactDir

./PublishToDocsLocal.ps1

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

# clean up back to normal repo staus

cd $reactDir

./PublishToDocsLocal.ps1

cd $cvDir
