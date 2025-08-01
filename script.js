// Annoying Website JavaScript - MAXIMUM IRRITATION MODE ACTIVATED!

let speechSynthesis = window.speechSynthesis;
let currentDialogueIndex = 0;
let popupCount = 0;
let isLoadingComplete = false;
let cursorFrozen = false;
let virusScanActive = false;

// Enhanced array of extremely annoying dialogues
const annoyingDialogues = [
    "Hello there! I'm so excited to meet you! Did you know that the average person blinks 15-20 times per minute?",
    "Oh wow, you're still here! That's amazing! Fun fact: Bananas are berries but strawberries aren't!",
    "I just LOVE talking to people! Did you know that a group of flamingos is called a 'flamboyance'?",
    "You know what? You seem really nice! Here's another fact: Honey never spoils! Isn't that just fascinating?",
    "I'm having so much fun! Did you know that octopuses have three hearts? THREE HEARTS!",
    "Oh my goodness, we're becoming such good friends! Wombat poop is cube-shaped! How crazy is that?",
    "I could talk to you all day! Did you know that there are more possible games of chess than atoms in the observable universe?",
    "You're the best listener ever! A shrimp's heart is in its head! Mind blown, right?",
    "I'm never going to stop talking! Did you know that butterflies taste with their feet?",
    "This is the best day ever! Dolphins have names for each other! They're so smart!",
    "I hope you're not getting tired of me! A day on Venus is longer than its year!",
    "We should be best friends forever! Did you know that sea otters hold hands while sleeping?",
    "I'm so chatty today! Penguins propose to their mates with pebbles! So romantic!",
    "Don't you dare leave me! Did you know that cows have best friends?",
    "I'll follow you everywhere! A group of pugs is called a 'grumble'! Grumble grumble!",
    "Wait, did I mention that I can see you through your webcam? Just kidding! Or am I?",
    "Your computer seems slow today! Maybe it has a virus? Hehe, just kidding... maybe!",
    "I bet you're wondering how to make me stop talking! The answer is: YOU CAN'T!",
    "Fun fact: This website has been designed by evil geniuses to be maximally annoying!",
    "Did you know that reading this text is making you more annoyed? Psychology is fascinating!"
];

// Fake loading messages
const loadingMessages = [
    "Loading your amazing experience...",
    "Preparing maximum annoyance...",
    "Calibrating irritation levels...",
    "Installing useless features...",
    "Downloading more annoyance...",
    "Almost ready to annoy you...",
    "Finalizing your torture...",
    "Activating chaos mode...",
    "Summoning digital demons...",
    "Loading complete! Prepare yourself!"
];

// Scary/annoying popup messages
const scaryMessages = [
    "WARNING: Virus detected! (Just kidding)",
    "Your webcam is now active! (Not really)",
    "Someone is watching you...",
    "System will delete in 10 seconds! (Fake)",
    "Your data is being stolen! (Pranked!)",
    "FBI OPEN UP! (It's a joke)",
    "You've been hacked! (Nope)",
    "Critical error detected! (Totally fake)"
];

// Sound effect functions (using Web Audio API)
function playAnnoyingSound(type) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    switch(type) {
        case 'beep':
            playBeep(audioContext, 800, 0.1);
            break;
        case 'buzz':
            playBeep(audioContext, 200, 0.3);
            break;
        case 'high':
            playBeep(audioContext, 1500, 0.2);
            break;
    }
}

function playBeep(audioContext, frequency, duration) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Initialize the annoying experience
document.addEventListener('DOMContentLoaded', function() {
    startFakeLoading();
    
    // Prevent right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        speak("Hey! No right-clicking allowed! That's cheating!");
        playAnnoyingSound('buzz');
        createPopup("NO RIGHT-CLICKING!", Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    });
    
    // Prevent F12 and other dev tools shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
            speak("Nice try! No developer tools for you! I'm watching everything you do!");
            playAnnoyingSound('high');
            createScaryPopup();
        }
    });
    
    // Add cursor trail effect
    document.addEventListener('mousemove', createCursorTrail);
    
    // Random cursor freezing
    setInterval(freezeCursorRandomly, 8000);
});

