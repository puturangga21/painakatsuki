import axios from "axios";

const animeBaseUrl = "https://gogoanime-api-production-6a4f.up.railway.app";

export const getAnimeRecent = async () => {
   const AniRecent = await axios.get(`${animeBaseUrl}/recent-release?type=1`);
   console.log(AniRecent);
   return AniRecent.data;
};

export const searchAnime = async (q) => {
   const search = await axios.get(`${animeBaseUrl}/search?keyw=${q}`);
   return search.data;
};
