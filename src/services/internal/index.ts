export const FetchInternal = {
  login: async ({ formData }: { formData: FormData }) => {},

  signup: async ({ formData }: { formData: FormData }) => {
    if (!formData) {
      return;
    }
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/user/register`,
      {
        method: "POST",
        body: formData,
      }
    );
    return response.json();
  },
};
