import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*⚠️ Ingrese un enlace de github*\n\n*📍 Ejemplo:*\n${usedPrefix + command} https://github.com/Azami19/CuriosityBot-MD1`
if (!regex.test(args[0])) throw '*⚠️ Enlace erróneo*'
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*_🚀 Descargando repositorio, espere un momento_*\n\n*_💚 Si este repositorio no es enviado puede deberse a qué el repositorio es muy pesado_*`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone/i
export default handler
