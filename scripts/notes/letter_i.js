// letter_i.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_i.js");

const LETTER_I_WORD_LIST = ["sit","pin","little","ice","light","pie","height","friend","build","animal","pencil","possible","machine","police","pizza","bird","first","mirror","onion","union","million","tie","lie","field","chief","belief","night","high","sight","parliament","receipt"];
const LETTER_I_WORDS = WORDS.filter(w => LETTER_I_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundI(word){ const w = LETTER_I_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkI(word){ return `<span class="letter-word" onclick="playWordSoundI('${word}')" oncontextmenu="openWordI('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_I(letter) {
  return `
    <h3>Short Vowel I /ɪ/</h3>
    <p><b>Phonics rule:</b> I in a closed syllable (followed by one or more consonants) usually makes /ɪ/</p>
    <p><b>Examples:</b> ${wordLinkI("sit")}, pin, ${wordLinkI("little")}</p>

    <h3>Long I /aɪ/</h3>
    <p><b>Phonics rule:</b> I is long when in a vowel team (i_e, igh, ie, ei)</p>
    <p><b>Examples:</b> ice, ${wordLinkI("light")}, ${wordLinkI("pie")}, ${wordLinkI("height")}</p>

    <h3>Silent I</h3>
    <p><b>Phonics rule:</b> I may be silent when another vowel carries the sound</p>
    <p><b>Examples:</b> ${wordLinkI("friend")}, ${wordLinkI("build")}</p>

    <h3>I = /ə/ (schwa)</h3>
    <p><b>Phonics rule:</b> I in an unstressed syllable often becomes /ə/ (sight words)</p>
    <p><b>Examples:</b> ${wordLinkI("animal")}, ${wordLinkI("pencil")}, ${wordLinkI("possible")}</p>

    <h3>I = /iː/ (long E sound)</h3>
    <p><b>Phonics rule:</b> Irregular vowel shift (sight words)</p>
    <p><b>Examples:</b> ${wordLinkI("machine")}, ${wordLinkI("police")}, ${wordLinkI("pizza")}</p>

    <h3>I before R = /ɝ/ or /ɪr/</h3>
    <p><b>Phonics rule:</b> I followed by R produces an R-controlled vowel</p>
    <p><b>Examples:</b> ${wordLinkI("bird")} (/ɝ/), ${wordLinkI("first")} (/ɝ/), ${wordLinkI("mirror")} (/ɪr/)</p>

    <h3>I = /j/ ("y" sound)</h3>
    <p><b>Phonics rule:</b> I may act as a consonant /j/ before another vowel</p>
    <p><b>Examples:</b> ${wordLinkI("onion")}, ${wordLinkI("union")}, ${wordLinkI("million")}</p>

    <h3>I in Diphthongs</h3>
    <p><b>ie /aɪ/:</b> ${wordLinkI("pie")}, ${wordLinkI("tie")}, lie</p>
    <p><b>ie /iː/:</b> ${wordLinkI("field")}, ${wordLinkI("chief")}, ${wordLinkI("belief")}</p>
    <p><b>igh /aɪ/:</b> ${wordLinkI("night")}, ${wordLinkI("high")}, sight</p>

    <h3>Silent I (historical / irregular)</h3>
    <p><b>Examples:</b> ${wordLinkI("parliament")}, ${wordLinkI("receipt")}</p>
  `;
}

function openWordI(word) {
  const w = LETTER_I_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
