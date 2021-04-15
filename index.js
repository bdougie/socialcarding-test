import getShareImage from '@jlengstorf/get-share-image';
import clipboardy from 'clipboardy';

const socialImage = getShareImage({
  title: 'Something with Frens and Bdougie',
  tagline: 'subtitle',
  cloudName: 'bdougie',
  imagePublicID: 'osf_dh7al1',
  titleFont: 'futura',
  taglineFont: 'futura',
  textColor: '232129',
  titleBottomOffset: '304',
  titleLeftOffset: '210',
});

// Copy
clipboardy.writeSync(socialImage);
console.log(socialImage)
