// letter_z.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_z.js");

const LETTER_Z_WORD_LIST = ["zoo","lazy","buzz","quartz","waltz","blitz","dogs","cars","bees"];
const LETTER_Z_WORDS = WORDS.filter(w => LETTER_Z_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundZ(word){ const w = LETTER_Z_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkZ(word){ return `<span class="letter-word" onclick="playWordSoundZ('${word}')" oncontextmenu="openWordZ('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_Z(letter) {
  return `
    <h3>Z = Voiced Alveolar Fricative /z/</h3>
    <p><b>Phonics rule:</b> Z usually makes the /z/ sound</p>
    <p><b>Examples:</b> ${wordLinkZ("zoo")}, ${wordLinkZ("lazy")}, ${wordLinkZ("buzz")}</p>

    <h3>Z after T = /ts/</h3>
    <p><b>Phonics rule:</b> Z may be pronounced /s/ in a small number of words</p>
    <p><b>Examples:</b> ${wordLinkZ("quartz")}, ${wordLinkZ("waltz")}, ${wordLinkZ("blitz")}</p>

    <h3>Z in plural / possessive endings</h3>
    <p><b>Phonics rule:</b> Plural -s or -es is pronounced /z/ after voiced sounds</p>
    <p><b>Examples:</b> ${wordLinkZ("dogs")}, ${wordLinkZ("cars")}, ${wordLinkZ("bees")}</p>

    <h3>Silent Z (extremely rare, French origin)</h3>
    <p><b>Examples:</b> rendezvous (Z reduced), laissez-faire</p>
  `;
}

function openWordZ(word) {
  const w = LETTER_Z_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
