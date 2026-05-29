---
layout: home

head:
  - - meta
    - name: description
      content: 'Support FlyEnv through donations, Pull Requests, or original community articles with paginated support records.'
  - - meta
    - property: og:title
      content: 'Sponsor FlyEnv'
  - - meta
    - property: og:description
      content: 'Support FlyEnv development through donations, code contributions, or original community articles.'
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"DonateAction","name":"Sponsor FlyEnv","description":"Support FlyEnv open-source development through donations, Pull Requests, or original community articles.","recipient":{"@type":"Organization","name":"FlyEnv","url":"https://www.flyenv.com"},"instrument":[{"@type":"PaymentMethod","name":"Paddle"},{"@type":"PaymentMethod","name":"Ko-fi"},{"@type":"PaymentMethod","name":"WeChat Pay"},{"@type":"PaymentMethod","name":"Alipay"}]}
---

<script setup>
import AppSponsorPageV2 from './components/AppSponsorPage/v2.vue'
</script>

<AppSponsorPageV2 />
