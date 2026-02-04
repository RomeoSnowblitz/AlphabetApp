// letter_e.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_e.js");

const LETTER_E_WORD_LIST = ["bed","pen","letter","me","he","equal","make","ride","hope","one","done","some","give","have","come","English","pretty","women","enemy","envelope","her","term","serve","very","berry","merry","they","grey","prey","either","neither","height","head","bread","spread","eat","mean","speak","receive","ceiling","vein","eight","reign"];
const LETTER_E_WORDS = WORDS.filter(w => LETTER_E_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundE(word){ const w = LETTER_E_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkE(word){ return `<span class="letter-word" onclick="playWordSoundE('${word}')" oncontextmenu="openWordE('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_E(letter) {
  return `
    <h3>Short Vowel E /ɛ/</h3>
    <p><b>Phonics rule:</b> E in a closed syllable (followed by one or more consonants) usually makes /ɛ/</p>
    <p><b>Examples:</b> ${wordLinkE("bed")}, ${wordLinkE("pen")}, ${wordLinkE("letter")}</p>

    <h3>Long E /iː/</h3>
    <p><b>Phonics rule:</b> E says its name when it is in an open syllable or part of a vowel team</p>
    <p><b>Examples:</b> ${wordLinkE("me")}, ${wordLinkE("he")}, ${wordLinkE("equal")}</p>

    <h3>Magic E</h3>
    <p><b>Phonics rule:</b> Final E is silent and changes the preceding vowel from short to long</p>
    <p><b>Examples:</b> ${wordLinkE("make")}, ${wordLinkE("ride")}, ${wordLinkE("hope")}</p>
    <p><b>Exceptions:</b> ${wordLinkE("one")}, done, ${wordLinkE("some")}, ${wordLinkE("give")}, ${wordLinkE("have")}, ${wordLinkE("come")}</p>

    <h3>E = /ɪ/ (short I sound)</h3>
    <p><b>Phonics rule:</b> Sight words</p>
    <p><b>Examples:</b> English, ${wordLinkE("pretty")}, ${wordLinkE("women")}</p>

    <h3>E = /ʌ/ (short U sound)</h3>
    <p><b>Phonics rule:</b> Irregular vowel shift (sight words)</p>
    <p><b>Examples:</b> ${wordLinkE("enemy")}, ${wordLinkE("envelope")}</p>

    <h3>E = /ɜːr/ (ER sound)</h3>
    <p><b>Phonics rule:</b> E followed by R produces an R-controlled vowel</p>
    <p><b>Examples:</b> ${wordLinkE("her")}, ${wordLinkE("term")}, ${wordLinkE("serve")}</p>

    <h3>E before R = /ɛr/</h3>
    <p><b>Phonics rule:</b> Some ER combinations keep a short E sound before R</p>
    <p><b>Examples:</b> ${wordLinkE("very")}, ${wordLinkE("berry")}, ${wordLinkE("merry")}</p>

    <h3>E = /eɪ/ (long A sound)</h3>
    <p><b>Phonics rule:</b> Irregular vowel shift</p>
    <p><b>Examples:</b> ${wordLinkE("they")}, ${wordLinkE("grey")}, ${wordLinkE("prey")}</p>

    <h3>E = /aɪ/ (long I sound)</h3>
    <p><b>Phonics rule:</b> Irregular / foreign influence</p>
    <p><b>Examples:</b> ${wordLinkE("either")}, ${wordLinkE("neither")}, ${wordLinkE("height")}</p>

    <h3>E in Diphthongs / Vowel Combinations</h3>
    <p><b>ea /ɛ/:</b> ${wordLinkE("head")}, ${wordLinkE("bread")}, ${wordLinkE("spread")}</p>
    <p><b>ea /iː/:</b> ${wordLinkE("eat")}, ${wordLinkE("mean")}, ${wordLinkE("speak")}</p>
    <p><b>ei /iː/:</b> ${wordLinkE("receive")}, ${wordLinkE("ceiling")}, conceit</p>
    <p><b>ei /eɪ/:</b> ${wordLinkE("vein")}, ${wordLinkE("eight")}, ${wordLinkE("reign")}</p>
  `;
}

function openWordE(word) {
  const w = LETTER_E_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
