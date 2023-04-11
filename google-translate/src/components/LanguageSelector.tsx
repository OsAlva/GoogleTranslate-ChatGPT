import Form from 'react-bootstrap/Form';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants';
import { type FunctionComponent } from 'react';
import { type FromLanguage, type Language, SectionType } from '../types.d';

type Props = 
    | { type: SectionType.From, value: FromLanguage, onChange: (Language: FromLanguage) => void }
    | { type: SectionType.To, value: Language, onChange: (Language: Language) => void }


export const LanguageSelector: FunctionComponent<Props> = ({onChange, type, value}) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { //en typescruot se tiene qye decir de que tipo es el evento que se esta recibiendo
        onChange(event.target.value as Language);
    }

    return(
        <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Auto</option>}

            {Object.entries(SUPPORTED_LANGUAGES).map(([key,literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )

}
// function LanguageSelector() {
//   return (
//     <Form.Select aria-label="Default select example">
//       <option>Open this select menu</option>
//       <option value="1">One</option>
//       <option value="2">Two</option>
//       <option value="3">Three</option>
//     </Form.Select>
//   );
// }

// export default LanguageSelector;