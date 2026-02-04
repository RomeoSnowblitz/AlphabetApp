// letter_c.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_c.js");

const LETTER_C_WORD_LIST = ["cat","cold","cup","city","center","cycle","special","facial","official","church","chair","teacher","back","clock","thick","muscle","indict","yacht","act","fact","science","scene","scissors","school","scope","conscience","fascinate","crescendo","accept","accident","succeed","flaccid","chorus","chaos","character","chef"];
const LETTER_C_WORDS = WORDS.filter(w => LETTER_C_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundC(word){ const w = LETTER_C_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkC(word){ return `<span class="letter-word" onclick="playWordSoundC('${word}')" oncontextmenu="openWordC('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_C(letter) {
  return `
    <h3>C = Hard C /k/</h3>
    <p><b>Phonics rule:</b> C usually makes the /k/ sound when followed by a, o, u, or a consonant</p>
    <p><b>Examples:</b> ${wordLinkC("cat")}, ${wordLinkC("cold")}, ${wordLinkC("cup")}</p>

    <h3>C = Soft C /s/</h3>
    <p><b>Phonics rule:</b> C makes the /s/ sound when followed by e, i, or y</p>
    <p><b>Examples:</b> ${wordLinkC("city")}, ${wordLinkC("center")}, ${wordLinkC("cycle")}</p>
    <p><b>Exceptions:</b> "tic" is always pronounced with /k/</p>

    <h3>C = /ʃ/ ("sh" sound)</h3>
    <p><b>Phonics rule:</b> C followed by i, e, or y can become /ʃ/ when part of certain suffixes (e.g. -cial, -tial, -cean)</p>
    <p><b>Examples:</b> ${wordLinkC("special")}, ${wordLinkC("facial")}, ${wordLinkC("official")}</p>

    <h3>C = /tʃ/ ("ch" sound)</h3>
    <p><b>Phonics rule:</b> In some words, C (usually in ch) produces /tʃ/</p>
    <p><b>Examples:</b> ${wordLinkC("church")}, ${wordLinkC("chair")}, ${wordLinkC("teacher")}</p>

    <h3>Silent C before K</h3>
    <p><b>Phonics rule:</b> C is silent when followed by K</p>
    <p><b>Examples:</b> ${wordLinkC("back")}, ${wordLinkC("clock")}, ${wordLinkC("thick")}</p>

    <h3>Silent C before T</h3>
    <p><b>Phonics rule:</b> C is silent in some -ct- clusters</p>
    <p><b>Examples:</b> muscle, ${wordLinkC("indict")}, ${wordLinkC("yacht")}</p>
    <p><b>Exceptions:</b> ${wordLinkC("act")}, ${wordLinkC("fact")} (C is pronounced)</p>

    <h3>Silent C in SC before E, I, Y</h3>
    <p><b>Phonics rule:</b> In sc before e, i, or y, C is silent and S makes /s/</p>
    <p><b>Examples:</b> ${wordLinkC("science")}, ${wordLinkC("scene")}, ${wordLinkC("scissors")}</p>
    <p><b>Exceptions:</b> ${wordLinkC("school")}, ${wordLinkC("scope")} (hard C because of O)</p>

    <h3>SC = /ʃ/ ("sh" sound)</h3>
    <p><b>Phonics rule:</b> sc before i, e, or y may produce /ʃ/ (Latin origin)</p>
    <p><b>Examples:</b> conscience, ${wordLinkC("fascinate")}, ${wordLinkC("crescendo")}</p>

    <h3>C in Double Consonants (CC)</h3>
    <p><b>Phonics rule:</b> When cc is followed by e, i, or y, the first C is /k/ and the second is /s/</p>
    <p><b>Examples:</b> ${wordLinkC("accept")}, ${wordLinkC("accident")}, ${wordLinkC("succeed")}</p>
    <p><b>Exceptions:</b> ${wordLinkC("flaccid")} (both Cs produce /s/)</p>

    <h3>C = /k/ in CH (Greek origin)</h3>
    <p><b>Phonics rule:</b> CH is pronounced /k/ in words of Greek origin</p>
    <p><b>Examples:</b> chorus, ${wordLinkC("chaos")}, ${wordLinkC("character")}</p>
    <p><b>Exceptions:</b> ${wordLinkC("chef")} (French origin, /ʃ/)</p>
  `;
}

function openWordC(word) {
  const w = LETTER_C_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
