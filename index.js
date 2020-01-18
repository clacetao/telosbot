const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume: 0.8};
const queue = new Map();

client.once('ready', () => {
	console.log('Ready!');
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
    console.log('Disconnect!');
    
});

client.login('NjY3MDIxNTI0NDUyMjQ1NTA1.Xh8_0w.YFtOCcnv2SEgse8QQVBEMz86jJw');

client.on('message', message => {
let responseObject = {
    

    "Telos" : "Telos é o cara",
    "telos" : "Telos é o cara",
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
client.on('message', async message => {
    if (message.author.bot) return;
    
    const serverQueue = queue.get(message.guild.id);
    
    if (message.content.startsWith(`.toca`)) {
 execute(message, serverQueue);
 return;
} else if (message.content.startsWith(`.pula`)) {
 skip(message, serverQueue);
 return;
} else if (message.content.startsWith(`.para`)) {
 stop(message, serverQueue);
 return;

};

async function execute(message, serverQueue) {
    const args = message.content.split(' ');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send('você precisa estar em um chat de voz');
     const permissions =     voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
     return message.channel.send('Preciso de permissão pra falar no seu canal');
    }

    const songInfo = await ytdl.getInfo(args[1]);
const song = {
 title: songInfo.title,
 url: songInfo.video_url,
};

// Creating the contract for our queue
const queueContruct = {
    textChannel: message.channel,
    voiceChannel: voiceChannel,
    connection: null,
    songs: [],
    volume: 5,
    playing: true,
   };
   // Setting the queue using our contract
   queue.set(message.guild.id, queueContruct);
   // Pushing the song to our songs array
   queueContruct.songs.push(song);
   
   try {
    // Here we try to join the voicechat and save our connection into our object.
    var connection = await voiceChannel.join();
    queueContruct.connection = connection;
    // Calling the play function to start a song
    play(message.guild, queueContruct.songs[0]);
   } catch (err) {
    // Printing the error message if the bot fails to join the voicechat
    console.log(err);
    queue.delete(message.guild.id);
    return message.channel.send(err);
   }

   function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
     serverQueue.voiceChannel.leave();
     queue.delete(guild.id);
     return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
 .on('end', () => {
  console.log('Terminou aeeeeee');
  // Deletes the finished song from the queue
  serverQueue.songs.shift();
  // Calls the play function again with the next song
  play(guild, serverQueue.songs[0]);
})
 .on('error', error => {
  console.error(error);
 });
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

function skip(message, serverQueue) {
    if (!message.member.voiceChannel) return message.channel.send('Entra num chat de voz que eu quero ver');
    if (!serverQueue) return message.channel.send('I rapaz, não consigo');
    serverQueue.connection.dispatcher.end();
   }

   function stop(message, serverQueue) {
    if (!message.member.voiceChannel) return message.channel.send('Entra num chat de voz que eu quero ver');
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
   
   }}}})
