
const Discord = require('discord.js');
const client = new Discord.Client();

const token = "Njk1MDIxMTczNDUyNDM5NjMz.XvzlpQ.6jtTzf6VVvSTyVK8poZz7Lii-qo"

client.on('ready', () => {
    console.log('bot iniciado')
})

client.on('message', async message => {
    if(message.content == "teste"){
        message.channel.send("teste o caralho arruma essa porra")
    }
})

client.login(token);