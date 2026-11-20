# Toy Tales 🧸

Toy Tales is a single-page React inventory application built to help Andy organize and manage his toy collection. Powered by React (`useState` and `useEffect`), Vite, and a `json-server` REST API backend, the app supports full CRUD operations—allowing users to view all toys, add new toys, increment likes, and donate toys.

## Visuals

![Toy Tales Application Screenshot](./screenshot.png)

## Features

- **View Toy Collection (`GET`):** Fetches all toys from the backend API on startup and renders each item as an interactive card.
- **Create a New Toy (`POST`):** Toggleable controlled form that submits new toy details (with initial likes set to `0`) to the database and updates the UI immediately.
- **Like a Toy (`PATCH`):** Increments a toy's like count on the server and updates the card in place while preserving collection order.
- **Donate a Toy (`DELETE`):** Sends a delete request when **Donate to GoodWill** is clicked and removes the toy card from the DOM.

## Installation & Setup

1. **Install project dependencies:**
   ```bash
   npm install