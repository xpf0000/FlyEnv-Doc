---
layout: page
titleTemplate: false
title: 'Pago completado | FlyEnv'
description: 'Tras comprar tu licencia de FlyEnv, envía los datos de la compra desde la aplicación de escritorio para que podamos emitirla.'
head:
  - - meta
    - name: robots
      content: noindex, follow
---

<script setup>
import PaymentSuccessPage from '../components/AppLicensePage/PaymentSuccessPage.vue'
</script>

<PaymentSuccessPage locale="es" />
