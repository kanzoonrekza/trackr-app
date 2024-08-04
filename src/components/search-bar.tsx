import { useQuery } from "@tanstack/react-query";
import React from "react";
import useDebounce from "../hooks/useDebounce";
import { FetchMyAnimeList } from "../services/external/myAnimeList";

export default function SearchBar() {
  const [searchCategory, setSearchCategory] = React.useState("anime");
  const [searchQuery, setSearchQuery] = React.useState("");
  const debouncedQuery = useDebounce(searchQuery, 800);

  const { data, isLoading } = useQuery({
    queryKey: ["searchMal", searchCategory, debouncedQuery],
    queryFn: () =>
      FetchMyAnimeList.search({
        category: searchCategory,
        query: debouncedQuery,
      }),
    retry: false,
  });

  return (
    <div className="relative">
      <input
        className="peer border border-black"
        type="text"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <div className="absolute hidden w-full flex-col border bg-white peer-focus-within:flex">
        {isLoading && "Loading..."}
        {!isLoading && !data?.data && debouncedQuery.length > 2 && "No results"}
        {!isLoading &&
          !data?.data &&
          debouncedQuery.length < 3 &&
          "Please type more than 2 characters to search"}
        {!isLoading && data?.data?.length > 0 && (
          <ul className="flex flex-col gap-2">
            {data?.data.map((item: any) => <li>{item.node.title}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}
