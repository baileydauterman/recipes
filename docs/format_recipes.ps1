$recipes = Get-ChildItem -Recurse -Filter "*.md" | Where-Object {($_.FullName -like "*\food\*") -or ($_.FullName -like "*\desserts\*") -or ($_.FullName -like "*\drinks*")}

foreach ($recipe in $recipes) {
    $content = Get-Content $recipe.FullName

    $content = $content.Replace("1/2", "&frac12;")
    $content = $content.Replace("1/3", "&frac13;")
    $content = $content.Replace("2/3", "&frac23;")
    $content = $content.Replace("1/4", "&frac14;")
    $content = $content.Replace("3/4", "&frac34;")
    $content = $content.Replace("1/8", "&frac18;")
    $content = $content.Replace("3/8", "&frac38;")
    $content = $content.Replace("5/8", "&frac58;")
    $content = $content.Replace("7/8", "&frac78;")

    $content = $content.Replace("½", "&frac12;")
    $content = $content.Replace("⅓", "&frac13;")
    $content = $content.Replace("¼", "&frac14;")
    $content = $content.Replace("¾", "&frac34;")

    $content = $content.Replace("ounces", "oz")
    $content = $content.Replace("pounds", "lbs")

    $content = $content.Replace("tablespoon", "tbsp")
    $content = $content.Replace("tablespoons", "tbsp")
    $content = $content.Replace("Tablespoon", "tbsp")
    $content = $content.Replace("Tablespoons", "tbsp")
    $content = $content.Replace("Tbsp", "tbsp")
    $content = $content.Replace("TBSP", "tbsp")

    $content = $content.Replace("Tsp", "tsp")
    $content = $content.Replace("TSP", "tsp")
    $content = $content.Replace("teaspoon", "tsp")
    $content = $content.Replace("teaspoons", "tsp")
    $content = $content.Replace("Teaspoon", "tsp")
    $content = $content.Replace("Teaspoons", "tsp")

    $content = $content.Replace("c.", "cup")

    $content = $content.Replace("-black", "-2451ba")

    Set-Content $recipe.FullName $content
}