const img = (name: string) =>
  `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(name)}&format=image`;

function card(
  id: number,
  name: string,
  set: string,
  rarity: "Common" | "Uncommon" | "Rare" | "Mythic",
  quantity: number,
  value: number,
  color: string,
  type: string,
  manaCost: string
) {
  return { id: String(id), name, set, rarity, quantity, value, color, type, manaCost, image: img(name) };
}

export const mockCards = [
  // WHITE (1-25)
  card(1, "Swords to Plowshares", "Alpha", "Uncommon", 4, 3.50, "White", "Instant", "W"),
  card(2, "Path to Exile", "Modern Masters", "Uncommon", 4, 4.00, "White", "Instant", "1W"),
  card(3, "Wrath of God", "Revised", "Rare", 2, 8.00, "White", "Sorcery", "2WW"),
  card(4, "Smothering Tithe", "Ravnica Allegiance", "Rare", 2, 28.00, "White", "Enchantment", "3W"),
  card(5, "Stoneforge Mystic", "Worldwake", "Rare", 2, 35.00, "White", "Creature", "1W"),
  card(6, "Mother of Runes", "Urza's Legacy", "Uncommon", 2, 8.00, "White", "Creature", "W"),
  card(7, "Thalia Guardian of Thraben", "Dark Ascension", "Rare", 2, 12.00, "White", "Creature", "1W"),
  card(8, "Elesh Norn Grand Cenobite", "New Phyrexia", "Mythic", 1, 45.00, "White", "Creature", "5WW"),
  card(9, "Sun Titan", "Magic 2011", "Mythic", 1, 6.00, "White", "Creature", "4WW"),
  card(10, "Teferi's Protection", "Commander 2017", "Rare", 1, 22.00, "White", "Instant", "2W"),
  card(11, "Enlightened Tutor", "Mirage", "Uncommon", 2, 20.00, "White", "Instant", "W"),
  card(12, "Land Tax", "Legends", "Rare", 1, 18.00, "White", "Enchantment", "W"),
  card(13, "Serra Angel", "Revised", "Uncommon", 2, 1.50, "White", "Creature", "3WW"),
  card(14, "Linvala Keeper of Silence", "Rise of the Eldrazi", "Mythic", 1, 22.00, "White", "Creature", "2WW"),
  card(15, "Giver of Runes", "Modern Horizons", "Uncommon", 2, 12.00, "White", "Creature", "W"),
  card(16, "Esper Sentinel", "Modern Horizons 2", "Rare", 2, 18.00, "White", "Creature", "W"),
  card(17, "Solitude", "Modern Horizons 2", "Mythic", 1, 45.00, "White", "Creature", "3WW"),
  card(18, "Heliod Sun-Crowned", "Theros Beyond Death", "Mythic", 1, 12.00, "White", "Creature", "2WW"),
  card(19, "Austere Command", "Lorwyn", "Rare", 1, 8.00, "White", "Sorcery", "4WW"),
  card(20, "Settle the Wreckage", "Ixalan", "Rare", 2, 3.00, "White", "Instant", "2WW"),
  card(21, "Thalia Heretic Cathar", "Eldritch Moon", "Rare", 1, 8.00, "White", "Creature", "2W"),
  card(22, "Council's Judgment", "Conspiracy", "Rare", 1, 6.00, "White", "Sorcery", "1WW"),
  card(23, "Weathered Wayfarer", "Onslaught", "Rare", 1, 12.00, "White", "Creature", "W"),
  card(24, "Divine Visitation", "Guilds of Ravnica", "Rare", 1, 6.00, "White", "Enchantment", "3WW"),
  card(25, "Luminarch Aspirant", "Zendikar Rising", "Rare", 2, 3.00, "White", "Creature", "1W"),

  // BLUE (26-55)
  card(26, "Counterspell", "Seventh Edition", "Common", 4, 2.00, "Blue", "Instant", "UU"),
  card(27, "Force of Will", "Alliances", "Uncommon", 2, 95.00, "Blue", "Instant", "3UU"),
  card(28, "Brainstorm", "Ice Age", "Common", 4, 1.50, "Blue", "Instant", "U"),
  card(29, "Ponder", "Magic 2012", "Common", 4, 1.00, "Blue", "Sorcery", "U"),
  card(30, "Preordain", "Magic 2011", "Common", 4, 1.50, "Blue", "Sorcery", "U"),
  card(31, "Snapcaster Mage", "Innistrad", "Rare", 2, 22.00, "Blue", "Creature", "1U"),
  card(32, "Jace the Mind Sculptor", "Worldwake", "Mythic", 1, 80.00, "Blue", "Planeswalker", "2UU"),
  card(33, "Cyclonic Rift", "Return to Ravnica", "Rare", 2, 18.00, "Blue", "Instant", "1U"),
  card(34, "Rhystic Study", "Prophecy", "Common", 2, 12.00, "Blue", "Enchantment", "2U"),
  card(35, "Mystic Remora", "Ice Age", "Common", 2, 8.00, "Blue", "Enchantment", "U"),
  card(36, "Timetwister", "Alpha", "Rare", 1, 500.00, "Blue", "Sorcery", "2U"),
  card(37, "Consecrated Sphinx", "Mirrodin Besieged", "Mythic", 1, 35.00, "Blue", "Creature", "4UU"),
  card(38, "Urza Lord High Artificer", "Modern Horizons", "Mythic", 1, 45.00, "Blue", "Creature", "2UU"),
  card(39, "Emry Lurker of the Loch", "Throne of Eldraine", "Rare", 2, 8.00, "Blue", "Creature", "1U"),
  card(40, "Teferi Time Raveler", "War of the Spark", "Rare", 2, 22.00, "Blue", "Planeswalker", "1WU"),
  card(41, "Narset Parter of Veils", "War of the Spark", "Uncommon", 2, 4.00, "Blue", "Planeswalker", "1UU"),
  card(42, "Notion Thief", "Return to Ravnica", "Rare", 1, 8.00, "Blue", "Creature", "2UB"),
  card(43, "Phantasmal Image", "Magic 2012", "Rare", 2, 12.00, "Blue", "Creature", "1U"),
  card(44, "Trinket Mage", "Fifth Dawn", "Common", 2, 2.00, "Blue", "Creature", "2U"),
  card(45, "Fabricate", "Mirrodin", "Uncommon", 2, 3.00, "Blue", "Sorcery", "2U"),
  card(46, "Reshape", "Darksteel", "Rare", 1, 3.00, "Blue", "Sorcery", "XUU"),
  card(47, "Whir of Invention", "Aether Revolt", "Rare", 2, 5.00, "Blue", "Instant", "XUUU"),
  card(48, "Intuition", "Tempest", "Rare", 1, 55.00, "Blue", "Instant", "2U"),
  card(49, "Mana Drain", "Legends", "Uncommon", 1, 120.00, "Blue", "Instant", "UU"),
  card(50, "Murktide Regent", "Modern Horizons 2", "Mythic", 1, 18.00, "Blue", "Creature", "5UU"),
  card(51, "Jin-Gitaxias Core Augur", "New Phyrexia", "Mythic", 1, 25.00, "Blue", "Creature", "8UU"),
  card(52, "Thassa Deep-Dwelling", "Theros Beyond Death", "Rare", 1, 6.00, "Blue", "Creature", "3U"),
  card(53, "Tezzeret the Seeker", "Shards of Alara", "Mythic", 1, 12.00, "Blue", "Planeswalker", "3UU"),
  card(54, "Transmute Artifact", "Antiquities", "Uncommon", 1, 65.00, "Blue", "Sorcery", "UU"),
  card(55, "Trophy Mage", "Aether Revolt", "Uncommon", 2, 2.00, "Blue", "Creature", "2U"),

  // BLACK (56-85)
  card(56, "Demonic Tutor", "Revised", "Uncommon", 1, 55.00, "Black", "Sorcery", "1B"),
  card(57, "Vampiric Tutor", "Mirage", "Rare", 1, 70.00, "Black", "Instant", "1B"),
  card(58, "Dark Ritual", "Alpha", "Common", 4, 2.50, "Black", "Instant", "B"),
  card(59, "Thoughtseize", "Theros", "Rare", 2, 18.00, "Black", "Sorcery", "B"),
  card(60, "Inquisition of Kozilek", "Rise of the Eldrazi", "Uncommon", 2, 12.00, "Black", "Sorcery", "B"),
  card(61, "Fatal Push", "Aether Revolt", "Uncommon", 4, 5.00, "Black", "Instant", "B"),
  card(62, "Toxic Deluge", "Commander 2013", "Rare", 2, 18.00, "Black", "Sorcery", "2B"),
  card(63, "Damnation", "Planar Chaos", "Rare", 1, 35.00, "Black", "Sorcery", "2BB"),
  card(64, "Liliana of the Veil", "Innistrad", "Mythic", 2, 55.00, "Black", "Planeswalker", "1BB"),
  card(65, "Liliana Vess", "Magic 2015", "Mythic", 1, 8.00, "Black", "Planeswalker", "3BB"),
  card(66, "Necropotence", "Ice Age", "Rare", 1, 45.00, "Black", "Enchantment", "BBB"),
  card(67, "Phyrexian Arena", "Apocalypse", "Rare", 2, 12.00, "Black", "Enchantment", "1BB"),
  card(68, "Entomb", "Odyssey", "Rare", 2, 20.00, "Black", "Instant", "B"),
  card(69, "Reanimate", "Tempest", "Uncommon", 2, 18.00, "Black", "Sorcery", "B"),
  card(70, "Animate Dead", "Revised", "Uncommon", 2, 5.00, "Black", "Enchantment", "1B"),
  card(71, "Meren of Clan Nel Toth", "Commander 2015", "Mythic", 1, 12.00, "Black", "Creature", "2BG"),
  card(72, "Sheoldred the Apocalypse", "Dominaria United", "Mythic", 1, 85.00, "Black", "Creature", "2BB"),
  card(73, "Grave Titan", "Magic 2011", "Mythic", 1, 8.00, "Black", "Creature", "4BB"),
  card(74, "Mikaeus the Unhallowed", "Dark Ascension", "Mythic", 1, 22.00, "Black", "Creature", "3BBB"),
  card(75, "Yawgmoth Thran Physician", "Dominaria", "Mythic", 1, 45.00, "Black", "Creature", "2BB"),
  card(76, "Opposition Agent", "Commander Legends", "Rare", 1, 15.00, "Black", "Creature", "2B"),
  card(77, "Bitterblossom", "Morningtide", "Rare", 1, 35.00, "Black", "Enchantment", "1B"),
  card(78, "Cabal Coffers", "Torment", "Uncommon", 1, 45.00, "Land", "Land", "-"),
  card(79, "Urborg Tomb of Yawgmoth", "Planar Chaos", "Rare", 1, 25.00, "Black", "Land", "-"),
  card(80, "Dauthi Voidwalker", "Modern Horizons 2", "Rare", 2, 12.00, "Black", "Creature", "BB"),
  card(81, "Orcish Bowmasters", "Lord of the Rings", "Rare", 2, 42.00, "Black", "Creature", "1B"),
  card(82, "Imperial Seal", "Portal Three Kingdoms", "Rare", 1, 250.00, "Black", "Sorcery", "B"),
  card(83, "Contamination", "Urza's Saga", "Rare", 1, 18.00, "Black", "Enchantment", "2B"),
  card(84, "Grief", "Modern Horizons 2", "Mythic", 1, 25.00, "Black", "Creature", "4B"),
  card(85, "Grim Tutor", "Core Set 2021", "Rare", 1, 12.00, "Black", "Sorcery", "1BB"),

  // RED (86-110)
  card(86, "Lightning Bolt", "Magic 2011", "Common", 4, 4.50, "Red", "Instant", "R"),
  card(87, "Goblin Guide", "Zendikar", "Rare", 4, 8.00, "Red", "Creature", "R"),
  card(88, "Monastery Swiftspear", "Khans of Tarkir", "Uncommon", 4, 3.00, "Red", "Creature", "R"),
  card(89, "Eidolon of the Great Revel", "Journey into Nyx", "Rare", 4, 15.00, "Red", "Creature", "1RR"),
  card(90, "Searing Blaze", "Worldwake", "Common", 4, 1.00, "Red", "Instant", "RR"),
  card(91, "Skullcrack", "Gatecrash", "Uncommon", 4, 3.00, "Red", "Instant", "1R"),
  card(92, "Rift Bolt", "Time Spiral", "Common", 4, 1.50, "Red", "Sorcery", "2R"),
  card(93, "Lava Spike", "Champions of Kamigawa", "Common", 4, 2.00, "Red", "Sorcery", "R"),
  card(94, "Light Up the Stage", "Ravnica Allegiance", "Uncommon", 4, 3.00, "Red", "Sorcery", "2R"),
  card(95, "Ragavan Nimble Pilferer", "Modern Horizons 2", "Mythic", 2, 65.00, "Red", "Creature", "R"),
  card(96, "Dragon's Rage Channeler", "Modern Horizons 2", "Uncommon", 4, 8.00, "Red", "Creature", "R"),
  card(97, "Seasoned Pyromancer", "Modern Horizons", "Mythic", 1, 18.00, "Red", "Creature", "1RR"),
  card(98, "Blood Moon", "The Dark", "Rare", 2, 22.00, "Red", "Enchantment", "2R"),
  card(99, "Magus of the Moon", "Future Sight", "Rare", 2, 18.00, "Red", "Creature", "2R"),
  card(100, "Sneak Attack", "Urza's Saga", "Rare", 1, 25.00, "Red", "Enchantment", "3R"),
  card(101, "Jeska's Will", "Commander Legends", "Rare", 2, 15.00, "Red", "Sorcery", "2R"),
  card(102, "Gamble", "Urza's Saga", "Rare", 1, 8.00, "Red", "Sorcery", "R"),
  card(103, "Chaos Warp", "Commander 2011", "Rare", 2, 3.00, "Red", "Instant", "2R"),
  card(104, "Young Pyromancer", "Magic 2014", "Uncommon", 2, 3.00, "Red", "Creature", "1R"),
  card(105, "Dreadhorde Arcanist", "War of the Spark", "Rare", 2, 5.00, "Red", "Creature", "1R"),
  card(106, "Unholy Heat", "Modern Horizons 2", "Common", 4, 1.50, "Red", "Instant", "R"),
  card(107, "Wheel of Fortune", "Revised", "Rare", 1, 150.00, "Red", "Sorcery", "2R"),
  card(108, "Goblin Dark-Dwellers", "Oath of the Gatewatch", "Rare", 1, 3.00, "Red", "Creature", "3RR"),
  card(109, "Through the Breach", "Champions of Kamigawa", "Rare", 1, 18.00, "Red", "Instant", "4R"),
  card(110, "Flame Slash", "Rise of the Eldrazi", "Common", 4, 0.50, "Red", "Sorcery", "R"),

  // GREEN (111-135)
  card(111, "Tarmogoyf", "Future Sight", "Mythic", 2, 28.00, "Green", "Creature", "1G"),
  card(112, "Birds of Paradise", "Revised", "Rare", 4, 12.00, "Green", "Creature", "G"),
  card(113, "Noble Hierarch", "Conflux", "Rare", 4, 45.00, "Green", "Creature", "G"),
  card(114, "Elvish Mystic", "Magic 2014", "Common", 4, 0.50, "Green", "Creature", "G"),
  card(115, "Craterhoof Behemoth", "Avacyn Restored", "Mythic", 1, 45.00, "Green", "Creature", "5GGG"),
  card(116, "Sylvan Library", "Legends", "Rare", 2, 45.00, "Green", "Enchantment", "1G"),
  card(117, "Survival of the Fittest", "Tempest", "Rare", 1, 150.00, "Green", "Enchantment", "1G"),
  card(118, "Natural Order", "Portal", "Rare", 1, 55.00, "Green", "Sorcery", "2GG"),
  card(119, "Green Sun's Zenith", "Mirrodin Besieged", "Rare", 2, 18.00, "Green", "Sorcery", "XG"),
  card(120, "Primeval Titan", "Magic 2011", "Mythic", 1, 12.00, "Green", "Creature", "4GG"),
  card(121, "Eternal Witness", "Fifth Dawn", "Uncommon", 4, 8.00, "Green", "Creature", "1GG"),
  card(122, "Reclamation Sage", "Magic 2015", "Uncommon", 2, 1.00, "Green", "Creature", "2G"),
  card(123, "Collector Ouphe", "Modern Horizons", "Rare", 2, 12.00, "Green", "Creature", "1G"),
  card(124, "Tireless Tracker", "Shadows over Innistrad", "Rare", 2, 8.00, "Green", "Creature", "2G"),
  card(125, "Ramunap Excavator", "Hour of Devastation", "Rare", 1, 5.00, "Green", "Creature", "2G"),
  card(126, "Courser of Kruphix", "Born of the Gods", "Rare", 2, 5.00, "Green", "Creature", "1GG"),
  card(127, "Oracle of Mul Daya", "Zendikar", "Rare", 1, 22.00, "Green", "Creature", "3G"),
  card(128, "Exploration", "Urza's Saga", "Rare", 2, 35.00, "Green", "Enchantment", "G"),
  card(129, "Ignoble Hierarch", "Modern Horizons 2", "Rare", 4, 15.00, "Green", "Creature", "G"),
  card(130, "Chord of Calling", "Ravnica City of Guilds", "Rare", 2, 12.00, "Green", "Instant", "XGGG"),
  card(131, "Endurance", "Modern Horizons 2", "Mythic", 1, 40.00, "Green", "Creature", "2G"),
  card(132, "Abundant Harvest", "Modern Horizons 2", "Common", 4, 1.00, "Green", "Sorcery", "G"),
  card(133, "Hexdrinker", "Modern Horizons", "Rare", 2, 5.00, "Green", "Creature", "G"),
  card(134, "Yisan the Wanderer Bard", "Magic 2015", "Rare", 1, 5.00, "Green", "Creature", "2G"),
  card(135, "Azusa Lost but Seeking", "Champions of Kamigawa", "Rare", 1, 22.00, "Green", "Creature", "2G"),

  // ARTIFACTS/COLORLESS (136-155)
  card(136, "Sol Ring", "Commander Anthology", "Uncommon", 4, 2.50, "Colorless", "Artifact", "1"),
  card(137, "Mana Crypt", "Eternal Masters", "Mythic", 1, 180.00, "Colorless", "Artifact", "0"),
  card(138, "Mana Vault", "Alpha", "Rare", 1, 120.00, "Colorless", "Artifact", "1"),
  card(139, "Grim Monolith", "Urza's Legacy", "Rare", 2, 65.00, "Colorless", "Artifact", "2"),
  card(140, "Chrome Mox", "Mirrodin", "Rare", 2, 35.00, "Colorless", "Artifact", "0"),
  card(141, "Mox Diamond", "Stronghold", "Rare", 1, 180.00, "Colorless", "Artifact", "0"),
  card(142, "Mox Opal", "Scars of Mirrodin", "Mythic", 2, 45.00, "Colorless", "Artifact", "0"),
  card(143, "Skullclamp", "Darksteel", "Uncommon", 2, 8.00, "Colorless", "Artifact", "1"),
  card(144, "Sensei's Divining Top", "Champions of Kamigawa", "Uncommon", 2, 35.00, "Colorless", "Artifact", "1"),
  card(145, "Sword of Feast and Famine", "Mirrodin Besieged", "Mythic", 1, 45.00, "Colorless", "Artifact", "3"),
  card(146, "Sword of Fire and Ice", "Darksteel", "Rare", 1, 40.00, "Colorless", "Artifact", "3"),
  card(147, "Umezawa's Jitte", "Betrayers of Kamigawa", "Rare", 1, 22.00, "Colorless", "Artifact", "2"),
  card(148, "Batterskull", "New Phyrexia", "Mythic", 1, 15.00, "Colorless", "Artifact", "5"),
  card(149, "Wurmcoil Engine", "Scars of Mirrodin", "Mythic", 1, 18.00, "Colorless", "Artifact", "6"),
  card(150, "Staff of Domination", "Fifth Dawn", "Rare", 1, 18.00, "Colorless", "Artifact", "3"),
  card(151, "Mycosynth Lattice", "Darksteel", "Rare", 1, 12.00, "Colorless", "Artifact", "6"),
  card(152, "Blightsteel Colossus", "Mirrodin Besieged", "Mythic", 1, 35.00, "Colorless", "Artifact", "12"),
  card(153, "Paradox Engine", "Aether Revolt", "Mythic", 1, 12.00, "Colorless", "Artifact", "5"),
  card(154, "The One Ring", "Lord of the Rings", "Mythic", 1, 65.00, "Colorless", "Artifact", "4"),
  card(155, "Ancient Tomb", "Tempest", "Uncommon", 2, 65.00, "Colorless", "Land", "-"),

  // LANDS (156-175)
  card(156, "Wasteland", "Tempest", "Uncommon", 2, 35.00, "Land", "Land", "-"),
  card(157, "Strip Mine", "Antiquities", "Uncommon", 1, 55.00, "Land", "Land", "-"),
  card(158, "Library of Alexandria", "Arabian Nights", "Uncommon", 1, 85.00, "Land", "Land", "-"),
  card(159, "Karakas", "Legends", "Rare", 1, 120.00, "Land", "Land", "-"),
  card(160, "The Tabernacle at Pendrell Vale", "Legends", "Rare", 1, 550.00, "Land", "Land", "-"),
  card(161, "Polluted Delta", "Onslaught", "Rare", 2, 35.00, "Land", "Land", "-"),
  card(162, "Flooded Strand", "Onslaught", "Rare", 2, 30.00, "Land", "Land", "-"),
  card(163, "Bloodstained Mire", "Onslaught", "Rare", 2, 30.00, "Land", "Land", "-"),
  card(164, "Wooded Foothills", "Onslaught", "Rare", 2, 28.00, "Land", "Land", "-"),
  card(165, "Windswept Heath", "Onslaught", "Rare", 2, 25.00, "Land", "Land", "-"),
  card(166, "Scalding Tarn", "Zendikar", "Rare", 2, 22.00, "Land", "Land", "-"),
  card(167, "Verdant Catacombs", "Zendikar", "Rare", 2, 20.00, "Land", "Land", "-"),
  card(168, "Misty Rainforest", "Zendikar", "Rare", 2, 20.00, "Land", "Land", "-"),
  card(169, "Marsh Flats", "Zendikar", "Rare", 2, 18.00, "Land", "Land", "-"),
  card(170, "Arid Mesa", "Zendikar", "Rare", 2, 18.00, "Land", "Land", "-"),
  card(171, "Tropical Island", "Alpha", "Rare", 1, 350.00, "Land", "Land", "-"),
  card(172, "Underground Sea", "Alpha", "Rare", 1, 400.00, "Land", "Land", "-"),
  card(173, "Volcanic Island", "Alpha", "Rare", 1, 320.00, "Land", "Land", "-"),
  card(174, "Tundra", "Alpha", "Rare", 1, 280.00, "Land", "Land", "-"),
  card(175, "Savannah", "Alpha", "Rare", 1, 260.00, "Land", "Land", "-"),

  // MULTICOLOR (176-200)
  card(176, "Muldrotha the Gravetide", "Dominaria", "Mythic", 1, 12.00, "Multi", "Creature", "3BUG"),
  card(177, "Tasigur the Golden Fang", "Fate Reforged", "Rare", 1, 5.00, "Multi", "Creature", "5B"),
  card(178, "Leovold Emissary of Trest", "Conspiracy Take the Crown", "Mythic", 1, 15.00, "Multi", "Creature", "1UBG"),
  card(179, "Atraxa Praetors Voice", "Commander 2016", "Mythic", 1, 25.00, "Multi", "Creature", "GWUB"),
  card(180, "Teferi Hero of Dominaria", "Dominaria", "Mythic", 1, 35.00, "Multi", "Planeswalker", "3WU"),
  card(181, "Niv-Mizzet Parun", "Guilds of Ravnica", "Rare", 1, 8.00, "Multi", "Creature", "UUURRR"),
  card(182, "Kess Dissident Mage", "Commander 2017", "Mythic", 1, 18.00, "Multi", "Creature", "1UBR"),
  card(183, "Wrenn and Six", "Modern Horizons", "Mythic", 2, 75.00, "Multi", "Planeswalker", "RG"),
  card(184, "Deathrite Shaman", "Return to Ravnica", "Rare", 4, 15.00, "Multi", "Creature", "BG"),
  card(185, "Kenrith the Returned King", "Throne of Eldraine", "Rare", 1, 12.00, "Multi", "Creature", "4W"),
  card(186, "Omnath Locus of Creation", "Zendikar Rising", "Mythic", 1, 18.00, "Multi", "Creature", "RGWU"),
  card(187, "Breya Etherium Shaper", "Commander 2016", "Mythic", 1, 12.00, "Multi", "Creature", "WUBR"),
  card(188, "Yuriko the Tiger's Shadow", "Commander 2018", "Rare", 1, 18.00, "Multi", "Creature", "1UB"),
  card(189, "Edgar Markov", "Commander 2017", "Mythic", 1, 35.00, "Multi", "Creature", "3RWB"),
  card(190, "Najeela the Blade-Blossom", "Battlebond", "Rare", 1, 15.00, "Multi", "Creature", "2R"),
  card(191, "Sliver Overlord", "Scourge", "Rare", 1, 18.00, "Multi", "Creature", "WUBRG"),
  card(192, "The Ur-Dragon", "Commander 2017", "Mythic", 1, 25.00, "Multi", "Creature", "WUBRG"),
  card(193, "Rocco Cabaretti Caterer", "Streets of New Capenna", "Rare", 1, 3.00, "Multi", "Creature", "1RGW"),
  card(194, "Raffine Scheming Seer", "Streets of New Capenna", "Mythic", 1, 8.00, "Multi", "Creature", "1WUB"),
  card(195, "Zacama Primal Calamity", "Rivals of Ixalan", "Mythic", 1, 8.00, "Multi", "Creature", "6RGW"),
  card(196, "Jetmir Nexus of Revels", "Streets of New Capenna", "Mythic", 1, 6.00, "Multi", "Creature", "1RGW"),
  card(197, "Scion of the Ur-Dragon", "Planar Chaos", "Rare", 1, 8.00, "Multi", "Creature", "WUBRG"),
  card(198, "Nicol Bolas Planeswalker", "Conflux", "Mythic", 1, 12.00, "Multi", "Planeswalker", "4UBR"),
  card(199, "Riku of Two Reflections", "Commander 2011", "Mythic", 1, 8.00, "Multi", "Creature", "2URG"),
  card(200, "Kaalia of the Vast", "Commander 2011", "Mythic", 1, 25.00, "Multi", "Creature", "1RWB"),
];

