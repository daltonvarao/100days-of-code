function digPow(n, p) {
  const nk = recursive_pow(n, p);

  if (nk % n !== 0) return -1;

  return ~~(nk / n);
}

function recursive_pow(n, p) {
  const ns = n.toString();

  if (ns.length === 1) return n ** p;

  return (
    recursive_pow(+ns[0], p) + recursive_pow(+ns.slice(1, ns.length), p + 1)
  );
}
