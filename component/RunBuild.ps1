$executingDir = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition


$a = pwd
Write-Host "pwd - $a"
Write-Host "Running the RunBuild script in $executingDir"
powershell -file "$executingDir/RunBuildMove.ps1"
Write-Host "Finished"

write-host "running 'npm run-script build'"
npm run-script build