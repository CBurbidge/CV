$executingDir = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition
$reactIndexPath = "$executingDir/src/index.react.js"
$buildIndexPath = "$executingDir/src/index.nwb.js"
$indexPath =      "$executingDir/src/index.js"

if(test-path $reactIndexPath){
  try {
    mv $indexPath $buildIndexPath -ea Stop
  }
  catch {
    write-error "failed to move index to index.nwb"
    exit 1
  }
  
  mv $reactIndexPath $indexPath
}

npm start