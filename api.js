const axios = require('axios');
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const postData = {
    userId: 1,
    title: 'Axios rocks',
    body: 'rocks papers and scissors'
  };

axios.post(apiUrl, postData)
  .then((response) => {
    console.log('New post created:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

axios.get(apiUrl)
  .then((response) => {
    console.log('List of posts:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
