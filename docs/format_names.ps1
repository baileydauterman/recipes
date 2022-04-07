# Get all files and header of file
$data = Get-ChildItem -Recurse -Filter *.md | ForEach-Object {
    [PSCustomObject]@{
        Path = $_.FullName.Replace("\", "/").Replace("D:/GitHub/recipes/docs/", "")
        Title = ($_ | Get-Content -First 1).Replace("# ", "")
    }
}

# remove all the current sidebar data
Clear-Content .\_sidebar.md
Clear-Content .\food.md
Clear-Content .\drink.md
Clear-Content .\dessert.md

# function to clean the code a bit
function Add-ToFile($Data, $Path) {
    Add-Content -Path $Path -Value $Data
}

# add header
Add-ToFile -Path .\_sidebar.md -Data "<!-- docs/_sidebar.md -->"
Add-ToFile -Path .\food.md -Data "# Food Recipes

In here you will find a plethora of food recipes, to inclue:"
Add-ToFile -Path .\drink.md -Data "# Drink Recipes

Drink responsibly mi amigos"
Add-ToFile -Path .\dessert.md -Data "# Dessert Recipes

Beware of the chocolate"

# add food section
Add-ToFile -Path .\_sidebar.md -Data "- [Food](food.md)"
$data | Where-Object Path -match "food/" | ForEach-Object {
    $info = "- [$($_.Title)]($($_.Path))"
    Add-ToFile -Path .\_sidebar.md -Data "    $info"
    Add-ToFile -Path .\food.md -Data "$info"
}

# add drinks section
Add-ToFile -Path .\_sidebar.md -Data "- [Drinks](drinks.md)"
$data | Where-Object Path -match "drinks/" | ForEach-Object {
    $info = "- [$($_.Title)]($($_.Path))"
    Add-ToFile -Path .\_sidebar.md -Data "    $info"
    Add-ToFile -Path .\drink.md -Data "$info"
}

# add desserts section
Add-ToFile -Path .\_sidebar.md -Data "- [Desserts](desserts.md)"
$data | Where-Object Path -match "desserts/" | ForEach-Object {
    $info = "- [$($_.Title)]($($_.Path))"
    Add-ToFile -Path .\_sidebar.md -Data "    $info"
    Add-ToFile -Path .\dessert.md -Data "$info"
}