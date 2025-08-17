import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

// Helper function to create delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchData = async () => {
  // Simulate 1-2 seconds delay
  await delay(Math.random() * 1000 + 1000);

  const response = await axios.get(url);
  return response.data;
};

