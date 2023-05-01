
<template>
    <main class=" bg-primary container">
        <div id="main-info-container" class="is-flex is-flex-direction-column">
            <router-link to="/info/activas#router-view">
                <div id="carni2" :style="{ backgroundImage: `url(${images[0]['productImage']})` }"
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
            </router-link>
            <router-link to="/info/pasivas">
                <div :style="{ backgroundImage: `url(${images[1]['productImage']})` }" class="info-background-image">
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
            </router-link>
        </div>
    </main>
</template>
  
<style lang="scss" scoped>
#main-info-container {

    .info-background-image {
        position: relative;
        height: 200px;
        background-color: tomato;
        margin-top: 1rem;
        margin-bottom: 1rem;
        background-repeat: no-repeat;
        background-size: cover;

        &:hover {
            .info-background-color {
                opacity: .5;

            }
        }

        // background-position: ;
        .info-background-color {
            z-index: 1;
            transition: opacity .1s;
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
    }

}

</script>