// letter_g.js
if (typeof WORDS === "undefined") console.error("WORDS array not found! Load words.js before letter_g.js");

const LETTER_G_WORD_LIST = ["go","game","gun","giant","gem","gym","get","give","gnome","sign","design","signal","phlegm","diaphragm","sing","ring","long","finger","angle","laugh","cough","tough","though","high","night","ghost","ghastly","ghetto","guess","guide","guilt","language","penguin","anguish","genre","beige","mirage"];
const LETTER_G_WORDS = WORDS.filter(w => LETTER_G_WORD_LIST.includes(w.word.toLowerCase()));

function playWordSoundG(word){ const w = LETTER_G_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase()); if (w) playSound(w.soundFile); }
function wordLinkG(word){ return `<span class="letter-word" onclick="playWordSoundG('${word}')" oncontextmenu="openWordG('${word}'); return false;">${word}</span>`; }

function LETTER_NOTES_G(letter) {
  return `
    <h3>G = Hard G /g/</h3>
    <p><b>Phonics rule:</b> G usually makes the /g/ sound when followed by a, o, u, or a consonant</p>
    <p><b>Examples:</b> ${wordLinkG("go")}, ${wordLinkG("game")}, ${wordLinkG("gun")}</p>

    <h3>G = Soft G /ʤ/ ("j" sound)</h3>
    <p><b>Phonics rule:</b> G makes the /ʤ/ sound when followed by e, i, or y</p>
    <p><b>Examples:</b> ${wordLinkG("giant")}, ${wordLinkG("gem")}, ${wordLinkG("gym")}</p>
    <p><b>Exceptions:</b> ${wordLinkG("get")}, ${wordLinkG("give")} (hard G despite e/i)</p>

    <h3>Silent G before N</h3>
    <p><b>Phonics rule:</b> G is silent when it appears before N at the beginning or end of a word</p>
    <p><b>Examples:</b> ${wordLinkG("gnome")}, ${wordLinkG("sign")}, ${wordLinkG("design")}</p>
    <p><b>Exceptions:</b> ${wordLinkG("signal")} (G is pronounced)</p>

    <h3>Silent G before M</h3>
    <p><b>Phonics rule:</b> G is silent before M in a few historical words</p>
    <p><b>Examples:</b> ${wordLinkG("phlegm")}, paradigm, ${wordLinkG("diaphragm")}</p>

    <h3>G in NG = /ŋ/</h3>
    <p><b>Phonics rule:</b> NG produces the /ŋ/ sound, with no hard G sound</p>
    <p><b>Examples:</b> ${wordLinkG("sing")}, ${wordLinkG("ring")}, ${wordLinkG("long")}</p>
    <p><b>Exceptions:</b> ${wordLinkG("finger")}, ${wordLinkG("angle")} (hard G is pronounced)</p>

    <h3>G in NG = /ŋg/</h3>
    <p><b>Phonics rule:</b> NG produces /ŋg/ when followed by a vowel or in certain word families</p>
    <p><b>Examples:</b> ${wordLinkG("finger")}, angry, longer</p>

    <h3>G as part of GH = /f/</h3>
    <p><b>Phonics rule:</b> GH is pronounced /f/ at the end of some words</p>
    <p><b>Examples:</b> ${wordLinkG("laugh")}, ${wordLinkG("cough")}, ${wordLinkG("tough")}</p>
    <p><b>Exceptions:</b> ${wordLinkG("though")}, through, ${wordLinkG("high")} (GH is silent)</p>

    <h3>Silent G in GH</h3>
    <p><b>Phonics rule:</b> GH is silent in many words, especially after vowels</p>
    <p><b>Examples:</b> ${wordLinkG("high")}, ${wordLinkG("night")}, ${wordLinkG("though")}</p>

    <h3>G as /g/ in GH (rare)</h3>
    <p><b>Phonics rule:</b> GH is written but only H is silent</p>
    <p><b>Examples:</b> ${wordLinkG("ghost")}, ${wordLinkG("ghastly")}, ${wordLinkG("ghetto")}</p>

    <h3>G in GU = /g/</h3>
    <p><b>Phonics rule:</b> Silent U follows G to keep G hard before e, i, or y</p>
    <p><b>Examples:</b> ${wordLinkG("guess")}, ${wordLinkG("guide")}, ${wordLinkG("guilt")}</p>

    <h3>G in GU = /gw/</h3>
    <p><b>Phonics rule:</b> GU may produce a /gw/ sound at the start of a word</p>
    <p><b>Examples:</b> ${wordLinkG("language")}, ${wordLinkG("penguin")}, ${wordLinkG("anguish")}</p>

    <h3>G as /ʒ/ (rare, French origin)</h3>
    <p><b>Phonics rule:</b> French-origin softening</p>
    <p><b>Examples:</b> ${wordLinkG("genre")}, ${wordLinkG("beige")}, ${wordLinkG("mirage")}</p>
  `;
}

function openWordG(word) {
  const w = LETTER_G_WORDS.find(x => x.word.toLowerCase() === word.toLowerCase());
  if (!w) return alert("Word not found: " + word);
  openInfo(`<h2>${w.word}</h2><button onclick="playSound('${w.soundFile}')">🔊</button><p>${state.phon==="IPA"?w.ipa:w.ce}</p><p>${w.jpWord}</p><p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
}
