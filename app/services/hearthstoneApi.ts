export class HearthstoneApi {

	getDatabase(){
		  return new Promise((resolve, reject) => {
	      fetch('http://pokeapi.co/api/v1/pokemon/1/'})
	      .then(response => response.json())
	      .then(response => {
	        resolve(response);
	        console.log(response); // resolve promise with response if it fetch succeded
	      }).catch(() => {
	      	console.log("error");
	        reject(); // reject promise if we catch a fetch error
	      });
	    });

	}

}