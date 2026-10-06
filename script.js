/* =================================
   STARS
================================= */

const starsContainer = document.querySelector(".stars");

if (starsContainer) {

    for (let i = 0; i < 80; i++) {

        const star = document.createElement("span");

        star.style.position = "absolute";

        star.style.width =
            `${Math.random() * 3 + 1}px`;

        star.style.height =
            star.style.width;

        star.style.borderRadius = "50%";

        star.style.background = "white";

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;

        star.style.opacity =
            Math.random() * 0.8 + 0.2;

        star.style.animation =
            `twinkle ${Math.random() * 3 + 2}s infinite`;

        star.style.animationDelay =
            `${Math.random() * 3}s`;

        starsContainer.appendChild(star);
    }
}


/* =================================
   STEP 1 — OPEN MAIN GIFT
================================= */

const giftBox =
    document.getElementById("giftBox");

const openGift =
    document.getElementById("openGift");

const intro =
    document.getElementById("intro");

const mainContent =
    document.getElementById("mainContent");


function openBirthdayGift() {

    if (!giftBox || !intro || !mainContent) {
        console.error("Gift elements not found.");
        return;
    }

    // Start gift animation
    giftBox.classList.add("open");

    // Wait for animation
    setTimeout(() => {

        // Hide intro
        intro.style.display = "none";

        // Show main content
        mainContent.classList.remove("hidden");

        // Scroll to top of main content
        mainContent.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 900);
}


/* Open gift using button */

if (openGift) {

    openGift.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            openBirthdayGift();

        }
    );

}


/* Also allow clicking the gift box itself */

if (giftBox) {

    giftBox.addEventListener(
        "click",
        (event) => {

            // Don't trigger twice when button is clicked
            if (event.target.closest("#openGift")) {
                return;
            }

            openBirthdayGift();

        }
    );

}


/* =================================
   STEP 2 — PHOTO REVEAL
================================= */

const explorePhotos =
    document.getElementById("explorePhotos");

const photoReveal =
    document.getElementById("photoReveal");

const continueBtn =
    document.getElementById("continueBtn");

const giftSection =
    document.getElementById("giftSection");


/* Explore photos */

if (explorePhotos && photoReveal) {

    explorePhotos.addEventListener(
        "click",
        () => {

            photoReveal.classList.remove("hidden");

            explorePhotos.style.display =
                "none";

            photoReveal.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}


/* =================================
   CONTINUE TO GIFTS
================================= */

if (continueBtn && giftSection) {

    continueBtn.addEventListener(
        "click",
        () => {

            giftSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}


/* =================================
   STEP 3 — INTERACTIVE GIFTS
================================= */

const giftCards =
    document.querySelectorAll(".gift-card");

const giftReveal =
    document.getElementById("giftReveal");

const revealIcon =
    document.getElementById("revealIcon");

const revealTitle =
    document.getElementById("revealTitle");

const revealMessage =
    document.getElementById("revealMessage");

const closeReveal =
    document.getElementById("closeReveal");

const continueToStory =
    document.getElementById("continueToStory");


/* Different icons */

const revealIcons = {

    flower: "🌸",

    letter: "💌",

    code: "💻",

    surprise: "🎀"

};


/* =================================
   OPEN GIFT CARD
================================= */

giftCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const type =
                card.dataset.type;

            const title =
                card.dataset.title;

            const message =
                card.dataset.message;


            // Set icon
            if (revealIcon) {

                revealIcon.textContent =
                    revealIcons[type] || "✨";

            }


            // Set title
            if (revealTitle) {

                revealTitle.textContent =
                    title;

            }


            // Set message
            if (revealMessage) {

                revealMessage.textContent =
                    message;

            }


            // Show reveal
            if (giftReveal) {

                giftReveal.classList.remove(
                    "hidden"
                );


                /* Restart animation */

                giftReveal.style.animation =
                    "none";

                void giftReveal.offsetWidth;

                giftReveal.style.animation =
                    "revealGift .65s cubic-bezier(.2,.8,.2,1) forwards";


                // Scroll to reveal
                giftReveal.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }


            // Celebration
            createMiniHearts();

        }
    );

});