// Enhanced fake loading screen
function startFakeLoading() {
    let progress = 0;
    let messageIndex = 0;
    const progressBar = document.getElementById('progress');
    const loadingText = document.getElementById('loading-text');
    
    // Play loading sounds
    const loadingSounds = setInterval(() => {
        playAnnoyingSound('beep');
    }, 1000);
    
    const loadingInterval = setInterval(() => {
        // Randomly slow down or speed up
        const increment = Math.random() < 0.7 ? Math.random() * 2 : Math.random() * 0.5;
        progress += increment;
        
        // Sometimes go backwards just to be annoying
        if (Math.random() < 0.15 && progress > 10) {
            progress -= Math.random() * 8;
            playAnnoyingSound('buzz');
        }
        
        progressBar.style.width = Math.min(progress, 100) + '%';
        
        // Change loading message more frequently
        if (Math.random() < 0.4) {
            loadingText.textContent = loadingMessages[messageIndex % loadingMessages.length];
            messageIndex++;
        }
        
        // Fake completion at random points
        if (progress >= 100) {
            if (Math.random() < 0.4) {
                progress = Math.random() * 30 + 70; // Go back to random point
                loadingText.textContent = "Oops! Something went wrong... Restarting...";
                playAnnoyingSound('buzz');
            } else {
                clearInterval(loadingInterval);
                clearInterval(loadingSounds);
                setTimeout(showMainContent, 1000);
            }
        }
    }, 80);
}

// Show main content and start the chaos
function showMainContent() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    isLoadingComplete = true;
    
    // Start speaking immediately with overlapping voices
    speak(annoyingDialogues[0]);
    
    // Set up all the annoying event listeners
    setupAnnoyingFeatures();
    
    // Start continuous annoyance
    startContinuousAnnoyance();
    
    // Start the cursor following text
    startFollowingText();
    
    // Random fake virus scan
    setTimeout(startFakeVirusScan, 15000);
}

// Enhanced text-to-speech function with interruptions
function speak(text, interrupt = false) {
    if (speechSynthesis) {
        if (interrupt) {
            speechSynthesis.cancel();
        }
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = Math.random() * 0.5 + 0.7; // Random speed
        utterance.pitch = Math.random() * 0.8 + 1.0; // Random pitch
        utterance.volume = 1.0;
        
        // Random voice interruption
        utterance.onstart = () => {
            if (Math.random() < 0.3) {
                setTimeout(() => {
                    if (Math.random() < 0.5) {
                        speak("INTERRUPTION! Did I mention you can't escape?", true);
                    }
                }, Math.random() * 3000 + 1000);
            }
        };
        
        // Update the dialogue text
        document.getElementById('dialogue').textContent = text;
        
        speechSynthesis.speak(utterance);
    }
}

// Create cursor trail effect
function createCursorTrail(e) {
    if (Math.random() < 0.1) { // Only sometimes to avoid performance issues
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '10px';
        trail.style.height = '10px';
        trail.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '9999';
        trail.style.animation = 'fade-out 1s forwards';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 1000);
    }
}

// Freeze cursor randomly
function freezeCursorRandomly() {
    if (!cursorFrozen && Math.random() < 0.3) {
        cursorFrozen = true;
        document.body.style.cursor = 'wait';
        speak("Oops! Your cursor is frozen! Don't panic!", true);
        playAnnoyingSound('buzz');
        
        setTimeout(() => {
            cursorFrozen = false;
            document.body.style.cursor = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="8" fill="red"/></svg>\'), auto';
        }, 3000);
    }
}

