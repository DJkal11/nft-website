<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import Logo from "../lib/header/LOGO.png";
</script>

<Header />

<main class="w-screen">
	<slot />
</main>


	
<footer class="p-4 overflow-hidden bg-white rounded-lg shadow  dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center justify-center mb-4 sm:mb-0">
            <img src={Logo} class="mr-3 h-8" alt="Logo">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Friend A Labs</span>
        </a>
        <ul class="flex flex-wrap items-center justify-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="/" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
    <span class="block text-sm  text-gray-500 text-center dark:text-gray-400">Copyright © 2022. All Rights Reserved.
    </span>
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

    
	
</style>
