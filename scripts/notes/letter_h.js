// letter_h.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_h.js");

const LETTER_H_WORD_LIST = ["hat","help","behind","what","when","where","shame","thin","phone","chair","chef","chorus","high","night","though","ghost","ghastly","hour","honest","heir","ahead","perhaps","vehicle","rhyme","rhythm","rhinoceros","thin","this","mother"];
const LETTER_H_WORDS = WORDS.filter(w => LETTER_H_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundH(word){ const w = LETTER_H_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkH(word){ return `<span class="letter-word" onclick="playWordSoundH('${word}')" oncontextmenu="openWordH('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_H(letter) {
  return `
    <h3>H = Voiceless Glottal Fricative /h/</h3>
    <p><b>Phonics rule:</b> H usually makes the /h/ sound at the beginning of a syllable</p>
    <p><b>Examples:</b> ${wordLinkH("hat")}, ${wordLinkH("help")}, ${wordLinkH("behind")}</p>

    <h3>Silent H after W</h3>
    <p><b>Phonics rule:</b> H is silent in wh and the sound is just /w/</p>
    <p><b>Examples:</b> ${wordLinkH("what")}, ${wordLinkH("when")}, ${wordLinkH("where")}</p>

    <h3>H in Consonant Blends</h3>
    <p><b>Phonics rule:</b> H keeps its /h/ or contributes to a new sound (sh, th, ph)</p>
    <p><b>Examples:</b> ${wordLinkH("shame")} (sh), ${wordLinkH("thin")} (th), ${wordLinkH("phone")} (ph)</p>

    <h3>H = Silent after C</h3>
    <p><b>Phonics rule:</b> H is silent in ch, contributing to /tʃ/, /ʃ/, or /k/ sounds</p>
    <p><b>Examples:</b> ${wordLinkH("chair")} (/tʃ/), ${wordLinkH("chef")} (/ʃ/), chorus (/k/)</p>

    <h3>Silent H after G</h3>
    <p><b>Phonics rule:</b> H is silent in gh combinations</p>
    <p><b>Examples:</b> ${wordLinkH("high")}, ${wordLinkH("night")}, ${wordLinkH("though")}</p>
    <p><b>Exceptions:</b> ${wordLinkH("ghost")}, ${wordLinkH("ghastly")} (hard G sound)</p>

    <h3>Silent H (French origin)</h3>
    <p><b>Examples:</b> ${wordLinkH("hour")}, ${wordLinkH("honest")}, ${wordLinkH("heir")}</p>

    <h3>H = /h/ in the middle of words</h3>
    <p><b>Phonics rule:</b> H is pronounced when it begins a stressed syllable inside a word</p>
    <p><b>Examples:</b> ${wordLinkH("ahead")}, ${wordLinkH("perhaps")}, ${wordLinkH("vehicle")}</p>

    <h3>Silent H after R (Greek origin)</h3>
    <p><b>Phonics rule:</b> H is silent in rh combinations</p>
    <p><b>Examples:</b> ${wordLinkH("rhyme")}, ${wordLinkH("rhythm")}, ${wordLinkH("rhinoceros")}</p>

    <h3>H in TH = /θ/ or /ð/</h3>
    <p><b>Phonics rule:</b> H combines with T to create a new sound</p>
    <p><b>Examples:</b> ${wordLinkH("thin")} (/θ/), ${wordLinkH("this")} (/ð/), ${wordLinkH("mother")} (/ð/)</p>
  `;
}

function openWordH(word) {
  const w = LETTER_H_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
