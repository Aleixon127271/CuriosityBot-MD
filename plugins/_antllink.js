let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'Megumin', "h": `Hmm`,'seconds': '99999', 'ig': 'true', 'caption': '⚘݄𖠵⃕⁖𖥔.𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨❞ ꔷ──᜔◇⃟̣̣⃕✨', 'jpegThumbnail': yt }}}

  if (!text) throw `⚠️ *Ingrese el link de un grupo de WhatsApp.*`
  let [_, code, expired] = text.match(linkRegex) || []
  if (!code) throw '❎ El link es invalido'
  let res = await conn.groupAcceptInvite(code)
  
  await m.reply(`Iniciando el spameo`)
 await conn.relayMessage(res, {extendedTextMessage:{text: '', contextInfo: { externalAdReply: { showAdAttribution: true, title: `⿻᳔⃗͢·🌺⃝ᝯׁ֒υׁׅꭈׁׅꪱׁׁׁׅׅׅᨵׁׅׅׅ꯱ꪱׁׁׁׅׅׅtׁׅᨮׁׅ֮֮ϐׁᨵׁׅׅtׁׅ-ꩇׁׅ֪݊ ժׁׅ݊🔖⃞⃘⃪۪۪۪፝֟۬۫۫۫֯ ◌⃘࣭ٜ࣪࣪࣪۬`, body: wm, sourceUrl: md, thumbnail: imagen3 }, mentionedJid: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }}}, { quoted: fakegif })
 //await conn.relayMessage(res, {extendedTextMessage:{text: '꒦     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫\n      ⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬▭̷໋̟  ۫    ۪    ⬧    ۪    ۫  ▭̷໋̟۪۬⚘ٜ࣪໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪\n*╰►*𖢦ۗ۬꒢۬🌷🅟Ꭼ🅡Ꮇ🅘Ͳ🅘Ꭰ🅞📝՚͓⋆*.il\n       ⬫   ͜ ۬︵࣪᷼⏜݊᷼✿⃘𐇽۫ꥈ࣪࣪࣪࣪࣪࣪࣪࣪࣪۬۬۬࣪࣪࣪۬۬۬𝇈ٜ࣪࣪࣪࣪࣪۬۬࣪࣪࣪۬۬𑁍ٜ𐇽࣪࣪࣪࣪࣪۬۬࣪࣪࣪۬۬𝇈⃘۫ꥈ࣪࣪࣪࣪࣪࣪࣪࣪࣪۬۬۬࣪࣪࣪۬۬۬✿݊᷼⏜࣪᷼︵۬ ͜   ⬫\n*༷￫γαοι γυяι ৎ✿̤֟٭*\n*༷￫cοѕթlαγ ᴍυsícαs ৎ✿̤֟٭*\n*༷￫αρκѕ, ρ∂ƒѕ נυєgοѕ ৎ✿̤֟٭*\n•̟̟̟̟̟̟─•̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟─•̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟─•̟̟̟̟̟̟̟̟̟̟̟̟̟᪥ဳ᪥🌻᪥ဳ᪥•̟̟̟̟̟̟̟̟̟̟̟̟─•̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟─•̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟̟─•̟̟̟̟̟̟\n⚋⚋ׅㅤ·ㅤׁ⚋⚋ׅㅤ·ㅤׁ⚋⚋ׅㅤ·ㅤׁ⚋⚋ׅ ·ㅤׁ⚋⚋ׅ\n𝆺𝅥 𝆭         𝆺𝅥 𝆭          𝆺𝅥 𝆭         𝆺𝅥 𝆺𝅥 𝆭         𝆺𝅥 𝆭          𝆺𝅥 𝆭      𝆺𝅥 \n╭࣭࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🌻⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫╮\nhttps://chat.whatsapp.com/JiCOqSlcPVfEDu8WroH6ed\n╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭࣪࣪࣪۬', contextInfo: { externalAdReply: { showAdAttribution: true, title: `⿻᳔⃗͢·🌺⃝ᝯׁ֒υׁׅꭈׁׅꪱׁׁׁׅׅׅᨵׁׅׅׅ꯱ꪱׁׁׁׅׅׅtׁׅᨮׁׅ֮֮ϐׁᨵׁׅׅtׁׅ-ꩇׁׅ֪݊ ժׁׅ݊🔖⃞⃘⃪۪۪۪፝֟۬۫۫۫֯ ◌⃘࣭ٜ࣪࣪࣪۬`, body: wm, sourceUrl: md, thumbnail: imagen3 }, mentionedJid: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }}}, { quoted: fakegif })
  
  await conn.groupLeave(res)
  
  await m.reply(`Listo`)
}

handler.help = ['dino']
handler.tags = ['owner']
handler.command = ['dino'] 

handler.owner = true

export default handler
