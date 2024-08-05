import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { FetchMyAnimeList } from "../../../../services/external/myAnimeList";

export const Route = createFileRoute(
  "/_mainLayout/(externalApiDetails)/mal/anime/$id"
)({
  component: MalAnimeDetail,
});

export default function MalAnimeDetail() {
  const params = Route.useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["mal", "anime", params.id],
    queryFn: () =>
      FetchMyAnimeList.detail({ category: "anime", id: params.id }),
    retry: false,
  });

  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{data.title}</h1>
      <p>{params.id}</p>
    </>
  );
}
