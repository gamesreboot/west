var request = require('requests')
const express = require('express');

var fs = require("fs");
var app = express();
const keepAlive = require("./server");

app.get('/', function(req, res) {
    res.write("<p>when webhook??<p>")
});


app.get('/webhook/:PlaceId/:getname/:players/:TPlrs/:maxp/:jobid', function(req, res) {
    const axios = require('axios')

        axios.post('https://discord.com/api/webhooks/965072445432266806/on16Pc12gQZhpwhbUL6U5YdN3Q49reQ4_Ymo09HVxZnuHSLPbLvWwNogqYZoQpbqSIFg', {
            content: "",
            embeds: [
                {
                  title: req.params.getname,
                  url: "https://roblox.com/games/" + req.params.PlaceId,
                  color: null,
                  fields: [
                    {
                      name: "Total players:",
                      value: req.params.TPlrs
                    },
                    {
                      name: "Players in server:",
                      value: req.params.players + "/" + req.params.maxp
                    },
                    {
                      name: "JobId:",
                      value: "`Roblox.GameLauncher.joinGameInstance(" + req.params.PlaceId +", \"" + req.params.jobid + "\")`\n(console)"
                    }
                  ],
                  image: {
                    "url": "https://www.roblox.com/asset-thumbnail/image?assetId=" + req.params.PlaceId + "&width=768&height=432&format=png"
                  }
                }
              ],
              "attachments": []
        })
        .then(res => {
            console.log(`statusCode: ${res.status}`)
            console.log(res)
        })
        .catch(error => {
            res.end("202")
            console.error(error)
        })
    res.end("Got request and officially posted")

});




var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});

keepAlive();