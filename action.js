// tr 1
var letter_td = document.querySelector(".l-number span");
var word_td = document.querySelector(".W-number span");
var sentence_td = document.querySelector(".S-number span");

// tr 2
var paragraf_td = document.querySelector(".p-number span");
var insta_td = document.querySelector(".instaPost-number span");
var faceBook_td = document.querySelector(".faceBook-number span");

// tr 3
var let_whith_out_space_td = document.querySelector(".letWOS-number span");
var space_td = document.querySelector(".space-number span");
var dots_td = document.querySelector(".dots-number span");

// tr 4
var WRtime_td = document.querySelector(".Wrtime-number span");
var Ltime_td = document.querySelector(".Ltime-number span");
var ReadingTime_td = document.querySelector(".ReadingTime-number span");

// User text
var text = document.querySelector("#text-input");

// languege
var checkBox = document.querySelector("#language-checkbox");

var words = parseInt(word_td.textContent);
var letters = parseInt(letter_td.textContent);
var sentence = parseInt(sentence_td.textContent);

var paragraf = parseInt(paragraf_td.textContent);
var insta = parseInt(insta_td.textContent);
var faceBoock = parseInt(faceBook_td.textContent);

var letters_WOS = parseInt(let_whith_out_space_td.textContent);
var space = parseInt(space_td.textContent);
var dots = parseInt(dots_td.textContent);

// let
let spaces = 0;

text.addEventListener("keydown", function () {
  const KeyValue = event.key;
  let cursorPosition = text.selectionStart;
  let backChar = text.value[cursorPosition - 1];
  let backCharSec = text.value[cursorPosition - 2];
  //   alert(KeyValue)

  switch (KeyValue) {
    // delet
    case "Backspace":
      // For letter input
      if (parseInt(insta_td.textContent) < 2200) {
        ++insta_td.textContent;
      }
      if (parseInt(faceBook_td.textContent) < 63206) {
        ++faceBook_td.textContent;
      }

      if (parseInt(letter_td.textContent) >= 1 && backChar != "\n") {
        --letter_td.textContent;
      }
      if (backChar != " " && let_whith_out_space_td.textContent >= 1) {
        --let_whith_out_space_td.textContent;
      }
      // For Space input
      if (
        backChar === " " &&
        parseInt(space_td.textContent) >= 1 &&
        space > 0
      ) {
        --space_td.textContent;
        --spaces;
      }
      //   For Paragraf input
      if (backChar === "\n" && parseInt(paragraf_td.textContent) >= 1) {
        if (parseInt(paragraf_td.textContent) >= 1) {
          --paragraf_td.textContent;
        }
        if (
          backCharSec !== " " &&
          backCharSec !== undefined &&
          backCharSec !== "\n"
        ) {
          --word_td.textContent;
        }
      }
      // For dots input
      if (backChar === "." && parseInt(dots_td.textContent) >= 1) {
        --dots_td.textContent;
      }
      if (
        backChar === "." &&
        backCharSec != "." &&
        backCharSec != " " &&
        backCharSec != "\n" &&
        parseInt(sentence_td.textContent) >= 1
      ) {
        --sentence_td.textContent;
      }

      // For Word input
      if (backChar === " " && parseInt(word_td.textContent) >= 1) {
        --word_td.textContent;
      }
      break;
    // Enter button
    case "Enter":
      if (parseInt(insta_td.textContent) > 0) {
        --insta_td.textContent;
      }
      if (parseInt(faceBook_td.textContent) > 0) {
        --faceBook_td.textContent;
      }

      if (backChar != "\n" && backChar != undefined && backChar != null)
        ++paragraf_td.textContent;
      if (
        backChar !== " " &&
        backChar !== "" &&
        backChar !== "\n" &&
        backChar != undefined
      ) {
        ++word_td.textContent;
      }
      break;

    case ".":
      if (parseInt(insta_td.textContent) > 0) {
        --insta_td.textContent;
      }
      if (parseInt(faceBook_td.textContent) > 0) {
        --faceBook_td.textContent;
      }

      ++dots_td.textContent;
      if (
        backChar !== "." &&
        backChar !== "" &&
        backChar !== " " &&
        backChar !== "\n" &&
        backChar != undefined
      ) {
        ++sentence_td.textContent;
      }
      break;

    case " ":
      if (parseInt(insta_td.textContent) > 0) {
        --insta_td.textContent;
      }
      if (parseInt(faceBook_td.textContent) > 0) {
        --faceBook_td.textContent;
      }

      ++letter_td.textContent;
      ++space;
      ++space_td.textContent;
      if (backChar !== " " && backChar !== undefined) {
        ++word_td.textContent;
      }
      break;

    default:
      ++letter_td.textContent;
      ++let_whith_out_space_td.textContent;
      if (parseInt(insta_td.textContent) > 0) {
        --insta_td.textContent;
      }
      if (parseInt(faceBook_td.textContent) > 0) {
        --faceBook_td.textContent;
      }

      break;
  }
});
