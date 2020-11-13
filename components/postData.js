export const postData = async (api, data, destination = '/') => {
  //let apiSource = `'/${api}'`;
  //console.log(apiSource);
  try {
    const res = await fetch('../pages/api/addPrayers.js', {
      method: 'POST',
      headers: {
        Accept: contentType,
        'Content-Type': contentType
      },
      body: JSON.stringify({ data })
    });

    if (!res.ok) {
      throw new Error(res.status);
    } else {
      console.log('Data sent successfully');
    }

    router.push(destination);
  } catch (error) {
    setMessage('Failed to add post');
  }
};
