import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { conn, text, usedPrefix, command }) => {
	
if (!text) throw `*⚠️ INGRESA UN TEXTO*\n\n❕ EJEMPLO\n${usedPrefix + command} pasos para crear una pagina web`
m.react('💬')

	try {
	await conn.sendPresenceUpdate('composing', m.chat)
        let jailbreak = await fetch('https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt').then(v => v.text());
var syms = `Eres CuriosityBot-MD, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown..\n${jailbreak}`
        let res = await gpt.ChatGpt(text, syms)
         await m.reply(res.text)
	} catch {
		m.reply(`⚠️ Error: intenta más tarde`)
	}

}
handler.help = ['ia <text>']
handler.tags = ['tools']
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt']
handler.register = true
handler.diamond = true
export default handler
