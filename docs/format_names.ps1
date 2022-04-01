# Get all files and header of file
$data = Get-ChildItem -Recurse -Filter *.md | ForEach-Object {
    [PSCustomObject]@{
        Path = $_.FullName.Replace("\", "/").Replace("D:/GitHub/recipes/docs/", "")
        Title = ($_ | Get-Content -First 1).Replace("# ", "")
    }
}

# remove all the current sidebar data
Clear-Content _sidebar.md

# function to clean the code a bit
function Add-ToSidebar($string) {
    Add-Content -Path _sidebar.md -Value $string
}

# add header
Add-ToSidebar "<!-- docs/_sidebar.md -->"

# add food section
Add-ToSidebar "- Food"
$data | Where-Object Path -match "food/" | ForEach-Object {
    Add-ToSidebar "    - [$($_.Title)]($($_.Path))"
}

# add drinks section
Add-ToSidebar "- Drinks"
$data | Where-Object Path -match "drinks/" | ForEach-Object {
    Add-ToSidebar "    - [$($_.Title)]($($_.Path))"
}

# add desserts section
Add-ToSidebar "- Desserts"
$data | Where-Object Path -match "desserts/" | ForEach-Object {
    Add-ToSidebar "    - [$($_.Title)]($($_.Path))"
}