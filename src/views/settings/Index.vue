<template>
  <div>
    <button
     

      @click="changeLanguage('es')">
        Español
    </button>
    <button
    
      @click="changeLanguage('en')">
       Ingles
    </button>
  </div>
</template>

<script>
import { i18n } from '@/plugins/i18n'
export default {
  name: 'LanguageComponent',
  data: () => ({
    
  }),
  methods: {
    changeLanguage(locale) {

       
      i18n.locale = locale
    }
  }
}
</script>