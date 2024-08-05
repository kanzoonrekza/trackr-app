import { createLazyFileRoute } from "@tanstack/react-router";
import { FormEvent } from "react";

export const Route = createLazyFileRoute("/_mainLayout/trackr/create")({
  component: CreateTrackr,
});

function CreateTrackr() {
  const handleCreate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Created!");
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl p-12">
        <h3 className="text-4xl/[36px] font-bold">Create New Trackr</h3>
        <form onSubmit={handleCreate}>
          <div className="mt-10">
            <label className="mb-1 block text-xl font-medium">Title</label>
            <input className="w-6/12 border border-black" />
          </div>
          <div className="mt-3 flex w-6/12 justify-between">
            <div className="mr-2 w-full">
              <label className="mb-1 block font-medium">Current Episode</label>
              <input className="w-full border border-black" />
            </div>
            <div className="ml-2 w-full">
              <label className="mb-1 block font-medium">Total Episode</label>
              <input className="w-full border border-black" />
            </div>
          </div>
          <div className="flex w-6/12 justify-end">
            <button className="mt-3 border border-black p-1">Create</button>
          </div>
        </form>
      </div>
    </>
  );
}
