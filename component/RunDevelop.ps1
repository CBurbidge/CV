$executingDir = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition

powershell -file "$executingDir/RunDevelopMove.ps1"

npm start