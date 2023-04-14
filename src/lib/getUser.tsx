const getUser = async (token: string) => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  console.log('en getUser');
  const response = await fetch(`${URL}customers/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return { status: response.status, msg: 'error' };
  }
  return await response.json();
};
export default getUser;
