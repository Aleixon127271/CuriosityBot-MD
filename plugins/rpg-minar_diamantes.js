let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 1000)
let info = `*Genial minaste ${hasil} XP ✨*`
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `*[ ⏲️ ] 𝙴𝚜𝚙𝚎𝚛𝚊 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 𝚖𝚒𝚗𝚊𝚛*`  

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🍁 CuriosityBot-MD 🍁*', 'status@broadcast')
//m.reply(`*[ 🎉 ] 𝙶𝚎𝚗𝚒𝚊𝚕, 𝚖𝚒𝚗𝚊𝚜𝚝𝚎 ${hasil} 𝚇𝙿*`)
global.db.data.users[m.sender].lastmiming = new Date * 1
  
}
handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar', 'miming', 'mine'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}



let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Que pro 😎 has minado ${hasil} XP','🌟✨ Genial!! Obtienes ${hasil} XP','WOW!! eres un(a) gran Minero(a) ⛏️ Obtienes ${hasil} XP','Felicidades!! Ahora tienes ${hasil} XP','⛏️⛏️⛏️ Obtienes ${hasil} XP'])}`
let pp = 'https://us.123rf.com/450wm/emojiimage/emojiimage1802/emojiimage180200332/95468325-mont%C3%B3n-de-piedras-preciosas-diamantes-azules-brillantes-concepto-de-joyas-caras-s%C3%ADmbolo-de-riqueza-d.jpg?ver=6'

let d = Math.floor(Math.random() * 10)
global.db.data.users[m.sender].limit += d * 1  
let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastdiamantes + 600000
if (new Date - global.db.data.users[m.sender].lastdiamantes < 600000) throw `*💟 Vuelva en ${msToTime(time - new Date())} para continuar minando ⛏️*`  


//global.db.data.users[m.sender].lastdiamantes = new Date * 1  
  

//m.reply(`*${minar} *${hasil} XP ✨*`)

}
handler.help = ['minar']
handler.tags = ['diamantes']
handler.command = ['minar3', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'] 
handler.fail = null
handler.exp = 0
export default handler




function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
