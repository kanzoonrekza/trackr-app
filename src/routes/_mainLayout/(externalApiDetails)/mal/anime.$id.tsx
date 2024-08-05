import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_mainLayout/(externalApiDetails)/mal/anime/$id"
)({
  component: MalAnimeDetail,
});

export default function MalAnimeDetail() {
  const params = Route.useParams();

  return (
    <>
      <h1>Anime Detail From MAL</h1>
      <p>{params.id}</p>
    </>
  );
}
