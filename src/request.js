const API_KEY = '418cf5c6a538d7615c23c7e7fb633a77';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOG : `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/mobie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaies:`/discover/movie?api_key=${API_KEY}&with_genres=99`

};

export default requests;