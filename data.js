const SERIES = ["Portraits", "Motion"];
const COLLECTIONS = ["Veiled Skulls", "Ink and Neon", "Fantasy Portraits", "Motion"];
const COLLECTION_SERIES = {"Veiled Skulls": "Portraits", "Ink and Neon": "Portraits", "Fantasy Portraits": "Portraits", "Motion": "Motion"};
const BLURBS = {"Veiled Skulls": "Skull imagery softened by veils, flowers, and ornament.", "Ink and Neon": "Dark linework lit by saturated neon color, plus ink-blot faces.", "Fantasy Portraits": "Costumed and crowned figures in rich, storybook detail.", "Motion": "Short cinematic clips you can play in the viewer."};
const WORKS = [
 {
  "id": "veiled-skull-i",
  "type": "image",
  "title": "Veiled Skull I",
  "file": "media/veiled-skull-i.jpg",
  "thumb": "thumbs/veiled-skull-i.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Skull-faced bride in beaded black veil, drifting blue smoke.",
  "tags": [
   "skull",
   "veil",
   "gothic",
   "portrait"
  ],
  "featured": true,
  "order": 0,
  "w": 512,
  "h": 640,
  "color": "#1b3239"
 },
 {
  "id": "gold-leaf",
  "type": "image",
  "title": "Gold Leaf",
  "file": "media/gold-leaf.jpg",
  "thumb": "thumbs/gold-leaf.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19",
  "series": "Portraits",
  "desc": "Close portrait with gold leaf across the face and a glowing lace choker.",
  "tags": [
   "gold",
   "neon",
   "macro",
   "portrait"
  ],
  "featured": true,
  "order": 1,
  "w": 512,
  "h": 640,
  "color": "#232323"
 },
 {
  "id": "crimson-scream",
  "type": "image",
  "title": "Crimson Scream",
  "file": "media/crimson-scream.jpg",
  "thumb": "thumbs/crimson-scream.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19",
  "series": "Portraits",
  "desc": "A jeweled scream inside a red web.",
  "tags": [
   "red",
   "horror",
   "jewels",
   "portrait"
  ],
  "featured": true,
  "order": 2,
  "w": 512,
  "h": 640,
  "color": "#221717"
 },
 {
  "id": "dragon-gown",
  "type": "image",
  "title": "Dragon Gown",
  "file": "media/dragon-gown.jpg",
  "thumb": "thumbs/dragon-gown.jpg",
  "collection": "Fantasy Portraits",
  "date": "2026-11-06",
  "series": "Portraits",
  "desc": "Tattooed figure crowned by a crystalline dragon in pink and violet.",
  "tags": [
   "dragon",
   "fantasy",
   "couture",
   "portrait"
  ],
  "featured": true,
  "order": 3,
  "w": 512,
  "h": 640,
  "color": "#50454d"
 },
 {
  "id": "neon-symbiote",
  "type": "image",
  "title": "Neon Symbiote",
  "file": "media/neon-symbiote.jpg",
  "thumb": "thumbs/neon-symbiote.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Pale-haired figure in glowing web-pattern body paint on black.",
  "tags": [
   "neon",
   "spider",
   "body paint",
   "dark"
  ],
  "featured": true,
  "order": 4,
  "w": 512,
  "h": 640,
  "color": "#221f2c"
 },
 {
  "id": "peacock-polaroids",
  "type": "image",
  "title": "Peacock Polaroids",
  "file": "media/peacock-polaroids.jpg",
  "thumb": "thumbs/peacock-polaroids.jpg",
  "collection": "Fantasy Portraits",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Four instant-film portraits in peacock and pink feathers.",
  "tags": [
   "polaroid",
   "feathers",
   "color",
   "portrait"
  ],
  "featured": true,
  "order": 5,
  "w": 512,
  "h": 640,
  "color": "#484546"
 },
 {
  "id": "chrome-rain-walker",
  "type": "video",
  "title": "Chrome Rain Walker",
  "file": "media/chrome-rain-walker.mp4",
  "thumb": "thumbs/chrome-rain-walker.jpg",
  "collection": "Motion",
  "date": "2026-11-11",
  "series": "Motion",
  "desc": "A glittering figure walks through curtains of light among dark horns.",
  "tags": [
   "video",
   "cyber",
   "light",
   "walk"
  ],
  "featured": true,
  "order": 6,
  "w": 640,
  "h": 360,
  "color": "#2d2727"
 },
 {
  "id": "veiled-skull-ii",
  "type": "image",
  "title": "Veiled Skull II",
  "file": "media/veiled-skull-ii.jpg",
  "thumb": "thumbs/veiled-skull-ii.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Veiled skull portrait, second in the series.",
  "tags": [
   "skull",
   "veil",
   "gothic"
  ],
  "featured": false,
  "order": 8,
  "w": 512,
  "h": 640,
  "color": "#211718"
 },
 {
  "id": "veiled-skull-iii",
  "type": "image",
  "title": "Veiled Skull III",
  "file": "media/veiled-skull-iii.jpg",
  "thumb": "thumbs/veiled-skull-iii.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Veiled skull portrait, third in the series.",
  "tags": [
   "skull",
   "veil",
   "gothic"
  ],
  "featured": false,
  "order": 9,
  "w": 512,
  "h": 640,
  "color": "#1d2225"
 },
 {
  "id": "veiled-skull-iv",
  "type": "image",
  "title": "Veiled Skull IV",
  "file": "media/veiled-skull-iv.jpg",
  "thumb": "thumbs/veiled-skull-iv.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Veiled skull portrait, fourth in the series.",
  "tags": [
   "skull",
   "veil",
   "gothic"
  ],
  "featured": false,
  "order": 10,
  "w": 512,
  "h": 640,
  "color": "#0b2125"
 },
 {
  "id": "veiled-skull-v",
  "type": "image",
  "title": "Veiled Skull V",
  "file": "media/veiled-skull-v.jpg",
  "thumb": "thumbs/veiled-skull-v.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Veiled skull portrait, fifth in the series.",
  "tags": [
   "skull",
   "veil",
   "gothic"
  ],
  "featured": false,
  "order": 11,
  "w": 512,
  "h": 640,
  "color": "#0b2027"
 },
 {
  "id": "veiled-skull-vi",
  "type": "image",
  "title": "Veiled Skull VI",
  "file": "media/veiled-skull-vi.jpg",
  "thumb": "thumbs/veiled-skull-vi.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Veiled skull portrait, sixth in the series.",
  "tags": [
   "skull",
   "veil",
   "gothic"
  ],
  "featured": false,
  "order": 12,
  "w": 512,
  "h": 640,
  "color": "#212f3c"
 },
 {
  "id": "veiled-skull-vii",
  "type": "image",
  "title": "Veiled Skull VII",
  "file": "media/veiled-skull-vii.jpg",
  "thumb": "thumbs/veiled-skull-vii.jpg",
  "collection": "Veiled Skulls",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Veiled skull portrait, seventh in the series.",
  "tags": [
   "skull",
   "veil",
   "gothic"
  ],
  "featured": false,
  "order": 13,
  "w": 512,
  "h": 640,
  "color": "#161e1f"
 },
 {
  "id": "neon-ink-study",
  "type": "image",
  "title": "Neon Ink Study",
  "file": "media/neon-ink-study.jpg",
  "thumb": "thumbs/neon-ink-study.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19",
  "series": "Portraits",
  "desc": "Ink-dark portrait lit with neon.",
  "tags": [
   "neon",
   "ink",
   "dark"
  ],
  "featured": false,
  "order": 14,
  "w": 512,
  "h": 640,
  "color": "#1f0b2e"
 },
 {
  "id": "web-mask",
  "type": "image",
  "title": "Web Mask",
  "file": "media/web-mask.jpg",
  "thumb": "thumbs/web-mask.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19",
  "series": "Portraits",
  "desc": "Face veiled by fine webbing.",
  "tags": [
   "web",
   "mask",
   "dark"
  ],
  "featured": false,
  "order": 15,
  "w": 512,
  "h": 640,
  "color": "#2e1b14"
 },
 {
  "id": "red-room",
  "type": "image",
  "title": "Red Room",
  "file": "media/red-room.jpg",
  "thumb": "thumbs/red-room.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19",
  "series": "Portraits",
  "desc": "Figure bathed in saturated red.",
  "tags": [
   "red",
   "mood",
   "portrait"
  ],
  "featured": false,
  "order": 16,
  "w": 512,
  "h": 640,
  "color": "#590e0e"
 },
 {
  "id": "silver-lace",
  "type": "image",
  "title": "Silver Lace",
  "file": "media/silver-lace.jpg",
  "thumb": "thumbs/silver-lace.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19",
  "series": "Portraits",
  "desc": "Silver lace over pale skin.",
  "tags": [
   "silver",
   "lace",
   "portrait"
  ],
  "featured": false,
  "order": 17,
  "w": 512,
  "h": 640,
  "color": "#2a272d"
 },
 {
  "id": "pastel-grin",
  "type": "image",
  "title": "Pastel Grin",
  "file": "media/pastel-grin.jpg",
  "thumb": "thumbs/pastel-grin.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Soft pastel palette with a wide grin.",
  "tags": [
   "pastel",
   "grin",
   "portrait"
  ],
  "featured": false,
  "order": 18,
  "w": 512,
  "h": 640,
  "color": "#2a2d35"
 },
 {
  "id": "laughing-in-bloom",
  "type": "image",
  "title": "Laughing in Bloom",
  "file": "media/laughing-in-bloom.jpg",
  "thumb": "thumbs/laughing-in-bloom.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Laughter among flowers.",
  "tags": [
   "flowers",
   "joy",
   "portrait"
  ],
  "featured": false,
  "order": 19,
  "w": 512,
  "h": 640,
  "color": "#251915"
 },
 {
  "id": "rainbow-braid",
  "type": "image",
  "title": "Rainbow Braid",
  "file": "media/rainbow-braid.jpg",
  "thumb": "thumbs/rainbow-braid.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Long braid in rainbow color.",
  "tags": [
   "braid",
   "color",
   "portrait"
  ],
  "featured": false,
  "order": 20,
  "w": 512,
  "h": 640,
  "color": "#2a2521"
 },
 {
  "id": "monochrome-ember",
  "type": "image",
  "title": "Monochrome Ember",
  "file": "media/monochrome-ember.jpg",
  "thumb": "thumbs/monochrome-ember.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "Near-monochrome portrait with ember glow.",
  "tags": [
   "monochrome",
   "ember",
   "portrait"
  ],
  "featured": false,
  "order": 21,
  "w": 512,
  "h": 640,
  "color": "#3e302c"
 },
 {
  "id": "rorschach-skull",
  "type": "image",
  "title": "Rorschach Skull",
  "file": "media/rorschach-skull.jpg",
  "thumb": "thumbs/rorschach-skull.jpg",
  "collection": "Ink and Neon",
  "date": "2026-10-19",
  "series": "Portraits",
  "desc": "Skull formed from an ink-blot symmetry.",
  "tags": [
   "rorschach",
   "skull",
   "ink"
  ],
  "featured": false,
  "order": 22,
  "w": 512,
  "h": 640,
  "color": "#433f3a"
 },
 {
  "id": "wildflower-bride",
  "type": "image",
  "title": "Wildflower Bride",
  "file": "media/wildflower-bride.jpg",
  "thumb": "thumbs/wildflower-bride.jpg",
  "collection": "Fantasy Portraits",
  "date": "2026-10-18",
  "series": "Portraits",
  "desc": "A bride dressed in wildflowers.",
  "tags": [
   "bride",
   "flowers",
   "fantasy"
  ],
  "featured": false,
  "order": 23,
  "w": 512,
  "h": 640,
  "color": "#3d394a"
 },
 {
  "id": "spotlight-gown",
  "type": "video",
  "title": "Spotlight Gown",
  "file": "media/spotlight-gown.mp4",
  "thumb": "thumbs/spotlight-gown.jpg",
  "collection": "Motion",
  "date": "2026-11-11",
  "series": "Motion",
  "desc": "A gown under stage light, in motion.",
  "tags": [
   "video",
   "gown",
   "stage"
  ],
  "featured": false,
  "order": 27,
  "w": 640,
  "h": 360,
  "color": "#141920"
 },
 {
  "id": "fern-elk-antlers",
  "type": "video",
  "title": "Fern Elk Antlers",
  "file": "media/fern-elk-antlers.mp4",
  "thumb": "thumbs/fern-elk-antlers.jpg",
  "collection": "Motion",
  "date": "2026-11-11",
  "series": "Motion",
  "desc": "Elk with fern antlers, animated.",
  "tags": [
   "video",
   "elk",
   "nature"
  ],
  "featured": false,
  "order": 28,
  "w": 640,
  "h": 360,
  "color": "#3f3736"
 },
 {
  "id": "violet-dread-creature",
  "type": "video",
  "title": "Violet Dread Creature",
  "file": "media/violet-dread-creature.mp4",
  "thumb": "thumbs/violet-dread-creature.jpg",
  "collection": "Motion",
  "date": "2026-11-11",
  "series": "Motion",
  "desc": "A violet creature stirring, animated.",
  "tags": [
   "video",
   "creature",
   "violet"
  ],
  "featured": false,
  "order": 29,
  "w": 640,
  "h": 360,
  "color": "#302a25"
 }
];
