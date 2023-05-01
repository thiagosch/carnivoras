
<template>
    <main class="  bg-primary container">
        <div id="main-info-container">
            <span class="grid-container" @click=toggle_active($event)>
                <div id="carni2" :style="{ backgroundImage: `url(${images[1]['productImage']})` }"
                    class="info-background-image">
                    <div class="info-background-color"></div>
                    <div class="container-info">
                        <p class="title-info">
                            Trampa Activa
                        </p>
                        <p class="description-info">
                            Generan movimiento para atrapar a la presa
                        </p>
                    </div>
                </div>

                <div style="color:white;" @click="$event.stopPropagation();" class="list-of-plants">
                    <ul>
                        <li>subcategoria 1
                            <ul>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                            </ul>

                        </li>
                        <li>subcategoria 2
                            <ul>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                            </ul>

                        </li>
                        <li>subcategoria 3 <ul>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                            </ul>
                        </li>
                        <li>subcategoria 4 <ul>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                            </ul>
                        </li>
                        <li>subcategoria 5 <ul>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </span>
            <span class="grid-container" @click=toggle_active($event)>

                <div :style="{ backgroundImage: `url(${images[0]['productImage']})` }" class="info-background-image">
                    <div class="info-background-color"></div>
                    <div class="container-info">
                        <p class="title-info">
                            Trampa Pasiva
                        </p>
                        <p class="description-info">
                            No generan movimiento para atrapar a la presa
                        </p>
                    </div>

                </div>
                <div style="color:white;" class="list-of-plants">
                    <ul>
                        <li>subcategoria 1
                            <ul>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                            </ul>

                        </li>
                        <li>subcategoria 2
                            <ul>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                            </ul>

                        </li>
                        <li>subcategoria 3 <ul>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                            </ul>
                        </li>
                        <li>subcategoria 4 <ul>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                            </ul>
                        </li>
                        <li>subcategoria 5 <ul>
                                <li>planta 1 </li>
                                <li>planta 2</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </span>
        </div>

    </main>
</template>
  
<style lang="scss" scoped>
li {
    width: max-content;
    color: black;
    background: white;
    border: 1px solid rgb(212, 212, 212);
    margin: .2rem 0 .2rem 1rem;
    padding: .3rem 1.2rem 0.3rem 0.5rem;

}



.list-of-plants {
    text-align: left;
    overflow-y: auto;
    overflow-x:hidden;
}

.grid-container {
    transition: 1s;
    display: grid;
    grid-template-columns: 100% auto;
    height: calc(50% - 2rem);
    overflow: hidden;
    margin-top: 1rem;
    margin-bottom: 1rem;
    gap: 1rem;

    &.active {
        grid-template-columns: 30% auto;

    }

}



#main-info-container {

    height: 100%;
    display: inline;

    .info-background-image {
        &.showind-description {
            width: 30%;
        }


        box-shadow: 0px 0px 3px black;
        cursor: pointer;
        // height: calc(50% - 2rem);
        position: relative;
        background-color: tomato;

        background-repeat: no-repeat;
        background-size: cover;

        .container-info {
            p {
                transition: color .2s;
                color: rgb(199, 199, 199)
            }

            ;
        }

        &:hover {
            .info-background-color {
                opacity: .5;
            }

            .container-info {
                p {
                    color: white;
                }
            }

        }

        .info-background-color {
            z-index: 1;
            transition: opacity .2s;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-image: linear-gradient(to left, #060606a3, #0606066b, transparent, transparent, transparent);

        }
    }

    .container-info {
        position: relative;
        z-index: 2;



        height: 100%;
        width: 100%;
        padding-right: 2rem;

        background-color: #0606063c;


        display: flex;
        flex-direction: column;
        align-items: end;
        justify-items: center;
        justify-content: center;

        .title-info {
            font-weight: bold;
            font-size: xx-large;
            color: white;
        }

        .description-info {
            margin-top: .5rem;
            color: #b1b1b1
        }



    }


}
</style>
  
<script>
export default {
    name: 'test',
    data() {
        return {

            images: [
                {
                    prodct: 'test1',
                    productImage: require('@/assets/fotos/backgrounds/cuidados/carni2.png'),
                    description: 'test'
                },
                {
                    prodct: 'test1',
                    productImage: require('@/assets/fotos/backgrounds/cuidados/carni6.png'),
                    description: 'test'
                }
            ]
        }
    },
    methods: {
        toggle_active(obj) {
            console.log(obj.currentTarget)
            obj.currentTarget.classList.toggle('active')
            // obj.target.innerHTML  = 'test';
        },
    },

}

</script>