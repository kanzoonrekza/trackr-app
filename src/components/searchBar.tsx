import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import React from "react";
import useDebounce from "../hooks/useDebounce";
import { FetchMyAnimeList } from "../services/external/myAnimeList";

export default function SearchBar() {
  const [searchCategory] = React.useState("anime");
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
    <div className="group relative">
      <input
        className="border border-black"
        type="text"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <div className="absolute hidden w-full flex-col border bg-white group-focus-within:flex">
        {isLoading && "Loading..."}
        {!isLoading && !data?.data && debouncedQuery.length > 2 && "No results"}
        {!isLoading &&
          !data?.data &&
          debouncedQuery.length < 3 &&
          "Please type more than 2 characters to search"}
        {!isLoading && data?.data?.length > 0 && (
          <form action="">
            <ul className="flex flex-col gap-2">
              {data?.data.map((item: any) => (
                <li>
                  <Link
                    to="/mal/anime/$id"
                    className="text-blue-500 hover:underline"
                    params={{ id: item.node.id }}
                    onClick={() => {
                      // @ts-ignore
                      document.activeElement?.blur();
                    }}
                  >
                    {item.node.title}
                  </Link>
                </li>
              ))}
            </ul>
          </form>
        )}
      </div>
    </div>
  );
}
