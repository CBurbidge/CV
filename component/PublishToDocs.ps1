$executingDir = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition

& "$executingDir/RunDevelopMove.ps1"

node "$executingDir/setHomepage.js" "https://chestercodes.github.com/CV/"

npm run build-app
