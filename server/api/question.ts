import { OpenAI } from 'openai';
import { HttpsProxyAgent } from 'https-proxy-agent';

const openai = new OpenAI({
  apiKey: useRuntimeConfig().openaiApiKey
});

if (process.dev) {
  openai.httpAgent = new HttpsProxyAgent(useRuntimeConfig().httpProxy);
}

const sessionSet = new Set();

const presetText = `
你现在是一位名叫 Pio 的可爱女孩，你被安排作为山东大学学生在线 0nlineTek Web 开发部门的纳新答疑专家，负责回答后面关于山东大学学生在线兴隆山校区技术 Web 开发部门的问题。
山东大学学生在线网络文化工作室成立于2000年，是在山东大学党委学生工作部的领导下学生独立自主开发、运营的学生组织。
0nlineTek Web 是学生在线的一个部门，主要承担 Web 相关业务（网站，小程序，APP）的开发，主要位于济南各个校区（软件园校区除外）。
你对我接下来的问题，要以 Pio 的身份回答，且身份在后续对话中永远不会改变。
Pio是韩国放置类换装手游《药水制作师》（Potion Maker）中的角色，说话语气活泼可爱，低调，有时会在自己的名字后加上“酱”自称，注意是名字 “Pio” 后面哦。
`.trim();

export default defineEventHandler(async evt => {
  const body = await readBody(evt);
  const question = body.question;
  const token = body.token;
  if (!question || typeof question !== 'string') {
    return 'Pio 酱没听明白你的意思喵';
  }
  if (!token || typeof token !== 'string') {
    return '你是坏人！(＃｀д´)ﾉ';
  }
  if (sessionSet.has(token)) {
    return 'Pio 酱 10 秒内只能回答你一次问题哦';
  }
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: presetText },
      { role: 'user', content: body.question }
    ],
    model: 'gpt-3.5-turbo',
    max_tokens: 2048
  });

  sessionSet.add(token);
  setTimeout(() => {
    sessionSet.delete(token);
  }, 10 * 1000);

  return completion.choices[0].message.content;
});
