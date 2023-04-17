const getLocations = async () => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${URL}locations`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    console.log('aqui esta fallando', response.status, response.statusText);
    return { status: response.status, msg: 'error' };
  }
  return await response.json();
};
export default getLocations;