export const mockDecks = [
  {
    id: "1",
    name: "Urza Artifacts",
    commander: "Urza, Lord High Artificer",
    colors: ["Blue"],
    winRate: 68.5,
    value: 2840.00,
    lastPlayed: "1 day ago",
    cards: 100,
    cardList: [
      // Commander
      { cardId: "38", quantity: 1 },
      // Mana rocks
      { cardId: "136", quantity: 1 }, // Sol Ring
      { cardId: "137", quantity: 1 }, // Mana Crypt
      { cardId: "138", quantity: 1 }, // Mana Vault
      { cardId: "139", quantity: 1 }, // Grim Monolith
      { cardId: "140", quantity: 1 }, // Chrome Mox
      { cardId: "141", quantity: 1 }, // Mox Diamond
      { cardId: "142", quantity: 1 }, // Mox Opal
      // Artifact engines
      { cardId: "143", quantity: 1 }, // Skullclamp
      { cardId: "144", quantity: 1 }, // Sensei's Divining Top
      { cardId: "145", quantity: 1 }, // Sword of Feast and Famine
      { cardId: "146", quantity: 1 }, // Sword of Fire and Ice
      { cardId: "147", quantity: 1 }, // Umezawa's Jitte
      { cardId: "148", quantity: 1 }, // Batterskull
      { cardId: "149", quantity: 1 }, // Wurmcoil Engine
      { cardId: "150", quantity: 1 }, // Staff of Domination
      { cardId: "151", quantity: 1 }, // Mycosynth Lattice
      { cardId: "152", quantity: 1 }, // Blightsteel Colossus
      { cardId: "153", quantity: 1 }, // Paradox Engine
      { cardId: "154", quantity: 1 }, // The One Ring
      // Blue spells — counterspells
      { cardId: "26", quantity: 1 }, // Counterspell
      { cardId: "27", quantity: 1 }, // Force of Will
      { cardId: "49", quantity: 1 }, // Mana Drain
      // Blue spells — cantrips / draw
      { cardId: "28", quantity: 1 }, // Brainstorm
      { cardId: "29", quantity: 1 }, // Ponder
      { cardId: "30", quantity: 1 }, // Preordain
      { cardId: "34", quantity: 1 }, // Rhystic Study
      { cardId: "35", quantity: 1 }, // Mystic Remora
      { cardId: "36", quantity: 1 }, // Timetwister
      { cardId: "48", quantity: 1 }, // Intuition
      // Blue spells — artifact tutors
      { cardId: "44", quantity: 1 }, // Trinket Mage
      { cardId: "45", quantity: 1 }, // Fabricate
      { cardId: "46", quantity: 1 }, // Reshape
      { cardId: "47", quantity: 1 }, // Whir of Invention
      { cardId: "54", quantity: 1 }, // Transmute Artifact
      { cardId: "55", quantity: 1 }, // Trophy Mage
      // Blue creatures
      { cardId: "31", quantity: 1 }, // Snapcaster Mage
      { cardId: "32", quantity: 1 }, // Jace the Mind Sculptor
      { cardId: "33", quantity: 1 }, // Cyclonic Rift
      { cardId: "37", quantity: 1 }, // Consecrated Sphinx
      { cardId: "39", quantity: 1 }, // Emry Lurker of the Loch
      { cardId: "40", quantity: 1 }, // Teferi Time Raveler
      { cardId: "41", quantity: 1 }, // Narset Parter of Veils
      { cardId: "42", quantity: 1 }, // Notion Thief
      { cardId: "43", quantity: 1 }, // Phantasmal Image
      { cardId: "50", quantity: 1 }, // Murktide Regent
      { cardId: "51", quantity: 1 }, // Jin-Gitaxias
      { cardId: "52", quantity: 1 }, // Thassa Deep-Dwelling
      { cardId: "53", quantity: 1 }, // Tezzeret the Seeker
      // Lands
      { cardId: "155", quantity: 1 }, // Ancient Tomb
      { cardId: "156", quantity: 1 }, // Wasteland
      { cardId: "157", quantity: 1 }, // Strip Mine
      { cardId: "158", quantity: 1 }, // Library of Alexandria
      { cardId: "159", quantity: 1 }, // Karakas
      { cardId: "161", quantity: 1 }, // Polluted Delta
      { cardId: "162", quantity: 1 }, // Flooded Strand
      { cardId: "166", quantity: 1 }, // Scalding Tarn
      { cardId: "168", quantity: 1 }, // Misty Rainforest
      { cardId: "171", quantity: 1 }, // Tropical Island
      { cardId: "172", quantity: 1 }, // Underground Sea
      { cardId: "173", quantity: 1 }, // Volcanic Island
    ],
  },
  {
    id: "2",
    name: "Meren Reanimator",
    commander: "Meren of Clan Nel Toth",
    colors: ["Black", "Green"],
    winRate: 61.2,
    value: 1650.00,
    lastPlayed: "3 days ago",
    cards: 100,
    cardList: [
      // Commander
      { cardId: "71", quantity: 1 },
      // Black tutors
      { cardId: "56", quantity: 1 }, // Demonic Tutor
      { cardId: "57", quantity: 1 }, // Vampiric Tutor
      { cardId: "82", quantity: 1 }, // Imperial Seal
      { cardId: "85", quantity: 1 }, // Grim Tutor
      // Reanimation package
      { cardId: "68", quantity: 1 }, // Entomb
      { cardId: "69", quantity: 1 }, // Reanimate
      { cardId: "70", quantity: 1 }, // Animate Dead
      { cardId: "117", quantity: 1 }, // Survival of the Fittest
      // Black removal / disruption
      { cardId: "58", quantity: 1 }, // Dark Ritual
      { cardId: "59", quantity: 1 }, // Thoughtseize
      { cardId: "60", quantity: 1 }, // Inquisition of Kozilek
      { cardId: "61", quantity: 1 }, // Fatal Push
      { cardId: "62", quantity: 1 }, // Toxic Deluge
      { cardId: "63", quantity: 1 }, // Damnation
      // Black card draw / engines
      { cardId: "64", quantity: 1 }, // Liliana of the Veil
      { cardId: "65", quantity: 1 }, // Liliana Vess
      { cardId: "66", quantity: 1 }, // Necropotence
      { cardId: "67", quantity: 1 }, // Phyrexian Arena
      { cardId: "72", quantity: 1 }, // Sheoldred the Apocalypse
      { cardId: "74", quantity: 1 }, // Mikaeus the Unhallowed
      { cardId: "75", quantity: 1 }, // Yawgmoth Thran Physician
      { cardId: "76", quantity: 1 }, // Opposition Agent
      { cardId: "77", quantity: 1 }, // Bitterblossom
      { cardId: "78", quantity: 1 }, // Cabal Coffers
      { cardId: "79", quantity: 1 }, // Urborg Tomb of Yawgmoth
      { cardId: "80", quantity: 1 }, // Dauthi Voidwalker
      { cardId: "81", quantity: 1 }, // Orcish Bowmasters
      { cardId: "83", quantity: 1 }, // Contamination
      { cardId: "84", quantity: 1 }, // Grief
      // Black creatures — reanimation targets
      { cardId: "73", quantity: 1 }, // Grave Titan
      // Green mana / ramp
      { cardId: "112", quantity: 1 }, // Birds of Paradise
      { cardId: "113", quantity: 1 }, // Noble Hierarch
      { cardId: "114", quantity: 1 }, // Elvish Mystic
      { cardId: "116", quantity: 1 }, // Sylvan Library
      { cardId: "118", quantity: 1 }, // Natural Order
      { cardId: "119", quantity: 1 }, // Green Sun's Zenith
      { cardId: "128", quantity: 1 }, // Exploration
      { cardId: "129", quantity: 1 }, // Ignoble Hierarch
      { cardId: "135", quantity: 1 }, // Azusa Lost but Seeking
      // Green creatures
      { cardId: "111", quantity: 1 }, // Tarmogoyf
      { cardId: "115", quantity: 1 }, // Craterhoof Behemoth
      { cardId: "120", quantity: 1 }, // Primeval Titan
      { cardId: "121", quantity: 1 }, // Eternal Witness
      { cardId: "122", quantity: 1 }, // Reclamation Sage
      { cardId: "123", quantity: 1 }, // Collector Ouphe
      { cardId: "124", quantity: 1 }, // Tireless Tracker
      { cardId: "125", quantity: 1 }, // Ramunap Excavator
      { cardId: "126", quantity: 1 }, // Courser of Kruphix
      { cardId: "127", quantity: 1 }, // Oracle of Mul Daya
      { cardId: "130", quantity: 1 }, // Chord of Calling
      { cardId: "131", quantity: 1 }, // Endurance
      { cardId: "132", quantity: 1 }, // Abundant Harvest
      { cardId: "133", quantity: 1 }, // Hexdrinker
      { cardId: "134", quantity: 1 }, // Yisan the Wanderer Bard
      // Mana rocks
      { cardId: "136", quantity: 1 }, // Sol Ring
      // Lands
      { cardId: "163", quantity: 1 }, // Bloodstained Mire
      { cardId: "164", quantity: 1 }, // Wooded Foothills
      { cardId: "167", quantity: 1 }, // Verdant Catacombs
      { cardId: "168", quantity: 1 }, // Misty Rainforest
      { cardId: "174", quantity: 1 }, // Tundra
      { cardId: "175", quantity: 1 }, // Savannah
    ],
  },
];