/* =================================
   CLOSE GIFT REVEAL
================================= */

if (closeReveal && giftReveal) {

    closeReveal.addEventListener(
        "click",
        () => {

            giftReveal.classList.add(
                "hidden"
            );

        }
    );

}


/* =================================
   FLOATING HEARTS
================================= */

function createMiniHearts() {

    for (let i = 0; i < 7; i++) {

        const heart =
            document.createElement("span");

        heart.textContent =
            ["♥", "♡", "✦"][i % 3];

        heart.style.position =
            "fixed";

        heart.style.left =
            `${40 + Math.random() * 20}%`;

        heart.style.top =
            "60%";

        heart.style.fontSize =
            `${12 + Math.random() * 12}px`;

        heart.style.color =
            "#d77fa5";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "999";

        heart.style.transition =
            "all 1.2s ease";

        document.body.appendChild(
            heart
        );


        requestAnimationFrame(() => {

            heart.style.transform =
                `translate(
                    ${(Math.random() - 0.5) * 180}px,
                    -${80 + Math.random() * 150}px
                ) scale(1.4)`;

            heart.style.opacity =
                "0";

        });


        setTimeout(() => {

            heart.remove();

        }, 1300);

    }

}


/* =================================
   STEP 4 — STORY
================================= */

const storySection =
    document.getElementById("storySection");

const letterButton =
    document.getElementById("letterButton");


/* Continue to story */

if (continueToStory && storySection) {

    continueToStory.addEventListener(
        "click",
        () => {

            storySection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}


/* =================================
   STEP 5 — LETTER
================================= */

const letterSection =
    document.getElementById("letterSection");

const envelope =
    document.getElementById("envelope");

const openLetter =
    document.getElementById("openLetter");

const letterContent =
    document.getElementById("letterContent");

const finalSurprise =
    document.getElementById("finalSurprise");


/* =================================
   GO TO LETTER
================================= */

if (letterButton && letterSection) {

    letterButton.addEventListener(
        "click",
        () => {

            // Show letter section
            letterSection.classList.remove(
                "hidden"
            );


            // Scroll to it
            setTimeout(() => {

                letterSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        }
    );

}


/* =================================
   OPEN ENVELOPE
================================= */

function openTheLetter() {

    if (!envelope || !letterContent) {
        return;
    }


    // Prevent opening twice
    if (envelope.classList.contains("open")) {
        return;
    }


    // Open envelope
    envelope.classList.add("open");


    // Hide button
    if (openLetter) {

        openLetter.style.opacity =
            "0";

        openLetter.style.pointerEvents =
            "none";

    }


    // Reveal actual letter
    setTimeout(() => {

        letterContent.classList.remove(
            "hidden"
        );


        letterContent.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });


        createLetterHearts();

    }, 850);

}


/* Open letter button */

if (openLetter) {

    openLetter.addEventListener(
        "click",
        openTheLetter
    );

}


/* Click envelope */

if (envelope) {

    envelope.addEventListener(
        "click",
        (event) => {

            // Don't trigger twice from button
            if (event.target.closest("#openLetter")) {
                return;
            }

            openTheLetter();

        }
    );

}


/* =================================
   KEYBOARD SUPPORT
================================= */

if (envelope) {

    envelope.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openTheLetter();

            }

        }
    );

}


/* =================================
   LETTER FLOATING HEARTS
================================= */

function createLetterHearts() {

    if (!letterSection) {
        return;
    }


    for (let i = 0; i < 12; i++) {

        const heart =
            document.createElement("span");

        heart.textContent =
            i % 2 === 0
                ? "♡"
                : "✦";


        heart.style.position =
            "absolute";

        heart.style.left =
            `${10 + Math.random() * 80}%`;

        heart.style.bottom =
            "20px";

        heart.style.color =
            "#d98daf";

        heart.style.fontSize =
            `${12 + Math.random() * 14}px`;

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "10";

        heart.style.animation =
            `letterHeartFloat ${
                3 + Math.random() * 2
            }s linear forwards`;

        heart.style.animationDelay =
            `${Math.random() * 1.5}s`;


        letterSection.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 6000);

    }

}


/* =================================
   STEP 6 — FINAL SURPRISE
================================= */

