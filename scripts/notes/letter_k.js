// letter_k.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_k.js");

const LETTER_K_WORD_LIST = ["kite","bake","skin","knee","knife","know","acknowledge","back","clock","rocket"];
const LETTER_K_WORDS = WORDS.filter(w => LETTER_K_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundK(word){ const w = LETTER_K_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkK(word){ return `<span class="letter-word" onclick="playWordSoundK('${word}')" oncontextmenu="openWordK('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_K(letter) {
  return `
    <h3>K = Voiceless Velar Stop /k/</h3>
    <p><b>Examples:</b> ${wordLinkK("kite")}, ${wordLinkK("bake")}, ${wordLinkK("skin")}</p>

    <h3>Silent K before N</h3>
    <p><b>Phonics rule:</b> K is silent when it appears before N at the beginning of a word</p>
    <p><b>Examples:</b> knee, ${wordLinkK("knife")}, ${wordLinkK("know")}</p>
    <p><b>Exceptions:</b> ${wordLinkK("acknowledge")}</p>

    <h3>K in CK = /k/</h3>
    <p><b>Phonics rule:</b> CK is used after a short vowel and represents a single /k/ sound</p>
    <p><b>Examples:</b> ${wordLinkK("back")}, ${wordLinkK("clock")}, ${wordLinkK("rocket")}</p>
  `;
}

function openWordK(word) {
  const w = LETTER_K_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
