// letter_r.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_r.js");

const LETTER_R_WORD_LIST = ["red","carry","car","start","hard","her","term","better","bird","first","shirt","for","north","story","turn","nurse","purple","butter","teacher","mother","surprise"];
const LETTER_R_WORDS = WORDS.filter(w => LETTER_R_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundR(word){ const w = LETTER_R_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkR(word){ return `<span class="letter-word" onclick="playWordSoundR('${word}')" oncontextmenu="openWordR('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_R(letter) {
  return `
    <h3>R = Rhotic R /r/ (semi-vowel)</h3>
    <p><b>Examples:</b> ${wordLinkR("red")}, ${wordLinkR("carry")}, ${wordLinkR("car")}</p>

    <h3>R-controlled vowels</h3>
    <p><b>Phonics rule:</b> A vowel followed by R changes its sound</p>
    <p><b>Examples:</b> ${wordLinkR("car")} (/ɑr/), ${wordLinkR("her")} (/ɝ/), ${wordLinkR("bird")} (/ɝ/)</p>

    <h3>AR = /ɑr/</h3>
    <p><b>Phonics rule:</b> A followed by R produces /ɑr/</p>
    <p><b>Examples:</b> ${wordLinkR("car")}, ${wordLinkR("start")}, ${wordLinkR("hard")}</p>

    <h3>ER = /ɝ/ or /ɚ/</h3>
    <p><b>Phonics rule:</b> E followed by R produces an R-controlled vowel</p>
    <p><b>Examples:</b> ${wordLinkR("her")}, ${wordLinkR("term")}, ${wordLinkR("better")}</p>

    <h3>IR = /ɝ/ or /ɚ/</h3>
    <p><b>Phonics rule:</b> I is silent</p>
    <p><b>Examples:</b> ${wordLinkR("bird")}, ${wordLinkR("first")}, ${wordLinkR("shirt")}</p>

    <h3>OR = /ɔr/ or /ɑr/</h3>
    <p><b>Phonics rule:</b> O followed by R produces an R-controlled vowel</p>
    <p><b>Examples:</b> ${wordLinkR("for")}, ${wordLinkR("north")}, ${wordLinkR("story")}</p>

    <h3>UR = /ɝ/ or /ɚ/</h3>
    <p><b>Phonics rule:</b> U followed by R produces an R-controlled vowel</p>
    <p><b>Examples:</b> ${wordLinkR("turn")}, ${wordLinkR("nurse")}, ${wordLinkR("purple")}</p>

    <h3>R as a syllabic consonant</h3>
    <p><b>Phonics rule:</b> R can form a syllable without a vowel</p>
    <p><b>Examples:</b> ${wordLinkR("butter")}, ${wordLinkR("teacher")}, ${wordLinkR("mother")}</p>

    <h3>Silent R (sight words)</h3>
    <p><b>Examples:</b> ${wordLinkR("surprise")} (first R is silent)</p>
  `;
}

function openWordR(word) {
  const w = LETTER_R_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
