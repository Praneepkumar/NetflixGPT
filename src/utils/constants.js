export const LOGO = require("../../newflix.png");

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWQ2MzMyNzM3YzU1OGY0ZGYyMDVmOWI5ZmQ2ZjBkZiIsInN1YiI6IjY1NTZmNjBiN2YwNTQwMDBhY2E1OTdlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MMfKiOuydtqyeJ_EA6pO5oLS1umezot5swv3d9N1pQQ",
  },
};
export const VIDEO_URL = (movie_id) => `
https://api.themoviedb.org/3/movie/${movie_id}/videos`;
export const IMG_PATH = "https://image.tmdb.org/t/p/w500";

export const OPENAI_API_KEY =
  "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";
/*   "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"; */

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", language: "English" },
  { identifier: "hindi", language: "Hindi" },
  { identifier: "telugu", language: "Telugu" },
  { identifier: "spanish", language: "Spanish" },
];

export const LANGUAGE_CONFIG = {
  en: {
    heading: "Explore the effortless movie search experience empowered by GPT!",
    searchPlaceholder: "What would you like to watch today?",
    btnText: "Search",
  },
  hindi: {
    heading: "GPT द्वारा सशक्त सहज मूवी खोज अनुभव का अन्वेषण करें!",
    searchPlaceholder: "आज आप क्या देखना चाहेंगे?",
    btnText: "खोज",
  },
  telugu: {
    heading:
      "GPT ద్వారా సాధికారత పొందిన అప్రయత్నమైన చలనచిత్ర శోధన అనుభవాన్ని అన్వేషించండి!",
    searchPlaceholder: "ఈరోజు మీరు ఏమి చూడాలనుకుంటున్నారు?",
    btnText: "వెతకండి",
  },
  spanish: {
    heading:
      "¡Explore la sencilla experiencia de búsqueda de películas potenciada por GPT!",
    searchPlaceholder: "¿Qué te gustaría ver hoy?",
    btnText: "Buscar",
  },
};
