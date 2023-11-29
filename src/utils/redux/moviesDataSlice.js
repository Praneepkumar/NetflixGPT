import { createSlice } from "@reduxjs/toolkit";

const moviesDataSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlaying = action.payload;
    },
    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies(state, action) {
      state.upComingMovies = action.payload;
    },
    addTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesDataSlice.actions;
export default moviesDataSlice.reducer;
