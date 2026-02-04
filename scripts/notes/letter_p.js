// letter_p.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_p.js");

const LETTER_P_WORD_LIST = ["pen","happy","stop","psychology","psalm","pneumonia","pterodactyl","receipt","opt","captain","apple","supper","phone","photo","graph","cupboard","raspberry","corps"];
const LETTER_P_WORDS = WORDS.filter(w => LETTER_P_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundP(word){ const w = LETTER_P_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkP(word){ return `<span class="letter-word" onclick="playWordSoundP('${word}')" oncontextmenu="openWordP('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_P(letter) {
  return `
    <h3>P = Voiceless Bilabial Stop /p/</h3>
    <p><b>Phonics rule:</b> P usually makes the /p/ sound</p>
    <p><b>Examples:</b> ${wordLinkP("pen")}, ${wordLinkP("happy")}, ${wordLinkP("stop")}</p>

    <h3>Silent P before S (Greek origin)</h3>
    <p><b>Phonics rule:</b> P is silent when it appears before S at the beginning of a word</p>
    <p><b>Examples:</b> ${wordLinkP("psychology")}, ${wordLinkP("psalm")}, pseudonym</p>

    <h3>Silent P before N (Greek origin)</h3>
    <p><b>Phonics rule:</b> P is silent when it appears before N at the beginning of a word</p>
    <p><b>Examples:</b> ${wordLinkP("pneumonia")}, pneumatic</p>

    <h3>Silent P before T</h3>
    <p><b>Phonics rule:</b> P is silent when it appears before T in some words</p>
    <p><b>Examples:</b> ptarmigan, ${wordLinkP("pterodactyl")}, ${wordLinkP("receipt")}</p>
    <p><b>Exceptions:</b> ${wordLinkP("opt")}, ${wordLinkP("captain")} (P is pronounced)</p>

    <h3>P in Double Consonants (PP)</h3>
    <p><b>Phonics rule:</b> The first P is silent</p>
    <p><b>Examples:</b> ${wordLinkP("happy")}, ${wordLinkP("apple")}, ${wordLinkP("supper")}</p>

    <h3>P in PH = /f/ (Greek origin)</h3>
    <p><b>Phonics rule:</b> PH is pronounced /f/ in words of Greek origin</p>
    <p><b>Examples:</b> ${wordLinkP("phone")}, ${wordLinkP("photo")}, ${wordLinkP("graph")}</p>

    <h3>P in PB = /b/ (unique)</h3>
    <p><b>Example:</b> ${wordLinkP("cupboard")}</p>

    <h3>Silent P (sight words)</h3>
    <p><b>Examples:</b> ${wordLinkP("raspberry")}, ${wordLinkP("corps")}</p>
  `;
}

function openWordP(word) {
  const w = LETTER_P_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
