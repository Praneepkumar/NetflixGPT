export const LOGO = require("../../newflix.png");

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};
export const VIDEO_URL = (movie_id) => `
https://api.themoviedb.org/3/movie/${movie_id}/videos`;
export const IMG_PATH = "https://image.tmdb.org/t/p/w500";

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_KEY;

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", language: "English" },
  { identifier: "hindi", language: "Hindi" },
  { identifier: "telugu", language: "Telugu" },
  { identifier: "spanish", language: "Spanish" },
];

export const LANGUAGE_CONFIG = {
  en: {
    homeBtn: "Home",
    signOut: "Sign out",
    heading: "Explore the effortless movie search experience empowered by GPT!",
    searchPlaceholder: "What would you like to watch today?",
    btnText: "Search",
  },
  hindi: {
    homeBtn: "होम",
    signOut: "साइन आउट",
    heading: "GPT द्वारा सशक्त सहज मूवी खोज अनुभव का अन्वेषण करें!",
    searchPlaceholder: "आज आप क्या देखना चाहेंगे?",
    btnText: "खोज",
  },
  telugu: {
    homeBtn: "హోమ్",
    signOut: "సైన్అవుట్",
    heading:
      "GPT ద్వారా సాధికారత పొందిన అప్రయత్నమైన చలనచిత్ర శోధన అనుభవాన్ని అన్వేషించండి!",
    searchPlaceholder: "ఈరోజు మీరు ఏమి చూడాలనుకుంటున్నారు?",
    btnText: "వెతకండి",
  },
  spanish: {
    homeBtn: "hogar",
    signOut: "desconectar",
    heading:
      "¡Explore la sencilla experiencia de búsqueda de películas potenciada por GPT!",
    searchPlaceholder: "¿Qué te gustaría ver hoy?",
    btnText: "Buscar",
  },
};
