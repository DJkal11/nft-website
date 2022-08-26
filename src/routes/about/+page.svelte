<script> 
import Tree from "../../lib/header/cherry.png";
import Mark from "../../lib/header/Mark.jpg";
import Jillian from "../../lib/header/Jillian.jpeg";
import Nirbhik from "../../lib/header/Nirbhik.jpg";
import Naomi from "../../lib/header/Naomi.png";
import Matias from "../../lib/header/Matias.jpg";
import Shin from "../../lib/header/shin.jpg";
import Lucian from "../../lib/header/Lucian.jpg"
</script>

<svelte:head>
	<title>About</title>
    <link href="https://www.dafontfree.net/embed/Y29vcGVyLWhld2l0dC1ib29rJmRhdGEvMTYvYy83ODAwMy9Db29wZXJIZXdpdHQtQm9vay5vdGY" rel="stylesheet" type="text/css"/>
</svelte:head>

<div class="scroll-smooth"> 
    <div class="chest h-full sm:h-screen bg-fixed p-14 sm:p-52 flex flex-col sm:flex-row gap-20">
        <div>
        <h1 class="text-white cooper text-5xl sm:text-6xl font-extrabold mb-10">About Friend A Labs</h1>
        <p class="text-white montserrat text-1xl sm:text-2xl font-normal">Friend A Labs started in 2022 when friends came together to discuss the lack of real consumer-focused applications in the blockchain industry.
             Our founder, Shin, has been toying with the idea of building a better alternative for digital asset marketplaces and advertising for years.
              With Friend A Labs, these ideas are becoming reality.
            </p>
        </div>
         
    </div>

    <div class="flex almond flex-col sm:flex-row gap-5 sm:gap-32 px-10 sm:px-52 pb-28 pt-10 sm:pt-32"> 
        <div class="w-full sm:w-9/12"> 
            <h1 class="text-5xl cooper brick-pink font-extrabold mb-10">Values</h1>
            <h2 class="font-extrabold brick-pink">Ship fast, then perfect it</h2>
            <p class="text-1xl montserrat">Launch solid products fast, then work on ironing out small bugs and perfecting them using community feedback.</p>
                 <br />
                 <h2 class="font-extrabold brick-pink">Foster curiosity</h2>
            <p class="text-1xl montserrat">Venturing off-topic often leads to very creative new approaches to existing challenges. We encourage team members to go down their respective rabbit holes, and apply what they learned later on.</p>
                 <br />
                 <h2 class="font-extrabold brick-pink">Balance working together and giving people space</h2>
            <p class="text-1xl montserrat">We love catching up with each other, bouncing off ideas, and thinking through tough problems. But we also give each other space to work on parts individually because we understand that this is often where people get in the zone and deliver awesome results.</p>
                 <br />
                 <h2 class="font-extrabold brick-pink">Be a Friend A</h2>
            <p class="text-1xl montserrat">That means being supportive, open-minded, and not shying away from big tasks. Overcome one's fears to empower others.</p>
        </div>

        <div class=" rounded-full"> 
            <img class="w-full rounded-lg shadow-2xl mt-24" alt="nft" src={Tree} />
        </div>

    </div>

    

    <div class="px-10 sm:px-52 pt-32"> 
        <h1 class="text-5xl brick-pink text-left sm:text-center font-extrabold mb-10 cooper">THE TEAM</h1>
        <p class="text-1xl text-black text-left sm:text-center montserrat">
            We are a bunch of technology enthusiasts who believe tech should empower and not undermine. 
            Collectively, we boast more than ten years in the blockchain space and have worked across protocols, apps, CEXs, and digital asset projects.
             We share a love for Memes and building cool things.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-4 mt-20 gap-14 pb-20"> 
            <div class=""> 
                <img class="w-52 sm:w-full sm:h-64 rounded-lg shadow-2xl" alt="" src={Shin} />
                <h1 class="font-bold brick-pink mt-7">Shin the Dev</h1>
                <h2 class="font-bold brick-pink mb-5">CEO & Founder</h2>
                <ul class="space-cadet"> 
                    <li>5 years of experience in Front-End development, including at CommonWealth, MIH Ventures, and Polygon.</li>
                    <br />
                    <li>Web3 native</li>
                </ul>
            </div>

            <div class=""> 
                <img class="w-52 sm:w-full sm:h-64 rounded-lg shadow-2xl" alt="" src={Naomi} />
                <h1 class="font-bold brick-pink mt-7">Naomi Oba</h1>
                <h2 class="font-bold brick-pink mb-5">Co-Founder and CMO</h2>
                <ul class="space-cadet"> 
                    <li>4 years experience in crypto, working across Marketing, Sales & Community, including at Bitcoin.com, Minima</li>
                    <br />
                    <li>Accomplished copywriter</li>
                </ul>
            </div>

            <div class=""> 
                <img class="w-52 sm:w-full sm:h-64 rounded-lg shadow-2xl" alt="" src={Matias} />
                <h1 class="font-bold brick-pink mt-7">Matias Forbord</h1>
                <h2 class="font-bold brick-pink mb-5">Co-Founder and CTO</h2>
                <ul class="space-cadet"> 
                    <li>13 + years as a full-stack developer including at ConsenSys & SkillShare</li>
                    <br />
                    <li>Developed Web apps across web2, and web3, scaling to millions of user</li>
                </ul>
            </div>

            <div class=" "> 
                <img class="w-52 sm:w-full sm:h-64 rounded-lg shadow-2xl" alt="" src={Lucian} />
                <h1 class="font-bold brick-pink mt-7">Lucian Kallee</h1>
                <h2 class="font-bold brick-pink mb-5">Front-End Developer</h2>
                <ul class="space-cadet"> 
                    <li>Passionate individual with lots of experience building interfaces users love</li>
                    <br />
                    <li>Crypto-native</li>
                </ul>
            </div>

        </div>

    </div>

    <div class="px-10 sm:px-52 pt-20"> 
        <h1 class="brick-pink cooper text-5xl sm:text-6xl font-extrabold mb-10">Our Advisors</h1>

        <div class="grid grid-cols-1 sm:grid-cols-3 mt-20 gap-14 pb-20">
            <div class=" "> 
                <img class="w-52 shadow-2xl rounded-lg" alt="" src={Mark} />
                <h1 class="font-bold text-2xl mb-5 brick-pink mt-7">Mark Beylin </h1>
                <ul class="space-cadet font-bold"> 
                    <li>Co-founder of MyCo, member of Kernel (Gitcoin), previously ConsenSys</li>
                </ul>
            </div>

            <div class=" "> 
                <img class="w-52 shadow-2xl rounded-lg" alt="" src={Nirbhik} />
                <h1 class="font-bold text-2xl mb-5 brick-pink mt-7">Nirbhik Jangid </h1>
                <ul class="space-cadet font-bold"> 
                    <li>Founder of dApp
                        List, previously
                        Polygon, Pineapple
                        Consulting</li>
                </ul>
            </div>

            <div class=" "> 
                <img class="w-52 shadow-2xl rounded-lg" alt="" src={Jillian} />
                <h1 class="font-bold text-2xl mb-5 brick-pink mt-7">Jillian Godsil </h1>
                <ul class="space-cadet font-bold"> 
                    <li>Journalist, Writer,
                        for CoinDesk,
                        CoinTelegraph</li>
                </ul>
            </div>
        </div>

    </div>

    <div class="px-10 sm:px-52 pt-24 pb-10 chest"> 
        <h1 class="text-white cooper text-5xl font-extrabold mb-10">Manifesto</h1>
        <p class="text-1xl mb-16 sm:w-8/12 montserrat text-white">We are passionate supporters of content creators.<br />
            We root for all the artists trying to make it in the digital world.<br/>
            We empathize with all the users getting annoyed at all the popups and being followed wherever they go.<br/>
             
            We believe that the current digital economy does not serve us well. Whether you are a creator, artist, business, or user, this is your attention, your experience.<br/>
            Time to take back control.<br/>

            We provide the tools and infrastructure to empower users, creators, and artists. We cheer you on as you take your first steps in your creative endeavors. <br/>
            Just as a good Friend A does.

