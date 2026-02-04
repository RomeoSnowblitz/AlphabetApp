// letter_s.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_s.js");

const LETTER_S_WORD_LIST = ["sun","basic","cats","rose","music","dogs","house","special","vision","measure","decision","island","aisle","debris","scene","science","scissors","fascinate","crescendo","buses"];
const LETTER_S_WORDS = WORDS.filter(w => LETTER_S_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundS(word){ const w = LETTER_S_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkS(word){ return `<span class="letter-word" onclick="playWordSoundS('${word}')" oncontextmenu="openWordS('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_S(letter) {
  return `
    <h3>S = Voiceless Alveolar Fricative /s/</h3>
    <p><b>Phonics rule:</b> S usually makes the /s/ sound</p>
    <p><b>Examples:</b> ${wordLinkS("sun")}, ${wordLinkS("basic")}, ${wordLinkS("cats")}</p>

    <h3>S = /z/</h3>
    <p><b>Phonics rule:</b> S becomes voiced (/z/) between vowels or after a voiced sound</p>
    <p><b>Examples:</b> ${wordLinkS("rose")}, ${wordLinkS("music")}, ${wordLinkS("dogs")}</p>
    <p><b>Exceptions:</b> ${wordLinkS("house")} (noun /s/ vs verb /z/)</p>

    <h3>S = /ʃ/ ("sh" sound)</h3>
    <p><b>Phonics rule:</b> S followed by i, u, or c may produce /ʃ/</p>
    <p><b>Examples:</b> sure, ${wordLinkS("special")}</p>

    <h3>S = /ʒ/ ("zh" sound)</h3>
    <p><b>Phonics rule:</b> Voiced palatalization when Z and Sh rule apply together</p>
    <p><b>Examples:</b> ${wordLinkS("vision")}, ${wordLinkS("measure")}, ${wordLinkS("decision")}</p>

    <h3>Silent S</h3>
    <p><b>Phonics rule:</b> Historical / orthographic S</p>
    <p><b>Examples:</b> ${wordLinkS("island")}, ${wordLinkS("aisle")}, ${wordLinkS("debris")}</p>

    <h3>S in SC = /s/</h3>
    <p><b>Phonics rule:</b> SC before e, i, or y produces /s/</p>
    <p><b>Examples:</b> ${wordLinkS("scene")}, ${wordLinkS("science")}, ${wordLinkS("scissors")}</p>

    <h3>S in SC = /ʃ/</h3>
    <p><b>Phonics rule:</b> SC before i may produce /ʃ/</p>
    <p><b>Examples:</b> conscience, ${wordLinkS("fascinate")}, ${wordLinkS("crescendo")}</p>

    <h3>S in suffix -S / -ES (plural / possessive)</h3>
    <p><b>Phonics rule:</b> -s is pronounced /s/, /z/, or /ɪz/ depending on the preceding sound</p>
    <p><b>Examples:</b> ${wordLinkS("cats")} (/s/), ${wordLinkS("dogs")} (/z/), ${wordLinkS("buses")} (/ɪz/)</p>
  `;
}

function openWordS(word) {
  const w = LETTER_S_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
