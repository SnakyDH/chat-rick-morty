export const verifyCookie = async (req, res) => {
  const cookie = req.cookie.email;
  //const user = cookie.split('=').pop();

  res.json(cookie);
};
