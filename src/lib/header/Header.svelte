<script>
	import Logo from "./pink.png";
	import NewLogo from "./LOGO1.svg";
	
    let tab = "home";
	let menu = false;

	function showMenu() {
		if (menu === false){
			menu = true;
		}
		else {
			menu = false;
		}
	}

</script>

<header>
	
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
	  <a href="/" class="flex items-center">
		  <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
		  <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Friend A Labs</span>
	  </a>
	  <button on:click={showMenu} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
		<span class="sr-only">Open main menu</span>
		<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
	  </button>
	  <div class="hidden w-full md:block md:w-auto" id="navbar-default">
		<ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
			<li class="{tab === "home" ? 'opal border-b-2 pr-1 transition-all' : 'opal hover:border-b-2 transition-all'}">
				<a href="/" on:click={() => tab = "home"} class="block  py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">HOME</a>
			  </li>
		  <li class="{tab === "about" ? 'opal border-b-2 pr-1 transition-all' : 'opal hover:border-b-2 transition-all'}">
			<a href="/about" on:click={() => tab = "about"} class="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">ABOUT</a>
		  </li>
		  <li class="{tab === "market" ? 'opal border-b-2 pr-1 transition-all' : 'opal hover:border-b-2 transition-all'}">
			<a href="/marketplace" on:click={() => tab = "market"} class="block py-2 pr-4 pl-3 text-gray-700 rounded  md:p-0 ">PRODUCTS</a>
		  </li>
		  <li class="{tab === "contact" ? 'opal border-b-2 pr-1 transition-all' : 'opal hover:border-b-2 transition-all'}">
			<a href="/contact" on:click={() => tab = "contact"} class="block py-2 pr-4 pl-3 text-gray-700 rounded md:p-0">CONTACT</a>
		  </li>
		  
		</ul>
	  </div>
	  <div class="{menu? 'hidden w-full' : 'block sm:hidden w-full'}" id="navbar-default">
		<ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
		  <li on:click={showMenu} class="{tab === "home" ? 'border-green-500 border-b-2 transition-all' : ''}">
			<a href="/" on:click={() => tab = "home"} class="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</a>
		  </li>
		  <li on:click={showMenu} class="{tab === "about" ? 'border-green-500 border-b-2 transition-all' : ''}">
			<a href="/about" on:click={() => tab = "about"} class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400">About</a>
		  </li>
		  <li on:click={showMenu} class="{tab === "market" ? 'border-green-500 border-b-2 transition-all' : ''}">
			<a href="/marketplace" on:click={() => tab = "market"} class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Marketplace</a>
		  </li>
		 
		</ul>
	  </div>
	</div>
  </nav>
  
</header>

<style>

.space-cadet {
	background-color: #34344A;
  }

.opal {
	border-color: #4A6573; 
}
	
</style>
