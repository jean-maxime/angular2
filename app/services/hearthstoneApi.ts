declare var fetch, Zone;

export class HearthstoneApi{

	findCard: String;
	findDeck: String;

	// function serviceCall(){
	// 			return new Promise((resolve, reject) => {
	// 	     		Zone.bindPromiseFn(fetch)(this.findCard, {
	// 		      		headers:{
	// 		      			"X-Mashape-Key": "ojOTIgJwAGmshRKAl9MT4bt94nGrp1BlUj5jsnlYR5NDmN2G6q"
	// 		      		}
	// 	 	 		})
	// 	      		.then(response => response.json())
	// 	      		.then(response => {
	// 	        		resolve(response); // resolve promise with response if it fetch succeded
	// 	      		}).catch(() => {
	// 	        		reject(); // reject promise if we catch a fetch error
	// 	     		});
	// 	    	});
	// 		}

	searchCard(card){

		this.findCard = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/"+card;
		// serviceCall();

	 	return new Promise((resolve, reject) => {
     		Zone.bindPromiseFn(fetch)(this.findCard, {
	      		headers:{
	      			"X-Mashape-Key": "ojOTIgJwAGmshRKAl9MT4bt94nGrp1BlUj5jsnlYR5NDmN2G6q"
	      		}
 	 		})
      		.then(response => response.json())
      		.then(response => {
        		resolve(response); // resolve promise with response if it fetch succeded
      		}).catch(() => {
        		reject(); // reject promise if we catch a fetch error
     		});
    	});
	}

	searchSpec(cost = 0, attack = 0, health = 0){

		this.findCard = "https://omgvamp-hearthstone-v1.p.mashape.com/cards?";
		if(attack != 0)
		{
			this.findCard = this.findCard+"&attack="+attack;
		}
		if(cost != 0)
		{
			this.findCard = this.findCard+"&cost="+cost;
		}
		if(health != 0)
		{
			this.findCard = this.findCard+"&health="+health;
		}

	 	return new Promise((resolve, reject) => {
     		Zone.bindPromiseFn(fetch)(this.findCard, {
	      		headers:{
	      			"X-Mashape-Key": "ojOTIgJwAGmshRKAl9MT4bt94nGrp1BlUj5jsnlYR5NDmN2G6q"
	      		}
 	 		})
      		.then(response => response.json())
      		.then(response => {
        		resolve(response); // resolve promise with response if it fetch succeded
      		}).catch(() => {
        		reject(); // reject promise if we catch a fetch error
     		});
    	});
		
	}

	searchByID(id){

		this.findCard = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/{"+id+"}";

	 	return new Promise((resolve, reject) => {
     		Zone.bindPromiseFn(fetch)(this.findCard, {
	      		headers:{
	      			"X-Mashape-Key": "ojOTIgJwAGmshRKAl9MT4bt94nGrp1BlUj5jsnlYR5NDmN2G6q"
	      		}
 	 		})
      		.then(response => response.json())
      		.then(response => {
        		resolve(response); // resolve promise with response if it fetch succeded
      		}).catch(() => {
        		reject(); // reject promise if we catch a fetch error
     		});
    	});
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