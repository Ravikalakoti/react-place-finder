# 📍 Place Scout

**Place Scout** is a React-based application that allows users to search for places using the Google Places API. It lets users:
- Search a location and nearby places (e.g., restaurants, hospitals)
- View selected place details
- Bookmark places to revisit later

This project demonstrates a clean component-based React architecture, Google Maps/Places integration, and state management using `useState`.

---

## 🚀 Features

- 🔍 Location + Place Type search (e.g., "Delhi" + "restaurant")
- 🗺️ Uses Google Maps Places API for autocomplete and nearby search
- 📝 View full details of a selected place
- ⭐ Bookmark places to revisit
- ⚛️ Built with functional React components

---

## 📸 Preview

![screenshot](preview.png) <!-- You can replace with an actual screenshot -->

---

## 🛠️ Tech Stack

- **React (CRA)**
- **Google Maps JavaScript API**
- **Google Places API**
- **CSS for styling** (no Tailwind)

---

## 📦 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/place-scout.git
cd place-scout
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your Google API Key

In `App.js`, replace the value of `googleMapsApiKey` with your own key:

```js
<LoadScript googleMapsApiKey="YOUR_API_KEY" libraries={libraries}>
```

👉 Enable **Maps JavaScript API** and **Places API** from Google Cloud Console.

### 4. Run the App

```bash
npm start
```

App runs at `http://localhost:3000`.

---

## 🧩 Folder Structure

```
src/
├── components/
│   ├── SearchControls.js
│   ├── PlaceList.js
│   ├── PlaceDetails.js
│   └── Bookmarks.js
├── App.js
├── App.css
└── index.js
```

---

## ✅ Future Improvements

* Add pagination for results
* Use `useContext` or Redux for better state management
* Add filters for rating, price level, etc.
* Responsive design for mobile

---

## 📄 License

This project is open-source and free to use.

---

## 🙋‍♂️ Author

**Ravi Kalakoti**
Built with ❤️ to showcase Google Maps integration with React.

```
