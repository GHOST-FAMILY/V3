const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

var tesadtag =''
if(config.LANG === 'SI') tesadtag = '*මට tag කිරීමට text එකක් දෙන්න. !*'
else tesadtag = '*Give me text to tag !*'
var descg = ''
if(config.LANG === 'SI') descg = "එය කණ්ඩායමේ සියලුම සාමාජිකයින් tag කරයි."
else descg = "It tag all members in group."
var ONLGROUP = ''
if(config.LANG === 'SI') ONLGROUP = "*මෙය group නොවේ !*"
else ONLGROUP = "*This is not a group !*"
var ADMIN = ''
if(config.LANG === 'SI') ADMIN = "ඔබ admin නොවේ !"
else ADMIN = "You are not an admin !"
cmd({
    pattern: "hidetag",
    react: "✔",
    alias: ["tagall",'tag'],
    desc: descg,
    category: "admin",
    use: '.hidetag <hi>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)
if (!q) return await  reply(tesadtag)
conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)})
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})
