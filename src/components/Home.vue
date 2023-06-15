<template>
    <div class="flex lg:h-screen md:h-screen sm:h-screen xs:h-screen justify-center items-center bg-black lg:px-48 md:px-48 sm:px-24">
        <div class="text-center">
            <h1><span class="font-Proxima-Nova-Xbold lg:text-5xl md:text-4xl sm:text-5xl xs:text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-[#f9e027] to-[#39fb37]">Fortified Energy Centers:</span><span class="text-white font-Proxima-Nova-Light lg:text-5xl md:text-4xl sm:text-5xl xs:text-5xl"> Renewable Solar Energy Generation,
Storage and Management in a Fortified Secure Structure</span></h1>
        </div>
    </div>
    <section class="bg-black lg:px-48 md:px-48 sm:px-24 xs:px-24 py-24 h-80 flex justify-center items-center">
        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4">
            <div>
                <p class="text-white text-3xl lg:w-9/12 md:w-9/12 lg:text-left md:text-left sm:text-center xs:text-center sm:w-full xs:w-full">
                    We provide renewable solar energy,
                    clean air, pure water, precision food,
                    shelter and AI-data capabilities for a
                    sustainable and abundant future
                </p>
            </div>
            <div class="flex justify-center items-center">
                
                <form class="lg:w-6/12 md:w-6/12 sm:w-full xs:w-full">   
                    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-white rounded-full bg-black" placeholder="Enter Your Email" required>
                        <button type="submit" class="text-black Proxima-Nova-Light absolute right-2 bottom-2.5  font-medium rounded-full text-sm px-4 py-2 bg-gradient-to-br from-[#f9e027] to-[#39fb37]">Get Started</button>
                    </div>
                </form>


            </div>
        </div>

    </section>
    <section class="bg-black lg:px-48 md:px-48  py-24 sm:px-24 xs:px-24 grid lg:h-80 md:h-80 sm:h-auto xs:h-auto place-items-center">
        <div class="text-center lg:w-6/12 md:w-6/12 sm:w-full xs:w-full">
            <p class="text-white font-Proxima-Nova-Light text-3xl pb-10">
            IMPAC is pioneering the path to an abundant future
            through Energy and Technology advancements. 
        </p>
        <p class="text-white font-Proxima-Nova-Light text-3xl">
            The coherence of Fortified Energy Centers and Life
            Plants is what will help usher in an era of abundance.
        </p>
        </div>
    </section>
    <section class="h-screen  w-full bg-FECHome bg-cover bg-no-repeat grid grid-cols-1 gap-4 content-end py-10" >
        <div class="w-full text-center">
            <h1 class="text-white text-5xl font-Proxima-Nova-Xbold text-center">FORTIFIED ENERGY CENTERSTM</h1>
        </div>
        <div class="w-full text-center">
            <p class="text-white text-5xl font-Proxima-Nova-Light text-center">Fortified Structures. Renewable Energy. Battery Storage. Energy Management System.</p>
        </div>
        
    </section>
    <section class="relative flex items-end justify-center h-screen overflow-hidden content-end px-10" >
        <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" autoplay muted loop>
         <source src="/src/assets/images/home/vertical tomatoes.mp4" type="video/mp4">
        </video>
        <div class="relative z-30 p-5 text-2xl text-white">
            <div class="w-full text-center">
                <h1 class="text-white text-5xl font-Proxima-Nova-Xbold text-center">LIFE PLANTS</h1>
            </div>
            <div class="w-full text-center">
                <p class="text-white text-5xl font-Proxima-Nova-Light text-center">Clean Air. Pure Water. Precision Food. Shelter. Data.</p>
            </div>
        </div>
    </section>
    <section class="h-screen w-full grid bg-black  p-10">
        <div class="container m-auto grid grid-cols-1">
            <h1 class="font-Proxima-Nova-Xbold text-white text-center text-3xl">DIVISIONS</h1>
        </div>
        <div class="container m-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2">
            <div class="lg:h-96 md:h-96 sm:h-48 xs:h-48 flex items-center">
                <img src="../assets/images/home/ENERGY.jpg" class="w-full h-full"  />
                <div class="flex justify-center items-center">
                    <img src="" />
                    <h2 class="font-Proxima-Nova-Light text-white text-center text-3xl">ENERGY</h2>
                </div>
            </div>
            <div class="lg:h-96 md:h-96 sm:h-48 xs:h-48">
                <img src="../assets/images/home/FOOD.jpg" class="w-full h-full"  />
            </div>
            <div class="lg:h-96 md:h-96 sm:h-48 xs:h-48">
                <img src="../assets/images/home/AIR.jpg" class="w-full h-full" />
            </div>
            <div class="lg:h-96 md:h-96 sm:h-48 xs:h-48">
                <img src="../assets/images/home/WATER.jpg" class="w-full h-full" />
            </div>
            <div class="lg:h-96 md:h-96 sm:h-48 xs:h-48">
                <img src="../assets/images/home/DATA.jpg" class="w-full h-full" />
            </div>
            <div class="lg:h-96 md:h-96 sm:h-48 xs:h-48">
                <img  src="../assets/images/home/ESG_SDG.jpg" class="w-full h-full" />
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>