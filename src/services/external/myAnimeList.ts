export const FetchMyAnimeList = {
  search: async ({ category, query }: { category: string; query: string }) => {
    if (!query) {
      return;
    }
    const response = await fetch(
      `${import.meta.env.VITE_MAL_BASE_URL}/${category}?q=${query}&limit=6&fields=alternative_titles,status,mean,start_date,end_date,num_episodes,start_season`,
      {
        headers: {
          "X-MAL-CLIENT-ID": import.meta.env.VITE_MAL_CLIENT_ID,
        },
      }
    );
    return response.json();
  },
};
