'use client';
import { useEffect } from "react";

export default function ClientCachStrategi(){
 useEffect(() => {
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker
       .register('/sw.js')
       .then((registration) => {
         console.log('Service Worker зарегистрирован', registration);
       })
       .catch((error) => {
         console.log('Ошибка регистрации Service Worker:', error);
       });
   }
 }, []);
 return null;
}