type VerifyProps = {
  id: number;
  token: {
    token: string;
  };
};

const verifyCreditCard = async ({ id, token }: VerifyProps) => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${URL}cards/exist/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.token}`,
      },
    });

    const res = await response.json();
    return res;
  } catch (error) {
    console.log('error es', error);
  }
};
export default verifyCreditCard;
