
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/ScrollTrigger.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/flowbite@1.5.2/dist/flowbite.min.js"></script>
    <link href="https://www.dafontfree.net/embed/Y29vcGVyLWhld2l0dC1ib29rJmRhdGEvMTYvYy83ODAwMy9Db29wZXJIZXdpdHQtQm9vay5vdGY" rel="stylesheet" type="text/css"/>
</svelte:head>

<script  context="module" lang="js">
	import Pic2 from "../lib/header/Pic2.png";
	import Pic3 from "../lib/header/pic3.png";
	import Pic4 from "../lib/header/pic4.png";
	import Pic5 from "../lib/header/pic5.webp";
	import { fade, fly } from 'svelte/transition';

	let name = "";
	let email = "";
	let message = "";




 






	</script>




<section class="">
	<!-- <div style="left: {m.x}px; top: {m.y}px;" class="inner-cursor"></div>
	<div style="left: {m.x}px; top: {m.y}px;" class="outer-cursor"></div>	 -->
	<section class="">
	<div class="intro h-full sm:h-screen  px-10 sm:px-52 pt-20 sm:pt-40 sm:flex-row">
        <div class="w-full text-center m-auto p-10 h-4/6 ">
        <h1 class=" cooper brick-pink text-6xl font-extrabold mb-10">Step into the future of the digital economy</h1>
        <p class=" text-white montserrat text-3xl font-extrabold bg-black bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg">At Friend A Labs, we’re building blockchain-based tech to empower.
            </p>
            <a alt="" href="/about"><button class=" border-blue-600 border-2 hover:bg-blue-600 hover:translate-y-3 hover:text-white text-white font-bold py-4 px-6 rounded-full transition-all mt-10">Learn More</button></a>
        </div>
        <div class="w-6/12"> 
        </div>  
    </div>
</section>
<section  class="">
    <div class="px-10 sm:px-52 pb-28 move">
		<h1 class="cooper brick-pink text-6xl font-extrabold pt-28 mb-16">Our Products</h1>
		
	<div class="flex flex-col sm:flex-row gap-0 sm:gap-32 "> 
		
        <div in:fly={{ y: -50, duration: 250, delay: 300 }}
		out:fly={{ y: -50, duration: 250 }} class="" > 
            <img   class="w-10/12" alt="phone" src={Pic2} />
        </div>
	

        <div class="w-full sm:w-9/12 mt-20 sm:mt-28"> 
            <p class="text-2xl montserrat">Our first product, Editions, enhances the discovery of NFTs and changes the financial incentives of the attention economy to empower creators to focus on creating.
			</p>
        </div>

    </div>
</div>
</section>

<div class="px-10 sm:px-52 pt-32 pb-20 section-2">
	<h1 class="cooper brick-pink text-6xl font-extrabold ">Editions</h1>

<div id="default-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
            <div class="w-full text-white sm:w-full mt-20 sm:mt-20 px-28 text-center"> 
				<h1 class="text-3xl font-medium mb-5"><b>Digital Asset Marketplace</b></h1>
				<p class="text-2xl montserrat">Where artists create, and users view, buy, sell, trade, and use their digital art.
				</p>
			</div>
        </div>
        <!-- Item 2 -->
        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
            <div class="w-full text-white sm:w-full mt-20 sm:mt-20 px-28 text-center"> 
				<h1 class="text-3xl font-medium mb-5"><b>Editions Fabric</b></h1>
				<p class="text-2xl montserrat">Connecting the marketplace with the web, letting users interact with NFTs at ease. 
				</p>
			</div>
        </div>
        <!-- Item 3 -->
        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
			<div class="w-full text-white sm:w-full mt-20 sm:mt-20 px-28 text-center"> 
				<h1 class="text-3xl font-medium mb-5"><b>Editions app</b></h1>
				<p class="text-2xl montserrat">Mobile app to use digital assets irl and access the marketplace on the go.
				</p>
			</div>
        </div>

		<div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
			<div class="w-full text-white sm:w-full mt-20 sm:mt-20 px-28 text-center">
				<h1 class="text-3xl font-medium mb-5"><b>Editions extensions</b></h1> 
				<p class="text-2xl montserrat">Enabling content creators on different platforms to start using Editions without any technical skills.
				</p>
			</div>
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-800 hover:bg-gray-200" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-200 dark:bg-gray-800/30 group-hover:bg-white dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-400 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-200 dark:bg-gray-800/30 group-hover:bg-white dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-400 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>


</div>


<div class="px-10 sm:px-52 pt-32 mb-28">
	<h1 class="cooper text-6xl brick-pink font-extrabold mb-5">Our Mission</h1>
	<p class="text-2xl mb-16 montserrat">To empower content creators to focus on creating.<br/><br/> To empower users to discover artists and digital assets they care about.<br/><br/> To empower businesses to discover and be discovered. </p>
<div class="flex flex-col sm:flex-row gap-0 sm:gap-32 "> 
     <div class=""> 
		<img class="w-72 h-64 hover:scale-125 hover:rotate-12 transition-all" alt="" src={Pic3} />
	 </div>
	<div> 
		<img class="w-72 h-64 hover:scale-125 hover:rotate-12 transition-all" alt="" src={Pic4} />
	</div>
	<div> 
		<img class="w-72 h-64 hover:scale-125 hover:rotate-12 transition-all" alt="" src={Pic5} />
	</div>
	

</div>
</div>

<div class="px-10 sm:px-52 pt-32 pb-20 section-2">
	<h1 class="cooper text-6xl font-extrabold brick-pink mb-5">Why Blockchain?</h1>
	<p class="text-2xl text-white mb-16 montserrat">Blockchain allows creators, users, and artists to interact without intermediaries.<br /><br/>
		It provides unprecedented levels of transparency in otherwise untransparent processes and efficiently distributes and allocates funds across borders.<br/><br/>
		 It empowers users to own their digital assets and identities truly.<br/><br/>
		 It’s the perfect technology to make our mission become reality.  </p>

</div>

<div class="px-10 sm:px-52 pt-32 mb-20">
	<h1 class="cooper text-6xl brick-pink font-extrabold mb-5">Get in touch</h1>
	<p class="text-1xl mb-16 montserrat">We’ll get back to you as soon as our founder has figured out how to use email.</p>


<form >
	<div class="mb-6 w-8/12">
	  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
	  <input type="text" bind:this={name} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
	</div>
	<div class="mb-6 w-8/12">
		<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
		<input type="email" bind:this={email} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@xyz.com" required="">
	  </div>
	<div class="mb-6 w-8/12">
	  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
	  <textarea  id="message" bind:this={message} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></textarea>
	</div>
	
	<a href="mailto:someone@yoursite.com?subject=Mail from Our Site&body=Body-goes-here" alt=""><button type="submit" class="text-white bg-pink-600 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button></a>
  </form>
  

</div>

	
</section>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');



  .cooper {
	font-family: 'cooper-hewitt-book', sans-serif;
  }

  
  .montserrat {
	font-family: 'Montserrat', sans-serif;
  }

  .intro {
	background: url("../lib/header/pic1.png");
	background-size: cover;
  }

  .section-2 {
	background-color: #34344A;
  }


  .brick-pink {
	color: #E85D75;
  }

	
	



	
</style>
