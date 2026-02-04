// letter_x.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_x.js");

const LETTER_X_WORD_LIST = ["box","six","next","exam","exist","exact","xylophone","xenon","anxious","luxury"];
const LETTER_X_WORDS = WORDS.filter(w => LETTER_X_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundX(word){ const w = LETTER_X_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkX(word){ return `<span class="letter-word" onclick="playWordSoundX('${word}')" oncontextmenu="openWordX('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_X(letter) {
  return `
    <h3>X = /ks/</h3>
    <p><b>Phonics rule:</b> X usually represents the consonant cluster /ks/</p>
    <p><b>Examples:</b> ${wordLinkX("box")}, ${wordLinkX("six")}, ${wordLinkX("next")}</p>

    <h3>X = /gz/</h3>
    <p><b>Phonics rule:</b> X becomes /gz/ when it occurs between vowels or before a stressed vowel</p>
    <p><b>Examples:</b> ${wordLinkX("exam")}, ${wordLinkX("exist")}, ${wordLinkX("exact")}</p>

    <h3>X = /z/ (sight words)</h3>
    <p><b>Examples:</b> ${wordLinkX("xylophone")}, ${wordLinkX("xenon")}</p>

    <h3>X = /kʃ/</h3>
    <p><b>Phonics rule:</b> X before i or u may produce /kʃ/</p>
    <p><b>Examples:</b> ${wordLinkX("anxious")}, ${wordLinkX("luxury")}</p>

    <h3>Silent X (French origin)</h3>
    <p><b>Examples:</b> Faux pas</p>
  `;
}

function openWordX(word) {
  const w = LETTER_X_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
