// letter_j.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_j.js");

const LETTER_J_WORD_LIST = ["jam","enjoy","jump","jalapeño","déjà vu"];
const LETTER_J_WORDS = WORDS.filter(w => LETTER_J_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundJ(word){ const w = LETTER_J_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkJ(word){ return `<span class="letter-word" onclick="playWordSoundJ('${word.replace(/'/g, "\\'")}')" oncontextmenu="openWordJ('${word.replace(/'/g, "\\'")}'); return false;">${word}</span>`; }

function LETTER_NOTES_J(letter) {
  return `
    <h3>J = Voiced Postalveolar Affricate /ʤ/ ("j" sound)</h3>
    <p><b>Examples:</b> ${wordLinkJ("jam")}, ${wordLinkJ("enjoy")}, ${wordLinkJ("jump")}</p>

    <h3>J = /h/ (Spanish origin)</h3>
    <p><b>Examples:</b> ${wordLinkJ("jalapeño")}</p>

    <h3>J = /ʒ/ (French origin)</h3>
    <p><b>Examples:</b> ${wordLinkJ("déjà vu")}</p>
  `;
}

function openWordJ(word) {
  const w = LETTER_J_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
