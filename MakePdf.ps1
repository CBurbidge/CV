# serve and "https://www.npmjs.com/package/html-pdf" need to be installed

$cvDir = "$PSScriptRoot"
$reactDir = "$cvDir/react"
$buildDir = "$reactDir/build"

cd $reactDir

npm run-script build

cd $cvDir

$serving = Start-Process -FilePath "serve" -WorkingDirectory $buildDir


node "$cvDir/pdf/createPdf.js"

$serving | Stop-Process

