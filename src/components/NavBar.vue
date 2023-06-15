<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <nav class=" items-center justify-between bg-black @apply !mt-[-25px] !ml-[0px] !pt-12">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <RouterLink class="text-smProxima-Nova-Light inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/">
            <img alt="IMPAC" class="logo" :src="image" width="125" height="125" />
          </RouterLink>
          <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item flex items-center">
              <RouterLink class="px-3 py-2 flex items-center text-sm Proxima-Nova-Light text-white hover:opacity-75" to="/fortifiedEnergyCenter">
                Fortified Energy Center
              </RouterLink>
            </li>
            <li class="nav-item flex items-center">
                <RouterLink class="px-3 py-2 flex items-center text-sm Proxima-Nova-Light leading-snug text-white hover:opacity-75" to="/LifePlant">
                    Life Plant
              </RouterLink>
            </li>
            <li class="nav-item flex items-center">
                <RouterLink class="px-3 py-2 flex items-center text-sm Proxima-Nova-Light leading-snug text-white hover:opacity-75" to="/about">
                    ESG/SDG
              </RouterLink>
            </li>
            <li class="nav-item flex items-center">
                <RouterLink class="px-3 py-2 flex items-center text-sm Proxima-Nova-Light leading-snug text-white hover:opacity-75" to="/about">
                    Charitable Funds
              </RouterLink>
            </li>
            <li class="nav-item flex items-center">
                <RouterLink class="px-3 py-2 flex items-center text-sm Proxima-Nova-Light leading-snug text-white hover:opacity-75" to="/about">
                    Partnerships
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="px-3 py-2 flex items-center text-sm Proxima-Nova-Light leading-snug text-white hover:opacity-75" to="/about">
                <button class="rounded-full bg-gradient-to-br from-[#f9e027] to-[#39fb37] text-black p-3">Let's Shape a Sustainable Future</button>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
<script>
 import image from "@/assets/images/impac-logo.png"
export default {
  name: "pink-navbar",
  data() {
    return {
      showMenu: false,
      image: image
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
<style lang="">
    
</style>