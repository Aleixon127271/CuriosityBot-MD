import db from '../lib/database.js'

export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                //db.data.users[m.sender].banned = true
                m.reply('ʙᴏᴛ ʟᴇᴏɴ 🦁 | ⚠️ *「 𝗔𝗡𝗧𝗜-𝗦𝗣𝗔𝗠 𝘃𝟭 」*\n\n𝐏𝐀𝐑𝐀 𝐂𝐎𝐍 𝐄𝐋 𝐒𝐏𝐀𝐌')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}
