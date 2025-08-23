import * as Styled from './ViewToggle.styled'

interface ViewToggleProps {
  viewMode: 'list' | 'blog'
  onViewChange: (mode: 'list' | 'blog') => void
}

export default function ViewToggle({
  viewMode,
  onViewChange,
}: ViewToggleProps) {
  return (
    <Styled.ToggleContainer>
      <Styled.ToggleLabel id="view-toggle-label">View:</Styled.ToggleLabel>
      <Styled.ToggleButtonGroup role="radiogroup" aria-labelledby="view-toggle-label">
        <Styled.ToggleButton
          $active={viewMode === 'list'}
          onClick={() => onViewChange('list')}
          role="radio"
          aria-checked={viewMode === 'list'}
          aria-label='List view'
        >
          <Styled.ListIcon>☰</Styled.ListIcon>
          List
        </Styled.ToggleButton>
        <Styled.ToggleButton
          $active={viewMode === 'blog'}
          onClick={() => onViewChange('blog')}
          role="radio"
          aria-checked={viewMode === 'blog'}
          aria-label='Card view'
        >
          <Styled.BlogIcon>⚏</Styled.BlogIcon>
          Cards
        </Styled.ToggleButton>
      </Styled.ToggleButtonGroup>
    </Styled.ToggleContainer>
  )
}
