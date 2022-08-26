<script>
    import { page } from '$app/stores'
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import Logo from "../lib/header/LOGO3.svg";
    import Transition from "./transition/+page.svelte"
</script>

<Header />

<main class="w-screen">
    <Transition url={$page.url}>
	<slot />
    </Transition>
</main>


	
<footer class="p-8 overflow-hidden cadet text-white  shadow  dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center justify-center mb-4 sm:mb-0">
            <img src={Logo} class="mr-3 w-7 h-8" alt="Logo">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Friend A Labs</span>
        </a>
        <span class="block text-sm text-white text-center dark:text-gray-400">Copyright 2022 Editions | Made with 💙 by Friend A Labs
        </span>
        <ul class="flex flex-wrap mt-3 sm:mt-0 ml-5 sm:ml-0 items-center justify-center  text-sm text-white sm:mb-0 dark:text-gray-400">
            <li class="pr-5">
                <a alt="" href="https://twitter.com/FriendALabs">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
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
                <a alt="" href="https://medium.com/friendalabs
                "> 
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="25" height="25"
                        viewBox="0 0 72 72"
                        style=" fill:white;"><path d="M45.049,14C57.06,14,58,14.94,58,26.951v18.098C58,57.06,57.06,58,45.049,58H26.951C14.94,58,14,57.06,14,45.049V26.951	C14,14.94,14.94,14,26.951,14H45.049z M29.713,44.151c4.502,0,8.151-3.649,8.151-8.151c0-4.502-3.649-8.151-8.151-8.151	c-4.502,0-8.151,3.649-8.151,8.151C21.562,40.502,25.212,44.151,29.713,44.151z M42.713,43.757c2.228,0,4.034-3.473,4.034-7.757	c0-4.284-1.806-7.757-4.034-7.757c-2.228,0-4.034,3.473-4.034,7.757C38.679,40.284,40.485,43.757,42.713,43.757z M48.98,42.928	c0.775,0,1.403-3.102,1.403-6.928s-0.628-6.928-1.403-6.928c-0.775,0-1.403,3.102-1.403,6.928S48.205,42.928,48.98,42.928z"></path></svg>
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
