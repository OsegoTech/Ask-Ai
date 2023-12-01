<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <router-link to="/" class="flex">
      <!-- <h1 class="mr-2 ">Ask AI</h1> -->
      <h3>Ask AI❓</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    </router-link>
    <ul class="flex xl:text-2xl">
      <router-link to="/text" class="px-2">text</router-link>
      <router-link to="/audio" class="px-2">audio</router-link>
      <router-link to="/image" class="px-2">image</router-link>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <!-- <footer class=" p-4 fixed bottom-0 w-full">
    <p class="text-center text-gray-400 text-sm">
      Made with
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        class="inline-block w-4 h-4 text-red-500 align-text-bottom"
      >
        <path
          fill-rule="evenodd"
          d="M12 21.35l-1.103-1.003C5.103 15.35 2 12.103 2 8.5 2 5.462 4.462 3 7.5 3c1.5 0 2.903.66 3.853 1.803C12.697 3.66 14.1 3 15.6 3 18.638 3 21 5.462 21 8.5c0 3.603-3.103 6.85-8.897 12.847L12 21.35z"
          clip-rule="evenodd"
        />
      </svg>
      by
      <a
        href="https://twitter.com/osego_baba"
        target="_blank"
        class="text-green-500 hover:text-green-400"
        >Osego Baba</a
      >
      and
      <a
        href="https://www.linkedin.com/in/omollo-cliff/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-green-500 hover:text-green-400"
        >Omollo Oganda</a
      >
    </p>
  </footer> -->
</template>
