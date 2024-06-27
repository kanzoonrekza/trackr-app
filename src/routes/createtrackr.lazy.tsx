import { createLazyFileRoute } from '@tanstack/react-router'
import MainLayout from '../layout/main-layout';

export const Route = createLazyFileRoute('/createtrackr')({
  component: CreateTrackr,
});

function CreateTrackr() {
  return (
    <MainLayout>
      <div className='p-12 mx-auto max-w-screen-xl'>
        <h3 className='text-4xl/[36px] font-bold'>
          Create New Trackr
        </h3>
        <form>
          <div className='mt-10'>
            <label className="block text-xl font-medium mb-1">
              Title
            </label>
            <input className='w-6/12 border border-black' />
          </div>
          <div className='mt-3 flex justify-between w-6/12'>
            <div className='mr-2 w-full'>
              <label className='block font-medium mb-1'>
                Current Episode
              </label>
              <input className='border border-black w-full' />
            </div>
            <div className='ml-2 w-full'>
              <label className='block font-medium mb-1'>
                Total Episode
              </label>
              <input className='border border-black w-full' />
            </div>
          </div>
          <div className='flex justify-end w-6/12'>
            <button className='mt-3 p-1 border border-black'>
              Create
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}