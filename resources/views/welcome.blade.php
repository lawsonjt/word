<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Word</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/css/app.css">

    <script src="//unpkg.com/alpinejs" defer></script>
    <script src="/js/app.js"></script>
</head>
<body>
<main x-data="game"
      @keyup.window="onKeyPress($event.key)">
    <h1 aria-label="Word">
        <img src="/images/transformer.png"
             width="200" height="200">
    </h1>
    <div id="game">
        <template x-for="(row, index) in board">
            <div class="row" :class="{'current' : currentRowIndex === index}">
                <template x-for="tile in row">
                    <div class="tile" :class="tile.status" x-text="tile.letter"></div>
                </template>
            </div>
        </template>
    </div>
    <output x-text="message"></output>
</main>

</body>
</html>
