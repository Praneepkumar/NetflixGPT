import { GENRES } from "../utils/constants";
const useGetGenres = (genreIds) =>
  genreIds
    .map((id) => GENRES.find((genre) => genre.id === id))
    .map((genre) => genre.name || null);

export default useGetGenres;
