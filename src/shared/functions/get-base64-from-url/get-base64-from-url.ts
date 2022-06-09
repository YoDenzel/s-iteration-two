import { TGetBase64FromUrl } from './types';

export const getBase64FromUrl = async ({ setImg, url }: TGetBase64FromUrl) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      setImg(base64data);
      resolve(base64data);
    };
  });
};
