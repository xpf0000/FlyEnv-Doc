---
layout: home

head:
  - - meta
    - name: description
      content: '通过 Paddle、Ko-fi、微信或支付宝支持 FlyEnv 开发。您的赞助帮助我们为 macOS、Windows 和 Linux 构建最好的本地开发环境工具。'
  - - meta
    - property: og:title
      content: '赞助 FlyEnv'
  - - meta
    - property: og:description
      content: '支持 FlyEnv 开发。您的赞助帮助我们持续构建、改进和支持社区。'
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"DonateAction","name":"赞助 FlyEnv","description":"通过 Paddle、Ko-fi、微信支付或支付宝支持 FlyEnv 开源开发。","recipient":{"@type":"Organization","name":"FlyEnv","url":"https://www.flyenv.com"},"instrument":[{"@type":"PaymentMethod","name":"Paddle"},{"@type":"PaymentMethod","name":"Ko-fi"},{"@type":"PaymentMethod","name":"微信支付"},{"@type":"PaymentMethod","name":"支付宝"}]}
---

<script setup>
import AppSponsorPage from '../components/AppSponsorPage/zh.vue'
</script>

<AppSponsorPage />
