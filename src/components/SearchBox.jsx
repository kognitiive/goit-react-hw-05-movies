import { SearchFormInput, Icon, Wrapper } from "./SearchBox.styled";
export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <SearchFormInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Enter your query young padavan'
      />
    </Wrapper>
  );
};