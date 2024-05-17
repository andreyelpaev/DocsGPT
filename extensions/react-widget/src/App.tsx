import React from "react"
import {DocsGPTWidget} from "./components/DocsGPTWidget"
import {MathJaxContext  } from 'better-react-mathjax'

const App = () => {
  return (
    <div>
      <MathJaxContext>
      <DocsGPTWidget         
        apiHost="https://gptcloud.arc53.com"
        selectDocs="local/opz/"
        apiKey="7602ad28-6d8b-4756-bfb0-dce8faa79d3a"
        avatar="https://tetacom.pro/dist/uploads/project-teasers/rock-stim-icon.svg"
        title="AI Помощник"
        description="ТетаНейрон"
        heroTitle="Добро пожаловать в Rockstim!"
        heroDescription="Задайте мне вопрос я постараюсь ответить."/>
        </MathJaxContext>
    </div>
  )
}

export default App