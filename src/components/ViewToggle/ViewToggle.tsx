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
      <Styled.ToggleLabel>View:</Styled.ToggleLabel>
      <Styled.ToggleButtonGroup>
        <Styled.ToggleButton
          $active={viewMode === 'list'}
          onClick={() => onViewChange('list')}
          aria-label='List view'
        >
          <Styled.ListIcon>☰</Styled.ListIcon>
          List
        </Styled.ToggleButton>
        <Styled.ToggleButton
          $active={viewMode === 'blog'}
          onClick={() => onViewChange('blog')}
          aria-label='Card view'
        >
          <Styled.BlogIcon>⚏</Styled.BlogIcon>
          Cards
        </Styled.ToggleButton>
      </Styled.ToggleButtonGroup>
    </Styled.ToggleContainer>
  )
}
