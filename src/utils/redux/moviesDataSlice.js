import { createSlice } from "@reduxjs/toolkit";

const moviesDataSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    trailerBackgroundVideo: null,
    trailerVideo: { trailer: null, showTrailerPopup: false },
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
    addTrailerBackgroundVideo(state, action) {
      state.trailerBackgroundVideo = action.payload;
    },
    addTrailerVideo(state, action) {
      state.trailerVideo.trailer = action.payload;
    },
    addSetTrailerPopup(state, action) {
      state.trailerVideo.showTrailerPopup = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerBackgroundVideo,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addSetTrailerPopup,
} = moviesDataSlice.actions;
export default moviesDataSlice.reducer;