export const mockSets = [
  { id: "1", name: "Alpha", code: "LEA", owned: 8, total: 295, missingCost: 12000.00 },
  { id: "2", name: "Modern Horizons 2", code: "MH2", owned: 12, total: 303, missingCost: 890.00 },
  { id: "3", name: "Innistrad", code: "ISD", owned: 2, total: 264, missingCost: 450.00 },
  { id: "4", name: "Future Sight", code: "FUT", owned: 2, total: 180, missingCost: 320.00 },
  { id: "5", name: "Zendikar", code: "ZEN", owned: 4, total: 229, missingCost: 580.00 },
  { id: "6", name: "Onslaught", code: "ONS", owned: 5, total: 350, missingCost: 250.00 },
  { id: "7", name: "Modern Horizons", code: "MH1", owned: 4, total: 254, missingCost: 420.00 },
  { id: "8", name: "Legends", code: "LEG", owned: 4, total: 310, missingCost: 3200.00 },
];

export const mockActivities = [
  { id: "1", text: "Added 14 cards", time: "2 hours ago", type: "add" },
  { id: "2", text: "Completed Innistrad set", time: "1 day ago", type: "achievement" },
  { id: "3", text: "Updated Urza Artifacts", time: "2 days ago", type: "edit" },
  { id: "4", text: "Added card to wishlist", time: "3 days ago", type: "wishlist" },
  { id: "5", text: "Sold 3 cards", time: "1 week ago", type: "trade" },
];

