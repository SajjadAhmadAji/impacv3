<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <footer class="bg-black lg:h-48 md:h-48 sm:h-96  lg:px-48 md:px-48 sm:px-24">
    <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-4 lg:h-48 md:h-48 sm:h-96 text-white font-Proxima-Nova-Light">
        <div class="flex lg:justify-end md:justify-end sm:justify-center lg:items-end md:items-end sm:items-center lg:order-first md:order-first sm:order-last">
            <p>Copyright &copy 2023 IMPAC Inc. All rights reserved</p>
        </div>
        <div class="flex justify-center items-center">
            <ul>
                <li><a>FORTIFIED ENERGY CENTERS</a></li>
                <li><a>LIFE PLANTS</a></li>
                <li><a>MISSION</a></li>
                <li><a>TEAM</a></li>
                <li><a>OUR STORY</a></li>
            </ul>
        </div>
        <div class="flex justify-center items-center">
            <ul>
                <li><a>ESG/SDG </a></li>
                <li><a>CHARITABLE FUNDS</a></li>
                <li><a>ENVIRONMENTAL</a></li>
                <li><a>FOUNDER’S PLEDGE</a></li>
                <li><a>INVESTORS</a></li>
            </ul>
        </div>
        <div class="flex justify-center items-center">
            <ul>
                <li><a>FOOD DISTRIBUTORS</a></li>
                <li><a>SUPPORT</a></li>
                <li><a>TEMS OF USE</a></li>
                <li><a>PRIVACY POLICY</a></li>
                <li><a>COOKIES POLICY</a></li>
            </ul>
        </div>
    </div>
</footer>
</template>
<script>
export default {
 
}
</script>