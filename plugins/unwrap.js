export default ({ app }, inject) => {
  inject('unwrap', (obj, ...keys) => {
    return Object.fromEntries(
      keys.filter(key => key in obj)
        .map(key => [key, obj[key]])
    );
  });
}
