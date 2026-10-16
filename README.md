# Practical 2: State Management and Routing in React

**Student Name:** Deep Chauhan  
**Student ID:** 24CS012  
**Course:** ITUE301 / CSE304 — Advanced Web Development Frameworks  
**Institution:** Charotar University of Science and Technology (CHARUSAT) — CSPIT / DEPSTAR  

---

## 📌 Project Overview
A multi-page Single Page Application (SPA) built with **React** and **React Router v6**. The project demonstrates client-side routing across multiple views without full-page browser reloads, combined with reactive state management using React's **`useState`** hook for controlled form elements, live counters, UI element toggling, and global theme switching.

---

## 🏗️ Architecture & Route Hierarchy
```text
main.jsx (Root Entry Point wrapped in <BrowserRouter>)
 └── App.jsx (Global Theme State Provider)
      ├── NavBar.jsx (Client-Side Navigation using NavLink + Theme Toggle Switch)
      ├── Routes
      │    ├── Route: "/"          → Home.jsx (Profile overview + expandable coursework banner)
      │    ├── Route: "/projects"  → Projects.jsx (Project cards + reactive category filter)
      │    ├── Route: "/contact"   → Contact.jsx (Controlled input, character count, live preview)
      │    └── Route: "*"          → NotFound.jsx (Custom 404 error fallback view)
      └── Footer.jsx
```

---

## 🚀 Key Features Implemented

1. **Client-Side Routing with React Router v6:**
   - Wrapped inside `<BrowserRouter>` at the root entry point.
   - Declarative route matching with `<Routes>` and `<Route>`.
   - Links rendered using `<NavLink>` to prevent full browser reloads and provide automatic active route state styling.
   - Catch-all wildcard route (`*`) providing a 404 error boundary for undefined paths.

2. **Controlled Form Architecture:**
   - In `Contact.jsx`, all form input values (`message`, `senderName`, `senderEmail`, `subject`) are bound directly to React state (`value={state}`).
   - Updates occur predictably via `onChange` handlers, keeping React as the single source of truth.

3. **Live Character Tracking & Real-Time Preview:**
   - Instant calculation and display of current message length against a 300-character maximum limit.
   - Live Message Card mirror that captures and displays user keystrokes in real time.

4. **UI Visibility Toggles via `useState`:**
   - Interactive disclosure banner on the Home page for detailed academic credentials.
   - Guidelines accordion on the Contact page for collaboration best practices.

5. **Dynamic Theming (Dark & Light Mode):**
   - Global state toggles between sleek dark mode and clean light mode, swapping CSS custom properties across the entire application shell seamlessly.

---

## 🛠️ How to Run Locally

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Execution
```bash
# 1. Navigate to the project directory
cd prc2

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 📝 Conceptual Analysis & Viva Q&A

### Q1: Why use `<Link>` / `<NavLink>` instead of standard HTML `<a>` tags?
An `<a>` tag with an `href` attribute instructs the browser to initiate a standard HTTP navigation request. This causes the browser to discard its current JavaScript execution environment, reload all resources from scratch, and reset application state in memory. `<Link>` / `<NavLink>` intercepts the click event, prevents the default browser reload, and updates the browser URL via the HTML5 History API (`history.pushState`). React Router then conditionally swaps the matching route components within the already-loaded DOM tree instantaneously.

### Q2: What is the core difference between Controlled and Uncontrolled Components?
- In an **uncontrolled component**, the DOM itself maintains form input state (retrieved via `useRef` or event targets upon submission).
- In a **controlled component**, form input values are driven directly by React state (`value={state}`). Every keystroke triggers `onChange`, running state updater functions. This gives developers immediate control to validate input on the fly, enforce formatting rules, update live character counts, and disable submission buttons dynamically.

### Q3: Why must `BrowserRouter` wrap the application once at the root level?
`BrowserRouter` establishes the top-level context provider that supplies routing state (`location`, `match`, `navigation` actions) to all nested child components. All React Router hooks (`useNavigate`, `useLocation`, `useParams`) and components (`<Routes>`, `<Route>`, `<Link>`) must be descendants of this provider to consume routing context. Wrapping `<App />` inside `main.jsx` ensures the entire application tree operates within a single, consistent routing context.

---

## 🔍 Engineering Reflection
- **State Segregation:** Kept route-specific states (such as form fields and search filters) local to their respective page components to avoid unnecessary parent re-renders, while elevating global concerns (such as dark/light mode) to `App.jsx`.
- **404 Wildcard:** Placed the `<Route path="*" element={<NotFound />} />` as the final route in `<Routes>` to gracefully catch broken or mistyped URLs.
