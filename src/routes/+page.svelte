<script >
	import Laptop from "../lib/header/laptop.svg";
	import Mobile from "../lib/header/mobile.svg";
	

	let heading = true;
	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
	m.x = event.clientX;
	m.y = event.clientY;
	console.log(m.x);
	}

	function mouseEnter() {
		if(heading === false){
		heading = true;
		} 
	}

	function mouseLeave () {
		if(heading === true){
		heading = false;
		} 
	}
	
	</script>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />

</svelte:head>

<section class="cursor-none" on:mousemove={handleMousemove}>
	<div style="left: {m.x}px; top: {m.y}px;" class="{heading? 'grow z-20 text-transparent' : 'inner-cursor'}"></div>
	<div style="left: {m.x}px; top: {m.y}px;" class="outer-cursor"></div>	
<div  class="z-0 mt-20 px-10 sm:px-52 element text-white"> 
 <h1 on:mouseover={mouseEnter}  on:mouseout={mouseLeave} class="text-6xl sm:text-9xl font-extrabold intro-text">THE PLATFORM YOUR METAVERSE IS BUILT ON</h1>
	
</div>

<div class="mt-40 px-0 sm:px-52"> 
	<h1 class="p-8 sm:p-28 pb-5 font-bold text-4xl">The world's most successful brands trust the Vatom platform to help them create,
		 own, promote, and sell within their own Metaverse.</h1>	 

</div>
<div class=" px-0 sm:px-52"> 
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
	<lottie-player class="m-auto w-96" src="https://assets2.lottiefiles.com/packages/lf20_2omr5gpu.json"  background="transparent"  speed="1"    loop autoplay></lottie-player>
</div>

<div class="mt-24 px-0 sm:px-52"> 
	<div class="p-8 sm:p-32">
	<h1 class="text-4xl font-bold pb-10">All the features you need to start, run, and grow your business on the Metaverse.</h1>
	<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
		<span class="relative text-2xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Pink to orange
		</span>
	  </button>
	</div>
</div>

<div class="mt-32 px-10 sm:px-52"> 
	<div class="text-left"> 
      <h1 class="text-6xl text-orange-500 font-extrabold">THE WORLD’S BIGGEST BRANDS ARE CHOOSING EDITIONS.</h1>
	</div>

	<div class="mt-28"> 
		<div class="px-10 sm:px-44"> 
       <h1 class="text-4xl font-bold pb-10">See how top brands from around the world are using the Vatom platform to extend their business into the Metaverse.</h1>
	   <button type="button" class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
		CASE STUDY
		<svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
	</button>
    </div>
	</div>

</div>




<div class="mt-40 mb-72 px-1 sm:px-52 relative"> 
  <img class="w-80 absolute img-1 rounded-lg" alt="" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" />
  <img class="w-80 absolute ml-44 img-2 rounded-lg" alt="" src="https://digiday.com/wp-content/uploads/sites/3/2022/07/Business-Bot.png" />
  <img class="w-80 absolute img-3 rounded-lg" alt="" src="https://visionarymarketing.com/wp-content/uploads/2022/02/art-nfts-auction-2021-esther-barend.jpg.webp" />

  <div class="mt-40 pt-44">
  <h1 class="text-5xl sm:text-6xl text-orange-500 font-extrabold p-10 px-10 sm:px-56">CREATE TRADITIONAL NFT’S</h1>
  <h2 class="text-3xl ml-20 px-10 sm:px-44">Using the Vatom Studio feature easily create, promote, and sell your NFTs.</h2>
</div>
</div>


<div class="pt-40 px-1 sm:px-52 flex flex-row"> 
	<div> 
	  <h1 class="text-6xl text-orange-500 font-extrabold p-10 px-10 sm:px-20">CREATE SMART NFT’S</h1>
      <h2 class="text-2xl px-0 ml-20 sm:ml-0 sm:px-20">Only the Vatom platform enables next-generation ‘Smart NFTs”, programmable digital objects that you can see,
		 collect, trade, and redeem in both the real and digital worlds.</h2>
	</div>
    <div>
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_bmbkcawq.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop autoplay></lottie-player>
</div>
</div>


<div class="mt-40 px-24 sm:px-52 flex flex-row"> 
	<div class="-ml-28 mt-28"> 
    <img alt="" src={Laptop} />
	</div>

	<div class="text-left px-16"> 
		<h1 class="text-6xl text-orange-500 font-extrabold p-10">CREATE YOUR VIRTUAL SPACE</h1>
		<h2 class="text-2xl px-10 pb-10">Choose from a selection of prefab spaces or easily create your own!</h2>
		<button type="button" class="text-white ml-10 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
			LEARN MORE
			<svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
		</button>
	</div>

	<div class="mt-64"> 
		<img alt="" src={Mobile} />

	</div>

</div>


<div class="mt-40 px-1 sm:px-52 mb-20"> 
	<div>
		<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
		<lottie-player class="m-auto w-full sm:w-96" src="https://assets10.lottiefiles.com/packages/lf20_mj9xns8a.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
</div>

<div class="flex flex-col sm:flex-row justify-around"> 
	<div> 
		<h1 class="text-6xl text-orange-500 font-extrabold p-10 px-12 ">PROMOTE, SHARE & SELL NFTS
		</h1>
	</div>

	<div class="mt-12 px-24"> 
		<h2 class="text-2xl  pb-10">To help you promote, share, and sell your NFTs the Vatom platform allows you to easily
			 display your NFTs within your Metaverse space, drop-them in the real-world, or display in your very own marketplace.</h2>
		<button type="button" class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
			START NOW
			<svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
		</button>
	</div>

</div>
</div>



	

	
</section>

<style>

	
	.img-2 {
	 top: 15rem;	
     left: 50rem;
	}

	.img-3 {
     top: 35rem;
	}

	.inner-cursor {
		z-index: 99;
		position: fixed;
		width: 20px;
		height: 20px;
		transform: translate(-50%, -50%);
		background-color: rgb(255, 106, 0);
		mix-blend-mode: difference;
		border-radius: 50%;
		pointer-events: none;
		transition: width 0.5s, height 0.5s;
	}

	.intro-text:hover ~ .inner-cursor {
		z-index: 99;
		position: fixed;
		width: 450px;
		height: 450px;
		transform: translate(-50%, -50%);
		background-color: rgb(255, 106, 0);
		mix-blend-mode: difference;
		border-radius: 50%;
		pointer-events: none;
		transition: width 0.5s, height 0.5s;
	}

	.grow {
		z-index: 99;
		position: fixed;
		width: 450px;
		height: 450px;
		transform: translate(-50%, -50%);
		background-color: rgb(255, 106, 0);
		mix-blend-mode: difference;
		border-radius: 50%;
		pointer-events: none;
		transition: width 0.5s, height 0.5s;
	}

	/* .outer-cursor {
		position: fixed;
		left: 10px;
		width: 70px;
		height: 70px;
		transform: translate(-50%, -50%);
		border: 1px solid rgb(255, 0, 119);
		mix-blend-mode: difference;
		border-radius: 50%;
		pointer-events: none;
		
	} */

	.element {
	text-shadow:
		-2px -2px 0 rgb(255, 145, 0),
		2px -2px 0 rgb(255, 145, 0),
		-2px 2px 0 rgb(255, 145, 0),
		2px 2px 0 rgb(255, 145, 0);
}

@media (max-width: 430px) {
	.img-3 {
     top: 39rem;
	}
}
	
</style>
