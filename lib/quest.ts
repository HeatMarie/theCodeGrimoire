export async function getQuestById(questId: string) {
  // Mock quest data for demonstration purposes
  const quests = [
    {
      id: "quest-1",
      title: "The Lost Artifact",
      description: "Recover a powerful artifact from a forgotten temple.",
      difficulty: "medium",
      reward: "A legendary sword",
      requiredLevel: 3,
    },
    {
      id: "quest-2",
      title: "The Dragon's Lair",
      description: "Slay a fearsome dragon and retrieve its hoard.",
      difficulty: "hard",
      reward: "A dragon scale armor",
      requiredLevel: 7,
    },
    {
      id: "quest-3",
      title: "The Goblin King",
      description: "Defeat the Goblin King and liberate the captured villagers.",
      difficulty: "easy",
      reward: "A bag of gold",
      requiredLevel: 1,
    },
  ]

  return quests.find((quest) => quest.id === questId)
}
