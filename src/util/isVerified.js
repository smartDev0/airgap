const isVerifed = location => {
  const hash = location.search.split('?verified=')[1];
  return hash === 'cd004eb4728a6f211278ee73aca69b59';
}

export default isVerifed;
