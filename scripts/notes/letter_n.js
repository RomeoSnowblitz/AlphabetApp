// letter_n.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_n.js");

const LETTER_N_WORD_LIST = ["net","dinner","sun","runner","tunnel","sing","long","wrong","finger","angle","bank","think","uncle","autumn","column","solemn","sign","design","foreign","signal","ignite"];
const LETTER_N_WORDS = WORDS.filter(w => LETTER_N_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundN(word){ const w = LETTER_N_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkN(word){ return `<span class="letter-word" onclick="playWordSoundN('${word}')" oncontextmenu="openWordN('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_N(letter) {
  return `
    <h3>N = Voiced Alveolar Nasal /n/</h3>
    <p><b>Phonics rule:</b> N usually makes the /n/ sound at the beginning, middle, or end of a syllable</p>
    <p><b>Examples:</b> ${wordLinkN("net")}, ${wordLinkN("dinner")}, ${wordLinkN("sun")}</p>

    <h3>N in Double Consonants (NN)</h3>
    <p><b>Phonics rule:</b> The first N is silent</p>
    <p><b>Examples:</b> ${wordLinkN("dinner")}, ${wordLinkN("runner")}, tunnel</p>

    <h3>N in NG = Velar Nasal /ŋ/</h3>
    <p><b>Phonics rule:</b> N followed by G produces the /ŋ/ sound</p>
    <p><b>Examples:</b> ${wordLinkN("sing")}, ${wordLinkN("long")}, ${wordLinkN("wrong")}</p>
    <p><b>Exceptions:</b> ${wordLinkN("finger")}, ${wordLinkN("angle")} (hard G is pronounced)</p>

    <h3>N in NK = /ŋk/</h3>
    <p><b>Phonics rule:</b> NK produces a combined /ŋk/ sound</p>
    <p><b>Examples:</b> ${wordLinkN("bank")}, ${wordLinkN("think")}, ${wordLinkN("uncle")}</p>

    <h3>Silent N after M</h3>
    <p><b>Phonics rule:</b> N is silent when it follows M in certain words</p>
    <p><b>Examples:</b> ${wordLinkN("autumn")}, ${wordLinkN("column")}, ${wordLinkN("solemn")}</p>

    <h3>N = /n/ in GN (medial / final)</h3>
    <p><b>Phonics rule:</b> In many words, GN produces only the /n/ sound</p>
    <p><b>Examples:</b> ${wordLinkN("sign")}, ${wordLinkN("design")}, ${wordLinkN("foreign")}</p>
    <p><b>Exceptions:</b> ${wordLinkN("signal")}, ${wordLinkN("ignite")} (G is pronounced when a vowel follows N)</p>
  `;
}

function openWordN(word) {
  const w = LETTER_N_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
