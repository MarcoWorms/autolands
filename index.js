const config = require('./config.js')

async function gpt (prompts, forceJSON = false) {
  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.openaiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4-turbo-preview",
      response_format: forceJSON ? { "type": "json_object" } : undefined,
      messages: prompts.map((prompt) => (
        {
          "role": "user",
          "content": prompt
        }
      ))
    })
  })
  .then(response => response.json())
  .then(data => {
    if (forceJSON) {
      return JSON.parse(data.choices[0].message.content)
    }
    return data.choices[0].message.content
  })  
}

const player = {
  mood: '',
  daysHistory: [],
}

const gameState = {
  instructions: (date, worldbuilding) => `Important Rules:

-> You (gpt, the AI master) decides what happens in every day of the characters in this world.
-> You should provide a report about what happened that day, a report must have up to 2000 characters, no markdown.
-> A day log starts at 6am and ends at 6am of the next day, no need to mention this on the log tho.
-> Return only a JSON that contains the daily report for the character containing only: { lastDayReport: '...', mood: \`new mood given this day report\` }
-> If more than one character is present, you should make a single report with them as a team, return an array of moods in the same order of characters like: { lastDayReport: '...', moods: ['...', '...']}

Worldbuilding Prompt:

Current date is: ${date}.

${worldbuilding}`,
  ...config,
}

async function passDay() {
  await Promise.all(gameState.players.map(async (player, index) => {
    if (Array.isArray(player)) {
      const report = await gpt([`WORLD PROMPTS:\n\n${gameState.instructions(gameState.date, gameState.worldbuilding)}`, `CHARACTER:\n\n${JSON.stringify(player, null, 2)}`, 'RESULT:\n\n'], true);
      if (report.moods) {
        const updatedTeam = player.map((member, memberIndex) => ({
          ...member,
          mood: report.moods[memberIndex],
          daysHistory: member.daysHistory ? [report.lastDayReport, ...member.daysHistory] : [report.lastDayReport],
        }));
        gameState.players[index] = updatedTeam;
      }
    } else {
      const report = await gpt([`WORLD PROMPTS:\n\n${gameState.instructions(gameState.date, gameState.worldbuilding)}`, `CHARACTER:\n\n${JSON.stringify(player, null, 2)}`, 'RESULT:\n\n'], true);
      if (report.mood) {
        gameState.players[index] = {
          ...player,
          mood: report.mood,
          daysHistory: player.daysHistory ? [report.lastDayReport, ...player.daysHistory] : [report.lastDayReport],
        };
      }
    }
  }));
  gameState.date = new Date(Number(new Date(gameState.date)) + 86400000);
}

async function start () {
  console.log(gameState.date, JSON.stringify(gameState.players, null, 2))
  await passDay()
  console.log(gameState.date, JSON.stringify(gameState.players, null, 2))
  await passDay()
  console.log(gameState.date, JSON.stringify(gameState.players, null, 2))
}

start()