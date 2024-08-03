import { createLazyFileRoute } from "@tanstack/react-router";
import MainLayout from "../layout/main-layout";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMultiple = () => {
    console.log("Multiple");
    handleCloseModal();
  };

  const handleSingle = () => {
    console.log("Single");
  };

  return (
    <MainLayout>
      <div className="mx-auto mt-10 max-w-screen-xl p-12">
        <div className="mb-10 flex justify-between">
          <h3 className="text-4xl font-bold">Trackr List</h3>
          <Link
            className="border border-black px-4 py-2 font-medium"
            to="/createtrackr"
          >
            New Trackr
          </Link>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between border border-black p-4">
            <div>
              <h2 className="text-xl font-semibold">Series title</h2>
              <p>Episodes</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="border border-black px-2"
                onClick={handleSingle}
              >
                +1
              </button>
              <button
                className="border border-black px-2"
                onClick={handleOpenModal}
              >
                ++
              </button>
              <button className="border border-black px-2">...</button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 border border-black bg-white p-6">
            <div className="flex items-center justify-center gap-2">
              <h3 className="mb-4 text-xl font-semibold">Finished</h3>
              <input
                type="number"
                className="mb-4 w-full border border-black p-2"
              />
              <h3 className="mb-4 text-xl font-semibold">episodes</h3>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="border border-black px-4 py-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-black px-4 py-2 text-white"
                onClick={handleMultiple}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default Dashboard;
