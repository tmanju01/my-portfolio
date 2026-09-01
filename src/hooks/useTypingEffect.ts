import { useState, useEffect } from "react";

export function useTypingEffect(
  words: string[],
  typeSpeed = 100,
  backSpeed = 50,
  backDelay = 1500
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Backspace character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, backSpeed);
    } else {
      // Type character
      timer = setTimeout(() => {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
      }, typeSpeed);
    }

    // If fully typed, wait and start backspacing
    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, backDelay);
    }

    // If fully deleted, switch to next word
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, backSpeed, backDelay]);

  return currentText;
}
