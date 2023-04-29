let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*⚠️ Responde a una imagen o a un sticker el cuál se le agregara un comando o texto según usted decida*'
if (!m.quoted.fileSha256) throw '*⚠️ Solo puedes agregar comandos o textos a stickers e imagenes*'
if (!text) throw `*⚠️ Fallo de uso, texto faltante*\n\n*📍 Uso correcto de comando:*\n*✅ ${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*🚀 Ejemplo de uso correcto:*\n*✅ ${usedPrefix + command} <#menu> <responder a sticker o imagen>*`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*⚠️ Solo mi propietario puede hacer está modificación*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*✅ El texto/comando fue agregado al sticker/imagen y se a agregado a la base de datos correctamente*`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
