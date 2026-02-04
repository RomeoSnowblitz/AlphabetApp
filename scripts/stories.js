/* ================= READING ================= */
// openStory is defined in index.html (inline script) so it runs in the same scope as showScreen/$

function toggleColorMode() {
  state.colorMode = !state.colorMode;
  renderUI();
}
function toggleAutoRead() {
  state.autoReading = !state.autoReading;
  renderUI();
  if (state.autoReading) autoReadNext();
}
function resetAutoRead() {
  state.autoReading = false;
  state.autoIndex = 0;
  document.querySelectorAll(".word").forEach((w) => w.classList.remove("playing", "highlighted"));
  renderUI();
}

function autoReadNext() {
  if (!state.autoReading) return;
  const words = [...document.querySelectorAll(".word")];
  if (state.autoIndex >= words.length) {
    resetAutoRead();
    return;
  }
  words.forEach((w) => w.classList.remove("playing"));
  const el = words[state.autoIndex];
  el.classList.add("playing");

  const raw = (el.dataset.word || el.textContent.trim() || "").toLowerCase();
  const w = typeof WORDS !== "undefined" ? WORDS.find((x) => x && x.word && x.word.toLowerCase() === raw) : null;

  var didAdvance = false;
  const advance = () => {
    if (didAdvance) return;
    didAdvance = true;
    state.audio.onended = null;
    state.audio.onerror = null;
    const next = el.nextElementSibling;
    const pause = next && next.classList && next.classList.contains("punct") && next.dataset.pause === "1";
    if (pause) {
      setTimeout(() => {
        state.autoIndex++;
        autoReadNext();
      }, 450);
    } else {
      state.autoIndex++;
      autoReadNext();
    }
  };

  if (w && w.soundFile) {
    state.audio.onended = advance;
    state.audio.onerror = advance;
    state.audio.src = w.soundFile;
    var p = state.audio.play();
    if (p && typeof p.catch === "function") p.catch(function() { if (!didAdvance) advance(); });
  } else {
    setTimeout(advance, 350);
  }
}

// Stories: { title, lines[] }. Each line is a string; words in WORDS with soundFile are clickable, others shown in red.
const STORIES = [
  {
    title: "Peach",
    lines: [
      "This is a peach.",
      "The peach is pink.",
      "Look at the pink peach.",
      "The pink peach is big."
    ]
  },
  { title: "Story B", lines: ["Story B placeholder."] },
  { title: "Story C", lines: ["Story C placeholder."] }
];
