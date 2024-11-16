export const fetchJson = async (path: string) => {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
