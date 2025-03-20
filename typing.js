var englishWords = [
    "a",
    "about",
    "all",
    "also",
    "and",
    "as",
    "at",
    "be",
    "because",
    "but",
    "by",
    "can",
    "come",
    "could",
    "day",
    "do",
    "even",
    "find",
    "first",
    "for",
    "from",
    "get",
    "give",
    "go",
    "have",
    "he",
    "her",
    "here",
    "him",
    "his",
    "how",
    "I",
    "if",
    "in",
    "into",
    "it",
    "its",
    "just",
    "know",
    "like",
    "look",
    "make",
    "man",
    "many",
    "me",
    "more",
    "my",
    "new",
    "no",
    "not",
    "now",
    "of",
    "on",
    "one",
    "only",
    "or",
    "other",
    "our",
    "out",
    "people",
    "say",
    "see",
    "she",
    "so",
    "some",
    "take",
    "tell",
    "than",
    "that",
    "the",
    "their",
    "them",
    "then",
    "there",
    "these",
    "they",
    "thing",
    "think",
    "this",
    "those",
    "time",
    "to",
    "two",
    "up",
    "use",
    "very",
    "want",
    "way",
    "we",
    "well",
    "what",
    "when",
    "which",
    "who",
    "will",
    "with",
    "would",
    "year",
    "you",
    "your",
];

var spanishWords = [
    "de",
    "la",
    "que",
    "el",
    "en",
    "y",
    "a",
    "los",
    "se",
    "del",
    "las",
    "un",
    "por",
    "con",
    "no",
    "una",
    "su",
    "para",
    "es",
    "al",
    "lo",
    "como",
    "más",
    "o",
    "pero",
    "sus",
    "le",
    "ha",
    "me",
    "si",
    "sin",
    "sobre",
    "este",
    "ya",
    "entre",
    "cuando",
    "todo",
    "esta",
    "ser",
    "son",
    "dos",
    "también",
    "fue",
    "había",
    "era",
    "muy",
    "años",
    "hasta",
    "desde",
    "está",
    "mi",
    "porque",
    "qué",
    "sólo",
    "han",
    "yo",
    "hay",
    "vez",
    "puede",
    "todos",
    "así",
    "nos",
    "ni",
    "parte",
    "tiene",
    "él",
    "uno",
    "donde",
    "bien",
    "tiempo",
    "mismo",
    "ese",
    "ahora",
    "cada",
    "e",
    "vida",
    "otro",
    "después",
    "te",
    "otros",
    "aunque",
    "esa",
    "eso",
    "hace",
    "otra",
    "gobierno",
    "tan",
    "durante",
    "siempre",
    "día",
    "tanto",
    "ella",
    "tres",
    "sí",
    "dijo",
    "sido",
    "gran",
    "país",
    "según",
    "menos",
];

var sentence = "";
var words = [];
var characters = [];

var language = "";
var wordCount = 0;

var languageSelect = document.getElementById("language-select");
var wordsSelect = document.getElementById("words-select");

var test = document.getElementById("test");
var caret = document.getElementById("caret");
var input = document.getElementById("input");

languageSelect.addEventListener("change", function() {
    regenerateSentence();
});

wordsSelect.addEventListener("change", function() {
    regenerateSentence();
});

var wordsSpans = null;
var lettersSpans = null;

function regenerateSentence() {
    language = languageSelect.value;
    wordCount = parseInt(wordsSelect.value);

    if (language == "en") {
        for (let i = 0; i < wordCount; i++) {
            sentence += englishWords[Math.floor(Math.random() * englishWords.length)] + " ";
        }

    } else if (language == "es") {
        for (let i = 0; i < wordCount; i++) {
            sentence += spanishWords[Math.floor(Math.random() * spanishWords.length)] + " ";
        }

    }

    words = sentence.split(" ");
    characters = words.map(word => word.split(""));

    test.innerHTML = '';

    for (var word of characters) {
        var span = document.createElement("span");
        span.classList.add("word");

        for (var char of word) {
            var letter = document.createElement("span");
            letter.classList.add("letter");
            letter.textContent = char;
            span.appendChild(letter);
        }

        var space = document.createElement("span");
        space.classList.add("space");
        space.textContent = " ";
        span.appendChild(space);

        test.appendChild(span);
    }

    wordsSpans = document.getElementsByClassName("word");

    lettersSpans = [];
    for (let i = 0; i < wordsSpans.length; i++) {
        lettersSpans.push(wordsSpans[i].getElementsByClassName("letter"));
    }
}

