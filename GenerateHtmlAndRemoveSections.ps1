$executingDir = Split-Path -parent $PSCommandPath

$tempFilePath = "$executingDir\temp\cv-temp.html"
resume export $tempFilePath
Write-Host "Generated cv temp"

# remove stupid doctype first line
$temp = [IO.File]::ReadAllText($tempFilePath)
$temp = $temp.Replace("<!doctype html>`n", "")
[IO.File]::WriteAllText($tempFilePath, $temp)

C:\Python36\python.exe .\RemoveNodes.py

C:\Python36\python.exe .\SeperateStyleAndContent.py

Write-Host "Finished"