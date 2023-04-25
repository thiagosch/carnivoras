<script setup>
import { RouterLink } from "vue-router";
import SiteLogo from '@/assets/logo/logo-no-background.png';

</script>

<template>
    <header class="navbar is-fixed-top bg-primary">
        <nav
            class="container is-fluid is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center py-1 ">
            <RouterLink :to="{ name: 'home' }">
                <div>
                    <img :src=SiteLogo alt="" srcset="">

                </div>
            </RouterLink>

            <div class="is-flex is-flex-direction-row ">
                <RouterLink :to="{ name: 'home' }" class="my-1 mx-1">
                    <i>
                        <span class="fa-solid fa-house py-1 "></span>
                        <p>Inicio</p>
                    </i>
                </RouterLink>
                <RouterLink :to="{ name: 'gallery' }" class="my-1 mx-1">
                    <i>
                        <span class="fa-solid fa-images py-1"></span>
                        <p>Galeria</p>
                    </i>
                </RouterLink>
                <RouterLink :to="{ name: 'ciudados' }" class="my-1 mx-1">
                    <i>
                        <span class="fa-solid fa-leaf py-1"></span>
                        <p>Ciudados</p>
                    </i>
                </RouterLink>
                <RouterLink :to="{ name: 'info' }" class="my-1 mx-1">
                    <i>
                        <span class="fa-solid fa-lightbulb py-1"></span>
                        <p>Info</p>
                    </i>
                </RouterLink>

            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
img {
    height: 40px;
}

nav {
    border: 1px solid black;
    padding: 30px;
    box-shadow: 0px 1px 5px black;
    a {
        transition: .2s;
        font-weight: bold;
        color: #e5e5e5;

        &:hover {
            color: #bcbcbc
        }

        &.router-link-exact-active {
            color: #53fcb0;

            &:hover {
                color: #42cb8d;
            }
        }
    }
}
</style>