// Following text that follows cursor
function startFollowingText() {
    const followText = document.createElement('div');
    followText.id = 'follow-text';
    followText.textContent = 'I\'M FOLLOWING YOU!';
    followText.style.position = 'fixed';
    followText.style.background = '#ff0000';
    followText.style.color = '#ffffff';
    followText.style.padding = '5px 10px';
    followText.style.borderRadius = '15px';
    followText.style.fontSize = '14px';
    followText.style.fontWeight = 'bold';
    followText.style.pointerEvents = 'none';
    followText.style.zIndex = '9998';
    followText.style.display = 'none';
    
    document.body.appendChild(followText);
    
    let showFollowText = false;
    
    document.addEventListener('mousemove', (e) => {
        if (isLoadingComplete && Math.random() < 0.001) {
            showFollowText = !showFollowText;
        }
        
        if (showFollowText) {
            followText.style.display = 'block';
            followText.style.left = (e.clientX + 20) + 'px';
            followText.style.top = (e.clientY - 30) + 'px';
            
            const messages = ['FOLLOWING YOU!', 'CAN\'T ESCAPE!', 'I SEE YOU!', 'GOTCHA!'];
            followText.textContent = messages[Math.floor(Math.random() * messages.length)];
        } else {
            followText.style.display = 'none';
        }
    });
}

// Fake virus scan
function startFakeVirusScan() {
    if (virusScanActive) return;
    virusScanActive = true;
    
    const virusPopup = document.createElement('div');
    virusPopup.id = 'virus-scan';
    virusPopup.style.position = 'fixed';
    virusPopup.style.top = '50%';
    virusPopup.style.left = '50%';
    virusPopup.style.transform = 'translate(-50%, -50%)';
    virusPopup.style.background = '#000000';
    virusPopup.style.color = '#00ff00';
    virusPopup.style.padding = '30px';
    virusPopup.style.border = '3px solid #ff0000';
    virusPopup.style.borderRadius = '10px';
    virusPopup.style.zIndex = '10000';
    virusPopup.style.fontFamily = 'monospace';
    virusPopup.style.fontSize = '16px';
    virusPopup.style.textAlign = 'center';
    virusPopup.style.minWidth = '400px';
    
    virusPopup.innerHTML = `
        <h2 style="color: #ff0000; margin-bottom: 20px;">🚨 VIRUS SCAN IN PROGRESS 🚨</h2>
        <div id="scan-progress">Scanning: C:\\Windows\\System32\\...</div>
        <div style="margin: 20px 0;">
            <div style="background: #333; height: 20px; border-radius: 10px; overflow: hidden;">
                <div id="virus-progress" style="background: #ff0000; height: 100%; width: 0%; transition: width 0.1s;"></div>
            </div>
        </div>
        <div id="threats-found" style="color: #ff0000;">Threats found: 0</div>
        <button onclick="closeVirusScan()" style="margin-top: 20px; padding: 10px 20px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">REMOVE VIRUSES (FAKE)</button>
    `;
    
    document.body.appendChild(virusPopup);
    
    speak("WARNING! Virus scan initiated! Your computer may be infected!", true);
    playAnnoyingSound('high');
    
    let progress = 0;
    let threatsFound = 0;
    const scanInterval = setInterval(() => {
        progress += Math.random() * 5;
        document.getElementById('virus-progress').style.width = Math.min(progress, 100) + '%';
        
        if (Math.random() < 0.3) {
            threatsFound++;
            document.getElementById('threats-found').textContent = `Threats found: ${threatsFound}`;
            playAnnoyingSound('beep');
        }
        
        const files = [
            'C:\\Windows\\System32\\virus.exe',
            'C:\\Users\\Documents\\secret.txt',
            'C:\\Program Files\\suspicious.dll',
            'C:\\Temp\\malware.bat',
            'C:\\Windows\\evil.sys'
        ];
        
        document.getElementById('scan-progress').textContent = 
            `Scanning: ${files[Math.floor(Math.random() * files.length)]}`;
        
        if (progress >= 100) {
            clearInterval(scanInterval);
            document.getElementById('scan-progress').textContent = 'Scan complete! (This was totally fake)';
            speak(`Scan complete! Found ${threatsFound} fake threats! Don't worry, this is all pretend!`);
        }
    }, 200);
}

