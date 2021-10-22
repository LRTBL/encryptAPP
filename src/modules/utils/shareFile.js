import {Platform} from 'react-native';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';

export const shareDocument = async file => {
  const date = new Date();
  const {dirs, unlink} = RNFetchBlob.fs;
  const dirToSave = Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
  const fileTitle = `tasa_${Math.floor(
    date.getTime() + date.getSeconds() / 2,
  )}.pdf`;

  const b64 = file.split('data:application/pdf;base64,')[1];
  const path = `${dirToSave}/${fileTitle}`;

  await RNFetchBlob.fs.writeFile(path, b64, 'base64');

  const androidPath = `file://${path}`;
  const shareOptions = {
    type: 'application/pdf',
    url: Platform.OS === 'android' ? androidPath : path,
  };

  try {
    await Share.open(shareOptions);
    unlink(Platform.OS === 'android' ? androidPath : path);
  } catch (err) {
    unlink(Platform.OS === 'android' ? androidPath : path);
  }
};
