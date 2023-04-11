import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import './App.css';
import {Container, Row, Col, Button,Form, Stack} from 'react-bootstrap';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import { Textarea } from './components/TextArea';




function App()  {
  const {loading, fromLanguage, fromText, result, setFromLanguage,toLanguage, setFromText, setResult,interchangeLanguages, setToLanguage} = useStore();


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
            
            <Textarea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>

      </Row>
    </Container>
  )
}

export default App
