const Discord = require('discord.js');
const Bot = new Discord.Client();



Bot.login('MzY0ODA3MDA4NzA2MzYzMzk0.DLwJgA.AiR0e6UuBA8UY0H9U3QyZ0xgroQ');

Bot.on('message', (message) => {
    if(message.content.startsWith('$'))
    {
        if(message.content.match('ego'))
        {
            message.reply('NANI!!!????');
        }
        if(message.content.match('harami') || message.content.match('HARAMI'))
        {
            var i;
            var names = [i];
            names[0] = 'Ali Wali';
            names[1] = 'Faraz';
            names[2] = 'Fawad';
            names[3] = 'Billi';
            names[4] = 'Akash';
            names[5] = 'Urva';

            var i = Math.floor(Math.random() * 5) + 0;
            message.channel.sendMessage(names[i] + ' is very harami!!');
        }
        if(message.content.match('meme') || message.content.match('MEME'))
        {
            var i;
            var memer = [];

            memer[0] = 'https://i.imgur.com/SDKdYEb.jpg';
            memer[1] = 'https://i.imgur.com/i6aHANo.jpg';
            memer[2] = 'https://i.imgur.com/hYqQPv1.jpg';
            memer[3] = 'https://i.imgur.com/OmaS9Xh.jpg';
            memer[4] = 'https://i.imgur.com/7o6f8Cu.jpg';
            memer[5] = 'https://i.imgur.com/bL6T26a.jpg';
            memer[6] = 'https://i.imgur.com/hceIVSt.jpg';
            memer[7] = 'https://i.imgur.com/f10aeUm.jpg';

            var i = Math.floor(Math.random() * 7) + 0;
            message.channel.sendMessage('', {file: memer[i]});
        }
        if(message.content.match('RARE') || message.content.match('rare'))
        {
            message.channel.sendMessage('cant <:ROFLFace:319585392338927616>  stand <:ROFLFace:319585392338927616>  a <:ROFLFace:319585392338927616> self <:ROFLFace:319585392338927616>  obsessed <:ROFLFace:319585392338927616>  woman');
        }
    }
});
