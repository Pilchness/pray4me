const contentType = 'application/json';

export const postData = async (prayerContent, prayerSender) => {
  // const postData = async () => {
  try {
    const res = await fetch('/api/addPrayers', {
      method: 'POST',
      headers: {
        Accept: contentType,
        'Content-Type': contentType
      },
      body: JSON.stringify({ prayer: prayerContent, sender: prayerSender })
    });
    //console.log(res);

    if (!res.ok) {
      throw new Error(res.status);
    }

    router.push('/');
  } catch (error) {
    setMessage('Failed to add post');
  }
};
