# CRUD CHARACTER

## Character Model
Main Character Form
```
{
    name:
    class:
    race:
    level:
    background:
    playerName:
    alignment:
    experiencePoints:
    proficiencybonus:
    inspiration:
    strength:
    dexterity:
    consitutution:
    intelligence:
    wisdom:
    charisma:
    passiveWisdom:
    ac:
    initiative:
    speed:
    hitpointMax:
    hitpointCurrent:
    hitpointTemporary:
    hitdice:
    hitdiceCurrent:
    deathSaves:
    deathFailure:
    personalityTraits:
    ideals:
    bonds:
    flaws:
    featuresAndTraits:
    attacks:
    proficiencies:
    languages:
    savingThrows:
    skills:
}
```
Extraneos not in form
```
{
    characterImg?:
    spells?:
    equipmentAndCharNotes:
    notes:
    alliesAndOrganizations:
    factionImage:
    factionRank:
    additionalFeaturesAndTraits:
    treasure:
    characterBackstory:
}
```
## Character Types
```
DiceExpression: (99d99) + 100
CharacterClass: [
    Barbarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorcerer,
    Warlock,
    Wizard,
]

type [
    Acid,
    Bludgeoning,
    Cold,
    Fire,
    Force,
    Lightning,
    Necrotic,
    Piercing,
    Poison,
    Psychic,
    Radiant,
    Slashing,
    Thunder
]
{
name: string;
class: string
weaponAttacks: [
    {
        attack: number
        damage: DiceExpression
        type: String
    }
]
}
```