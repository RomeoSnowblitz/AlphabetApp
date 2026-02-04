// letter_u.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_u.js");

const LETTER_U_WORD_LIST = ["cup","luck","sun","use","unicorn","music","rule","June","truth","put","sugar","push","book","butcher","supply","support","turn","burn","nurse","quick","quit","language","author","cause","pause","feud","neutral","Europe","out","house","guess","guide","guitar","blood","flood","country"];
const LETTER_U_WORDS = WORDS.filter(w => LETTER_U_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundU(word){ const w = LETTER_U_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkU(word){ return `<span class="letter-word" onclick="playWordSoundU('${word}')" oncontextmenu="openWordU('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_U(letter) {
  return `
    <h3>Short vowel U /ʌ/</h3>
    <p><b>Phonics rule:</b> U in a closed, stressed syllable usually makes /ʌ/</p>
    <p><b>Examples:</b> ${wordLinkU("cup")}, ${wordLinkU("luck")}, ${wordLinkU("sun")}</p>

    <h3>Long U /juː/ ("you" sound)</h3>
    <p><b>Phonics rule:</b> U at the beginning of a word or after certain consonants says /juː/</p>
    <p><b>Examples:</b> ${wordLinkU("use")}, ${wordLinkU("unicorn")}, ${wordLinkU("music")}</p>

    <h3>Long U /uː/ (no Y-glide)</h3>
    <p><b>Phonics rule:</b> U after r, j, ch, sh, l usually drops the /j/ sound</p>
    <p><b>Examples:</b> ${wordLinkU("rule")}, ${wordLinkU("June")}, ${wordLinkU("truth")}</p>

    <h3>U = /ʊ/ (OO sound)</h3>
    <p><b>Phonics rule:</b> U may sound like /ʊ/ in some closed syllables</p>
    <p><b>Examples:</b> ${wordLinkU("put")}, ${wordLinkU("sugar")}, ${wordLinkU("push")}</p>

    <h3>U = /ʊ/ (sight words)</h3>
    <p><b>Examples:</b> ${wordLinkU("book")}, ${wordLinkU("butcher")}</p>

    <h3>U = /ə/ (schwa)</h3>
    <p><b>Phonics rule:</b> U in an unstressed syllable often becomes schwa</p>
    <p><b>Examples:</b> ${wordLinkU("supply")}, ${wordLinkU("support")}</p>

    <h3>U = /ɝ/ or /ɚ/ (R-controlled)</h3>
    <p><b>Phonics rule:</b> U before R produces an R-controlled vowel</p>
    <p><b>Examples:</b> ${wordLinkU("turn")}, ${wordLinkU("burn")}, ${wordLinkU("nurse")}</p>

    <h3>U in QU rule /w/ sound</h3>
    <p><b>Phonics rule:</b> U after Q or G often represents a /w/ glide</p>
    <p><b>Examples:</b> ${wordLinkU("quick")}, ${wordLinkU("quit")}, ${wordLinkU("language")}</p>

    <h3>U in diphthongs and vowel teams</h3>
    <p><b>au /ɔ/:</b> ${wordLinkU("author")}, ${wordLinkU("cause")}, ${wordLinkU("pause")}</p>
    <p><b>eu /ju/:</b> ${wordLinkU("feud")}, ${wordLinkU("neutral")}, ${wordLinkU("Europe")}</p>
    <p><b>ou /aʊ/:</b> ${wordLinkU("out")}, ${wordLinkU("house")}, loud</p>

    <h3>Silent U</h3>
    <p><b>Examples:</b> ${wordLinkU("guess")}, ${wordLinkU("guide")}, ${wordLinkU("guitar")}</p>

    <h3>U = /ʌ/ in unusual spellings</h3>
    <p><b>Examples:</b> ${wordLinkU("blood")}, ${wordLinkU("flood")}, ${wordLinkU("country")}</p>
  `;
}

function openWordU(word) {
  const w = LETTER_U_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
