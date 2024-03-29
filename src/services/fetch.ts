export const fetchData = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export const postData = async (url: string, data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
