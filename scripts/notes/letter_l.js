// letter_l.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_l.js");

const LETTER_L_WORD_LIST = ["lip","light","play","full","milk","help","half","calf","self","shelf","would","could","should","bold","cold","little","table","ruler","salmon","colonel","yolk"];
const LETTER_L_WORDS = WORDS.filter(w => LETTER_L_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundL(word){ const w = LETTER_L_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkL(word){ return `<span class="letter-word" onclick="playWordSoundL('${word}')" oncontextmenu="openWordL('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_L(letter) {
  return `
    <h3>L = /l/ (light L)</h3>
    <p><b>Phonics rule:</b> Light L — an L before a vowel</p>
    <p><b>Examples:</b> lip, ${wordLinkL("light")}, ${wordLinkL("play")}</p>

    <h3>L = /ɫ/ (dark L)</h3>
    <p><b>Phonics rule:</b> Dark L — an L after a vowel</p>
    <p><b>Examples:</b> ${wordLinkL("full")}, ${wordLinkL("milk")}, ${wordLinkL("help")}</p>

    <h3>Silent L before F</h3>
    <p><b>Phonics rule:</b> L is silent before F in certain words</p>
    <p><b>Examples:</b> ${wordLinkL("half")}, ${wordLinkL("calf")}</p>
    <p><b>Exceptions:</b> ${wordLinkL("self")}, ${wordLinkL("shelf")}</p>

    <h3>Silent L before D</h3>
    <p><b>Phonics rule:</b> L is silent before D in some words</p>
    <p><b>Examples:</b> ${wordLinkL("would")}, could, ${wordLinkL("should")}</p>
    <p><b>Exceptions:</b> ${wordLinkL("bold")}, ${wordLinkL("cold")} (L is pronounced)</p>

    <h3>L as a syllabic consonant</h3>
    <p><b>Phonics rule:</b> L can form a syllable without a vowel</p>
    <p><b>Examples:</b> ${wordLinkL("little")}, ${wordLinkL("table")}, ${wordLinkL("ruler")}</p>

    <h3>Silent L (sight words)</h3>
    <p><b>Examples:</b> ${wordLinkL("salmon")}, ${wordLinkL("colonel")} (first L silent), ${wordLinkL("yolk")}</p>
  `;
}

function openWordL(word) {
  const w = LETTER_L_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
