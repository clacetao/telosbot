const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core')
const streamOptions = {seek: 0, volume: 0.8};

bot.login('NjY3MDIxNTI0NDUyMjQ1NTA1.Xh8_0w.YFtOCcnv2SEgse8QQVBEMz86jJw');

bot.on('message', message => {
let responseObject = {

    "Telos" : "Telos é o cara",
    "Quem é você?" : "Quem é você queridão????????",
    "quem é você?" : "Quem é você queridão????????",
    "Telos é ruim?" : "Telos é ruim? Onde ja se viu uma pessoa com esse controle de códigos, Telos deixou a programação em outro nível, nós seremos abençoados em termos progamadores com esse nível, você pode ficar com o pedro, eu prefiro o Telos.",
    "telos é ruim?" : "Telos é ruim? Onde ja se viu uma pessoa com esse controle de códigos, Telos deixou a programação em outro nível, nós seremos abençoados em termos progamadores com esse nível, você pode ficar com o pedro, eu prefiro o Telos.",
    "Você joga freefire" : "Sai daí seu gemado no frifas",
    "Você joga free fire" : "Sai daí seu gemado no frifas",
    "Você joga frifas" : "Sai daí seu gemado no frifas",
};

if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
}

if (message.content.startsWith("eu sou jogador de freefire?")){
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    if(randomNumber == 2){
        message.reply("Não!");
    }
    else{
        message.reply("Sim!");
    }
}
});

botInformation.on('message', msg => {
    if (msg.autor.bot) {
        return;
    }

    if(msg.content.indexOf("youtube") !== -1 && msg.content.toLowerCase().startsWith("?play")){
        let CompleteMessage = msg.content.split(' ');
        
        let youtubeLink = CompleteMessage[1];
        
        
        let VoiceChannel = msg.guild.channels.find(channel => channel.id === '666840371090948097');
    }

            if (VoiceChannel == null) {
                let responseObject = {".toca" : "Não foi encontrado nenhum canal"};
            }

                if(msg.content.indexOf("youtube") !== -1 && msg.content.toLowerCase().startsWith("?play")){
                    let CompleteMessage = msg.content.split(' ');
                    
                    let youtubeLink = CompleteMessage[1];
                }
                    
                    let VoiceChannel = msg.guild.channels.find(channel => channel.id === '666807105193508875');
                    
                    if(msg.content.indexOf("youtube") !== -1 && msg.content.toLowerCase().startsWith("?play")){
                        let CompleteMessage = msg.content.split(' ');
                        
                        let youtubeLink = CompleteMessage[1];
                    }
                        
                            let VoiceChannel = msg.guild.channels.find(channel => channel.id === '666807155411910722');
                            
                            if(msg.content.indexOf("youtube") !== -1 && msg.content.toLowerCase().startsWith("?play")){
                                let CompleteMessage = msg.content.split(' ');
                                
                                let youtubeLink = CompleteMessage[1];
                            }
                                
                                    let VoiceChannel = msg.guild.channels.find(channel => channel.id === '666807211271520258');

                            

                                    VoiceChannel.join()
                                    .then(connection => {
                                        const stream = ytdl(youtubeLink, {filter: 'audioonly'});
}


                                        const DJ = connection.playStream(stream, streamOptions)
                                        
                                        DJ.on('end', end => {
                                            VoiceChannel.leave();
}
                                        
                                    

