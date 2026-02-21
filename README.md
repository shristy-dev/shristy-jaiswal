## Shristy Jaiswal Portfolio – Developer Guide (Mobile-Centric)

### Project Overview
This is a portfolio web app for Shristy Jaiswal, focused on mobile app development and frontend engineering. The project is built with React, TypeScript, Vite, and Tailwind CSS, and is designed with a mobile-first, responsive approach.

### Getting Started

1. **Install dependencies:**
	```bash
	npm install
	```

2. **Run the development server:**
	```bash
	npm run dev
	```

3. **Build for production:**
	```bash
	npm run build
	```

4. **Preview production build:**
	```bash
	npm run preview
	```

### Mobile-First & Responsive Design
- All layouts and components use Tailwind CSS with mobile breakpoints as the default.
- The navigation, sidebar, and drawers are optimized for touch and small screens.
- Images and assets are optimized for fast loading on mobile networks.
- Use the `useIsMobile` hook for device-specific logic.

### Folder Structure
- `src/components/` – Reusable UI and page components (Header, Footer, Sidebar, etc.)
- `src/pages/` – Main page views (Index, Blog, NotFound)
- `src/hooks/` – Custom React hooks (e.g., `useIsMobile`)
- `src/lib/` – Utility functions
- `public/images/` – Static images (optimize for mobile)

### Developer Tips
- Use Tailwind utility classes for all styling; avoid custom CSS unless necessary.
- Test all changes on mobile devices/emulators.
- Keep navigation and touch targets large and accessible.
- Add smooth page transition animations using the `AnimatedPage` wrapper for better navigation flow.
- Use semantic HTML and ARIA attributes for accessibility.

### Contributing
1. Fork the repo and create a feature branch.
2. Follow the mobile-first and accessibility guidelines above.
3. Open a pull request with a clear description.

---
For any questions, contact [shristyjaiswal0725@gmail.com](mailto:shristyjaiswal0725@gmail.com).