const finalSection =
    document.getElementById("finalSection");

const restartButton =
    document.getElementById("restartButton");


/* =================================
   OPEN FINAL SURPRISE
================================= */

if (finalSurprise && finalSection) {

    finalSurprise.addEventListener(
        "click",
        () => {

            // Show final section
            finalSection.classList.remove(
                "hidden"
            );


            // Scroll to final screen
            setTimeout(() => {

                finalSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);


            // Start celebrations
            createConfetti();

            createFinalHearts();

        }
    );

}


/* =================================
   CONFETTI
================================= */

function createConfetti() {

    const symbols = [
        "✦",
        "✧",
        "•",
        "◆",
        "★"
    ];


    for (let i = 0; i < 90; i++) {

        const piece =
            document.createElement("span");


        piece.className =
            "final-confetti";


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.left =
            `${Math.random() * 100}%`;


        piece.style.fontSize =
            `${8 + Math.random() * 10}px`;


        piece.style.opacity =
            `${0.5 + Math.random() * 0.5}`;


        piece.style.animationDuration =
            `${3 + Math.random() * 4}s`;


        piece.style.animationDelay =
            `${Math.random() * 2}s`;


        // Random rotation direction
        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        document.body.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 8000);

    }

}


/* =================================
   FLOATING HEARTS
================================= */

function createFinalHearts() {

    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("span");


        heart.className =
            "final-heart";


        heart.textContent =
            ["♡", "♥", "✦", "✨"][
                Math.floor(
                    Math.random() * 4
                )
            ];


        heart.style.left =
            `${Math.random() * 100}%`;


        heart.style.fontSize =
            `${14 + Math.random() * 18}px`;


        heart.style.color =
            "#e69abb";


        heart.style.setProperty(
            "--drift",
            `${(Math.random() - 0.5) * 180}px`
        );


        heart.style.animationDelay =
            `${Math.random() * 3}s`;


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 8500);

    }

}


/* =================================
   RESTART
================================= */

if (restartButton) {

    restartButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            setTimeout(() => {

                location.reload();

            }, 700);

        }
    );

}


/* =================================
   PAGE LOADED
================================= */

console.log(
    "🎂 Diksha Birthday Website Loaded Successfully!"
);
/* =================================
   STEP 7 — BACKGROUND MUSIC
================================= */

const bgMusic =
    document.getElementById("bgMusic");

const musicToggle =
    document.getElementById("musicToggle");


let musicPlaying = false;


/* =================================
   START MUSIC
================================= */

function startMusic() {

    if (!bgMusic) {
        return;
    }


    bgMusic.volume = 0.35;


    const playPromise =
        bgMusic.play();


    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                musicPlaying = true;

                updateMusicButton();

            })
            .catch(() => {

                console.log(
                    "Music playback was blocked."
                );

            });

    }

}


/* =================================
   MUSIC BUTTON
================================= */

if (musicToggle && bgMusic) {

    musicToggle.addEventListener(
        "click",
        () => {

            if (musicPlaying) {

                bgMusic.pause();

                musicPlaying = false;

            } else {

                startMusic();

            }


            updateMusicButton();

        }
    );

}


/* =================================
   UPDATE MUSIC BUTTON
================================= */

function updateMusicButton() {

    if (!musicToggle) {
        return;
    }


    if (musicPlaying) {

        musicToggle.textContent = "🔊";

        musicToggle.classList.add(
            "playing"
        );

        musicToggle.setAttribute(
            "aria-label",
            "Turn music off"
        );

    } else {

        musicToggle.textContent = "🎵";

        musicToggle.classList.remove(
            "playing"
        );

        musicToggle.setAttribute(
            "aria-label",
            "Turn music on"
        );

    }

}


/* =================================
   START MUSIC AFTER GIFT OPENS
================================= */

const originalOpenBirthdayGift =
    openBirthdayGift;


/*
   We start the music when the user
   clicks the gift. This avoids the
   browser autoplay restriction.
*/

if (openGift) {

    openGift.addEventListener(
        "click",
        () => {

            setTimeout(() => {

                startMusic();

            }, 1000);

        }
    );

}


/* Initial button */

updateMusicButton();