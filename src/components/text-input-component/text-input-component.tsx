import { Box } from '@mui/material';
import { InputTitle, Input, Error } from './empotion-components';
import { TTextInputComponent } from './types';

export function TextInputComponent({
  setValue,
  title,
  value,
  placeholder,
  errorMessage,
  type,
}: TTextInputComponent) {
  return (
    <Box>
      <InputTitle variant="caption">{title}</InputTitle>
      <Input
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        type={type}
      />
      {errorMessage && <Error>{errorMessage}</Error>}
    </Box>
  );
}
