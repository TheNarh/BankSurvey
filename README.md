# GhanaBank Customer Survey

A customer feedback survey built with **React** and **Tailwind CSS**. Designed for both online customers and walk-in branch visitors on kiosk/tablet devices.

---

## Preview

| Welcome | Service Selection | Rating |
|---|---|---|
| Clean landing screen with GhanaBank branding | Multi-select service tiles | Star rating per selected service |

| Feedback | NPS Score | Thank You |
|---|---|---|
| Open-ended text per service | 0–10 satisfaction score | Summary of all responses |

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ghanabank-survey.git

# Navigate into the project
cd ghanabank-survey

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## ScreenShots

<img width="1896" height="881" alt="BankSurvey1" src="https://github.com/user-attachments/assets/69a9fcf6-70c4-44cc-96af-a6ccee75ac92" />
<img width="1900" height="857" alt="BankSurvey2" src="https://github.com/user-attachments/assets/8ac24518-2305-4395-910b-7ba9f9144db7" />
<img width="1894" height="771" alt="BankSurvey3" src="https://github.com/user-attachments/assets/bb92211f-e6df-4e8e-ae46-487a68f1d2a3" />
<img width="1897" height="824" alt="BankSurvey4" src="https://github.com/user-attachments/assets/7981ec96-5ccc-4034-aa97-8c811c3262a3" />
<img width="1897" height="824" alt="BankSurvey5" src="https://github.com/user-attachments/assets/1c3e1425-9999-47d6-89ce-a4868c0f4579" />
<img width="1901" height="811" alt="BankSurvey6" src="https://github.com/user-attachments/assets/f919018a-eeb6-4c3d-93e4-91857941f97f" />




## Project Structure

```
src/
├── App.jsx                          # Root component — step manager & global state
├── main.jsx                         # App entry point
├── index.css                        # Tailwind CSS imports
│
├── constants/
│   └── steps.js                     # Survey step name constants
│
└── components/
    ├── layout/
    │   └── Header.jsx               # GhanaBank logo & nav bar (shared across all screens)
    │
    ├── welcome/
    │   ├── WelcomeScreen.jsx        # Welcome page composer
    │   └── WelcomeCard.jsx          # Heading, description & start button card
    │
    ├── services/
    │   ├── ServiceScreen.jsx        # Service selection page composer
    │   └── ServiceCard.jsx          # Individual selectable service tile
    │
    ├── rating/
    │   ├── RatingScreen.jsx         # Rating page composer
    │   └── StarRating.jsx           # Reusable interactive star rating widget
    │
    ├── feedback/
    │   ├── FeedbackScreen.jsx       # Feedback page composer
    │   └── FeedbackField.jsx        # Controlled textarea field per service
    │
    ├── nps/
    │   └── NpsScreen.jsx            # Overall satisfaction score screen (0–10)
    │
    └── thankyou/
        └── ThankYouScreen.jsx       # Submission confirmation & response summary
```

---

## Survey Flow

```
Welcome → Service Selection → Star Rating → Written Feedback → NPS Score → Thank You
```

- **Welcome** — introduces the survey with branding and confidentiality note
- **Service Selection** — customer selects one or more services they used (Branch, Online Banking, Support)
- **Star Rating** — customer rates each selected service from 1 to 5 stars
- **Written Feedback** — customer optionally describes what went well and what can improve per service
- **NPS Score** — customer gives an overall likelihood-to-recommend score from 0 to 10
- **Thank You** — displays a full summary of all submitted responses

---

## Architecture & Design Decisions

### State Management
All survey data lives in a single `surveyData` object in `App.jsx`:

```js
const [surveyData, setSurveyData] = useState({
  services: [],   // e.g. ["branch", "online"]
  ratings: {},    // e.g. { branch: 4, online: 5 }
  feedback: {},   // e.g. { branch: { well: "...", improve: "..." } }
  nps: null,      // e.g. 8
});
```

Each screen receives only the data it needs via props and calls `onNext()` with its collected data when the user proceeds. This keeps components focused and testable.

### Component Philosophy
- **Screen components** (e.g. `WelcomeScreen`) are page composers — they assemble layout, header, and card components.
- **UI components** (e.g. `StarRating`, `ServiceCard`) are pure and reusable — they receive data via props and emit events via callbacks.
- **No component manages state it doesn't own** — state is lifted to `App.jsx` and flows down as props.

### Step Navigation
Step names are centralised in `src/constants/steps.js` to avoid hardcoded strings across the codebase.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |

---



## License

This project is licensed under the MIT License.

---

> Built as a React learning project featuring component architecture, state management and controlled inputs from scratch.
