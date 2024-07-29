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
      <div className="max-w-screen-xl p-12 mx-auto mt-10">
        <div className="flex justify-between mb-10">
          <h3 className="text-4xl font-bold">Trackr List</h3>
          <Link
            className="px-4 py-2 font-medium border border-black"
            to="/createtrackr"
          >
            New Trackr
          </Link>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-black">
            <div>
              <h2 className="text-xl font-semibold">Series title</h2>
              <p>Episodes</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-2 border border-black"
                onClick={handleSingle}
              >
                +1
              </button>
              <button
                className="px-2 border border-black"
                onClick={handleOpenModal}
              >
                ++
              </button>
              <button className="px-2 border border-black">...</button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 w-96 border border-black">
            <div className="flex justify-center items-center gap-2">
              <h3 className="text-xl font-semibold mb-4">Finished</h3>
              <input
                type="number"
                className="w-full p-2 border border-black mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">episodes</h3>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="px-4 py-2 border border-black"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-black text-white"
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
