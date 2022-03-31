$recipes = Get-ChildItem -Recurse -Filter "*.md" | Where-Object {($_.FullName -like "*\food\*") -or ($_.FullName -like "*\desserts\*") -or ($_.FullName -like "*\drinks*")}
$recipes.FullName

foreach ($recipe in $recipes) {
    $content = Get-Content $recipe.FullName

    $content = $content.Replace("1/2", "½")
    $content = $content.Replace("1/3", "⅓")
    $content = $content.Replace("2/3", "⅔")
    $content = $content.Replace("1/4", "¼")
    $content = $content.Replace("3/4", "¾")
    $content = $content.Replace("1/8", "⅛")
    $content = $content.Replace("2/8", "¼")
    $content = $content.Replace("3/8", "⅜")
    $content = $content.Replace("5/8", "⅝")
    $content = $content.Replace("7/8", "⅞")

    Set-Content $recipe.FullName $content
}