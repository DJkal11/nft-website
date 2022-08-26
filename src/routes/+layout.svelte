<script>
    import { page } from '$app/stores'
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import Logo from "../lib/header/pink.png";
    import Transition from "./transition/+page.svelte"
</script>

<Header />

<main class="w-screen">
    <Transition url={$page.url}>
	<slot />
    </Transition>
</main>


	
<footer class="p-8 w-screen overflow-hidden cadet text-white  shadow  dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center justify-center mb-4 sm:mb-0">
            <img src={Logo} class="mr-3 h-10" alt="Logo">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Friend A Labs</span>
        </a>
        <span class="block text-sm text-white text-center dark:text-gray-400">Copyright 2022 Editions | 
            Made with <span><a alt="" target=”_blank” href="https://www.youtube.com/watch?v=WUQkBk_AGzQ">🧡</a></span> by <span><a alt="" target=”_blank” href="https://www.youtube.com/watch?v=00Bki1-MnEY">Friend A Labs</a></span>
        </span>
        <ul class="flex flex-wrap mt-3 sm:mt-0 ml-5 sm:ml-0 items-center justify-center  text-sm text-white sm:mb-0 dark:text-gray-400">
            <li class="pr-5">
                <a alt="" target=”_blank” href="https://twitter.com/FriendALabs">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="25"
                        height="25"
                        viewBox="0 0 30 30"
                        style=" fill:white;"
                    >
                        <path
                            d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
                        /></svg
                    >
                </a>
            </li>
           
            <li class="pr-5"> 
                <a alt="" target=”_blank” href="https://medium.com/friendalabs
                "> 
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="25" height="25"
                viewBox="0 0 48 48"
                style=" fill:white;"><circle cx="14" cy="24" r="12" fill="white"></circle><ellipse cx="34" cy="24" fill="white" rx="6" ry="11"></ellipse><ellipse cx="44" cy="24" fill="white" rx="2" ry="10"></ellipse></svg>
                </a>
            </li>

            <li class="pr-5"> 
                <a alt="" target=”_blank” href="https://www.linkedin.com/company/friend-a-labs/about/
                "> 
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="21" height="21"
                viewBox="0 0 24 24"
                style=" fill:white;"><path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"></path></svg>
                </a>
            </li>
            
             
        </ul>
        
    </div>
    
   
</footer>



<style>
	main {
		
		/* display: flex;
		flex-direction: row;
		width: 100%;
		max-width: 100vw;
		margin: 0 auto;
		box-sizing: border-box; */
        overflow: hidden;
        
	}
    .cadet {
	background-color: #4A6573;
  }
    
	
</style>
