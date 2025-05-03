export async function getHeroById(heroId: string) {
  // Mock hero data for demonstration purposes
  const heroes = [
    {
      id: 'some-hero-id',
      name: 'Lyra',
      level: 5,
      questsCompleted: ['quest-1', 'quest-2'],
      reputation: 'Honorable',
      items: [
        { id: 'item-1', name: 'Rusty Sword', description: 'A slightly used sword.', quantity: 1 },
        { id: 'item-2', name: 'Leather Armor', description: 'Basic protection.', quantity: 1 },
      ],
    },
  ];

  return heroes.find((hero) => hero.id === heroId);
}

export async function getCurrentHero() {
  // Mock implementation to return a default hero
  return {
    id: 'some-hero-id',
    name: 'Lyra',
    level: 5,
    questsCompleted: ['quest-1', 'quest-2'],
    reputation: 'Honorable',
    items: [
      { id: 'item-1', name: 'Rusty Sword', description: 'A slightly used sword.', quantity: 1 },
      { id: 'item-2', name: 'Leather Armor', description: 'Basic protection.', quantity: 1 },
    ],
  };
}

export async function addQuestToHero(heroId: string, questId: string) {
  // Mock implementation to simulate adding a quest to a hero
  console.log(`Adding quest ${questId} to hero ${heroId}`);
  // In a real application, you would update the hero's data in the database
}
