<script setup>
import carni1 from '@/assets/fotos/gallery/carni1.jpg';
import carni2 from '@/assets/fotos/gallery/carni9.jpg';
</script>

<template>
  <main class="container bg-primary">
    <div>
      <div class="columns is-gapless section-shadow">
        <p class="column is-four-fifths bg-light">
          ¡Bienvenidos a nuestro mini emprendimiento de plantas carnívoras! Aquí encontrarás una amplia variedad de
          plantas que se alimentan de insectos y otros pequeños animales. Las plantas carnívoras no solo son fascinantes
          sino que también son una gran adición a cualquier hogar. ¡Te invitamos a explorar nuestra
          selección y descubrir el mundo de estas increíbles plantas!</p>
        <img :src="carni1" alt="" class="column is-one-fifth ">
      </div>
      <div class="columns bg-dark is-gapless">
        <img :src="carni2" alt="" class="column is-one-fifth">
        <p class="column is-four-fifths">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam atque vero,
          facilis rem
          ipsam debitis amet
          tempora pariatur nam, aut, reprehenderit repellendus voluptas impedit quia sunt. Incidunt, et veniam consectetur
          quibusdam odit quod minima officia delectus, laudantium autem molestiae voluptatum, deserunt eos tempora
          consequatur ad adipisci in temporibus aliquid optio sit? Veritatis iusto repellat, dolorem fuga eaque non.
          Molestias, totam.</p>
      </div>
      <div class=" bg-light">

        <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam atque vero,
          facilis rem
          ipsam debitis amet
          tempora pariatur nam, aut, reprehenderit repellendus voluptas impedit quia sunt. Incidunt, et veniam consectetur
          quibusdam odit quod minima officia delectus, laudantium autem molestiae voluptatum, deserunt eos tempora
          consequatur ad adipisci in temporibus aliquid optio sit? Veritatis iusto repellat, dolorem fuga eaque non.
          Molestias, totam.</p>

      </div>
    </div>
  </main>
</template>



<style scoped>
.bg-dark {
  color: rgb(238, 238, 238);
  background: rgba(0, 0, 0, 0.57);
}

.bg-light {
  color: rgb(27, 27, 27);
  background: rgba(255, 255, 255, 0.57);
}
</style>