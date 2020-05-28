export const groupBy = (array, key, groupBy) => {
  const withKey = val => {
    const value = val[key];
    const re = new RegExp(groupBy, 'i');
    const result = re.test(value);

    return result;
  };

  const withoutKey = val => {
    const value = val[key];
    const re = new RegExp(groupBy, 'i');
    const result = !re.test(value);

    return result;
  };

  return array.reduce((acc, curr, index, array) => {
    const attr =  groupBy.toLowerCase();

    acc = array.filter(withoutKey)
    acc.push({
      [attr]: array.filter(withKey)
    })

    return  acc;
  }, [])
}
