const search = (prefix, botName, ownerName) => {
	return `
╔ *🔥 ${botName} 🔥*
║
➥ *〈 BOT INFO 〉*
🐬 ║
🐬 ║♡ *Prefijo* : 「  ${prefix}  」
🐬 ║♡ *Creador* : ${ownerName}
🐬 ║♡ *Version* : 0.0.2
🐬 ║
🔥>ԑ̮̑ঙ< *𝗡𝘆𝗮𝗻𝗕𝗼𝘁* >ԑ̮̑ঙ<🔥
 *〈 ABOUT 〉*
║
║≽ *${prefix}info* (error)
║ *Desc* : Informacion del bot
║──────────────╼
║≽ *${prefix}blocklist*
║ *Desc* : Usuarios bloqueados del usuario
║──────────────╼
║≽ *${prefix}chatlist* (error)
║ *Desc* : Muestra todos los chats del usuario
║──────────────╼
║≽ *${prefix}ping*
║ *Desc* : Velocidad del bot
║──────────────╼
║≽ *${prefix}bugreport* <text>
║ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 SEARCH 〉*
   ╽
   ┠≽ *${prefix}wait
   ┃ *Desc* : Send Name Anime & Short Scene
   ┠──────────────╼
   ┠≽ *${prefix}ytsearch <query>
   ┃ *Desc* : Search YouTube Video
   ┠──────────────╼
   ┠≽ *${prefix}trendtwit
   ┃ *Desc* : Search Trending Twitter Video
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.search = search
