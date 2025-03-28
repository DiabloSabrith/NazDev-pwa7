/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public', //  Где будут сгенерированы файлы PWA (манифест, SW)
  register: true,   // Автоматическая регистрация service worker
  skipWaiting: true,  //  Service worker активируется сразу
  disable: process.env.NODE_ENV === 'development', //  Отключаем в dev-режиме
  //  Необязательные опции (важны для production)
  // runtimeCaching: [], //  Управление кешированием ресурсов
  // buildExcludes: [], // Исключение файлов из сборки PWA
})

const nextConfig = {
  reactStrictMode: true,
  // Другие настройки Next.js
}

module.exports = withPWA(nextConfig)