</p>

    </div>

    <div> 
        <div class=" h-full   px-10 sm:px-52 pt-20 pb-20 sm:pt-20"> 
            <h1 class=" cooper brick-pink text-6xl font-extrabold mb-10">FAQ</h1>
            <h2 class="cooper text2xl font-bold mt-5">What is Editions?</h2>
            <p class="montserrat">Editions is a holistic platform consisting of a digital asset marketplace, 
                Editions Fabric (discovery network), and a mobile app (not yet released). 
                You can read more on each part in our docs. </p>
    
             <h2 class="cooper text2xl font-bold mt-5">How does Editions work? </h2>
            <p class="montserrat">Editions marketplace is a set of smart contracts that facilitate minting, 
                buying, selling, and trading of digital assets. Our Editions Fabric enables content 
                creators to display digital assets on their respective websites to make blogs and 
                other online ventures financially viable. </p>
         
            <h2 class="cooper text2xl font-bold mt-5">Who is behind Editions?</h2>
            <p class="montserrat">Editions is a product created by Friend A Labs, a blockchain development studio. 
                You can find all the details about us here. </p>
    
            <h2 class="cooper text2xl font-bold mt-5">Which blockchain is Editions on?</h2>
            <p class="montserrat">Initially, Editions is running on the NEAR blockchain. In the future, 
                we’ll add support for further networks.  </p>
    
             <h2 class="cooper text2xl font-bold mt-5">Does Editions have a token? </h2>
             <p class="montserrat">No. And we’re not planning to release one anytime soon. </p>

             <h2 class="cooper text2xl font-bold mt-5">What is Friend A Labs?</h2>
             <p class="montserrat">Friend A Labs is a blockchain development studio with a focus on building user-facing applications. 
                 Our first product is Editions - a platform to empower content creators and users.  </p>
                 
         <h2 class="cooper text2xl font-bold mt-5">Who is behind Friend A Labs?</h2>
         <p class="montserrat">Friend A Labs was founded by Mekyle Naidoo, and his two Co-founders, Naomi Oba, and Matias Forbord. </p>
    
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
.intro {
    background: #E85D75;
 
}
 
.space-cadet {
    color: #34344A;
}

.brick-pink {
	color: #CC6354;
  }

.chest {
    background-color: #CC6354;
}  

.almond {
    background-color: #EEE9BE;
}

.section-2 {
    background: rgb(255,255,255);

}

</style>