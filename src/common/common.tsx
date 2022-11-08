const getImageSrc = (name: string) => {
  return require(`Assets/img/${name}.jpg`).default;
};

export { getImageSrc };
