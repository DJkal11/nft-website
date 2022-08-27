


<script lang="js">
	import Tree from "../lib/header/trees2.png";
	import Pic3 from "../lib/header/pic3.png";
	import Anime from "../lib/header/anime.png";
	import { navItem } from '../store';
	import { goto } from '$app/navigation';

	function bordered() {
		navItem.set("about");
		console.log(navItem);
		goto("/about");
	}
	

	let name = "";
	let email = "";
	let message = "";

	let element;
    let intersecting;  



	</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Welcome to Friend A Labs 🦆" />
	<script src="https://cdn.jsdelivr.net/npm/flowbite@1.5.2/dist/flowbite.min.js"></script>
    <link href="https://www.dafontfree.net/embed/Y29vcGVyLWhld2l0dC1ib29rJmRhdGEvMTYvYy83ODAwMy9Db29wZXJIZXdpdHQtQm9vay5vdGY" rel="stylesheet" type="text/css"/>
</svelte:head>


<section  class="container-box">
	
	<div class="intro h-full sm:h-screen flex flex-col px-10 sm:px-20 pt-20 sm:pt-24 sm:flex-row">
        <div class="w-full text-left sm:px-20 h-4/6 ">
        <h1 class=" cooper text-white text-6xl sm:text-8xl font-extrabold">Step into the future of the digital economy</h1>
      
        </div>
        <div class="mt-20 sm:mt-72 pb-10"> 
			<p class=" text-white montserrat text-3xl font-extrabold">At Friend A Labs, we’re building blockchain-based tech to empower.
            </p>
            <button on:click={bordered} class="border-white text-white border-2 cadet-colour hover:translate-y-3 hover:text-white font-bold py-4 px-6 rounded-full transition-all mt-10">Learn More</button>
        </div>  
    </div>

	<div class="cadet h-full sm:h-full pb-10  px-10 sm:px-52 pt-20 sm:pt-28 "> 
		<h1 class="text-white text-6xl sm:text-6xl cooper text-left font-bold mb-10 ml-0 sm:-ml-10">Our Products</h1>
		<p class="text-xl montserrat text-white mb-10">Our first product, Editions, enhances the discovery of NFTs 
			and changes the financial incentives of the attention economy to empower creators to focus on creating.</p>
         <img alt="" class="w-6/12 m-auto"  />
	</div>

	<div class="cadet h-full sm:h-full pb-32  px-10 sm:px-52 pt-10 sm:pt-10 ">
		<h1 class="text-white cooper text-6xl sm:text-6xl font-bold mb-20 ml-0 sm:-ml-10">Editions</h1>
		<div class="flex flex-col sm:flex-row gap-x-10 cooper text-white"> 
			<div class=""> 
				<h1 class="text-1xl font-bold mb-5">Digital Asset Marketplace</h1>
				<hr class="mb-4 font-700"/>
				<p class="montserrat"> Where artists create, 
					and users view, buy, sell, trade, 
					and use their digital art.</p>
			</div>

			<div class="mt-14 sm:mt-0"> 
				<h1 class="text-1xl font-bold m-auto mb-5">Editions Fabric</h1>
				<hr class="mb-4 font-700"/>
				<p class="montserrat">Connecting the marketplace with the web, 
					letting users interact with NFTs at ease. </p>
			</div>

			<div class="mt-14 sm:mt-0"> 
				<h1 class="text-1xl font-bold mb-5">Editions app</h1>
				<hr class="mb-4 font-700"/>
				<p class="montserrat">Mobile app to use digital assets irl 
					and access the marketplace on the go. </p>
			</div>

			<div class="mt-14 sm:mt-0"> 
				<h1 class="text-1xl font-bold mb-5">Editions extensions</h1>
				<hr class="mb-4 font-700"/>
				<p class="montserrat">Enabling content creators on different platforms to 
					start using Editions without any technical skills.</p>
			</div>
		</div>
	</div>


	<div class=" h-full sm:h-full pb-0 sm:pb-10  px-10 sm:px-52 pt-20 sm:pt-32 "> 
		<h1 class="text-6xl sm:text-6xl  brick-pink cooper font-bold mb-10 ml-0 sm:-ml-10">Our Mission</h1>
		<p class="text-xl montserrat mb-10 sm:mb-10 ml-10">To empower content creators to focus on creating.
			 To empower users to discover artists and digital assets they care about. 
			 To empower businesses to discover and be discovered. </p>
			 <img alt="" class="w-full sm:w-7/12 m-auto sm:ml-96 shadow-2xl rounded-lg" src={Anime} />

			 
        
	</div>

	<div class=" h-full sm:h-full pb-16 sm:pb-32  px-10 sm:px-52 pt-20 sm:pt-24"> 
		<h1 class="text-6xl sm:text-6xl text-left brick-pink cooper font-bold mb-10 ml-0 sm:-ml-10">Why Blockchain?</h1>
		<p class="text-xl mb-10 montserrat ml-10">Blockchain allows creators, users, and artists to interact without intermediaries. It provides unprecedented levels of transparency in otherwise untransparent processes and efficiently distributes and allocates funds across borders. 

			Blockchain increases accessibility, empowers users, and cuts down the monopolistic structures currently reigning over the digital economy. 
			
			It’s the perfect technology to make our mission become reality. </p>
			
        
	</div>








<div class="px-10 sm:px-52 pt-24 pb-20 cadet">
	<h1 class="cooper text-6xl sm:text-6xl text-white font-extrabold mb-10">Contact</h1>
     <div class="flex flex-col sm:flex-row ml-5 sm:ml-28 gap-x-40"> 
		<div class=""> 
			<h1 class="text-white text-xl montserrat">Mail</h1>
			<a alt="" target=”_blank” href="mailto:hai@friendalabs.com" >hai@friendalabs.com</a>
			<br/><br/>
			<h1 class="text-white text-xl montserrat">Twitter</h1>
			<a alt="" target=”_blank” href="https://twitter.com/FriendALabs" >Twitter.com/FriendALabs</a>
			
		</div>

		<div class="w-full sm:w-96 mt-10 px-10 sm:px-0 sm:mt-0"> 
			<h1 class="text-xl text-white montserrat">Get in touch with us by email or follow us on twitter. We would love to hear from you.</h1>
		</div>

	 </div>


  

</div>

	
</section>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

/* .container-box {
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	height: 100vh;
	width: 100vw;
	
}

.item {
	scroll-snap-align: start;
	width: 100vw !important;
	height: 100vh;
	
} */

  .cooper {
	font-family: 'cooper-hewitt-book', sans-serif;
  }

  
  .montserrat {
	font-family: 'Montserrat', sans-serif;
  }


  .intro {
	background-image: url("../lib/header/trees2.png");
	filter: grayscale(25%);
	background-size: cover;
  }


  .brick-pink {
	color: #CC6354;
  }

  .cadet {
	background-color: #4A6573;
  }

  .cadet-colour:hover {
	background-color: #4A6573;
  }
 
  a {
	color: #C3D5CC;
  }



	
</style>
