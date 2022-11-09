const getImageSrc = (name: string) => {
  return require(`Assets/img/${name}.jpg`).default;
};

const getCurrentTime = () => {
  const dateIn = new Date();
  const yyyy = dateIn.getFullYear();
  const mm = dateIn.getMonth() + 1; // getMonth() is zero-based
  const dd = dateIn.getDate();
  const time = `${dateIn.getHours()}:${dateIn.getMinutes()}`;

  return `${yyyy}.${mm}.${dd} ${time}`;
};

export { getImageSrc, getCurrentTime };
