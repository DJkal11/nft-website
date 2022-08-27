<script> 
import Star from "../../lib/header/stars.png";
import Logo from '../../lib/header/pink.png'
</script>

<svelte:head>
	<title>Products</title>
  <link rel="icon" type="image/png" href={Logo} />
    <link href="https://www.dafontfree.net/embed/Y29vcGVyLWhld2l0dC1ib29rJmRhdGEvMTYvYy83ODAwMy9Db29wZXJIZXdpdHQtQm9vay5vdGY" rel="stylesheet" type="text/css"/>
</svelte:head>

<div> 
    <div class="intro  h-screen px-10 sm:px-52 pt-20 sm:pt-32 gap-10">
        <div class="w-full text-center sm:mt-36">
        <h1 class=" cooper brick-pink text-5xl sm:text-6xl font-extrabold mb-10">NFTs are here to stay, but how we use them will change. </h1>
        <p class=" text-white montserrat-bold text-2xl font-normal">In the future, they can be anything digital.
            </p>
           
            <p class="text-white montserrat text-2xl font-normal">The only limit is your imagination.
            </p>
        </div>

        
    </div>

    <div class="px-10 sm:px-52 pt-14 sm:pt-32 mb-20">
        <h1 class="brick-pink cooper text-5xl sm:text-6xl font-extrabold mb-5">Discover great NFTs with Editions</h1>
        <h2 class="text-2xl montserrat">Editions is a holistic platform enhancing NFT discovery while empowering creators.</h2>
    <div class="flex flex-col sm:flex-row sm:gap-32 section-2"> 
        <div class="w-full mt-14 sm:mt-20"> 
          <h1 class="font-bold brick-pink text-2xl mb-3">Creators</h1>
          <ul class="montserrat list-disc"> 
            <li class="mb-2">Curate NFTs they want to display.</li>
            <li class="mb-2">Earn a direct share whenever an NFT is purchased on their site.</li>
            <li class="mb-2">Control, transparency, and higher revenue than any ad network. </li>
          </ul>
        </div>

        <div class="w-full mt-10 sm:mt-20"> 
            <h1 class="font-bold brick-pink text-2xl mb-3">Users</h1>
            <ul class="montserrat list-disc"> 
              <li class="mb-2">Discover great NFTs from the creators they love.</li>
              <li class="mb-2">Support their favorite artists. </li>
              <li class="mb-2">Giving back and receiving revenue from using Editions.</li>
            </ul>
          </div>

          <div class="w-full mt-10 sm:mt-20"> 
            <h1 class="font-bold brick-pink text-2xl mb-3">Artists, DAOs </h1>
            <ul class="montserrat list-disc"> 
              <li class="mb-2">Enhance their reach and discovery of their NFTs. </li>
              <li class="mb-2">Engage with holders in more meaningful ways. </li>
              <li class="mb-2">Align with Editions value and social impact causes.</li>
            </ul>
          </div>

    </div>

</div>

</div>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


.intro {
	background: url("../../lib/header/stars.png");
	background-size: cover;
  }
  .cooper {
    font-family: 'cooper-hewitt-book', sans-serif;
  }
  .montserrat {
	font-family: 'Montserrat', sans-serif;
  }

  .montserrat-bold {
	font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
  }


.brick-pink {
	color: #CC6354;
  }


</style>