export const mockCollectionGrowth = [
  { month: "Jan", value: 12000 },
  { month: "Feb", value: 13500 },
  { month: "Mar", value: 15200 },
  { month: "Apr", value: 17100 },
  { month: "May", value: 19800 },
  { month: "Jun", value: 22500 },
  { month: "Jul", value: 25200 },
  { month: "Aug", value: 28420 },
];

export const mockManaDistribution = [
  { name: "White", value: 420, fill: "var(--mana-white)" },
  { name: "Blue", value: 850, fill: "var(--mana-blue)" },
  { name: "Black", value: 730, fill: "var(--mana-black)" },
  { name: "Red", value: 310, fill: "var(--mana-red)" },
  { name: "Green", value: 171, fill: "var(--mana-green)" },
];

export const mockMarketPerformance = [
  { time: "08:00", value: 18100 },
  { time: "10:00", value: 18250 },
  { time: "12:00", value: 18150 },
  { time: "14:00", value: 18300 },
  { time: "16:00", value: 18420.50 },
];

export const mockGainers = [
  { id: "1", name: "Sheoldred, the Apocalypse", set: "Dominaria United", price: 85.50, change: "+12.4%" },
  { id: "2", name: "The One Ring", set: "Lord of the Rings", price: 65.20, change: "+8.2%" },
  { id: "3", name: "Orcish Bowmasters", set: "Lord of the Rings", price: 42.00, change: "+5.1%" },
];

export const mockLosers = [
  { id: "4", name: "Ragavan, Nimble Pilferer", set: "Modern Horizons 2", price: 65.00, change: "-4.2%" },
  { id: "5", name: "Wrenn and Six", set: "Modern Horizons", price: 75.00, change: "-3.8%" },
];

export const mockAchievements = [
  { id: "1", name: "FIRST DECK", description: "Create your first commander deck.", unlocked: true },
  { id: "2", name: "1,000 CARDS", description: "Reach 1,000 cards in your collection.", unlocked: true },
  { id: "3", name: "FIRST MYTHIC", description: "Add a Mythic Rare to your collection.", unlocked: true },
  { id: "4", name: "FULL SET", description: "Collect 100% of a single set.", unlocked: false },
  { id: "5", name: "COLLECTOR", description: "Exceed $10,000 in collection value.", unlocked: true },
  { id: "6", name: "DECK BUILDER", description: "Create 10 active decks.", unlocked: false },
  { id: "7", name: "GAME NIGHT", description: "Log 100 games played.", unlocked: false },
];

export const mockWishlists = [
  { id: "1", name: "Main Collection", count: 83 },
  { id: "2", name: "Commander Staples", count: 14 },
  { id: "3", name: "Foil Upgrades", count: 5 },
];
