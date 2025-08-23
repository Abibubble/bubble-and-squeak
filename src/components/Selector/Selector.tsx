import * as Styled from './Selector.styled'

interface Option {
  value: string | number
  label: string | number
}

interface SelectorProps {
  label: string
  value: string
  options: Option[]
  onChange: (value: string) => void
  placeholder?: string
}

export default function Selector({
  label,
  value,
  options,
  onChange,
  placeholder = 'Select...',
}: SelectorProps) {
  const selectId = `selector-${label.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <Styled.SelectorContainer>
      <label htmlFor={selectId}>
        <Styled.SelectorLabel>{label}:</Styled.SelectorLabel>
      </label>
      <Styled.SelectorWrapper>
        <Styled.Select
          id={selectId}
          value={value}
          onChange={e => onChange(e.target.value)}
          aria-label={`${label} selection`}
        >
          <option value=''>{placeholder}</option>
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Styled.Select>
        <Styled.DropdownIcon>▼</Styled.DropdownIcon>
      </Styled.SelectorWrapper>
    </Styled.SelectorContainer>
  )
}
