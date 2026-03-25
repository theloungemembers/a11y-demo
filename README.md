# Accessibility (a11y) Demo Sandbox

A practical QA/dev sandbox built with Next.js App Router for reproducing and validating accessibility behavior, particularly in mobile app WebViews and standard browsers.

## Purpose

This project provides a robust, extensible testing ground for accessibility on the web. Instead of complex, abstracted theories, this project uses concrete, side-by-side examples (Good vs Bad) of common UI patterns. 

It is designed to be easily loaded into an iOS `WKWebView` or Android `WebView` to test native screen reader behavior (VoiceOver and TalkBack) on web content.

## How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Note:** `@axe-core/react` is enabled in development mode and will log accessibility violations dynamically to your browser console.

## Demo Scenarios

The app is broken down into focused scenarios for easy testing:

- **`/demo/semantics`**: Tests landmarks (`<header>`, `<main>`, `<footer>`) and sequential heading hierarchy.
- **`/demo/forms`**: Tests input labels, descriptions (`aria-describedby`), error states, and required field announcements.
- **`/demo/focus`**: Tests focus management, `tabIndex` behavior, programmatic focus movement, and logical DOM ordering.
- **`/demo/modal`**: Tests focus trapping inside dialogs, restorative focus, and hiding underlying content from screen readers.
- **`/demo/live-region`**: Tests dynamic announcements without focus movement using `aria-live`.
- **`/demo/interactive-elements`**: Compares native buttons against fake clickable `div`s and the pitfalls of re-creating keyboard interaction manually.
- **`/demo/list-and-table`**: Verifies screen reader reading order, listing contexts, and tabular data semantics.

## How to use in Mobile WebView QA

To test these scenarios in a real hybrid app:

1. **Host the app**: Expose your local server to your mobile device (e.g., using `ngrok`, your local network IP, or deploying to Vercel).
2. **Load the URL**: Point your mobile app's WebView to the hosted URL.
3. **Enable Screen Reader**: Turn on VoiceOver (iOS) or TalkBack (Android).
4. **Compare Examples**: Navigate the page using standard screen reader gestures (swipe right/left to read next/previous, double tap to activate). Observe the difference in announcement and navigability between the "Correct" and "Incorrect" examples.

## Automated Testing vs Manual Testing

**Automated tools** (like `eslint-plugin-jsx-a11y` or AxeCore) are great for catching low-hanging fruit:
- Missing `alt` text
- Invalid ARIA attributes
- Insufficient color contrast

**Manual testing with a screen reader** is absolutely required for:
- Logical reading order and focus management traps
- Contextual meaning (e.g., does the accessible name actually make sense to a human?)
- Complex interactive widgets (custom dropdowns, comboboxes, modals)
- WebView-specific quirks (e.g., how a fixed header might trap swipe navigation on iOS)

Do not assume that 0 automated violations equals an accessible application!
