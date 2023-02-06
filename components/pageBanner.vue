<template>
    <section class="">

        <div class="h-20 md:h-60 w-full relative bg-selago flex items-center">
            <slot name="bannerImg"></slot>

            <div class="container mx-auto">
                <h1 class="md:text-6xl text-3xl text-shark text-center font-semibold md:px-10 px-0">
                    <slot name="head"></slot>
                    <slot name="foot"></slot>

                </h1>
            </div>

        </div>

    </section>
</template>