export default ({ app }, inject) => {
  inject('convertToFormData', (object) => {
    const formData = new FormData();

    for (const key of Object.keys(object)) {
      const value = object[key];

      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    }

    return formData;
  });
}
