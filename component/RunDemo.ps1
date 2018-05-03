$executingDir = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition

powershell -file "$executingDir/RunBuildMove.ps1"

npm run-script start2
