const get_url_extension = url => {
  return url.split(/[#?]/)[0].split('.').pop().trim();
};

const types = {
  pdf: 'application/pdf',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  png: 'image/png',
};

export const handleMime = fileName => {
  const extent = get_url_extension(fileName);
  console.log(extent);
  return types[extent];
};
