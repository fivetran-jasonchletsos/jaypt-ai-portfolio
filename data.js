const COLLECTIONS = ["Motion", "Rorschach", "Fantasy Portraits", "Ink and Neon", "Veiled Skulls", "The Joyride", "The Last Supper in Bricks", "Serpent and Bloom", "By the Sea", "Periwinkle Braids", "Dice and Totem", "Color and Form"];
const WORKS = [
 {
  "id": "spotlight-gown",
  "type": "video",
  "title": "Spotlight Gown",
  "file": "media/spotlight-gown.mp4",
  "thumb": "thumbs/spotlight-gown.jpg",
  "collection": "Motion",
  "date": "2026-11-11"
 },
 {
  "id": "fern-elk-antlers",
  "type": "video",
  "title": "Fern Elk Antlers",
  "file": "media/fern-elk-antlers.mp4",
  "thumb": "thumbs/fern-elk-antlers.jpg",
  "collection": "Motion",
  "date": "2026-11-11"
 },
 {
  "id": "violet-dread-creature",
  "type": "video",
  "title": "Violet Dread Creature",
  "file": "media/violet-dread-creature.mp4",
  "thumb": "thumbs/violet-dread-creature.jpg",
  "collection": "Motion",
  "date": "2026-11-11"
 },
 {
  "id": "chrome-rain-walker",
  "type": "video",
  "title": "Chrome Rain Walker",
  "file": "media/chrome-rain-walker.mp4",
  "thumb": "thumbs/chrome-rain-walker.jpg",
  "collection": "Motion",
  "date": "2026-11-11"
 },
 {
  "id": "dream-garden-ride-with-a-floating-heart",
  "type": "image",
  "title": "Dream Garden Ride with a Floating Heart",
  "file": "media/dream-garden-ride-with-a-floating-heart.jpg",
  "thumb": "thumbs/dream-garden-ride-with-a-floating-heart.jpg",
  "collection": "The Joyride",
  "date": "2026-11-08"
 },
 {
  "id": "vintage-toy-car-in-monochrome-bloom",
  "type": "image",
  "title": "Vintage toy car in monochrome bloom",
  "file": "media/vintage-toy-car-in-monochrome-bloom.jpg",
  "thumb": "thumbs/vintage-toy-car-in-monochrome-bloom.jpg",
  "collection": "The Joyride",
  "date": "2026-11-08"
 },
 {
  "id": "lego-joyride-with-a-heart-balloon",
  "type": "image",
  "title": "LEGO Joyride with a Heart Balloon",
  "file": "media/lego-joyride-with-a-heart-balloon.jpg",
  "thumb": "thumbs/lego-joyride-with-a-heart-balloon.jpg",
  "collection": "The Joyride",
  "date": "2026-11-08"
 },
 {
  "id": "blue-period-toy-car-ride",
  "type": "image",
  "title": "Blue Period Toy Car Ride",
  "file": "media/blue-period-toy-car-ride.jpg",
  "thumb": "thumbs/blue-period-toy-car-ride.jpg",
  "collection": "The Joyride",
  "date": "2026-11-08"
 },
 {
  "id": "veiled-toy-car-in-gothic-courtyard",
  "type": "image",
  "title": "Veiled Toy Car in Gothic Courtyard",
  "file": "media/veiled-toy-car-in-gothic-courtyard.jpg",
  "thumb": "thumbs/veiled-toy-car-in-gothic-courtyard.jpg",
  "collection": "The Joyride",
  "date": "2026-11-08"
 },
 {
  "id": "dreamy-red-car-garden-ride",
  "type": "image",
  "title": "Dreamy Red Car Garden Ride",
  "file": "media/dreamy-red-car-garden-ride.jpg",
  "thumb": "thumbs/dreamy-red-car-garden-ride.jpg",
  "collection": "The Joyride",
  "date": "2026-11-08"
 },
 {
  "id": "toy-car-in-a-grecian-garden",
  "type": "image",
  "title": "Toy Car in a Grecian Garden",
  "file": "media/toy-car-in-a-grecian-garden.jpg",
  "thumb": "thumbs/toy-car-in-a-grecian-garden.jpg",
  "collection": "The Joyride",
  "date": "2026-11-08"
 },
 {
  "id": "stencil-car-ride-with-heart-balloon",
  "type": "image",
  "title": "Stencil car ride with heart balloon",
  "file": "media/stencil-car-ride-with-heart-balloon.jpg",
  "thumb": "thumbs/stencil-car-ride-with-heart-balloon.jpg",
  "collection": "The Joyride",
  "date": "2026-11-08"
 },
 {
  "id": "toy-car-heroes-in-a-superpowered-garden",
  "type": "image",
  "title": "Toy Car Heroes in a Superpowered Garden",
  "file": "media/toy-car-heroes-in-a-superpowered-garden.jpg",
  "thumb": "thumbs/toy-car-heroes-in-a-superpowered-garden.jpg",
  "collection": "The Joyride",
  "date": "2026-11-08"
 },
 {
  "id": "a-whimsical-gaud-mosaic-joyride",
  "type": "image",
  "title": "A whimsical Gaudí mosaic joyride",
  "file": "media/a-whimsical-gaud-mosaic-joyride.jpg",
  "thumb": "thumbs/a-whimsical-gaud-mosaic-joyride.jpg",
  "collection": "The Joyride",
  "date": "2026-11-08"
 },
 {
  "id": "lego-last-supper-diorama",
  "type": "image",
  "title": "LEGO Last Supper Diorama",
  "file": "media/lego-last-supper-diorama.jpg",
  "thumb": "thumbs/lego-last-supper-diorama.jpg",
  "collection": "The Last Supper in Bricks",
  "date": "2026-11-08"
 },
 {
  "id": "brick-built-dreamscape-with-melting-clocks",
  "type": "image",
  "title": "Brick-built dreamscape with melting clocks",
  "file": "media/brick-built-dreamscape-with-melting-clocks.jpg",
  "thumb": "thumbs/brick-built-dreamscape-with-melting-clocks.jpg",
  "collection": "The Last Supper in Bricks",
  "date": "2026-11-08"
 },
 {
  "id": "brick-built-last-supper-in-hades",
  "type": "image",
  "title": "Brick-built Last Supper in Hades",
  "file": "media/brick-built-last-supper-in-hades.jpg",
  "thumb": "thumbs/brick-built-last-supper-in-hades.jpg",
  "collection": "The Last Supper in Bricks",
  "date": "2026-11-08"
 },
 {
  "id": "crimson-serpent-and-amber-bloom",
  "type": "image",
  "title": "Crimson Serpent and Amber Bloom",
  "file": "media/crimson-serpent-and-amber-bloom.jpg",
  "thumb": "thumbs/crimson-serpent-and-amber-bloom.jpg",
  "collection": "Serpent and Bloom",
  "date": "2026-11-08"
 },
 {
  "id": "wyeth-style-snake-and-flower-portrait",
  "type": "image",
  "title": "Wyeth-Style Snake and Flower Portrait",
  "file": "media/wyeth-style-snake-and-flower-portrait.jpg",
  "thumb": "thumbs/wyeth-style-snake-and-flower-portrait.jpg",
  "collection": "Serpent and Bloom",
  "date": "2026-11-08"
 },
 {
  "id": "cubist-snake-and-smiling-flower",
  "type": "image",
  "title": "Cubist Snake and Smiling Flower",
  "file": "media/cubist-snake-and-smiling-flower.jpg",
  "thumb": "thumbs/cubist-snake-and-smiling-flower.jpg",
  "collection": "Serpent and Bloom",
  "date": "2026-11-08"
 },
 {
  "id": "kandinsky-style-geometric-snake-portrait",
  "type": "image",
  "title": "Kandinsky-Style Geometric Snake Portrait",
  "file": "media/kandinsky-style-geometric-snake-portrait.jpg",
  "thumb": "thumbs/kandinsky-style-geometric-snake-portrait.jpg",
  "collection": "Serpent and Bloom",
  "date": "2026-11-08"
 },
 {
  "id": "fauvist-arabesque-snake-and-flower-portrait",
  "type": "image",
  "title": "Fauvist Arabesque Snake and Flower Portrait",
  "file": "media/fauvist-arabesque-snake-and-flower-portrait.jpg",
  "thumb": "thumbs/fauvist-arabesque-snake-and-flower-portrait.jpg",
  "collection": "Serpent and Bloom",
  "date": "2026-11-08"
 },
 {
  "id": "beachside-pokemon-adventure-with-pikachu",
  "type": "image",
  "title": "Beachside Pokémon adventure with Pikachu",
  "file": "media/beachside-pokemon-adventure-with-pikachu.jpg",
  "thumb": "thumbs/beachside-pokemon-adventure-with-pikachu.jpg",
  "collection": "By the Sea",
  "date": "2026-11-08"
 },
 {
  "id": "vintage-italian-cinema-by-the-sea",
  "type": "image",
  "title": "Vintage Italian Cinema by the Sea",
  "file": "media/vintage-italian-cinema-by-the-sea.jpg",
  "thumb": "thumbs/vintage-italian-cinema-by-the-sea.jpg",
  "collection": "By the Sea",
  "date": "2026-11-08"
 },
 {
  "id": "terracotta-plant-beside-red-haired-skeleton",
  "type": "image",
  "title": "Terracotta Plant Beside Red-Haired Skeleton",
  "file": "media/terracotta-plant-beside-red-haired-skeleton.jpg",
  "thumb": "thumbs/terracotta-plant-beside-red-haired-skeleton.jpg",
  "collection": "By the Sea",
  "date": "2026-11-08"
 },
 {
  "id": "auburn-haired-vintage-beach-portrait",
  "type": "image",
  "title": "Auburn-haired vintage beach portrait",
  "file": "media/auburn-haired-vintage-beach-portrait.jpg",
  "thumb": "thumbs/auburn-haired-vintage-beach-portrait.jpg",
  "collection": "By the Sea",
  "date": "2026-11-08"
 },
 {
  "id": "red-wigged-skeleton-on-the-beach",
  "type": "image",
  "title": "Red-Wigged Skeleton on the Beach",
  "file": "media/red-wigged-skeleton-on-the-beach.jpg",
  "thumb": "thumbs/red-wigged-skeleton-on-the-beach.jpg",
  "collection": "By the Sea",
  "date": "2026-11-08"
 },
 {
  "id": "red-wigged-skeleton-by-the-sea",
  "type": "image",
  "title": "Red-wigged skeleton by the sea",
  "file": "media/red-wigged-skeleton-by-the-sea.jpg",
  "thumb": "thumbs/red-wigged-skeleton-by-the-sea.jpg",
  "collection": "By the Sea",
  "date": "2026-11-08"
 },
 {
  "id": "red-haired-toy-s-chaotic-beach-dream",
  "type": "image",
  "title": "Red-haired toy’s chaotic beach dream",
  "file": "media/red-haired-toy-s-chaotic-beach-dream.jpg",
  "thumb": "thumbs/red-haired-toy-s-chaotic-beach-dream.jpg",
  "collection": "By the Sea",
  "date": "2026-11-08"
 },
 {
  "id": "moonlit-arabian-oasis-in-cubist-dream",
  "type": "image",
  "title": "Moonlit Arabian Oasis in Cubist Dream",
  "file": "media/moonlit-arabian-oasis-in-cubist-dream.jpg",
  "thumb": "thumbs/moonlit-arabian-oasis-in-cubist-dream.jpg",
  "collection": "By the Sea",
  "date": "2026-11-08"
 },
 {
  "id": "midnight-glamour-with-periwinkle-charm-braids",
  "type": "image",
  "title": "Midnight Glamour with Periwinkle Charm Braids",
  "file": "media/midnight-glamour-with-periwinkle-charm-braids.jpg",
  "thumb": "thumbs/midnight-glamour-with-periwinkle-charm-braids.jpg",
  "collection": "Periwinkle Braids",
  "date": "2026-11-08"
 },
 {
  "id": "white-hood-periwinkle-braids-dream-garden",
  "type": "image",
  "title": "White Hood, Periwinkle Braids, Dream Garden",
  "file": "media/white-hood-periwinkle-braids-dream-garden.jpg",
  "thumb": "thumbs/white-hood-periwinkle-braids-dream-garden.jpg",
  "collection": "Periwinkle Braids",
  "date": "2026-11-08"
 },
 {
  "id": "futuristic-sun-dance-of-the-joy-goddess",
  "type": "image",
  "title": "Futuristic Sun Dance of the Joy Goddess",
  "file": "media/futuristic-sun-dance-of-the-joy-goddess.jpg",
  "thumb": "thumbs/futuristic-sun-dance-of-the-joy-goddess.jpg",
  "collection": "Periwinkle Braids",
  "date": "2026-11-08"
 },
 {
  "id": "mossy-checkerboard-beneath-oversized-dice",
  "type": "image",
  "title": "Mossy checkerboard beneath oversized dice",
  "file": "media/mossy-checkerboard-beneath-oversized-dice.jpg",
  "thumb": "thumbs/mossy-checkerboard-beneath-oversized-dice.jpg",
  "collection": "Dice and Totem",
  "date": "2026-11-08"
 },
 {
  "id": "impressionist-garden-tableau-with-dice-and-totem",
  "type": "image",
  "title": "Impressionist Garden Tableau with Dice and Totem",
  "file": "media/impressionist-garden-tableau-with-dice-and-totem.jpg",
  "thumb": "thumbs/impressionist-garden-tableau-with-dice-and-totem.jpg",
  "collection": "Dice and Totem",
  "date": "2026-11-08"
 },
 {
  "id": "gothic-cathedral-s-vivid-stained-glass-focal-window",
  "type": "image",
  "title": "Gothic Cathedral’s Vivid Stained-Glass Focal Window",
  "file": "media/gothic-cathedral-s-vivid-stained-glass-focal-window.jpg",
  "thumb": "thumbs/gothic-cathedral-s-vivid-stained-glass-focal-window.jpg",
  "collection": "Dice and Totem",
  "date": "2026-11-08"
 },
 {
  "id": "flames-beneath-the-giant-dice",
  "type": "image",
  "title": "Flames Beneath the Giant Dice",
  "file": "media/flames-beneath-the-giant-dice.jpg",
  "thumb": "thumbs/flames-beneath-the-giant-dice.jpg",
  "collection": "Dice and Totem",
  "date": "2026-11-08"
 },
 {
  "id": "whimsical-stained-glass-wheel-and-dice",
  "type": "image",
  "title": "Whimsical stained-glass wheel and dice",
  "file": "media/whimsical-stained-glass-wheel-and-dice.jpg",
  "thumb": "thumbs/whimsical-stained-glass-wheel-and-dice.jpg",
  "collection": "Dice and Totem",
  "date": "2026-11-08"
 },
 {
  "id": "mexican-beadwork-diorama-in-golden-light",
  "type": "image",
  "title": "Mexican beadwork diorama in golden light",
  "file": "media/mexican-beadwork-diorama-in-golden-light.jpg",
  "thumb": "thumbs/mexican-beadwork-diorama-in-golden-light.jpg",
  "collection": "Dice and Totem",
  "date": "2026-11-08"
 },
 {
  "id": "luminous-cobalt-lime-and-crimson",
  "type": "image",
  "title": "Luminous cobalt, lime, and crimson",
  "file": "media/luminous-cobalt-lime-and-crimson.jpg",
  "thumb": "thumbs/luminous-cobalt-lime-and-crimson.jpg",
  "collection": "Color and Form",
  "date": "2026-11-08"
 },
 {
  "id": "flower-headed-guardian-at-the-cross",
  "type": "image",
  "title": "Flower-Headed Guardian at the Cross",
  "file": "media/flower-headed-guardian-at-the-cross.jpg",
  "thumb": "thumbs/flower-headed-guardian-at-the-cross.jpg",
  "collection": "Color and Form",
  "date": "2026-11-08"
 },
 {
  "id": "dragon-gown",
  "type": "image",
  "title": "Dragon Gown",
  "file": "media/dragon-gown.jpg",
  "thumb": "thumbs/dragon-gown.jpg",
  "collection": "Fantasy Portraits",
  "date": "2026-11-06"
 },
 {
  "id": "neon-ink-study",
  "type": "image",
  "title": "Neon Ink Study",
  "file": "media/neon-ink-study.jpg",
  "thumb": "thumbs/neon-ink-study.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19"
 },
 {
  "id": "crimson-scream",
  "type": "image",
  "title": "Crimson Scream",
  "file": "media/crimson-scream.jpg",
  "thumb": "thumbs/crimson-scream.jpg",
  "collection": "Rorschach",
  "date": "2026-10-19"
 },
 {
  "id": "web-mask",
  "type": "image",
  "title": "Web Mask",
  "file": "media/web-mask.jpg",
  "thumb": "thumbs/web-mask.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19"
 },
 {
  "id": "red-room",
  "type": "image",
  "title": "Red Room",
  "file": "media/red-room.jpg",
  "thumb": "thumbs/red-room.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19"
 },
 {
  "id": "gold-leaf",
  "type": "image",
  "title": "Gold Leaf",
  "file": "media/gold-leaf.jpg",
  "thumb": "thumbs/gold-leaf.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19"
 },
 {
  "id": "silver-lace",
  "type": "image",
  "title": "Silver Lace",
  "file": "media/silver-lace.jpg",
  "thumb": "thumbs/silver-lace.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19"
 },
 {
  "id": "rorschach-skull",
  "type": "image",
  "title": "Rorschach Skull",
  "file": "media/rorschach-skull.jpg",
  "thumb": "thumbs/rorschach-skull.jpg",
  "collection": "Rorschach",
  "date": "2026-10-19"
 },
 {
  "id": "pastel-grin",
  "type": "image",
  "title": "Pastel Grin",
  "file": "media/pastel-grin.jpg",
  "thumb": "thumbs/pastel-grin.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-18"
 },
 {
  "id": "wildflower-bride",
  "type": "image",
  "title": "Wildflower Bride",
  "file": "media/wildflower-bride.jpg",
  "thumb": "thumbs/wildflower-bride.jpg",
  "collection": "Fantasy Portraits",
  "date": "2026-10-18"
 },
 {
  "id": "veiled-skull-i",
  "type": "image",
  "title": "Veiled Skull I",
  "file": "media/veiled-skull-i.jpg",
  "thumb": "thumbs/veiled-skull-i.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18"
 },
 {
  "id": "veiled-skull-ii",
  "type": "image",
  "title": "Veiled Skull II",
  "file": "media/veiled-skull-ii.jpg",
  "thumb": "thumbs/veiled-skull-ii.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18"
 },
 {
  "id": "veiled-skull-iii",
  "type": "image",
  "title": "Veiled Skull III",
  "file": "media/veiled-skull-iii.jpg",
  "thumb": "thumbs/veiled-skull-iii.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18"
 },
 {
  "id": "veiled-skull-iv",
  "type": "image",
  "title": "Veiled Skull IV",
  "file": "media/veiled-skull-iv.jpg",
  "thumb": "thumbs/veiled-skull-iv.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18"
 },
 {
  "id": "veiled-skull-v",
  "type": "image",
  "title": "Veiled Skull V",
  "file": "media/veiled-skull-v.jpg",
  "thumb": "thumbs/veiled-skull-v.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18"
 },
 {
  "id": "veiled-skull-vi",
  "type": "image",
  "title": "Veiled Skull VI",
  "file": "media/veiled-skull-vi.jpg",
  "thumb": "thumbs/veiled-skull-vi.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18"
 },
 {
  "id": "veiled-skull-vii",
  "type": "image",
  "title": "Veiled Skull VII",
  "file": "media/veiled-skull-vii.jpg",
  "thumb": "thumbs/veiled-skull-vii.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18"
 },
 {
  "id": "laughing-in-bloom",
  "type": "image",
  "title": "Laughing in Bloom",
  "file": "media/laughing-in-bloom.jpg",
  "thumb": "thumbs/laughing-in-bloom.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-18"
 },
 {
  "id": "rainbow-braid",
  "type": "image",
  "title": "Rainbow Braid",
  "file": "media/rainbow-braid.jpg",
  "thumb": "thumbs/rainbow-braid.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-18"
 },
 {
  "id": "peacock-polaroids",
  "type": "image",
  "title": "Peacock Polaroids",
  "file": "media/peacock-polaroids.jpg",
  "thumb": "thumbs/peacock-polaroids.jpg",
  "collection": "Fantasy Portraits",
  "date": "2026-10-18"
 },
 {
  "id": "neon-symbiote",
  "type": "image",
  "title": "Neon Symbiote",
  "file": "media/neon-symbiote.jpg",
  "thumb": "thumbs/neon-symbiote.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-18"
 },
 {
  "id": "monochrome-ember",
  "type": "image",
  "title": "Monochrome Ember",
  "file": "media/monochrome-ember.jpg",
  "thumb": "thumbs/monochrome-ember.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-18"
 }
];
