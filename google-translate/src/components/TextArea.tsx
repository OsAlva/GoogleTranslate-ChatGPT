import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props{ 
    type: SectionType,
    loading?: boolean,
    value: string, 
    onChange: (value: string) => void 
}

const commonStyles = {border: 0, height: '200px', resize: 'none'}

const getPlaceholder = ({type, loading}: {type: SectionType, loading?: boolean}) => {
    if(type === SectionType.From) return 'Introduce el texto'
    if(loading) return 'Cargando...'
    return 'Traducción'
}


export const Textarea = ({type, loading, value, onChange}: Props) => {
    const styles = type === SectionType.From ? commonStyles :  {...commonStyles, backgroundColor: '#f5f5f5'}

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return (
        <Form.Control 
              as="textarea"
              autoFocus={type === SectionType.From}  
              placeholder={getPlaceholder({type, loading})}
              style={styles}
              value={value}
              onChange={handleChange}
              disabled={type === SectionType.To}
            />
    )
}