// letter_v.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_v.js");

const LETTER_V_WORD_LIST = ["van","never","love"];
const LETTER_V_WORDS = WORDS.filter(w => LETTER_V_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundV(word){ const w = LETTER_V_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkV(word){ return `<span class="letter-word" onclick="playWordSoundV('${word}')" oncontextmenu="openWordV('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_V(letter) {
  return `
    <h3>V = Voiced Labiodental Fricative /v/</h3>
    <p><b>Phonics rule:</b> V always makes the /v/ sound in American English</p>
    <p><b>Examples:</b> ${wordLinkV("van")}, ${wordLinkV("never")}, ${wordLinkV("love")}</p>
  `;
}

function openWordV(word) {
  const w = LETTER_V_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
