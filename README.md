# 🏎️ Interactive GSAP Scroll Animation

A high-performance, scroll-driven web animation featuring a synchronized car journey, dynamic text reveals, and staggered statistical data cards. Built to showcase advanced front-end UI/UX polish and scroll-tied micro-interactions.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

## ✨ Features

* **Scroll-Triggered Timeline:** The entire animation is tied directly to the user's scroll position using GSAP's `scrub` feature for fluid, reverseable playback.
* **GPU-Accelerated Movement:** Utilizes `x` transforms rather than layout properties (`left`/`right`) to ensure buttery-smooth 60fps rendering as the car travels across the viewport.
* **Dynamic Text Splitter:** Vanilla JavaScript seamlessly splits the central header into individual `<span>` elements, allowing for a tight, staggered letter-by-letter reveal that follows the car's path.
* **Precise Component Syncing:** Statistical UI cards are timed meticulously with `back.out` easing to pop exactly as the vehicle passes their designated coordinates.

## 🛠️ Tech Stack

* **HTML5** - Semantic structure.
* **Tailwind CSS (CDN)** - Rapid, utility-first styling and absolute positioning.
* **GSAP (GreenSock Animation Platform)** - Core animation engine.
* **GSAP ScrollTrigger** - Scroll-based timeline manipulation and viewport pinning.

## 🚀 Getting Started

This project runs entirely in the browser with no build step required.

### Prerequisites
Ensure you have a top-down image of a car saved as `car.png` in the root directory.

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/gsap-car-scroll.git](https://github.com/yourusername/gsap-car-scroll.git)
