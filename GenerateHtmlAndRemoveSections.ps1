$executingDir = Split-Path -parent $PSCommandPath

$tempFilePath = "$executingDir\cv-temp.html"
resume export $tempFilePath
Write-Host "Generated cv temp"

# remove stupid doctype first line
$temp = [IO.File]::ReadAllText($tempFilePath)
$temp = $temp.Replace("<!doctype html>`n", "")
[IO.File]::WriteAllText($tempFilePath, $temp)

python RemoveNodes.py

Write-Host "Finished"