// letter_o.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_o.js");

const LETTER_O_WORD_LIST = ["hot","box","dog","go","open","home","boat","toe","snow","love","son","money","move","prove","do","born","fork","all","lemon","harmony","for","north","story","oil","coin","boy","enjoy","cow","now","shout","grow","low","women","though","although","dough","colonel","leopard","people"];
const LETTER_O_WORDS = WORDS.filter(w => LETTER_O_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundO(word){ const w = LETTER_O_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkO(word){ return `<span class="letter-word" onclick="playWordSoundO('${word}')" oncontextmenu="openWordO('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_O(letter) {
  return `
    <h3>Short Vowel O /ɑ/</h3>
    <p><b>Phonics rule:</b> O in a closed syllable (followed by one or more consonants) usually makes /ɑ/</p>
    <p><b>Examples:</b> ${wordLinkO("hot")}, ${wordLinkO("box")}, ${wordLinkO("dog")}</p>

    <h3>Long Vowel O /oʊ/</h3>
    <p><b>Phonics rule:</b> O says its name in an open syllable or with silent E</p>
    <p><b>Examples:</b> ${wordLinkO("go")}, ${wordLinkO("open")}, ${wordLinkO("home")}</p>

    <h3>Vowel teams (oa, oe, ow)</h3>
    <p><b>Examples:</b> ${wordLinkO("boat")}, ${wordLinkO("toe")}, ${wordLinkO("snow")}</p>

    <h3>O = /ʌ/ (short U sound)</h3>
    <p><b>Phonics rule:</b> Irregular vowel shift (sight words)</p>
    <p><b>Examples:</b> ${wordLinkO("love")}, ${wordLinkO("son")}, ${wordLinkO("money")}</p>

    <h3>O = /uː/ (long U sound)</h3>
    <p><b>Phonics rule:</b> Foreign / irregular influence</p>
    <p><b>Examples:</b> ${wordLinkO("move")}, ${wordLinkO("prove")}, ${wordLinkO("do")}</p>

    <h3>O = /ɔ/ (AW sound)</h3>
    <p><b>Phonics rule:</b> O before R or L may produce an /ɔ/ sound</p>
    <p><b>Examples:</b> ${wordLinkO("born")}, ${wordLinkO("fork")}, ${wordLinkO("all")}</p>

    <h3>O = /ə/ (schwa)</h3>
    <p><b>Phonics rule:</b> O in an unstressed syllable often becomes /ə/</p>
    <p><b>Examples:</b> ${wordLinkO("lemon")}, ${wordLinkO("harmony")}</p>

    <h3>O before R = /ɔr/ or /ɑr/</h3>
    <p><b>Phonics rule:</b> O followed by R produces an R-controlled vowel</p>
    <p><b>Examples:</b> ${wordLinkO("for")}, ${wordLinkO("north")}, ${wordLinkO("story")}</p>

    <h3>O in Diphthongs</h3>
    <p><b>oi /ɔɪ/:</b> ${wordLinkO("oil")}, ${wordLinkO("coin")}, boil</p>
    <p><b>oy /ɔɪ/:</b> ${wordLinkO("boy")}, toy, ${wordLinkO("enjoy")}</p>
    <p><b>ow /aʊ/:</b> ${wordLinkO("cow")}, ${wordLinkO("now")}, ${wordLinkO("shout")}</p>
    <p><b>ow /oʊ/:</b> ${wordLinkO("snow")}, ${wordLinkO("grow")}, ${wordLinkO("low")}</p>

    <h3>O = /ɪ/ (reduced / rare)</h3>
    <p><b>Examples:</b> ${wordLinkO("women")}</p>

    <h3>O + UGH = /oʊ/</h3>
    <p><b>Phonics rule:</b> O + GH silent rule</p>
    <p><b>Examples:</b> ${wordLinkO("though")}, ${wordLinkO("although")}, ${wordLinkO("dough")}</p>

    <h3>Silent O</h3>
    <p><b>Examples:</b> ${wordLinkO("colonel")}, ${wordLinkO("leopard")}, ${wordLinkO("people")}</p>
  `;
}

function openWordO(word) {
  const w = LETTER_O_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
