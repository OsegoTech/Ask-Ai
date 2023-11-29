import { ref } from 'vue'
import { defineStore } from 'pinia'
const environment = process.env.NODE_ENV
console.log(environment)
const url = environment === 'production' ? 'https://ask-3-ai.azurewebsites.net' : 'http://localhost:3000'
console.log(url);

export const useTokenizeStore = defineStore('tokenize', () => {
  const tokenLength = ref(0)

  function checkTokens(val) {
    tokenLength.value = 0
    fetch(`${url}/tokenize`, {
      method: 'POST',
      body: JSON.stringify({
        stringToTokenize: val
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        tokenLength.value = data.tokens
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return { checkTokens, tokenLength }
})
