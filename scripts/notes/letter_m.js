// letter_m.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_m.js");

const LETTER_M_WORD_LIST = ["man","summer","room","mnemonic"];
const LETTER_M_WORDS = WORDS.filter(w => LETTER_M_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundM(word){ const w = LETTER_M_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkM(word){ return `<span class="letter-word" onclick="playWordSoundM('${word}')" oncontextmenu="openWordM('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_M(letter) {
  return `
    <h3>M = Voiced Bilabial Nasal /m/</h3>
    <p><b>Phonics rule:</b> M usually makes the /m/ sound</p>
    <p><b>Examples:</b> ${wordLinkM("man")}, ${wordLinkM("summer")}, ${wordLinkM("room")}</p>

    <h3>Silent M (extremely rare / sight words)</h3>
    <p><b>Examples:</b> ${wordLinkM("mnemonic")}</p>
  `;
}

function openWordM(word) {
  const w = LETTER_M_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
