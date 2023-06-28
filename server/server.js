var express = require('express')
const { body, validationResult } = require("express-validator");
var app = express()
var morgen = require('morgan')
const { EmbedBuilder, WebhookClient, Embed } = require('discord.js');
const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1123286457780551701/VWRq4VLZC_ODLO5AEnpTLZwnbCAgZEeCVK8i-XxYEu6NpQu5IfsZ7CurFJO_-l6OOc6h' });

app.use(morgen('dev'))
app.use(express.urlencoded({
    extended: true
}));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})
app.post('/idear.html', function(req, res){
    const embed = new EmbedBuilder()
    .setTitle('idear.zelcrux.net')
    .setColor(0x00FFFF)
    .addFields(
    {name: "idear", value: req.body.input}
    )

    webhookClient.send({
        content: '',
        username: 'Idear Link',
        avatarURL: '',
        embeds: [embed],
    });
    res.sendFile(__dirname + "/idear.html")
});

app.listen(7000, function(req, res) {
    console.log('Listening on port 7000')
});