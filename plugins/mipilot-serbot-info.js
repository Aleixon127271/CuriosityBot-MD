async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]  
const message = users.map(v => '🔰 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=Bot\n(${v.name})\n\n`).join('\n')
const replyMessage = (message.length === 0) ? "*⚠️ NO HAY SUB BOTS DISPONIBLE. VERIFIQUE MÁS TARDE.*" : message
await m.reply( '*🚀 AQUÍ TIENE LA LISTA DE LOS SUBBOTS ACTIVÓS*')
await m.reply(replyMessage.trim())}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler
