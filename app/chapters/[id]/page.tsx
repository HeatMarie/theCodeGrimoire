"use client"

import { ChapterLayout } from "@/components/chapter-layout"
import { CodeSpell } from "@/components/code-spell"
import { SpellNote } from "@/components/spell-note"
import { notFound } from "next/navigation"

interface ChapterParams {
  params: {
    id: string
  }
}

export default function ChapterPage({ params }: ChapterParams) {
  const chapterId = Number.parseInt(params.id)

  // Validate chapter ID
  if (isNaN(chapterId) || chapterId < 1 || chapterId > 5) {
    notFound()
  }

  const chapters = [
    {
      id: 1,
      title: "The Hero's Awakening",
      content: () => <Chapter1Content />,
    },
    {
      id: 2,
      title: "The Enchanted Backpack",
      content: () => <Chapter2Content />,
    },
    {
      id: 3,
      title: "Casting Your First Spell",
      content: () => <Chapter3Content />,
    },
    {
      id: 4,
      title: "The Magical Contract",
      content: () => <Chapter4Content />,
    },
    {
      id: 5,
      title: "Realms of the Changing Mist",
      content: () => <Chapter5Content />,
    },
  ]

  const chapter = chapters.find((c) => c.id === chapterId)

  if (!chapter) {
    notFound()
  }

  const ChapterContent = chapter.content

  return (
    <ChapterLayout chapterId={chapter.id} title={chapter.title} totalChapters={chapters.length}>
      <ChapterContent />
    </ChapterLayout>
  )
}

function Chapter1Content() {
  return (
    <div className="chapter-content">
      <p>
        In the mystical land of Weboria, a young hero named Aria awoke to find a strange glowing scroll by her bedside.
        The scroll contained a prophecy that spoke of her destiny to become a master crafter of magical constructs that
        would bring life and interactivity to the realm.
      </p>

      <p className="mt-4">
        "To begin your journey," the scroll read, "you must first learn to craft a simple magical construct. These
        constructs are the building blocks of all enchanted creations in our realm."
      </p>

      <p className="mt-4">
        Aria studied the ancient runes on the scroll, which revealed the pattern for creating her first construct:
      </p>

      <CodeSpell title="The First Construct Spell">
        {`function HeroGreeting() {
  return (
    <div className="hero-banner">
      <h1>Welcome, Brave Adventurer!</h1>
      <p>Your journey into the magical realm of code begins here.</p>
    </div>
  );
}`}
      </CodeSpell>

      <SpellNote title="Magical Insight">
        This magical construct is what we call a <strong>React Component</strong>. Components are the fundamental
        building blocks of React applications, just like magical constructs are the building blocks of enchanted
        creations in our story. Each component is a reusable piece of code that returns a React element describing what
        should appear on the screen.
      </SpellNote>

      <p className="mt-4">
        Aria studied the construct carefully. She noticed how it was named "HeroGreeting" and how it returned a
        structure with nested elements. The wise mages called this structure "JSX" - a powerful fusion of HTML markup
        and JavaScript magic.
      </p>

      <p className="mt-4">
        "I see," Aria whispered. "Each construct has a name that starts with a capital letter, and it returns what
        appears to be a fragment of an enchanted scroll, with tags that describe what it should look like when
        rendered."
      </p>

      <CodeSpell title="Using The Construct">
        {`function HomePage() {
  return (
    <main>
      <HeroGreeting />
      <p>What adventures await you today?</p>
    </main>
  );
}`}
      </CodeSpell>

      <SpellNote title="Magical Insight">
        Components can be composed together, meaning you can use components within other components. This is one of the
        most powerful features of React, allowing you to build complex UIs from simple, reusable pieces - just like how
        a master enchanter might combine simple magical constructs to create more complex enchantments.
      </SpellNote>

      <p className="mt-4">
        As Aria practiced crafting this simple construct, she began to understand the fundamental pattern of component
        magic. Each construct had a clear purpose, a descriptive name, and returned a visible manifestation that could
        be used within larger, more complex enchantments.
      </p>

      <p className="mt-4">
        "This is just the beginning," she thought, as she prepared to learn about more advanced constructs in the days
        to come. "Soon I will learn how these constructs can interact with each other and respond to the actions of
        users in the realm."
      </p>
    </div>
  )
}

function Chapter2Content() {
  return (
    <div className="chapter-content">
      <p>
        As Aria continued her journey, she came upon an ancient enchanter named Eldrin who was known throughout the
        realm for his mastery of magical storage. Eldrin explained that every hero needs a way to store and organize the
        items they collect on their adventures.
      </p>

      <p className="mt-4">
        "Before you can embark on greater quests," Eldrin said, "you must first craft an enchanted backpack. This
        magical container will hold all the items you gather and organize them in a way that makes them easy to find and
        use."
      </p>

      <p className="mt-4">Eldrin showed Aria a magical schema - a blueprint for creating her enchanted backpack:</p>

      <CodeSpell title="The Enchanted Backpack Schema">
        {`// This is a Prisma schema for our Hero's backpack

model Hero {
  id        String   @id @default(uuid())
  name      String
  level     Int      @default(1)
  items     Item[]   // The hero can have many items
}

model Item {
  id          String   @id @default(uuid())
  name        String
  description String
  quantity    Int      @default(1)
  heroId      String   // Which hero owns this item
  hero        Hero     @relation(fields: [heroId], references: [id])
}`}
      </CodeSpell>

      <SpellNote title="Magical Insight">
        This schema represents a <strong>database model</strong> using Prisma, a modern database toolkit. In our fantasy
        metaphor, the Hero's enchanted backpack is like a database, with different pouches (tables) for organizing
        items. The schema defines the structure of our data - what information we store about heroes and their items,
        and how these pieces of information relate to each other.
      </SpellNote>

      <p className="mt-4">
        "I see," said Aria. "So the enchanted backpack has different compartments for different types of items. And
        there's a magical connection between the hero and their items."
      </p>

      <p className="mt-4">
        "Precisely," nodded Eldrin. "Now, let me show you how to access the items in your backpack when you need them."
      </p>

      <CodeSpell title="Retrieving Items from the Enchanted Backpack">
        {`// A spell to retrieve all items for a hero
async function getHeroItems(heroId) {
  const hero = await prisma.hero.findUnique({
    where: { id: heroId },
    include: { items: true }
  });
  
  return hero.items;
}

// A spell to add a new item to the hero's backpack
async function addItemToBackpack(heroId, itemData) {
  const newItem = await prisma.item.create({
    data: {
      ...itemData,
      hero: {
        connect: { id: heroId }
      }
    }
  });
  
  return newItem;
}`}
      </CodeSpell>

      <SpellNote title="Magical Insight">
        These functions represent <strong>database queries</strong> that allow us to interact with our data. The first
        function retrieves all items belonging to a specific hero, while the second function adds a new item to a hero's
        inventory. In the real world, these would be part of your application's data access layer, allowing you to
        perform CRUD (Create, Read, Update, Delete) operations on your database.
      </SpellNote>

      <p className="mt-4">
        Aria practiced these incantations, learning how to store new treasures in her enchanted backpack and retrieve
        them when needed. She realized that organizing her items in this structured way would be essential for the more
        complex adventures that awaited her.
      </p>

      <p className="mt-4">
        "The enchanted backpack is more than just storage," Eldrin explained. "It's a way of thinking about how
        information is organized and connected. As your adventures grow more complex, you'll find that having a
        well-designed backpack makes all the difference."
      </p>

      <p className="mt-4">
        With her new understanding of magical storage, Aria felt ready to continue her journey, knowing she now had a
        way to keep track of all the magical items and knowledge she would acquire along the way.
      </p>
    </div>
  )
}

function Chapter3Content() {
  return (
    <div className="chapter-content">
      <p>
        After mastering the basics of magical constructs and creating her enchanted backpack, Aria met a wise sorceress
        named Lyra who lived in a tower filled with ancient tomes and scrolls. Lyra was known throughout the realm for
        her mastery of magical spells that could respond to actions and events.
      </p>

      <p className="mt-4">
        "To become a true enchanter," Lyra explained, "you must learn to cast spells that respond to the actions of
        those who interact with your creations. These spells are the essence of interactivity in our magical realm."
      </p>

      <p className="mt-4">Lyra showed Aria a simple spell that would respond when activated:</p>

      <CodeSpell title="A Simple Responsive Spell">
        {`function MagicWand() {
  // A magical state that remembers if the wand is glowing
  const [isGlowing, setIsGlowing] = React.useState(false);
  
  // The spell that toggles the glowing state
  function castLightSpell() {
    setIsGlowing(!isGlowing);
  }
  
  return (
    <div className="magic-wand-container">
      <div className={\`wand \${isGlowing ? "glowing" : ""}\`}>
        ✨ Magic Wand ✨
      </div>
      <button onClick={castLightSpell}>
        {isGlowing ? "Extinguish" : "Illuminate"}
      </button>
    </div>
  );
}`}
      </CodeSpell>

      <SpellNote title="Magical Insight">
        This component demonstrates <strong>functions</strong> and <strong>event handlers</strong> in React. The
        <code>castLightSpell</code> function is triggered when the button is clicked (via the <code>onClick</code> event
        handler). This function then updates the component's state using the <code>setIsGlowing</code> function, which
        causes the component to re-render with the new state. This is how we create interactive elements in React
        applications.
      </SpellNote>

      <p className="mt-4">
        "I see," Aria said thoughtfully. "The spell contains a memory of its current state - whether it's glowing or
        not. And when someone activates the button, it triggers another spell that changes this state."
      </p>

      <p className="mt-4">
        "Exactly," Lyra nodded. "Now, let me show you a more complex spell that can respond to different types of
        interactions."
      </p>

      <CodeSpell title="A Spell with Multiple Interactions">
        {`function EnchantedGrimoire() {
  // The grimoire remembers which page it's open to
  const [currentPage, setCurrentPage] = React.useState(1);
  // And it remembers if it's locked or unlocked
  const [isLocked, setIsLocked] = React.useState(true);
  
  // A spell to turn to the next page
  function turnPageForward() {
    if (!isLocked && currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  }
  
  // A spell to turn to the previous page
  function turnPageBackward() {
    if (!isLocked && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  
  // A spell to toggle the lock
  function toggleLock() {
    setIsLocked(!isLocked);
  }
  
  return (
    <div className="grimoire-container">
      <div className="grimoire-status">
        {isLocked ? "🔒 Locked" : "🔓 Unlocked"} - Page {currentPage} of 10
      </div>
      
      <div className="grimoire-controls">
        <button onClick={turnPageBackward} disabled={isLocked || currentPage === 1}>
          Previous Page
        </button>
        
        <button onClick={toggleLock}>
          {isLocked ? "Unlock Grimoire" : "Lock Grimoire"}
        </button>
        
        <button onClick={turnPageForward} disabled={isLocked || currentPage === 10}>
          Next Page
        </button>
      </div>
      
      <div className="grimoire-content">
        {isLocked ? (
          <p>The grimoire is locked. Unlock it to read its contents.</p>
        ) : (
          <p>This is page {currentPage} of the enchanted grimoire.</p>
        )}
      </div>
    </div>
  );
}`}
      </CodeSpell>

      <SpellNote title="Magical Insight">
        This more complex component demonstrates multiple functions that handle different interactions. Each function
        has a specific purpose and updates the component's state in a different way. The component also shows
        conditional rendering based on state (showing different content depending on whether the grimoire is locked) and
        disabled buttons based on conditions (can't go past page 10 or before page 1).
      </SpellNote>

      <p className="mt-4">
        Aria practiced these spells, marveling at how they could respond to different actions and maintain their state.
        She realized that these interactive spells were the key to creating truly engaging magical constructs.
      </p>

      <p className="mt-4">
        "Remember," Lyra said as their lesson concluded, "the power of these spells lies in their ability to respond to
        the actions of those who interact with them. A great enchanter creates spells that are intuitive and provide
        clear feedback, making the magical experience feel natural and engaging."
      </p>

      <p className="mt-4">
        With her new knowledge of interactive spells, Aria felt ready to create constructs that could respond to the
        needs and actions of the users in her realm.
      </p>
    </div>
  )
}

function Chapter4Content() {
  return (
    <div className="chapter-content">
      <p>
        Aria's journey next led her to the Grand Library of Formancia, where the keeper of scrolls, Master Thorne, was
        renowned for his expertise in magical contracts. These special scrolls allowed citizens of the realm to provide
        information and make requests of the kingdom's magical systems.
      </p>

      <p className="mt-4">
        "Magical contracts are essential for any enchanter who wishes to gather information from the users of their
        creations," Master Thorne explained. "They allow users to input data, make selections, and submit requests that
        your magical systems can then process."
      </p>

      <p className="mt-4">
        Master Thorne unrolled an ancient parchment that contained the pattern for a basic magical contract:
      </p>

      <CodeSpell title="A Basic Magical Contract">
        {`function QuestApplication() {
  // The scroll remembers what the user has written
  const [heroName, setHeroName] = React.useState("");
  const [questDescription, setQuestDescription] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("medium");
  const [submitted, setSubmitted] = React.useState(false);
  
  // This spell is cast when the contract is submitted
  function submitQuestApplication(event) {
    // Prevent the default scroll behavior
    event.preventDefault();
    
    // Mark the contract as submitted
    setSubmitted(true);
    
    // Here you would typically send the data to your magical backend
    console.log("Quest Application Submitted:", { heroName, questDescription, difficulty });
  }
  
  return (
    <div className="quest-scroll">
      {submitted ? (
        <div className="submission-confirmation">
          <h2>Quest Application Received!</h2>
          <p>Thank you, {heroName}, for your interest in this quest.</p>
          <p>A royal messenger will contact you soon.</p>
          <button onClick={() => setSubmitted(false)}>Submit Another Quest</button>
        </div>
      ) : (
        <form onSubmit={submitQuestApplication} className="quest-form">
          <h2>Royal Quest Application</h2>
          
          <div className="form-field">
            <label htmlFor="heroName">Your Heroic Name:</label>
            <input
              id="heroName"
              type="text"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="questDescription">Describe Your Quest:</label>
            <textarea
              id="questDescription"
              value={questDescription}
              onChange={(e) => setQuestDescription(e.target.value)}
              required
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="difficulty">Quest Difficulty:</label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">Easy - Suitable for Novice Adventurers</option>
              <option value="medium">Medium - For Experienced Heroes</option>
              <option value="hard">Hard - Only for Legendary Champions</option>
            </select>
          </div>
          
          <button type="submit" className="submit-button">
            Submit Quest Application
          </button>
        </form>
      )}
    </div>
  );
}`}
      </CodeSpell>

      <SpellNote title="Magical Insight">
        This component demonstrates a <strong>form</strong> in React. Forms allow users to input data that can then be
        processed by your application. The component uses state variables to track the values of each form field, and
        updates these values when the user types or makes selections. The <code>onSubmit</code> handler prevents the
        default form submission behavior and processes the form data. After submission, the component shows a
        confirmation message instead of the form.
      </SpellNote>

      <p className="mt-4">
        "I see," Aria nodded. "The magical contract maintains the state of what the user has entered, and when they
        submit the contract, it processes their information and shows them a confirmation."
      </p>

      <p className="mt-4">
        "Exactly," Master Thorne replied. "Now, let me show you a more advanced contract that validates the information
        before accepting it."
      </p>

      <CodeSpell title="A Magical Contract with Validation">
        {`function EnchantedItemRegistration() {
  // The scroll remembers what the user has written
  const [itemName, setItemName] = React.useState("");
  const [itemPower, setItemPower] = React.useState("");
  const [itemOrigin, setItemOrigin] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  
  // This spell validates the contract before submission
  function validateItemRegistration() {
    const newErrors = {};
    
    if (!itemName.trim()) {
      newErrors.itemName = "You must provide a name for your enchanted item";
    }
    
    if (!itemPower.trim()) {
      newErrors.itemPower = "You must describe the magical powers of your item";
    }
    
    if (!itemOrigin.trim()) {
      newErrors.itemOrigin = "You must specify where you obtained this item";
    } else if (itemOrigin.toLowerCase() === "forbidden realm") {
      newErrors.itemOrigin = "Items from the Forbidden Realm cannot be registered";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  
  // This spell is cast when the contract is submitted
  function submitItemRegistration(event) {
    event.preventDefault();
    
    // Validate the contract
    const isValid = validateItemRegistration();
    
    if (isValid) {
      // Mark the contract as submitted
      setSubmitted(true);
      
      // Here you would typically send the data to your magical backend
      console.log("Item Registration Submitted:", { itemName, itemPower, itemOrigin });
    }
  }
  
  return (
    <div className="enchanted-scroll">
      {submitted ? (
        <div className="submission-confirmation">
          <h2>Enchanted Item Registered!</h2>
          <p>Your item "{itemName}" has been registered with the Royal Arcanum.</p>
          <p>A certificate of authenticity will be delivered by owl within 3-5 business days.</p>
          <button onClick={() => {
            setSubmitted(false);
            setItemName("");
            setItemPower("");
            setItemOrigin("");
          }}>
            Register Another Item
          </button>
        </div>
      ) : (
        <form onSubmit={submitItemRegistration} className="enchanted-form">
          <h2>Royal Arcanum: Enchanted Item Registration</h2>
          
          <div className="form-field">
            <label htmlFor="itemName">Item Name:</label>
            <input
              id="itemName"
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className={errors.itemName ? "error-input" : ""}
            />
            {errors.itemName && <p className="error-message">{errors.itemName}</p>}
          </div>
          
          <div className="form-field">
            <label htmlFor="itemPower">Magical Properties:</label>
            <textarea
              id="itemPower"
              value={itemPower}
              onChange={(e) => setItemPower(e.target.value)}
              className={errors.itemPower ? "error-input" : ""}
            />
            {errors.itemPower && <p className="error-message">{errors.itemPower}</p>}
          </div>
          
          <div className="form-field">
            <label htmlFor="itemOrigin">Origin of Item:</label>
            <input
              id="itemOrigin"
              type="text"
              value={itemOrigin}
              onChange={(e) => setItemOrigin(e.target.value)}
              className={errors.itemOrigin ? "error-input" : ""}
            />
            {errors.itemOrigin && <p className="error-message">{errors.itemOrigin}</p>}
          </div>
          
          <button type="submit" className="submit-button">
            Register Enchanted Item
          </button>
        </form>
      )}
    </div>
  );
}`}
      </CodeSpell>

      <SpellNote title="Magical Insight">
        This component demonstrates <strong>form validation</strong> in React. Before submitting the form, it checks
        that all required fields are filled out and that the data meets certain criteria (like not being from the
        "Forbidden Realm"). If there are any validation errors, they are displayed to the user, and the form is not
        submitted. This ensures that only valid data is processed by your application.
      </SpellNote>

      <p className="mt-4">
        Aria practiced creating these magical contracts, learning how to gather information from users and validate it
        before processing. She realized that well-designed contracts were essential for creating a smooth and intuitive
        experience for the users of her magical creations.
      </p>

      <p className="mt-4">
        "Remember," Master Thorne said as their lesson concluded, "a good magical contract guides the user, validates
        their input, and provides clear feedback. It should feel like a conversation, not an interrogation."
      </p>

      <p className="mt-4">
        With her new understanding of magical contracts, Aria felt ready to create forms that would allow users to
        interact with her magical systems in a structured and intuitive way.
      </p>
    </div>
  )
}

async function getHeroById(id: string) {
  // Placeholder for fetching hero data
  return {
    id: id,
    name: "Placeholder Hero",
    level: 5,
    questsCompleted: 10,
    reputation: "Honorable",
    items: [
      { id: "item1", name: "Sword of Sparking", description: "A basic sword", quantity: 1 },
      { id: "item2", name: "Shield of Protection", description: "A basic shield", quantity: 1 },
    ],
  }
}

async function getQuestById(questId: string) {
  // Placeholder for fetching quest data
  return {
    id: questId,
    title: "Placeholder Quest",
    description: "A basic quest",
    difficulty: "Easy",
    reward: "100 gold",
    requiredLevel: 1,
  }
}

async function getCurrentHero() {
  // Placeholder for fetching current hero data
  return {
    id: "hero1",
    level: 5,
    completedQuests: [],
  }
}

async function addQuestToHero(heroId: string, questId: any) {
  // Placeholder for adding quest to hero
  console.log(`Added quest ${questId} to hero ${heroId}`)
}

function Chapter5Content() {
  return (
    <div className="chapter-content">
      <p>
        For the final chapter of her initial training, Aria traveled to the mystical Shifting Isles, where the landscape
        changed based on who was viewing it. There she met Orion, a master of spatial magic who could create realms that
        adapted to the needs and identity of each visitor.
      </p>

      <p className="mt-4">
        "The most powerful enchantments," Orion explained, "are those that can change and adapt based on who is using
        them and what they need. These dynamic realms are the pinnacle of magical craftsmanship."
      </p>

      <p className="mt-4">
        Orion showed Aria a magical map that could lead to different locations based on the traveler's needs:
      </p>

      <CodeSpell title="The Enchanted Map">
        {`// app/page.tsx - The main entrance to our magical realm
export default function MagicalRealm() {
  return (
    <div className="magical-realm">
      <h1>Welcome to the Shifting Isles</h1>
      <p>Where would you like to journey today?</p>
      
      <nav className="realm-navigation">
        <Link href="/realms/forest">The Whispering Forest</Link>
        <Link href="/realms/mountain">The Crystal Mountains</Link>
        <Link href="/realms/ocean">The Endless Ocean</Link>
        <Link href="/realms/hero/inventory">Your Inventory</Link>
      </nav>
    </div>
  );
}`}
      </CodeSpell>

      <SpellNote title="Magical Insight">
        This component demonstrates the concept of <strong>routing</strong> in Next.js. The <code>Link</code> component
        allows users to navigate between different pages (or "realms" in our metaphor) without a full page reload. This
        is the foundation of client-side navigation in modern web applications, making the experience feel smooth and
        app-like.
      </SpellNote>

      <p className="mt-4">
        "Now," Orion continued, "let me show you how we can create realms that adapt to the identity of the visitor."
      </p>

      <CodeSpell title="A Personalized Realm">
        {`// app/realms/hero/[id]/page.tsx - A dynamic realm that changes based on the hero's ID
export default async function HeroProfile({ params }) {
  // Retrieve the hero's information from the enchanted backpack
  const hero = await getHeroById(params.id);
  
  if (!hero) {
    return (
      <div className="error-realm">
        <h1>Hero Not Found</h1>
        <p>We could not find a hero with that identifier in our records.</p>
        <Link href="/realms">Return to the Shifting Isles</Link>
      </div>
    );
  }
  
  return (
    <div className="hero-realm">
      <h1>{hero.name}'s Profile</h1>
      
      <div className="hero-stats">
        <p>Level: {hero.level}</p>
        <p>Quests Completed: {hero.questsCompleted}</p>
        <p>Reputation: {hero.reputation}</p>
      </div>
      
      <h2>Inventory</h2>
      <div className="hero-inventory">
        {hero.items.length === 0 ? (
          <p>Your inventory is empty. Visit the marketplace to acquire items.</p>
        ) : (
          <ul>
            {hero.items.map(item => (
              <li key={item.id}>
                <strong>{item.name}</strong> - {item.description}
                <span className="item-quantity">x{item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="realm-navigation">
        <Link href="/realms/hero/quests">View Available Quests</Link>
        <Link href="/realms/hero/skills">Manage Skills</Link>
        <Link href="/realms/marketplace">Visit Marketplace</Link>
      </div>
    </div>
  );
}`}
      </CodeSpell>

      <SpellNote title="Magical Insight">
        This component demonstrates <strong>dynamic routes</strong> in Next.js. The <code>[id]</code> in the file path
        creates a dynamic segment that can match any value. This value is then available as <code>params.id</code> in
        the component. This allows us to create pages that display different content based on the URL parameter, like
        showing different hero profiles based on their ID. This is how we create personalized experiences in web
        applications.
      </SpellNote>

      <p className="mt-4">
        "I see," Aria nodded. "So the realm adapts based on who is visiting it, showing them information that is
        specific to them and their journey."
      </p>

      <p className="mt-4">
        "Exactly," Orion replied. "And we can also create realms that adapt based on the actions the hero has taken."
      </p>

      <CodeSpell title="A Realm That Responds to Actions">
        {`// app/realms/quest/[questId]/page.tsx - A dynamic quest realm
export default async function QuestRealm({ params }) {
  // Retrieve the quest information
  const quest = await getQuestById(params.questId);
  // Retrieve the current hero's information
  const hero = await getCurrentHero();
  
  // Check if the hero meets the requirements for this quest
  const meetsRequirements = hero.level >= quest.requiredLevel;
  // Check if the hero has already completed this quest
  const hasCompleted = hero.completedQuests.includes(params.questId);
  
  return (
    <div className="quest-realm">
      <h1>{quest.title}</h1>
      <p className="quest-description">{quest.description}</p>
      
      <div className="quest-details">
        <p>Difficulty: {quest.difficulty}</p>
        <p>Reward: {quest.reward}</p>
        <p>Required Level: {quest.requiredLevel}</p>
      </div>
      
      {hasCompleted ? (
        <div className="quest-completed">
          <h2>Quest Completed!</h2>
          <p>You have already completed this quest.</p>
          <Link href="/realms/quests">View Other Quests</Link>
        </div>
      ) : meetsRequirements ? (
        <div className="quest-available">
          <h2>Quest Available</h2>
          <p>You meet the requirements for this quest.</p>
          <form action={acceptQuest}>
            <input type="hidden" name="questId" value={params.questId} />
            <button type="submit">Accept Quest</button>
          </form>
        </div>
      ) : (
        <div className="quest-locked">
          <h2>Quest Locked</h2>
          <p>You must be at least level {quest.requiredLevel} to accept this quest.</p>
          <p>Your current level: {hero.level}</p>
          <Link href="/realms/training">Train to Level Up</Link>
        </div>
      )}
    </div>
  );
}

// A server action to accept a quest
async function acceptQuest(formData) {
  "use server"

  const questId = formData.get("questId")
  const hero = await getCurrentHero()

  // Add the quest to the hero's active quests
  await addQuestToHero(hero.id, questId)

  // Redirect to the hero's active quests page
  redirect(\`/realms/hero/\${hero.id}/quests/active\`);
}`}
      </CodeSpell>

      <SpellNote title="Magical Insight">
        This component demonstrates <strong>conditional rendering</strong> and <strong>server actions</strong> in
        Next.js. The page displays different content based on the hero's level and whether they've already completed the
        quest. The <code>acceptQuest</code> function is a server action that runs on the server when the form is
        submitted. This allows us to update our database and then redirect the user to a new page. This pattern of
        dynamic, interactive pages is the foundation of modern web applications.
      </SpellNote>

      <p className="mt-4">
        Aria practiced creating these dynamic realms, learning how to craft experiences that adapted to the identity and
        actions of the user. She realized that these personalized realms were the key to creating truly engaging and
        immersive magical experiences.
      </p>

      <p className="mt-4">
        "Remember," Orion said as their lesson concluded, "the most powerful magic is that which responds to the unique
        needs and journey of each individual. By creating realms that adapt and change, you create experiences that feel
        personal and meaningful."
      </p>

      <p className="mt-4">
        With her training complete, Aria felt ready to combine all she had learned - magical constructs, enchanted
        backpacks, interactive spells, magical contracts, and dynamic realms - to create truly magical experiences for
        the users of her realm.
      </p>

      <p className="mt-4">
        As she prepared to leave the Shifting Isles, Orion handed her a final scroll. "Your journey is just beginning,"
        he said. "This scroll contains advanced enchantments that you can study when you're ready. But remember, the
        most important magic is that which brings joy and wonder to those who experience it."
      </p>

      <p className="mt-4">
        Aria nodded, tucking the scroll into her enchanted backpack. She was no longer just a novice enchanter - she was
        now a creator of magical experiences, ready to craft her own unique contributions to the realm of Weboria.
      </p>
    </div>
  )
}
