const useSearchFilterResults = (movieNames, moviesData) => {
  let filteredData = [];

  for (let i = 0; i < movieNames.length; i++) {
    for (let j = 0; j < moviesData.length; j++) {
      if (movieNames[i].toLowerCase() === moviesData[j].title.toLowerCase()) {
        filteredData.push(moviesData[j]);
      }
    }
  }

  return filteredData;
};

export default useSearchFilterResults;
