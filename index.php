
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <script src="js/musqiue.js"></script>
    <link href="css/style.css" rel="stylesheet">
    <title>Lofi</title>
</head>
<body>
<div class="home">
    <h1>
        <div class="lofi">
            <div class="letter">L</div>
            <div class="letter">o</div>
            <div class="letter">f</div>
            <div class="letter">i</div>
        </div>
    </h1>
    <div class="lecteur">
        <span id="titre"></span>
        <Button id=btn onClick='playPause()'>play</Button>
        <Button id=btnSkip onClick='skip()'>skip</Button>
        <div id=controls>
            <label for="volume">Volume</label><br>
            <input id=volume type="range" id="volume" name="volume" min="0" max="1" step='.1' value='.5' onInput='updateVolume()'>
        </div>
    </div>
</div>
</body>
</html>