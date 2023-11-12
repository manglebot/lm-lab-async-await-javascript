import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";


const fetchData = async (apiEndPoint) => {
  fetch(apiEndPoint)
    try{
        const response = await fetch(apiEndPoint);
        const json = await response.json();
        console.log(json);
    }
    catch (error) {
      console.log(error);
    }
    
};

fetchData(jsonTypicode);



	// try {
	// 	const result = await promise;
	// 	console.log(`Yay! Promise resolved with response: ${result}`)
	// }
	// catch (error) {
	// 	console.log	(`Boo. Promise rejected with response: ${error}`)
	// }



// import fetch from "node-fetch";

// const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

// fetchData(jsonTypicode);
