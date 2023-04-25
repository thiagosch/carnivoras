

<template>
  <div id="modal-gallery" class="modal">
    <div class="modal-background" @click="toggle_modal()"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title" id="modal-title"> text text</p>
        <button class="delete" aria-label="close" @click="toggle_modal()"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
        <p class="image">
          <img id="modal_img" src="" alt="">
        </p>
        <p id="modal_desc">texttest</p>
      </section>

    </div>
  </div>
  <main class=" bg-primary container">
    <div class="masonry "> <!-- gallery-container px-2 -->
      <div v-for="item, index in images">

        <figure style="min-height:200px;" @click="image_click(index)">
          <img class="item" style="width:20%;opacity:0 " :id='item.prodct' :src='item.productImage'
            @load="onImageLoad(item.prodct)" alt="">
        </figure>
      </div>
    </div>
   
  </main>
</template>



<script >
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


export default {

  name: 'test',

  data() {
    return {
      
      images: {
        '1': {

          prodct: 'Nombre Planta 1',
          productImage: require('@/assets/fotos/gallery/carni1.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
        2: {

          prodct: 'Nombre Planta 2',
          productImage: require('@/assets/fotos/gallery/carni9.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
        3: {
          prodct: 'Nombre Planta 3',
          productImage: require('@/assets/fotos/gallery/carni3.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
        4: {
          prodct: 'Nombre Planta 4',
          productImage: require('@/assets/fotos/gallery/carni4.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
        5: {
          prodct: 'Nombre Planta 5',
          productImage: require('@/assets/fotos/gallery/carni5.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
        6: {
          prodct: 'Nombre Planta 6',
          productImage: require('@/assets/fotos/gallery/carni6.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
        7: {

          prodct: 'Nombre Planta 7',
          productImage: require('@/assets/fotos/gallery/carni7.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
        8: {
          prodct: 'Nombre Planta 8',
          productImage: require('@/assets/fotos/gallery/carni8.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
        9: {

          prodct: 'Nombre Planta 9',
          productImage: require('@/assets/fotos/gallery/carni9.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
        10: {

          prodct: 'Nombre Planta 10',
          productImage: require('@/assets/fotos/gallery/carni6.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
        11: {

          prodct: 'Nombre Planta 11',
          productImage: require('@/assets/fotos/gallery/carni2.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
        12: {

          prodct: 'Nombre Planta 12',
          productImage: require('@/assets/fotos/gallery/carni3.jpg'),
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere provident incidunt nulla quaerat totam. Facilis corporis dolorum laborum officia assumenda adipisci esse molestiae, aut numquam sed tempore aliquam maxime.'
        },
      }

    }

  }
  ,
  methods: {
    onImageLoad(it) {
      setTimeout(() => {
        this.isImageLoaded = true
        if (document.getElementById(it)) {
          document.getElementById(it).setAttribute("style", "width: 100%; opacity:1;")

        }
      }, getRandomInt(800) + 500);

    },
    image_click(index) {
      console.log(this.images[index].productImage)
      let img_source = document.getElementById('modal_img')
      let desc = document.getElementById('modal_desc')
      let title = document.getElementById('modal-title')

      desc.innerHTML = this.images[index].prodct
      desc.innerHTML = this.images[index].description
      title.innerHTML = this.images[index].prodct
      img_source.setAttribute("src", this.images[index].productImage)
      const modal = document.getElementById('modal-gallery')
      modal.classList.add('is-active')

    },
    toggle_modal() {
      const modal = document.getElementById('modal-gallery')
      modal.classList.remove('is-active')
      console.log('modal')
    }
  }


}

</script>


<style scoped>
.modal-card-head {
  background-color: rgba(195, 195, 195, 0.78);
}

.modal-card-body {
  background-color: hsla(0, 0%, 100%, 0.66)
}

.gallery-container {

  column-count: 4;


}

figure {
  margin: 0;
  display: inline-block;
  margin-bottom: 0px;
  width: 100%;


}

.center-image {
  margin: 0 auto;
  transition: opacity 3s;
}

@media screen and (max-width: 780px) {
  .gallery-container {
    max-width: 100vw;
    column-count: 1;
    column-gap: 1;
    column-count: 3;
    column-gap: 3;
  }
}

@media screen and (max-width: 500px) {
  .gallery-container {
    max-width: 100vw;
    column-count: 1;
    column-gap: 1;
    column-count: 2;
    column-gap: 3;
  }
}

@media screen and (max-width: 400px) {
  .gallery-container {
    max-width: 100vw;
    column-count: 1;
    column-gap: 0;
    column-count: 1;
    column-gap: 0;
  }

  figure {
    margin: 0;
    display: inline-block;
    margin-bottom: 0px;
    width: 100%;
  }
}




.masonry {
  /* Masonry container */
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
  -webkit-column-gap: 1em;
  -moz-column-gap: 1em;
  column-gap: 1em;
  margin: 1.5em;
  padding: 0;
  -moz-column-gap: 1.5em;
  -webkit-column-gap: 1.5em;
  column-gap: 1.5em;
  font-size: .85em;
}

.item {
  display: inline-block;


  margin: 0 0 1.5em;
  width: 100%;
  -webkit-transition: 1s ease all;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-radius: 5px;
}

.item img {
  max-width: 100%;
}

@media only screen and (max-width: 320px) {
  .masonry {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}

@media only screen and (min-width: 321px) and (max-width: 768px) {
  .masonry {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
  .masonry {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}

@media only screen and (min-width: 1201px) {
  .masonry {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
}
</style>