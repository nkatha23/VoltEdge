export const apiCall = async (endpoint: string, data?: any) => {
  try {
    const response = await fetch(endpoint, {
      method: data ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};
