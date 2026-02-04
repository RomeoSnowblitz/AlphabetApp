// letter_w.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_w.js");

const LETTER_W_WORD_LIST = ["we","water","win","write","wrong","wrist","what","when","where","whole","who","sword","two","answer","new","few","now","how","cow","saw","draw","law","wolf","woman","wood"];
const LETTER_W_WORDS = WORDS.filter(w => LETTER_W_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundW(word){ const w = LETTER_W_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkW(word){ return `<span class="letter-word" onclick="playWordSoundW('${word}')" oncontextmenu="openWordW('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_W(letter) {
  return `
    <h3>W = Voiced Labio-Velar Glide /w/ (semi-vowel)</h3>
    <p><b>Phonics rule:</b> W usually makes the /w/ sound at the beginning of a syllable</p>
    <p><b>Examples:</b> ${wordLinkW("we")}, ${wordLinkW("water")}, ${wordLinkW("win")}</p>

    <h3>Silent W before R</h3>
    <p><b>Phonics rule:</b> W is silent when it comes before R at the beginning of a word</p>
    <p><b>Examples:</b> ${wordLinkW("write")}, ${wordLinkW("wrong")}, ${wordLinkW("wrist")}</p>

    <h3>W in WH- (some words)</h3>
    <p><b>Silent W:</b> ${wordLinkW("what")}, ${wordLinkW("when")}, ${wordLinkW("where")}</p>
    <p><b>Silent H exceptions:</b> ${wordLinkW("whole")}, ${wordLinkW("who")}</p>

    <h3>W silent after vowels</h3>
    <p><b>Phonics rule:</b> W may be silent after a vowel in some words</p>
    <p><b>Examples:</b> ${wordLinkW("sword")}, ${wordLinkW("two")}</p>
    <p><b>Exception:</b> ${wordLinkW("answer")}</p>

    <h3>EW as a vowel glide</h3>
    <p><b>Phonics rule:</b> pronounced as /ju/ or /u/</p>
    <p><b>Examples:</b> ${wordLinkW("new")}, ${wordLinkW("few")}</p>

    <h3>W in diphthongs</h3>
    <p><b>ow /aʊ/:</b> ${wordLinkW("now")}, ${wordLinkW("how")}, ${wordLinkW("cow")}</p>
    <p><b>aw /ɔ/:</b> ${wordLinkW("saw")}, ${wordLinkW("draw")}, ${wordLinkW("law")}</p>

    <h3>W = /ʊ/ or /u/ influence (semi-vowel)</h3>
    <p><b>Phonics rule:</b> W influences the vowel before it</p>
    <p><b>Examples:</b> ${wordLinkW("wolf")}, ${wordLinkW("woman")}, ${wordLinkW("wood")}</p>
  `;
}

function openWordW(word) {
  const w = LETTER_W_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
