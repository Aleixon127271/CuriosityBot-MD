import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*⚠️ Ejemplo de uso de comando ${usedPrefix + command} Robot Curiosity*`
const res = await googleImage(text)
global.enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: md, mediaType: 'VIDEO', description: '', title: wm, body: '𝐒𝐔𝐏𝐄𝐑 𝐂𝐔𝐑𝐈𝐎𝐒𝐈𝐓𝐘-𝐁𝐎𝐓', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: md }}}
let image = await res.getRandom()
let link = image
let captionn = `*☂️ RESULTADO DE:* ${text}\n*📍 ENLACE* ${link}\n*🌐 BUSCADOR:* Google`
conn.sendButton(m.chat, captionn, wm2, link, [['⏭️ SIGUIENTE ⏭️', `#imagen ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
export default handler
