
<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  nom: '',
  email: '',
  missatge: ''
})

const enviat = ref(false)

function enviarFormulari() {
  enviat.value = true
}
</script>

<template>
  <main class="contact-page">
    <section class="contact-intro">
      <p class="eyebrow section-eyebrow">LES BONES IDEES COMENCEN PARLANT</p>
      <h1>Posem-nos<br />en <em>contacte.</em></h1>
      <p>
        Tens una proposta cultural, una pregunta o una idea que
        t'agradaria compartir? Ens encantarà conèixer-la.
      </p>
    </section>

    <section class="contact-layout section-wrap">
      <div class="contact-details">
        <p class="eyebrow section-eyebrow">PARLEM DE CULTURA</p>
        <h2>Les idees creixen<br />quan es comparteixen.</h2>
        <p>
          Escriu-nos i explica'ns què tens al cap.
          Cada gran experiència comença amb una conversa.
        </p>

        <div class="contact-detail-line">
          <span>01</span>
          <div>
            <strong>Propostes culturals</strong>
            <p>Projectes, col·laboracions i noves idees.</p>
          </div>
        </div>

        <div class="contact-detail-line">
          <span>02</span>
          <div>
            <strong>Preguntes i informació</strong>
            <p>Som aquí per escoltar-te.</p>
          </div>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="enviarFormulari">
        <label for="nom">El teu nom</label>
        <input
          id="nom"
          v-model.trim="form.nom"
          type="text"
          autocomplete="name"
          placeholder="Com et dius?"
          required
        />

        <label for="email">Correu electrònic</label>
        <input
          id="email"
          v-model.trim="form.email"
          type="email"
          autocomplete="email"
          placeholder="tu@exemple.cat"
          required
        />

        <label for="missatge">Què ens vols explicar?</label>
        <textarea
          id="missatge"
          v-model.trim="form.missatge"
          rows="5"
          placeholder="Explica'ns la teva idea..."
          required
        ></textarea>

        <button type="submit" class="button button-dark">
          ENVIAR MISSATGE <span>↗</span>
        </button>

        <p v-if="enviat" class="form-notice" role="status">
          El formulari s'ha validat, però encara no envia missatges.
          Cal connectar un servei d'enviament per rebre'l.
        </p>
      </form>
    </section>
  </main>
</template>
