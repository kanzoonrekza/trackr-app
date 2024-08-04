export const FetchMyAnimeList = {
  search: async ({ category, query }: { category: string; query: string }) => {
    if (!query) {
      return;
    }
    const response = await fetch(
      `${import.meta.env.VITE_MAL_BASE_URL}/${category}?q=${query}&limit=6`,
      {
        headers: {
          "X-MAL-CLIENT-ID": import.meta.env.VITE_MAL_CLIENT_ID,
        },
      }
    );
    return response.json();
  },
};
