<script> 
import Pic6 from "../../lib/header/pic6.png";
</script>

<svelte:head>
	<title>Products</title>
    <link href="https://www.dafontfree.net/embed/Y29vcGVyLWhld2l0dC1ib29rJmRhdGEvMTYvYy83ODAwMy9Db29wZXJIZXdpdHQtQm9vay5vdGY" rel="stylesheet" type="text/css"/>
</svelte:head>

<div> 
    <div class="intro h-full sm:h-screen  px-10 sm:px-52 pt-20 sm:pt-40 flex flex-col sm:flex-row gap-10">
        <div class="w-11/12">
        <h1 class=" cooper brick-pink text-6xl font-extrabold mb-10">NFTs are here to stay, but how we use them will change. </h1>
        <p class=" montserrat-bold text-2xl font-normal">In the future, they can be anything digital:
            </p>
            <ul class="montserrat mt-10 grid grid-cols-2 mb-10 gap-5"> 
                <li class="mb-2 text-xl ">tickets</li>
                <li class="mb-2 text-xl">art</li>
                <li class="mb-2 text-xl">certifications</li>
                <li class="mb-2 text-xl">id</li>
                <li class="mb-2 text-xl">metaverse fashion</li>

            </ul>
            <p class=" montserrat text-2xl font-normal">The only limit is your imagination.
            </p>
        </div>

        <div class="w-8/12"> 
            <img alt="" class="w-full sm:w-full" src={Pic6} />
        </div>  
    </div>

    <div class="px-10 sm:px-52 pt-14 sm:pt-32 mb-20">
        <h1 class="brick-pink cooper text-6xl font-extrabold mb-5">Discover great NFTs with Editions</h1>
        <h2 class="text-2xl montserrat">Editions is a holistic platform enhancing NFT discovery while empowering creators. Here’s how. </h2>
    <div class="flex flex-col sm:flex-row gap-14 sm:gap-32 section-2"> 
        <div class="w-full mt-20"> 
          <h1 class="font-bold text-1xl mb-3">Creators</h1>
          <ul class="montserrat"> 
            <li class="mb-2">curate NFTs they want to display </li>
            <li class="mb-2">earn a direct share whenever an NFT is purchased on their site </li>
            <li class="mb-2">control, transparency, and higher revenue than any ad network </li>
          </ul>
        </div>

        <div class="w-full mt-20"> 
            <h1 class="font-bold text-1xl mb-3">Users</h1>
            <ul class="montserrat"> 
              <li class="mb-2">discover great NFTs from the creators they love</li>
              <li class="mb-2">support their favorite artists </li>
              <li class="mb-2">giving back and receiving revenue from using Editions</li>
            </ul>
          </div>

          <div class="w-full mt-20"> 
            <h1 class="font-bold text-1xl mb-3">CArtists, DAOs </h1>
            <ul class="montserrat"> 
              <li class="mb-2">enhance their reach and discovery of their NFTs </li>
              <li class="mb-2">engage with holders in more meaningful ways </li>
              <li class="mb-2">align with Editions value and social impact causes.</li>
            </ul>
          </div>

    </div>

</div>

</div>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');



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
	color: #E85D75;
  }


</style>