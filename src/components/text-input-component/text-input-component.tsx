import { InputTitle, Input, Error, Container } from './empotion-components';
import { TTextInputComponent } from './types';

export function TextInputComponent({
  setValue,
  title,
  value,
  placeholder,
  errorMessage,
  type,
  flex
}: TTextInputComponent) {
  return (
    <Container flx={flex}>
      <InputTitle variant="caption">{title}</InputTitle>
      <Input
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        type={type}
        inputProps={{
          autoComplete: 'off',
        }}
      />
      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  );
}