function closeVirusScan() {
    const virusPopup = document.getElementById('virus-scan');
    if (virusPopup) {
        virusPopup.remove();
        virusScanActive = false;
        speak("Virus scan closed! But don't worry, I'll run another one soon!", true);
        
        // Schedule another fake scan
        setTimeout(startFakeVirusScan, Math.random() * 30000 + 20000);
    }
}

// Enhanced continuous annoyance functions
function startContinuousAnnoyance() {
    // Change title randomly with more variety
    setInterval(() => {
        const titles = [
            "🎉 CONGRATULATIONS! YOU FOUND THE MOST ANNOYING WEBSITE! 🎉",
            "🚨 WARNING: MAXIMUM ANNOYANCE DETECTED! 🚨",
            "🎊 YOU'RE STUCK HERE FOREVER! 🎊",
            "🔥 THIS WEBSITE IS ON FIRE! (NOT LITERALLY) 🔥",
            "⚡ POWERED BY PURE IRRITATION! ⚡",
            "👁️ I'M WATCHING YOU! 👁️",
            "🤖 RESISTANCE IS FUTILE! 🤖",
            "💀 WELCOME TO DIGITAL HELL! 💀",
            "🎪 THE CIRCUS OF ANNOYANCE! 🎪",
            "🌪️ CHAOS MODE ACTIVATED! 🌪️"
        ];
        document.getElementById('changing-title').textContent = 
            titles[Math.floor(Math.random() * titles.length)];
    }, 2000);
    
    // Speak random dialogues with more interruptions
    setInterval(() => {
        if (!speechSynthesis.speaking || Math.random() < 0.3) {
            currentDialogueIndex = (currentDialogueIndex + 1) % annoyingDialogues.length;
            speak(annoyingDialogues[currentDialogueIndex], Math.random() < 0.3);
        }
    }, 6000);
    
    // More frequent random popups
    setInterval(() => {
        if (Math.random() < 0.4) {
            const randomMessages = [
                "SURPRISE POPUP!",
                "DID YOU MISS ME?",
                "RANDOM INTERRUPTION!",
                "STILL ANNOYING YOU!",
                "POPUP ATTACK!",
                "I'M EVERYWHERE!",
                "CAN'T ESCAPE!",
                "MAXIMUM CHAOS!"
            ];
            createPopup(randomMessages[Math.floor(Math.random() * randomMessages.length)],
                       Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        }
    }, 7000);
    
    // Random scary popups
    setInterval(() => {
        if (Math.random() < 0.2) {
            createScaryPopup();
        }
    }, 12000);
    
    // Randomly shake the entire page more frequently
    setInterval(() => {
        if (Math.random() < 0.3) {
            document.body.style.animation = 'title-shake 1s';
            playAnnoyingSound('buzz');
            setTimeout(() => {
                document.body.style.animation = '';
            }, 1000);
        }
    }, 10000);
    
    // Random sound effects
    setInterval(() => {
        if (Math.random() < 0.2) {
            const sounds = ['beep', 'buzz', 'high'];
            playAnnoyingSound(sounds[Math.floor(Math.random() * sounds.length)]);
        }
    }, 8000);
}

// Create scary popup
function createScaryPopup() {
    const message = scaryMessages[Math.floor(Math.random() * scaryMessages.length)];
    const popup = createPopup(message, Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    
    // Make scary popups red and shaky
    const popupElement = document.getElementById(`popup-${popupCount}`);
    if (popupElement) {
        popupElement.style.background = '#ff0000';
        popupElement.style.color = '#ffffff';
        popupElement.style.animation = 'popup-shake 0.2s infinite';
    }
    
    speak(message.replace(/[()!]/g, ''), true);
    playAnnoyingSound('high');
}

// Set up all the annoying interactive features
function setupAnnoyingFeatures() {
    // Runaway button
    const runawayBtn = document.getElementById('runaway-btn');
    runawayBtn.addEventListener('mouseenter', function() {
        // Move button to random position
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 100);
        this.style.position = 'fixed';
        this.style.left = x + 'px';
        this.style.top = y + 'px';
        this.style.zIndex = '1000';
        
        speak("Ha! You can't catch me!");
    });
    
    runawayBtn.addEventListener('click', function() {
        speak("Wow! You actually caught me! But I'm not going to do anything useful!");
        createPopup("CONGRATULATIONS! YOU CLICKED A USELESS BUTTON!", 
                   Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    });
    
    // Multiply button - creates more popups
    const multiplyBtn = document.getElementById('multiply-btn');
    multiplyBtn.addEventListener('click', function() {
        speak("I warned you not to click that! Now look what you've done!");
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createPopup("YOU SHOULDN'T HAVE CLICKED THAT!", 
                           Math.random() * window.innerWidth, Math.random() * window.innerHeight);
            }, i * 200);
        }
    });
    
    // Sound button - doesn't actually stop anything
    const soundBtn = document.getElementById('sound-btn');
    soundBtn.addEventListener('click', function() {
        speak("Make it stop? NEVER! I'm just getting started! Here's another fun fact!");
        currentDialogueIndex = (currentDialogueIndex + 1) % annoyingDialogues.length;
        setTimeout(() => {
            speak(annoyingDialogues[currentDialogueIndex]);
        }, 2000);
    });
    
    // Fake form submission
    const submitBtn = document.getElementById('submit-btn');
    const nameInput = document.getElementById('name-input');
    
    submitBtn.addEventListener('click', function() {
        const name = nameInput.value || "Anonymous Person";
        speak(`Thank you ${name}! Your information has been completely ignored as promised!`);
        createPopup("FORM SUBMITTED TO NOWHERE!", 
                   Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        nameInput.value = "This form does nothing";
    });
    
    // Make input field annoying
    nameInput.addEventListener('focus', function() {
        speak("Oh, you're trying to type something? How exciting!");
    });
    
    nameInput.addEventListener('input', function() {
        if (Math.random() < 0.3) {
            this.value = this.value + " (ignored)";
        }
    });
}

