<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Darts Scorer Test</title>

        <link type="text/css" rel="stylesheet" href="/css/app.min.css" />

        <script type="text/javascript" src="/js/jquery-3.2.0.min.js"></script>
        <script type="text/javascript" src="/js/logic.min.js"></script>
    </head>
    <body>
        <div id="game">
            <div class="dartboard-stats">
                @include('dartboard-stats')
            </div>
            <div class="dartboard-score">
                <!-- @include('dartboard') -->
            </div>
        </div>
    </body>
</html>
