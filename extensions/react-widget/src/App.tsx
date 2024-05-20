import React from "react"
import {DocsGPTWidget} from "./components/DocsGPTWidget"
import {MathJaxContext} from 'better-react-mathjax'

const App = () => {
  return (
    <div>
      <MathJaxContext>
      <DocsGPTWidget         
        apiHost="https://gptcloud.arc53.com"
        selectDocs="local/opz/"
        apiKey="0461e18e-3eae-4b97-8825-aaa0eab252e2"
        avatar="https://tetacom.pro/dist/uploads/project-teasers/rock-stim-icon.svg"
        title="AI Помощник"
        description="Андрей"
        heroTitle="Добро пожаловать в Rockstim!"
        heroDescription="Задайте мне вопрос я постараюсь ответить."/>
        </MathJaxContext>
    </div>
  )
}

export default App