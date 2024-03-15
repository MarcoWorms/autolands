# Autolands

> Automated gpt world based on simple JSON agents and their daily stories, for entertainment purpose

1. Alter [config.js](./config.js) to add your worldbuilding and agents
2. Agents (players) inside an array are considered a team, they share the same day report and story for that day
3. Call `passDay` to generate reports of what happened in each agent's life
4. Agents have a mood variable that updates every day based on their current day story and influences the next day's story
5. You can add whatever you want to agents JSON, the current engine won't edit their properties when day passes but it will always take all properties into consideration to generate the story

Today agents only know about thir own reports and worldbuilding string. One improvement to be made is making them interact with other agents around the same region of the world.

## Example

If we pass this as initial configs:

```js
module.exports = {
  openaiKey: '', // your gpt key goes here
  worldbuilding: `This world is a replica of the LOTR world, right when the first movie starts, these characters are in the same world but don't actually meet the movie characters.`,
  date: new Date('1003-08-02'), // starting date for first day
  players: [ 
    { 
      name: 'Zsdar',
      class: 'warrior',
      bornAt: new Date('950-04-05'),
      trainingSince: new Date('955-04-05'),
    },
    [
      {
        name: 'Cion',
        class: 'mage',
        bornAt: new Date('900-04-05'),
        trainingSince: new Date('907-04-05'),
      },
      {
        name: 'Xur',
        class: 'mage',
        bornAt: new Date('900-04-05'),
        trainingSince: new Date('907-04-05'),
        description: 'Cion apprentice',
      },
    ]
  ]
}
```

Here is an example of what happened after 2 days (new reports are prepended, so they are shown from newest to oldest)

```js
world date: 1003-08-04

