<template>
   <div>
      <!-- Hero -->
      <section>
         <NewHero />
      </section>
      <!-- Categories -->
      <section>
         <div class="py-16 lg:px-0 px-2">
            <!-- <Categories /> -->
            <IndexCategoriesSection />
         </div>
      </section>
      <!-- Stats -->
      <section class="py-16 bg-selago">
         <Stats />
      </section>
      <!-- Feature -->
      <!-- <section>
            <div class="md:py-32 py-0">

                // Typo/Info 

                // Feature Tabs 
                <MainFeatures />

            </div>
        </section> -->
      <!-- CTA -->
      <section>
         <div class="py-16 mt-32 md:mt-0 bg-whiteLilac">
            <Cta />
         </div>
      </section>
      <!-- Testimonials -->
      <section class="bg-whiteLilac relative">
         <Testimonials />
      </section>
   </div>
</template>
