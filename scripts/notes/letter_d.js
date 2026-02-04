// letter_d.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_d.js");

const LETTER_D_WORD_LIST = ["dog","ladder","hand","rider","butter","edge","bridge","badge","educate","individual","gradual","add","sudden","played","called","cleaned","jumped","laughed","asked","wanted","needed","added","Wednesday","handkerchief","grandfather"];
const LETTER_D_WORDS = WORDS.filter(w => LETTER_D_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundD(word){ const w = LETTER_D_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkD(word){ return `<span class="letter-word" onclick="playWordSoundD('${word}')" oncontextmenu="openWordD('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_D(letter) {
  return `
    <h3>D = Voiced Alveolar Stop /d/</h3>
    <p><b>Phonics rule:</b> D usually makes the voiced /d/ sound at the beginning or within a syllable</p>
    <p><b>Examples:</b> ${wordLinkD("dog")}, ladder, ${wordLinkD("hand")}</p>
    <p><b>Notes:</b> This is the default and most consistent sound of D</p>

    <h3>D = Flapping /ɾ/ (sounds like soft T/D)</h3>
    <p><b>Phonics rule:</b> When D occurs between two vowels and the second vowel is unstressed, it is pronounced as a flap /ɾ/</p>
    <p><b>Examples:</b> ladder, ${wordLinkD("rider")}, ${wordLinkD("butter")}</p>

    <h3>Silent D before G</h3>
    <p><b>Phonics rule:</b> D is silent when followed by G and G makes the /ʤ/ sound</p>
    <p><b>Examples:</b> ${wordLinkD("edge")}, ${wordLinkD("bridge")}, ${wordLinkD("badge")}</p>

    <h3>Silent D in -ND- (casual American speech)</h3>
    <p><b>Phonics rule:</b> When a word is plural, D is often dropped in the ND cluster (e.g. hand → "han", friend → "fren", sand → "san")</p>

    <h3>D = DI/DU Palatalization /ʤ/ ("j" sound)</h3>
    <p><b>Phonics rule:</b> D followed by I or U may produce a /ʤ/ sound in Latinate words</p>
    <p><b>Examples:</b> ${wordLinkD("educate")}, ${wordLinkD("individual")}, ${wordLinkD("gradual")}</p>

    <h3>D in Double Consonants (DD)</h3>
    <p><b>Phonics rule:</b> First D is usually silent</p>
    <p><b>Examples:</b> ${wordLinkD("add")}, ladder, ${wordLinkD("sudden")}</p>

    <h3>D as /d/ in Past Tense -ED</h3>
    <p><b>Phonics rule:</b> -ed is pronounced /d/ when the base verb ends in a voiced sound (except D)</p>
    <p><b>Examples:</b> ${wordLinkD("played")}, ${wordLinkD("called")}, ${wordLinkD("cleaned")}</p>

    <h3>D as /t/ in Past Tense -ED</h3>
    <p><b>Phonics rule:</b> -ed is pronounced /t/ when the base verb ends in a voiceless sound</p>
    <p><b>Examples:</b> ${wordLinkD("jumped")}, ${wordLinkD("laughed")}, ${wordLinkD("asked")}</p>

    <h3>D as /ɪd/ in Past Tense -ED</h3>
    <p><b>Phonics rule:</b> -ed is pronounced /ɪd/ when the base verb ends in D or T</p>
    <p><b>Examples:</b> ${wordLinkD("wanted")}, needed, ${wordLinkD("added")}</p>

    <h3>Silent D (irregular / historical)</h3>
    <p><b>Phonics rule:</b> Historical / orthographic D</p>
    <p><b>Examples:</b> ${wordLinkD("Wednesday")}, ${wordLinkD("handkerchief")}, ${wordLinkD("grandfather")}</p>
  `;
}

function openWordD(word) {
  const w = LETTER_D_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
