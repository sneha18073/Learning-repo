function fetchDataFromDatabase(callback) {
    setTimeout(() => {
      const data = 'Some data from the database';
      callback(data);
    }, 1000);
  }
  
  fetchDataFromDatabase((data) => {
    console.log(data);
  });

  
  function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Some data from the API';
        resolve(data);
      }, 1500);
    });
  }
  
  fetchDataFromAPI()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

    function fetchDataFromExternalService() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const data = 'Some data from the external service';
            resolve(data);
          }, 2000);
        });
      }
      
      async function getData() {
        try {
          const data = await fetchDataFromExternalService();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
      
      getData();

      
      function fetchData(callback) {
        // Simulate fetching data from an API
        setTimeout(() => {
          const data = 'Some data';
          callback(data);
        }, 1000);
      }
      