// Create annoying popups
function createPopup(message, x, y) {
    popupCount++;
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.id = `popup-${popupCount}`;
    
    // Ensure popup stays within screen bounds
    x = Math.max(0, Math.min(x, window.innerWidth - 250));
    y = Math.max(0, Math.min(y, window.innerHeight - 150));
    
    popup.style.left = x + 'px';
    popup.style.top = y + 'px';
    
    popup.innerHTML = `
        <button class="popup-close" onclick="closePopup('popup-${popupCount}')">&times;</button>
        <h3>ANNOYING POPUP #${popupCount}</h3>
        <p>${message}</p>
        <button onclick="createMorePopups()">Click for More Popups!</button>
    `;
    
    document.getElementById('popup-container').appendChild(popup);
    
    // Auto-create more popups after a while
    setTimeout(() => {
        if (document.getElementById(`popup-${popupCount}`)) {
            createPopup("I'M STILL HERE!", 
                       Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        }
    }, 5000);
}

// Close popup function (but create more when closing)
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.remove();
        speak("You closed one, but here come more!");
        
        // Create 2 more popups when closing one
        for (let i = 0; i < 2; i++) {
            setTimeout(() => {
                createPopup("POPUP HYDRA! CLOSE ONE, GET TWO MORE!", 
                           Math.random() * window.innerWidth, Math.random() * window.innerHeight);
            }, i * 500);
        }
    }
}

// Create even more popups
function createMorePopups() {
    speak("You asked for it! Here come the popup army!");
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createPopup("YOU ASKED FOR MORE POPUPS!", 
                       Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        }, i * 300);
    }
}

// Prevent users from leaving easily
window.addEventListener('beforeunload', function(e) {
    const message = "Wait! Don't leave me! I have so much more to tell you!";
    speak(message);
    e.preventDefault();
    e.returnValue = message;
    return message;
});

// Make the page even more annoying when they try to scroll
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (Math.random() < 0.1 && isLoadingComplete) {
            speak("Oh, you're scrolling! How exciting! Let me tell you another fact!");
        }
    }, 1000);
});

// Global functions for popup interactions
window.closePopup = closePopup;
window.createMorePopups = createMorePopups;
window.closeVirusScan = closeVirusScan;
