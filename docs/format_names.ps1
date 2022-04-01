$data = Get-ChildItem -Recurse -Filter *.md | ForEach-Object {
    [PSCustomObject]@{
        Path = $_.FullName.Replace("\", "/").Replace("D:/GitHub/recipes/docs/", "")
        Title = ($_ | Get-Content -First 1).Replace("# ", "")
    }
}

Write-Host "- Food"
$data | Where-Object Path -match "food/" | ForEach-Object {
    Write-Host "    - [$($_.Title)]($($_.Path))"
}

Write-Host "- Drinks"
$data | Where-Object Path -match "drinks/" | ForEach-Object {
    Write-Host "    - [$($_.Title)]($($_.Path))"
}

Write-Host "- Desserts"
$data | Where-Object Path -match "desserts/" | ForEach-Object {
    Write-Host "    - [$($_.Title)]($($_.Path))"
}