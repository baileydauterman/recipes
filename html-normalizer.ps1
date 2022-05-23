function Html-Normalizer($Html) {
    $Html = $Html -replace '<style(.*?)>((.|\n)*)<\/style>'
    $Html = $Html -replace '<script(.*?)>((.|\n)*)<\/script>'
    $Html = $Html -replace '<[^>]+>'
    $Html
}