players: [
  {
    "name": "Zsdar",
    "class": "warrior",
    "bornAt": "0950-04-05T03:06:28.000Z",
    "trainingSince": "0955-04-05T03:06:28.000Z",
    "mood": "determined and intrigued",
    "daysHistory": [
      "Zsdar woke in his makeshift camp at the base of the ancient watchtower to a morning that was deceptively peaceful. His body ached from the previous day's battle, but the sense of accomplishment from defeating the goblins drove him forward. After a quick meal of dried meats and fruits, he decided to explore the ruins for any signs of what might have attracted the goblins to this place. Within the crumbling walls, he discovered ancient runes etched into the stone, hinting at a forgotten magic that once pulsed through the land. His contemplation was interrupted by the sound of hooves; a group of travelers had arrived, seeking the warrior who had quelled the goblin threat. Among them was Aeliana, a mage of some renown, who had felt the disturbance in the magic fields. She explained that the goblins had been searching for an artifact of power, long hidden within the watchtower. Aeliana proposed an alliance, offering her knowledge of the arcane to aid Zsdar in his quests. The day was spent in planning and discussion, with both warriors and mage learning much from each other. As night fell, they agreed to set out at dawn, determined to uncover the mysteries of the artifact and the growing evil in the north. Zsdar felt a new sense of purpose, bolstered by the camaraderie. Yet, as he lay down to rest, the weight of the old man’s warning pressed heavily upon him. The victory over the goblins was but one battle in what promised to be a greater war. He drifted to sleep, the thought of the challenges ahead mingling with a sense of anticipation.",
      "Zsdar, the seasoned warrior, began his day in the bustling village of Briarwood, nestled at the edge of the Enchanted Forest, a place known for its mystic creatures and ancient ruins. He had been feeling restless with the peace that had settled over the lands and craved the thrill of adventure. News reached him of a band of goblins seen near the old watchtower, a day's journey from Briarwood. Seizing this opportunity for action, Zsdar gathered his armor, shield, and trusty sword, emboldened by the prospect of combat. There was an air of excitement among the villagers as they watched one of their bravest stride out towards danger. Along the path, Zsdar encountered an old man, weary and lost, who warned him of an evil presence growing in the north, a reminder that their world's peace was but a thin veil. Reaching the watchtower by dusk, Zsdar found the goblins, more numerous than anticipated, defiling the ruins. Without hesitation, he engaged them in battle, his training and might on full display. The skirmish was fierce, and the warrior found himself tested, but his strength and skills prevailed. As the last goblin fell, he couldn't shake off the old man's warning, pondering what it may mean for the future. Exhausted but victorious, he made camp amid the remnants of the watchtower, under a sky bursting with stars. His actions this day not only proved his valor but also protected the nearby settlements from immediate threat. However, the shadow of the larger, looming danger was ever-present in his mind."
    ]
  },
  [
    {
      "name": "Cion",
      "class": "mage",
      "bornAt": "0900-04-05T03:06:28.000Z",
      "trainingSince": "0907-04-05T03:06:28.000Z",
      "mood": "inspired",
      "daysHistory": [
        "Following their recent ventures, Cion and Xur set out from the village at dawn, the villagers waving them off with tokens of gratitude. Their journey took them deep into the Misty Mountains, where ancient lore suggested the presence of a hidden library built by a long-forgotten civilization. Throughout the day, they navigated treacherous paths often veiled in thick fog. The challenge of the terrain tested their resolve, but their spirits remained high, bolstered by the successes of the previous day. By mid-afternoon, their perseverance paid off as they stumbled upon a hidden valley, its entrance marked by runes that Cion, using his knowledge, deciphered to unlock the path ahead. Inside the valley lay the library, a grand structure carved into the mountain itself, untouched by time. Exploring its vast halls, they found scrolls and tomes filled with arcane knowledge, including spells and enchantments of immense power. Xur, with his keen eye, discovered a hidden chamber within the library that housed a celestial map, suggesting alignments that enhanced magical abilities. The significance of this find was not lost on them; it heralded a breakthrough in their quest for knowledge. However, their exploration was not without peril. Disturbing the library's tranquility awakened its guardians, ancient constructs designed to protect the knowledge within. Cion and Xur, working in tandem, managed to outwit and disable the guardians, securing safe access to the library's secrets. As night descended, they established a makeshift camp within the library, the day's discoveries igniting animated discussions between them on the potential of their newfound knowledge. This significant advancement in their quest filled them with a sense of purpose and a deeper connection to the magical energies of Middle-earth. Their journey together, marked by challenges and triumphs, continued to forge a strong bond between them, underpinned by mutual respect and a shared vision.",
        "Cion and Xur embarked early on a journey through the mist-covered lands of Middle-earth, aiming to discover ancient artifacts that could help them develop their magical abilities. The day was notably eventful. As dawn broke, they found themselves at the outskirts of the enigmatic Old Forest. Venturing cautiously, they encountered a group of wandering elves who shared tales of the forest's sleeping spirits. Inspired, Cion attempted to connect with the spirits through a complex spell, not without risk. Though initially the spell seemed to falter, Xur, guided by intuition, assisted by amplifying the spell's reach with a rare crystal they had found days earlier. This act not only saved the attempt but facilitated a brief connection with the ancient spirits, who bestowed upon them cryptic insights about magic bound to the very fabric of Middle-earth. The encounter left them exhilarated but drained. As night fell, they found refuge in a nearby village, where the locals, intrigued by their presence, offered hospitality. Conversations around the hearth led to exchanges of knowledge, with Cion and Xur learning old folk spells in return for tales of their journey. However, the peace was disrupted by a sudden attack on the village by a marauding band of orcs. Cion and Xur, compelled by a sense of duty and gratitude to the villagers, joined the defense. With strategic use of their magic, especially illusion spells taught by the elves, they managed to repel the attackers, albeit with some damage to the village. As dawn approached, they helped in the recovery efforts, their actions having forged a bond with the villagers that promised future allies. The day concluded with them contemplating the day's lessons under the starry sky, their understanding of magic and their role in Middle-earth profoundly deepened."
      ]
    },
    {
      "name": "Xur",
      "class": "mage",
      "bornAt": "0900-04-05T03:06:28.000Z",
      "trainingSince": "0907-04-05T03:06:28.000Z",
      "description": "Cion apprentice",
      "mood": "eager",
      "daysHistory": [
        "Following their recent ventures, Cion and Xur set out from the village at dawn, the villagers waving them off with tokens of gratitude. Their journey took them deep into the Misty Mountains, where ancient lore suggested the presence of a hidden library built by a long-forgotten civilization. Throughout the day, they navigated treacherous paths often veiled in thick fog. The challenge of the terrain tested their resolve, but their spirits remained high, bolstered by the successes of the previous day. By mid-afternoon, their perseverance paid off as they stumbled upon a hidden valley, its entrance marked by runes that Cion, using his knowledge, deciphered to unlock the path ahead. Inside the valley lay the library, a grand structure carved into the mountain itself, untouched by time. Exploring its vast halls, they found scrolls and tomes filled with arcane knowledge, including spells and enchantments of immense power. Xur, with his keen eye, discovered a hidden chamber within the library that housed a celestial map, suggesting alignments that enhanced magical abilities. The significance of this find was not lost on them; it heralded a breakthrough in their quest for knowledge. However, their exploration was not without peril. Disturbing the library's tranquility awakened its guardians, ancient constructs designed to protect the knowledge within. Cion and Xur, working in tandem, managed to outwit and disable the guardians, securing safe access to the library's secrets. As night descended, they established a makeshift camp within the library, the day's discoveries igniting animated discussions between them on the potential of their newfound knowledge. This significant advancement in their quest filled them with a sense of purpose and a deeper connection to the magical energies of Middle-earth. Their journey together, marked by challenges and triumphs, continued to forge a strong bond between them, underpinned by mutual respect and a shared vision.",
        "Cion and Xur embarked early on a journey through the mist-covered lands of Middle-earth, aiming to discover ancient artifacts that could help them develop their magical abilities. The day was notably eventful. As dawn broke, they found themselves at the outskirts of the enigmatic Old Forest. Venturing cautiously, they encountered a group of wandering elves who shared tales of the forest's sleeping spirits. Inspired, Cion attempted to connect with the spirits through a complex spell, not without risk. Though initially the spell seemed to falter, Xur, guided by intuition, assisted by amplifying the spell's reach with a rare crystal they had found days earlier. This act not only saved the attempt but facilitated a brief connection with the ancient spirits, who bestowed upon them cryptic insights about magic bound to the very fabric of Middle-earth. The encounter left them exhilarated but drained. As night fell, they found refuge in a nearby village, where the locals, intrigued by their presence, offered hospitality. Conversations around the hearth led to exchanges of knowledge, with Cion and Xur learning old folk spells in return for tales of their journey. However, the peace was disrupted by a sudden attack on the village by a marauding band of orcs. Cion and Xur, compelled by a sense of duty and gratitude to the villagers, joined the defense. With strategic use of their magic, especially illusion spells taught by the elves, they managed to repel the attackers, albeit with some damage to the village. As dawn approached, they helped in the recovery efforts, their actions having forged a bond with the villagers that promised future allies. The day concluded with them contemplating the day's lessons under the starry sky, their understanding of magic and their role in Middle-earth profoundly deepened."
      ]
    }
  ]
```
