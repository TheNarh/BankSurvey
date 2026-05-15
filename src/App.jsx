// src/App.jsx
import { useState } from "react";
import { STEPS } from "./constants/steps";
import WelcomeScreen from "./components/welcome/WelcomeScreen";
import ServiceScreen from "./components/services/ServiceScreen";
import RatingScreen from "./components/rating/RatingScreen";
import FeedbackScreen from "./components/feedback/FeedbackScreen";
import NpsScreen from "./components/nps/NpsScreen";
import ThankYouScreen from "./components/thankyou/ThankYouScreen";

export default function App() {
  const [step, setStep] = useState(STEPS.WELCOME);

  const [surveyData, setSurveyData] = useState({
    services: [],
    ratings: {},
    feedback: {},
    nps: null,
  });

  function handleServicesNext(selectedServices) {
    setSurveyData((prev) => ({ ...prev, services: selectedServices }));
    setStep(STEPS.RATING);
  }

  function handleRatingsNext(ratings) {
    setSurveyData((prev) => ({ ...prev, ratings }));
    setStep(STEPS.FEEDBACK);
  }

  function handleFeedbackNext(feedback) {
    setSurveyData((prev) => ({ ...prev, feedback }));
    setStep(STEPS.NPS);
  }

  function handleNpsNext(nps) {
    setSurveyData((prev) => ({ ...prev, nps }));
    setStep(STEPS.THANKYOU);
  }

  return (
    <>
      {step === STEPS.WELCOME && (
        <WelcomeScreen onStart={() => setStep(STEPS.SERVICES)} />
      )}
      {step === STEPS.SERVICES && <ServiceScreen onNext={handleServicesNext} />}
      {step === STEPS.RATING && (
        <RatingScreen
          services={surveyData.services}
          onNext={handleRatingsNext}
          onBack={() => setStep(STEPS.SERVICES)}
        />
      )}
      {step === STEPS.FEEDBACK && (
        <FeedbackScreen
          services={surveyData.services}
          onNext={handleFeedbackNext}
          onBack={() => setStep(STEPS.RATING)}
        />
      )}
      {step === STEPS.NPS && (
        <NpsScreen
          onNext={handleNpsNext}
          onBack={() => setStep(STEPS.FEEDBACK)}
        />
      )}
      {step === STEPS.THANKYOU && <ThankYouScreen surveyData={surveyData} />}
    </>
  );
}
