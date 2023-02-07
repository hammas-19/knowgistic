<style scoped>
.main {
    background: linear-gradient(0deg, rgba(168, 209, 255, 1) 100%, rgba(216, 244, 255, 1) 70%);
}

.backBtn {
 height: 3em;
 width: 10em;
 border: none;
 border-radius: 1em;
 background: #5F30E2;
 font-size: 17px;
 color: #ffffff;
 font-family: inherit;
 font-weight: 500;
 animation: shake3856 0.3s linear infinite both;

}

.backBtn:hover {
 animation: none;
}

@keyframes shake3856 {
 0% {
  -webkit-transform: translate(0);
  transform: translate(0);
 }

 20% {
  -webkit-transform: translate(-2px, 2px);
  transform: translate(-2px, 2px);
 }

 40% {
  -webkit-transform: translate(-2px, -2px);
  transform: translate(-2px, -2px);
 }

 60% {
  -webkit-transform: translate(2px, 2px);
  transform: translate(2px, 2px);
 }

 80% {
  -webkit-transform: translate(2px, -2px);
  transform: translate(2px, -2px);
 }

 100% {
  -webkit-transform: translate(0);
  transform: translate(0);
 }
}

</style>
<template>
    <div class="main w-full h-screen  relative">
        
        <div class="flex flex-col justify-center items-center h-screen md:h-auto relative z-20  py-10 gap-6">

            <img src="/logoIcon.png" class="object-contain w-56 h-56 object-center" alt="">

            <h1 class="flex flex-col text-center leading-none font-bold text-ebonyClay" style="font-size: 86px;">
                <span>404</span>
                <span class="text-xl">page not found</span>
            </h1>
            
            <NuxtLink to="/">
                <button class="backBtn">
                    Go Back!
                </button>
            </NuxtLink>



        </div>

        <img src="/banners/404_banner.png" class="absolute bottom-0 z-10" alt="404_bg">
    </div>

</template>