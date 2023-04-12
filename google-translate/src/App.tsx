import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import './App.css';
import {Container, Row, Col, Button,Form, Stack} from 'react-bootstrap';
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from './constants';
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import { Textarea } from './components/TextArea';
import { useEffect } from 'react';
import { translate } from './services/translate';
import { useDebounce } from './hooks/useDebounce';




function App()  {
  const {loading, fromLanguage, fromText, result, setFromLanguage,toLanguage, setFromText, setResult, interchangeLanguages, setToLanguage} = useStore();
  const debouncedFromText = useDebounce(fromText, 350)
  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() =>{} )
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage]
    speechSynthesis.speak(utterance)
  }

  useEffect(() =>{
    if(debouncedFromText === '') return

    translate({fromLanguage, toLanguage, text: fromText})
    .then( result => {
      if (result == null ) return

      setResult(result)
     })
     .catch(() =>{ setResult('Error al traducir')})
  },[debouncedFromText, fromLanguage, toLanguage])

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <h2>From</h2>
            <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
            />
            <Textarea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
              />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant="link"disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon/>
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <h2>To</h2>
            <LanguageSelector 
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage} 
            />
            <div style={{position: 'relative'}}>
            <Textarea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
            <div
            style={{position: 'absolute', left: 0, bottom: 0, display: 'flex'}} 
            >
              <Button 
                variant="link" 
                onClick={handleClipboard}>
                <ClipboardIcon/>
              </Button>
              <Button 
                variant="link" 
                onClick={handleSpeak}>
                <SpeakerIcon/>
            </Button>

            </div>
            
            </div>
          </Stack>
        </Col>

      </Row>
    </Container>
  )
}

export default App
