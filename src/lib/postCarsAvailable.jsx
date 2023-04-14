/**
 * 
 *    const response = await fetch(
      `https://backend-nocountry.onrender.com/api/v1/cars/getbyfilters?id_category=${id}&pickUpLocation=Catan&startTime=${start}&endTime=${end}`,
 
 */

const postCarsAvailable = async ({ id, start, end }) => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJpYUBjb3JyZW8uY29tIiwiaWF0IjoxNjgxMzcyNTI4LCJleHAiOjE2ODEzNzYxMjh9.n2Ev-KuKG97hnzeJaS48l1tgUxvj8ubGfmyaadfB9YU';
  try {
    console.log(id, start, end);
    const response = await fetch(
      `${URL}cars/getbyfilters?id_category=${id}&pickUpLocation=Catan&startTime=${start}&endTime=${end}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const a = await response.json();
    return a;
  } catch (error) {
    console.log(error);
  }
};

export default postCarsAvailable;
