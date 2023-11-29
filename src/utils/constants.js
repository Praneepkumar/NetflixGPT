export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

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
