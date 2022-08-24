<script  context="module" lang="js">
	import Pic1 from "../lib/header/pic1.png";
	import Pic2 from "../lib/header/Pic2.png";
	import Pic3 from "../lib/header/pic3.png";
	import Pic4 from "../lib/header/pic4.png";
	import Pic5 from "../lib/header/pic5.webp";

	let name = "";
	let email = "";
	let message = "";
	
	</script>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />

</svelte:head>

<section class="">
	<!-- <div style="left: {m.x}px; top: {m.y}px;" class="inner-cursor"></div>
	<div style="left: {m.x}px; top: {m.y}px;" class="outer-cursor"></div>	 -->
	<div class="intro h-full sm:h-screen  px-10 sm:px-52 pt-20 sm:pt-40 flex flex-col sm:flex-row gap-10">
        <div class="w-5/12">
        <h1 class=" cooper brick-pink text-6xl font-extrabold mb-10">Step into the future of the digital economy</h1>
        <p class=" montserrat text-2xl font-normal">At Friend A Labs, we’re building blockchain-based tech to empower.
            </p>
            <a alt="" href="/about"><button class="bg-pink-600 hover:bg-black hover:text-white text-white font-bold py-4 px-6 rounded-full transition-colors mt-10">Learn More</button></a>
        </div>
        <div class="w-6/12"> 
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <img class="w-full mt-14 sm:w-full m-auto" alt="anime" src={Pic1}  />
        </div>  
    </div>


    <div class="px-10 sm:px-52">
		<h1 class="cooper brick-pink text-6xl font-extrabold mb-10">Our Products</h1>
	<div class="flex flex-col sm:flex-row gap-0 sm:gap-32 "> 
        <div class=" "> 
            <img class="w-full" alt="phone" src={Pic2} />
        </div>

        <div class="w-full sm:w-9/12 mt-20 sm:mt-40"> 
            <p class="text-2xl montserrat">Our first product, Editions, enhances the discovery of NFTs and changes the financial incentives of the attention economy to empower creators to focus on creating.
			</p>
        </div>

    </div>
</div>

<div class="px-10 sm:px-52 pt-32">
	<h1 class="cooper brick-pink text-6xl font-extrabold ">Editions</h1>
<div class="flex flex-col sm:flex-row gap-0 sm:gap-32 "> 

	<div class="w-full sm:w-full mt-20 sm:mt-20"> 
		<h1 class="text-1xl font-medium mb-5"><b>Digital Asset Marketplace</b></h1>
		<p class="text-1xl montserrat">Where artists create, and users view, buy, sell, trade, and use their digital art.
		</p>
	</div>

	<div class="w-full sm:w-full mt-20 sm:mt-20"> 
		<h1 class="text-1xl font-medium mb-5"><b>Editions Fabric</b></h1>
		<p class="text-1xl montserrat">Connecting the marketplace with the web, letting users interact with NFTs at ease. 
		</p>
	</div>

	<div class="w-full sm:w-full mt-20 sm:mt-20"> 
		<h1 class="text-1xl font-medium mb-5"><b>Editions app</b></h1>
		<p class="text-1xl montserrat">Mobile app to use digital assets irl and access the marketplace on the go.
		</p>
	</div>

	<div class="w-full sm:w-full mt-20 sm:mt-20">
		<h1 class="text-1xl font-medium mb-5"><b>Editions extensions</b></h1> 
		<p class="text-1xl montserrat">Enabling content creators on different platforms to start using Editions without any technical skills.
		</p>
	</div>

</div>
</div>


<div class="px-10 sm:px-52 pt-32">
	<h1 class="cooper text-6xl brick-pink font-extrabold mb-5">Our Mission</h1>
	<p class="text-2xl mb-16 montserrat">To empower content creators to focus on creating. To empower users to discover artists and digital assets they care about. To empower businesses to discover and be discovered. </p>
<div class="flex flex-col sm:flex-row gap-0 sm:gap-32 "> 

	<img class="w-72 h-64" alt="" src={Pic3} />
	<img class="w-72 h-64" alt="" src={Pic4} />
	<img class="w-72 h-64" alt="" src={Pic5} />

</div>
</div>

<div class="px-10 sm:px-52 pt-32">
	<h1 class="cooper text-6xl font-extrabold brick-pink mb-5">Why Blockchain?</h1>
	<p class="text-2xl mb-16 montserrat">Blockchain allows creators, users, and artists to interact without intermediaries. 
		It provides unprecedented levels of transparency in otherwise untransparent processes and efficiently distributes and allocates funds across borders.
		 It empowers users to own their digital assets and identities truly.
		 It’s the perfect technology to make our mission become reality.  </p>

</div>

<div class="px-10 sm:px-52 pt-32 mb-20">
	<h1 class="cooper text-6xl brick-pink font-extrabold mb-5">Get in touch</h1>
	<p class="text-2xl mb-16 montserrat">We’ll get back to you as soon as our founder has figured out how to use email.</p>


<form>
	<div class="mb-6">
	  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
	  <input type="text" bind:this={name} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
	</div>
	<div class="mb-6">
		<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
		<input type="email" bind:this={email} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@xyz.com" required="">
	  </div>
	<div class="mb-6">
	  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
	  <textarea  id="message" bind:this={message} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required=""></textarea>
	</div>
	
	<a href="mailto:someone@yoursite.com?subject=Mail from Our Site&body=Body-goes-here" alt=""><button type="submit" class="text-white bg-pink-600 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button></a>
  </form>
  

</div>

















	

	
</section>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('http://fonts.cdnfonts.com/css/cooper-hewitt-book');


  .cooper {
	font-family: 'Cooper Hewitt Bold', sans-serif;
  }
  .montserrat {
	font-family: 'Montserrat', sans-serif;
  }

  

  .brick-pink {
	color: #E85D75;
  }

	
	



	
</style>
