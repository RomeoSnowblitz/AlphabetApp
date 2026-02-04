// letter_f.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_f.js");

const LETTER_F_WORD_LIST = ["fan","coffee","leaf","of","laugh","cough","tough","though","through","phone","photo","graph","fifth","knife","knives","life","lives","wolf","wolves"];
const LETTER_F_WORDS = WORDS.filter(w => LETTER_F_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundF(word){ const w = LETTER_F_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkF(word){ return `<span class="letter-word" onclick="playWordSoundF('${word}')" oncontextmenu="openWordF('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_F(letter) {
  return `
    <h3>F = Voiceless Labiodental Fricative /f/</h3>
    <p><b>Phonics rule:</b> F usually makes the /f/ sound</p>
    <p><b>Examples:</b> ${wordLinkF("fan")}, ${wordLinkF("coffee")}, ${wordLinkF("leaf")}</p>
    <p><b>Exceptions:</b> ${wordLinkF("of")} /ʌv/</p>

    <h3>F in GH = /f/</h3>
    <p><b>Phonics rule:</b> GH is pronounced /f/ at the end of some words</p>
    <p><b>Examples:</b> ${wordLinkF("laugh")}, ${wordLinkF("cough")}, ${wordLinkF("tough")}</p>
    <p><b>Exceptions:</b> ${wordLinkF("though")}, ${wordLinkF("through")} (GH is silent)</p>

    <h3>F in PH = /f/ (Greek origin)</h3>
    <p><b>Phonics rule:</b> PH is pronounced /f/ in words of Greek origin</p>
    <p><b>Examples:</b> ${wordLinkF("phone")}, ${wordLinkF("photo")}, ${wordLinkF("graph")}</p>

    <h3>Silent F (very rare / historical)</h3>
    <p><b>Examples:</b> ${wordLinkF("fifth")} (second F is silent)</p>

    <h3>F → /v/ when plural</h3>
    <p><b>Phonics rule:</b> F changes to V when plural: knife → ${wordLinkF("knives")}, life → ${wordLinkF("lives")}, wolf → ${wordLinkF("wolves")}</p>
  `;
}

function openWordF(word) {
  const w = LETTER_F_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
