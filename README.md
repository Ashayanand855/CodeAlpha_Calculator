# Glassmorphic Interactive Calculator

A visually stunning, modern glassmorphic calculator featuring soft pastel gradients, dynamic styling, and responsive design. Built using pure **HTML5, CSS3, and JavaScript (ES6+)**.

---

## 🎨 Design & Visuals

This calculator is designed with premium web aesthetics in mind, focusing on clean layouts and modern interface practices:
- **Glassmorphism:** Uses CSS `backdrop-filter` and translucent borders (`rgba`) to create a frosted-glass effect that sits gracefully over background blobs.
- **Dynamic Gradients:** Smooth radial gradient blobs in the background (`#blob-1` & `#blob-2`) give depth and visual richness to the page.
- **Premium Typography:** Integrates Google Fonts — **Poppins** for a clean, modern UI feel, and **Orbitron** for a futuristic digital display.
- **Micro-Animations:** Interactive buttons with scale transforms (`translateY`) on hover and active states to feel responsive and alive.

---

## 🚀 Key Features

- **Standard Operations:** Addition (`+`), Subtraction (`-`), Multiplication (`x`), and Division (`÷`).
- **Percentage Calculations:** Automatically parses and evaluates percentage signs (e.g., converting `50%` into `(50/100)` under the hood).
- **Backspace & Clear Controls:** 
  - `←` for step-by-step character deletion.
  - `C` to reset the display screen completely.
- **Error Handling:** Gracefully handles invalid mathematical expressions by displaying `Error` and resetting.
- **Responsive Layout:** Responsive grid architecture that renders beautifully on both mobile screens and desktop monitors.

---

## 🛠️ Technology Stack

* **Structure:** [HTML5](file:///Users/ashay/Documents/project/Internships%201st%20year/30days/CodeAlpha/code-alpha-projects/Task2/git%20pr/CodeAlpha_Calculator/index.html) (semantic structure)
* **Styling:** [CSS3](file:///Users/ashay/Documents/project/Internships%201st%20year/30days/CodeAlpha/code-alpha-projects/Task2/git%20pr/CodeAlpha_Calculator/style.css) & [utils.css](file:///Users/ashay/Documents/project/Internships%201st%20year/30days/CodeAlpha/code-alpha-projects/Task2/git%20pr/CodeAlpha_Calculator/utils.css) (custom CSS variables, CSS Grid, Flexbox, backdrop-filter)
* **Logic:** [script.js](file:///Users/ashay/Documents/project/Internships%201st%20year/30days/CodeAlpha/code-alpha-projects/Task2/git%20pr/CodeAlpha_Calculator/script.js) (vanilla JavaScript event listener binding, regex replacements, evaluation engine)

---

## 📂 File Structure

```text
CodeAlpha_Calculator/
├── index.html     # Page layout, fonts link, and HTML markup
├── style.css      # Core styles (glassmorphism variables, layout, animations)
├── utils.css      # Reusable layout utility classes
├── script.js      # Core evaluation, clear, backspace, and button click logic
└── README.md      # Project overview and setup instructions
```

---

## 💻 How to Run Locally

Since this is a client-side vanilla web app, it runs entirely in the browser without any setup:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ashayanand855/CodeAlpha_Calculator.git
   ```
2. **Navigate into the directory:**
   ```bash
   cd CodeAlpha_Calculator
   ```
3. **Open the app:**
   - Double click `index.html` to open it in your default web browser, OR
   - Run a local server (e.g., using VS Code Live Server or python's `http.server`):
     ```bash
     python -m http.server 8000
     ```
     Then navigate to `http://localhost:8000` in your web browser.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
