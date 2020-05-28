const filterBy = (val, key, terms, includeTerm = true) => {
  const term = Array.isArray(terms) ? terms.join('|') : terms;

  const value = val[key];
  const re = new RegExp(term, 'i');
  const result = includeTerm ? re.test(value) : !re.test(value);

  return result;
};

export const groupBy = (array, key, term) => {
  return array.reduce((acc, curr, index, array) => {
    const attr =  term.toLowerCase();

    acc = array.filter(val => filterBy(val, key, attr, false))

    acc.push({
      grouped: array.filter(val => filterBy(val, key, attr))
    })

    return  acc;
  }, [])
}

export const groupAllBy = (array, key, terms) => {
  const filters = terms.map(term => term.toLowerCase());

  const items = array.filter(val => filterBy(val, key, filters, false))

  const grouped = [];

  filters.forEach(filter => {
    grouped.push(array.filter(val => filterBy(val, key, filter)));
  })

  items.push({ grouped: grouped.flat() })

  return items;
}
