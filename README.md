# 🧮 Smart Calculator

A modern and responsive calculator built using **HTML, CSS, and JavaScript** as part of the **CodeAlpha Frontend Development Internship**.

This project performs basic arithmetic calculations while providing a clean user interface, keyboard support, and calculation history for an enhanced user experience.

---

## 🚀 Live Demo

Add your GitHub Pages link here:

https://yourusername.github.io/CodeAlpha_Calculator/

---

## 📸 Preview

Add a screenshot of your calculator here.

![Calculator Preview](calculator-preview.png)

---

## ✨ Features

### Basic Arithmetic Operations
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (÷)
- Percentage (%)

### User-Friendly Controls
- Clear All (AC)
- Delete Last Character (⌫)
- Decimal Point Support
- Real-Time Calculations

### Keyboard Support
Users can operate the calculator directly from the keyboard:

| Key | Function |
|------|----------|
| 0-9 | Numbers |
| + - * / | Operators |
| Enter | Calculate |
| Backspace | Delete Last Character |
| Escape | Clear Screen |

### Calculation History
- Stores previous calculations
- Easily review past operations
- Modern side-panel history view

### Responsive Design
- Mobile Friendly
- Tablet Friendly
- Desktop Friendly

### Modern UI
- Glassmorphism-inspired design
- Gradient backgrounds
- Hover animations
- Interactive buttons
- Smooth transitions

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```text
CodeAlpha_Calculator
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets
    └── calculator-preview.png
```

---

## ⚙️ How It Works

### Input Handling

The calculator listens for button clicks and keyboard events.

```javascript
button.addEventListener("click",()=>{
    // Handle user input
});
```

### Expression Evaluation

Mathematical expressions are evaluated using JavaScript.

```javascript
eval(expression);
```

### History Management

Every successful calculation is added to the history panel.

```javascript
historyList.prepend(li);
```

### Keyboard Shortcuts

The calculator supports keyboard interactions for faster usage.

```javascript
document.addEventListener("keydown",(e)=>{
    // Handle keyboard input
});
```

---

## 📱 Responsive Design

The layout automatically adjusts based on screen size to provide a seamless experience across:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

## 🎯 Learning Outcomes

Through this project I learned:

- DOM Manipulation
- Event Handling
- JavaScript Functions
- Keyboard Events
- CSS Grid Layout
- Responsive Design
- UI/UX Improvements
- Git & GitHub Workflow

---

## 🔮 Future Improvements

- Scientific Calculator Functions
- Dark / Light Theme Toggle
- Local Storage for History
- Copy Result Button
- Calculation Memory Functions
- Theme Customization

---

## 👩‍💻 Author

**Rishika Verma**

B.Tech CSE Student  
Frontend Development Intern at CodeAlpha

GitHub: https://github.com/rishikarv

---

## 📜 Internship Information

This project was completed as part of the **CodeAlpha Frontend Development Internship Program**.

Task Completed:
✅ Calculator Application using HTML, CSS, and JavaScript

---

⭐ If you found this project helpful, consider giving the repository a star.
