export const LOGO = require("../../newflix.png");
export const USER_AVATAR = require("../../avatar-red.jpeg");
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const VIDEO_URL = (movie_id) => `
https://api.themoviedb.org/3/movie/${movie_id}/videos`;
export const IMG_PATH = "https://image.tmdb.org/t/p/w500";

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_KEY;
export const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_KEY;
export const SEARCH_COUNT = 4;

export const GENRES = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
/* export const SUPPORTED_LANGUAGES = [
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
 */
