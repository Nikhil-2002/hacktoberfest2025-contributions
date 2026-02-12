// DOM Elements
const setSleepTimerBtn = document.getElementById("set-sleep-timer");
const timePopup = document.getElementById("time-popup");
const closeButtons = document.querySelectorAll(".close-btn");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const amBtn = document.getElementById("am-btn");
const pmBtn = document.getElementById("pm-btn");
const setTimeBtn = document.getElementById("set-time-btn");
const progress = document.getElementById("progress");
const status = document.getElementById("status");
const tip = document.getElementById("tip");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.querySelector(".theme-icon");
const notification = document.getElementById("notification");
const circle = document.querySelector(".circle");

// State variables
let currentAmPm = "PM"; // Default to PM
let bedtimeSet = false;
let bedtimeTimeout;
let currentTheme = "dark";

// Sleep tips
const tips = [
  "Avoid screens 30 minutes before sleep.",
  "Keep your room cool and dark.",
  "Stick to a consistent bedtime.",
  "Relax with deep breathing.",
  "Limit caffeine in the evening.",
  "Create a bedtime routine to signal sleep time.",
  "Use your bed only for sleep and intimacy.",
  "Get natural light exposure during the day.",
  "Try progressive muscle relaxation.",
  "Listen to calming music or nature sounds."
];

// Time input validation
function validateTimeInput(input, min, max) {
  let value = parseInt(input.value) || 0;
  if (value < min) value = min;
  if (value > max) value = max;
  input.value = value.toString().padStart(2, '0');
}

// AM/PM toggle
function setAmPm(selected) {
  currentAmPm = selected;
  amBtn.classList.toggle("active", selected === "AM");
  pmBtn.classList.toggle("active", selected === "PM");
}

// Show popup with animation
function showPopup(popup) {
  popup.classList.add("show");
}

// Hide popup with animation
function hidePopup(popup) {
  popup.classList.remove("show");
  // Delay hiding to allow animation to complete
  setTimeout(() => {
    if (!popup.classList.contains("show")) {
      popup.classList.add("hidden");
    }
  }, 300);
}

// Show notification with animation
function showNotification() {
  notification.classList.remove("hidden");
  notification.classList.add("show");
  
  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.classList.add("hidden");
    }, 500);
  }, 3000);
}

// Create wave effect
function createWaveEffect() {
  // Remove any existing wave effects
  const existingWave = document.querySelector(".wave-effect");
  if (existingWave) existingWave.remove();
  
  // Create new wave effect
  const waveEffect = document.createElement("div");
  waveEffect.className = "wave-effect";
  circle.appendChild(waveEffect);
  
  // Show wave effect
  setTimeout(() => {
    waveEffect.classList.add("show");
  }, 100);
  
  // Hide wave effect after animation
  setTimeout(() => {
    waveEffect.classList.remove("show");
    setTimeout(() => {
      waveEffect.remove();
    }, 1000);
  }, 3000);
}

// Update progress circle
function updateProgress() {
  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;
  
  if (hours === 0 && minutes === 0 && seconds === 0) {
    status.textContent = "Please set a valid bedtime";
    return;
  }
  
  // Format time for display
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  const bedtimeDisplay = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${currentAmPm}`;
  
  // Calculate progress
  const now = new Date();
  let bedtimeHours = hours;
  
  // Convert to 24-hour format for calculation
  if (currentAmPm === "AM" && bedtimeHours === 12) {
    bedtimeHours = 0;
  } else if (currentAmPm === "PM" && bedtimeHours !== 12) {
    bedtimeHours += 12;
  }
  
  const bedtimeDate = new Date();
  bedtimeDate.setHours(bedtimeHours, minutes, seconds);
  
  // If bedtime is in the past, set it for tomorrow
  if (bedtimeDate <= now) {
    bedtimeDate.setDate(bedtimeDate.getDate() + 1);
  }
  
  // Calculate time until bedtime
  const timeUntilBed = bedtimeDate - now;
  const totalDayMinutes = 24 * 60;
  const passedMinutes = now.getHours() * 60 + now.getMinutes();
  const progressPercent = (passedMinutes / totalDayMinutes) * 100;
  
  // Update UI
  progress.style.height = `${progressPercent}%`;
  status.textContent = `Your bedtime is at ${bedtimeDisplay} 🌙`;
  tip.textContent = tips[Math.floor(Math.random() * tips.length)];
  
  // Set bedtime flag
  bedtimeSet = true;
  
  // Create wave effect
  createWaveEffect();
  
  // Clear any existing timeout
  if (bedtimeTimeout) clearTimeout(bedtimeTimeout);
  
  // Set timeout for bedtime notification
  if (timeUntilBed > 0) {
    bedtimeTimeout = setTimeout(() => {
      showNotification();
    }, timeUntilBed);
  }
}

// Theme management with enhanced animation
function setTheme(theme) {
  // Add transition class for animation
  document.body.classList.add("theme-transition");
  
  // Remove all theme classes
  document.body.classList.remove("dark-theme", "light-theme");
  
  // Add the selected theme class after a short delay to allow for animation
  setTimeout(() => {
    document.body.classList.add(`${theme}-theme`);
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 600);
  }, 10);
  
  currentTheme = theme;
  localStorage.setItem("sleepGuiderTheme", theme);
  
  // Update theme icon with smooth transition
  themeIcon.style.opacity = "0";
  
  setTimeout(() => {
    if (theme === "dark") {
      themeIcon.textContent = "🌙";
    } else {
      themeIcon.textContent = "☀️";
    }
    themeIcon.style.opacity = "1";
  }, 300);
}

// Initialize theme from localStorage
function initTheme() {
  const savedTheme = localStorage.getItem("sleepGuiderTheme") || "dark";
  setTheme(savedTheme);
}

// Event Listeners
setSleepTimerBtn.addEventListener("click", () => {
  showPopup(timePopup);
});

amBtn.addEventListener("click", () => setAmPm("AM"));
pmBtn.addEventListener("click", () => setAmPm("PM"));

setTimeBtn.addEventListener("click", () => {
  updateProgress();
  hidePopup(timePopup);
});

themeToggleBtn.addEventListener("click", () => {
  // Add pulse animation to button
  themeToggleBtn.classList.add("pulse");
  
  // Remove pulse class after animation completes
  setTimeout(() => {
    themeToggleBtn.classList.remove("pulse");
  }, 600);
  
  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});

// Close buttons for popups
closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    hidePopup(timePopup);
  });
});

// Close popup when clicking outside content
document.addEventListener("click", (e) => {
  if (timePopup.classList.contains("show") && e.target === timePopup) {
    hidePopup(timePopup);
  }
});

// Time input validation
hoursInput.addEventListener("input", () => validateTimeInput(hoursInput, 1, 12));
minutesInput.addEventListener("input", () => validateTimeInput(minutesInput, 0, 59));
secondsInput.addEventListener("input", () => validateTimeInput(secondsInput, 0, 59));

// Initialize
initTheme();
setAmPm("PM"); // Default to PM

// Set initial focus on hours input when popup opens
timePopup.addEventListener("transitionend", () => {
  if (timePopup.classList.contains("show")) {
    hoursInput.focus();
  }
});

// Optional: update progress every minute
setInterval(() => {
  if (bedtimeSet) {
    updateProgress();
  }
}, 60000);

// Add some initial animations
document.addEventListener("DOMContentLoaded", () => {
  // Add staggered animations to elements
  const elements = document.querySelectorAll(".container > *");
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });
});