---
layout: home

head:
  - - meta
    - name: description
      content: 'Support FlyEnv development through Paddle, Ko-fi, WeChat, or Alipay. Your sponsorship helps us build the best local development environment tool for macOS, Windows, and Linux.'
  - - meta
    - property: og:title
      content: 'Sponsor FlyEnv'
  - - meta
    - property: og:description
      content: 'Support FlyEnv development. Your sponsorship helps us keep building, improving, and supporting the community.'
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"DonateAction","name":"Sponsor FlyEnv","description":"Support FlyEnv open-source development through Paddle, Ko-fi, WeChat, or Alipay donations.","recipient":{"@type":"Organization","name":"FlyEnv","url":"https://www.flyenv.com"},"instrument":[{"@type":"PaymentMethod","name":"Paddle"},{"@type":"PaymentMethod","name":"Ko-fi"},{"@type":"PaymentMethod","name":"WeChat Pay"},{"@type":"PaymentMethod","name":"Alipay"}]}
---

<script setup>
import AppSponsorPage from './components/AppSponsorPage/en.vue'
</script>

<AppSponsorPage />
