export class HearthstoneApi {

	findCard: String;
	findDeck: String;

	searchCard(card){

		findCard = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/"+card;
	 	return new Promise((resolve, reject) => {
     		fetch(findCard, {
	      		headers:{
	      			"X-Mashape-Key": "ojOTIgJwAGmshRKAl9MT4bt94nGrp1BlUj5jsnlYR5NDmN2G6q"
	      		}
 	 		})
      		.then(response => response.json())
      		.then(response => {
        		resolve(response); // resolve promise with response if it fetch succeded
        		console.log('from back'+response);
        		console.log(response);
      		}).catch(() => {
        		reject(); // reject promise if we catch a fetch error
     		});
    	});
	}

	searchSpec(type, attack, health, cost){

		
	}

	// RandomSet(heroicClass){


	// 	findDeck = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/"+{heroicClass};
	// 	return new Promise((resolve, reject) => {
 //     		fetch(findDeck, {
	//       		headers:{
	//       			"X-Mashape-Key": "ojOTIgJwAGmshRKAl9MT4bt94nGrp1BlUj5jsnlYR5NDmN2G6q"
	//       		}
 // 	 		})
 //      		.then(response => response.json())
 //      		.then(response => {
 //        		resolve(response); // resolve promise with response if it fetch succeded
 //        		console.log('from back'+response);
 //        		console.log(response);
 //      		}).catch(() => {
 //        		reject(); // reject promise if we catch a fetch error
 //     		});
 //    	});


	// }

}