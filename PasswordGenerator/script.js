// Character sets for password generation
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Get DOM elements
const passwordOutput = document.getElementById('passwordOutput');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

// Update length value display
lengthSlider.addEventListener('input', (e) => {
    lengthValue.textContent = e.target.value;
});

// Generate password function
function generatePassword() {
    const length = parseInt(lengthSlider.value);
    let charset = '';
    let password = '';

    // Build character set based on selected options
    if (uppercaseCheck.checked) charset += uppercaseChars;
    if (lowercaseCheck.checked) charset += lowercaseChars;
    if (numbersCheck.checked) charset += numberChars;
    if (symbolsCheck.checked) charset += symbolChars;

    // Check if at least one option is selected
    if (charset === '') {
        alert('Please select at least one character type!');
        return;
    }

    // Generate password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordOutput.value = password;
    updatePasswordStrength(password);
}

// Update password strength indicator
function updatePasswordStrength(password) {
    let strength = 0;
    const length = password.length;

    // Length check
    if (length >= 8) strength += 20;
    if (length >= 12) strength += 20;
    if (length >= 16) strength += 10;

    // Character variety checks
    if (/[a-z]/.test(password)) strength += 15;
    if (/[A-Z]/.test(password)) strength += 15;
    if (/[0-9]/.test(password)) strength += 10;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 10;

    // Update strength bar
    strengthBar.style.width = strength + '%';

    // Update color and text based on strength
    if (strength <= 40) {
        strengthBar.style.background = '#ef4444';
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#ef4444';
    } else if (strength <= 70) {
        strengthBar.style.background = '#f59e0b';
        strengthText.textContent = 'Medium';
        strengthText.style.color = '#f59e0b';
    } else {
        strengthBar.style.background = '#10b981';
        strengthText.textContent = 'Strong';
        strengthText.style.color = '#10b981';
    }
}

// Copy password to clipboard
function copyPassword() {
    if (passwordOutput.value === '') {
        alert('Please generate a password first!');
        return;
    }

    passwordOutput.select();
    passwordOutput.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(passwordOutput.value)
        .then(() => {
            // Visual feedback
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `;
            copyBtn.style.background = '#10b981';

            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = '#667eea';
            }, 2000);
        })
        .catch(err => {
            alert('Failed to copy password: ' + err);
        });
}

// Event listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);

// Update strength when checkboxes change
[uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck].forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (passwordOutput.value) {
            generatePassword();
        }
    });
});

// Update password when length changes
lengthSlider.addEventListener('input', () => {
    if (passwordOutput.value) {
        generatePassword();
    }
});

// Generate initial password on page load
window.addEventListener('load', generatePassword);