var currentWordIndex = 0;
var currentLetterIndex = 0;
var mistakesThisWord = 0;
var totalMistakes = 0;
var done = false;

var mistakesPerWord = [];
var startTime = null, stopTime = null;

function updateCaret() {
    let currentLetter = lettersSpans[currentWordIndex][currentLetterIndex];
    let boundingBox = currentLetter.getBoundingClientRect();

    caret.style.transform = `translate(${boundingBox.left}px, ${boundingBox.top}px)`;
}

function onInput(letter) {
    if (done) {
        return;
    }

    input.value = '';

    if (letter.length > 1) {
        // only accept the first character if multiple pressed in rapid succession
        letter = letter[0];
    }

    if (letter == '') {
        // special case for no input just to update the carat and text decoration
        updateCaret();
        return;
    }

    if (startTime == null) {
        startTime = performance.now();
    }
        
    if (letter == '\b') {
        // special case for backspace since it's allowed to go back to a previous word

        // TODO: implement checking for a mistake when backspacing
        // mistakes should show in the total mistakes (not get removed) but should be subtracted from mistakes this word to compute the overall words per minute adjusted

        if (currentLetterIndex > 0) {
            currentLetterIndex--;

        } else if (currentWordIndex > 0) {
            wordsSpans[currentWordIndex].classList.toggle("active", false);
            currentWordIndex--;
            currentLetterIndex = wordsSpans[currentWordIndex].querySelectorAll(".letter").length - 1;
        }

        wordsSpans[currentWordIndex].classList.toggle("active", true);

    } else if (letter == ' ') {
        // special case for space to start the next word
        
        if (mistakesThisWord == 0) {
            wordsSpans[currentWordIndex].classList.add("correct");

        } else {
            wordsSpans[currentWordIndex].classList.add("incorrect");
        }
        
        // deactivate the previous word
        wordsSpans[currentWordIndex].classList.toggle("active", true);

        // accumulate mistakes each word; used to total for adjusted words per minute
        mistakesPerWord.push(mistakesThisWord);

        mistakesThisWord = 0;
        currentWordIndex++;
        currentLetterIndex = 0;

        if (currentWordIndex >= wordsSpans.length) {
            stopTime = performance.now();
            processResults();
            done = true;
            updateCaret();
            return;
        }

        // then underline the new one
        wordsSpans[currentWordIndex].classList.toggle("active", true);

    } else {
        let letters = lettersSpans[currentWordIndex];

        if (currentLetterIndex < letters.length - 1) {
            let currentLetter = letters[currentLetterIndex];

            if (letter == currentLetter.textContent) {
                currentLetter.classList.add("correct");

            } else {
                currentLetter.classList.add("incorrect");
                mistakesThisWord++;
                totalMistakes++;
            }

            currentLetterIndex++;
        }
    }

    updateCaret();
}

function processResults() {
    let rawMistakes = totalMistakes;
    let correctedMistakes = mistakesPerWord.reduce((a, b) => a + b, 0);

    let timeTaken = (stopTime - startTime) / 1000; // in seconds

    let totalLetters = 0;

    for (let word of characters) {
        totalLetters += word.length;
    }

    let accuracy = ((totalLetters - correctedMistakes) / totalLetters) * 100;
    
    // assume 5 characters per word (the same metric for calculus as used by MonkeyType)
    let totalWords = totalLetters / 5; 
    let minutes = timeTaken / 60;

    let rawWPM = (totalWords / minutes);
    let correctedWPM = ((totalWords - correctedMistakes) / minutes);
    
    document.getElementById("raw-wpm").textContent = `${rawWPM.toFixed(0)}`;
    document.getElementById("corrected-wpm").textContent = `${correctedWPM.toFixed(0)}`;
    document.getElementById("accuracy").textContent = `${accuracy.toFixed(2)}%`;
    document.getElementById("raw-mistakes").textContent = `${rawMistakes}`;
    document.getElementById("corrected-mistakes").textContent = `${correctedMistakes}`;
    document.getElementById("time-taken").textContent = `${timeTaken.toFixed(2)} seconds`;

    document.getElementById("results-container").style.display = "block";

    caret.style.display = "none";
}

// initialize the default test and populate test visuals
regenerateSentence();
onInput('');

input.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        onInput('\b');
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        event.preventDefault();
        test.innerHTML = '';
        regenerateSentence();
        input.focus();
    }
});

input.addEventListener("input", function(event) {
    onInput(input.value)
});


input.focus();

document.getElementById("test-container").addEventListener("click", function() {
    input.focus();
});
