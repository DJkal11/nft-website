<script> 
import Pencil from "../../lib/header/pencil.png";

let name;
let email;
let company;
let message;

</script>

<svelte:head>
	<title>Contact</title>
    <link href="https://www.dafontfree.net/embed/Y29vcGVyLWhld2l0dC1ib29rJmRhdGEvMTYvYy83ODAwMy9Db29wZXJIZXdpdHQtQm9vay5vdGY" rel="stylesheet" type="text/css"/>
</svelte:head>

<div> 
    <div class="intro h-full pb-32 px-10 sm:px-52 pt-20 sm:pt-20 flex flex-col sm:flex-row gap-32"> 

        <div class=" sm:w-5/12"> 
   <h1 class="cedar-chest-colour cooper text-6xl font-bold mb-10">Contact Us</h1>
  <form action="https://formspree.io/f/mjvzkenn"
  method="POST">
    <div class="relative z-0 mb-6 w-full group">
        <input bind:value={name} type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="">
        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <input bind:value={email} type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="">
        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <input bind:value={company} type="text" name="company" id="company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="">
        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
    </div>
    
      <div class="relative z-0 mb-6 w-full group">
          <input bind:value={message} type="text" name="message" id="message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="">
          <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
      </div>
      <button type="submit" class="text-white cedar-chest focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
      
    
   
    
  
  

        </div>

        <div class="w-5/12 mt-5 sm:block hidden"> 
         <img alt="" class="rounded-full" src={Pencil} />
        </div>
    </div>

</div>  

<style> 
.space-cadet {
    color: #34344A;
}

.brick-pink {
	color: #E85D75;
  }

 .cedar-chest {
    background-color: #CC6354;
 } 

 .cedar-chest:hover {
    background-color: #4A6573;
 } 


 .cedar-chest-colour {
    color: #CC6354;
 }

.cooper {
	font-family: 'cooper-hewitt-book', sans-serif;
}

</style>