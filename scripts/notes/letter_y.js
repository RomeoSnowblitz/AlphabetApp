// letter_y.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_y.js");

const LETTER_Y_WORD_LIST = ["yes","yellow","yard","my","try","fly","happy","baby","candy","gym","myth","system","type","cycle","apply","analysis","day","play","stay","key","money","valley","cry","shy","dry"];
const LETTER_Y_WORDS = WORDS.filter(w => LETTER_Y_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundY(word){ const w = LETTER_Y_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkY(word){ return `<span class="letter-word" onclick="playWordSoundY('${word}')" oncontextmenu="openWordY('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_Y(letter) {
  return `
    <h3>Y = /j/ (semi-vowel)</h3>
    <p><b>Phonics rule:</b> Y at the beginning of a word or syllable makes the /j/ sound</p>
    <p><b>Examples:</b> ${wordLinkY("yes")}, ${wordLinkY("yellow")}, ${wordLinkY("yard")}</p>

    <h3>Y = Long I /aɪ/</h3>
    <p><b>Phonics rule:</b> Y at the end of a one-syllable word usually says /aɪ/</p>
    <p><b>Examples:</b> ${wordLinkY("my")}, ${wordLinkY("try")}, ${wordLinkY("fly")}</p>

    <h3>Y = Long E /i/</h3>
    <p><b>Phonics rule:</b> Y at the end of a multi-syllable word usually says /i/</p>
    <p><b>Examples:</b> ${wordLinkY("happy")}, ${wordLinkY("baby")}, ${wordLinkY("candy")}</p>

    <h3>Y = Short I /ɪ/</h3>
    <p><b>Phonics rule:</b> Y in a closed syllable often sounds like short I</p>
    <p><b>Examples:</b> ${wordLinkY("gym")}, ${wordLinkY("myth")}, ${wordLinkY("system")}</p>

    <h3>Y = /aɪ/ in stressed syllables</h3>
    <p><b>Phonics rule:</b> Y in a stressed syllable may produce /aɪ/</p>
    <p><b>Examples:</b> ${wordLinkY("type")}, ${wordLinkY("cycle")}, ${wordLinkY("apply")}</p>

    <h3>Y = Schwa /ə/ (rare sight words)</h3>
    <p><b>Phonics rule:</b> Y in an unstressed syllable may reduce to schwa</p>
    <p><b>Examples:</b> ${wordLinkY("analysis")}, syringe</p>

    <h3>Y in diphthongs</h3>
    <p><b>ay /eɪ/:</b> ${wordLinkY("day")}, ${wordLinkY("play")}, ${wordLinkY("stay")}</p>
    <p><b>ey /i/:</b> ${wordLinkY("key")}, ${wordLinkY("money")}, ${wordLinkY("valley")}</p>

    <h3>Y as a vowel placeholder</h3>
    <p><b>Phonics rule:</b> Y is used when English spelling rules block I at the end of words</p>
    <p><b>Examples:</b> ${wordLinkY("cry")}, ${wordLinkY("shy")}, ${wordLinkY("dry")}</p>
  `;
}

function openWordY(word) {
  const w = LETTER_Y_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
