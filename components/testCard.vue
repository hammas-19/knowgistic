<template>
  <div
    class="notificationCard w-56 h-72 bg-gray-100 flex flex-col items-center justify-center p-5 gap-2 shadow-md rounded-lg">
    <p class="notificationHeading font-semibold text-sm">Push notifications</p>
    <svg class="bellIcon w-12 mt-4" viewBox="0 0 448 512">
      <path class="fill-current text-purple-600"
        d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z">
      </path>
    </svg>
    <p class="notificationPara text-gray-500 text-xs font-semibold text-center">Allow push notifications so you will get
      the latest updates</p>
    <div class="buttonContainer flex flex-col gap-1">
      <button
        class="AllowBtn w-28 h-6 bg-purple-600 text-white rounded-full text-xs font-semibold cursor-pointer">Allow</button>
      <button
      class="NotnowBtn w-28 h-6 text-purple-600 bg-transparent font-semibold cursor-pointer rounded-full text-xs">Not
      now</button>
  </div>
</div></template>
  