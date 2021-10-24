import {Platform} from 'react-native';
import Share from 'react-native-share';

export const handleShare = async ({mimeType, pathDownload}) => {
  const shareOptions = {
    url: Platform.OS === 'android' ? `file://${pathDownload}` : pathDownload,
    type: mimeType,
  };
  try {
    await Share.open(shareOptions);
  } catch (err) {
    console.log('Un error');
  }
};
