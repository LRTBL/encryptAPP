import {Platform, PermissionsAndroid, Alert, Linking} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export const downloadFile = ({id, name}) => {
  return new Promise((res, rej) => {
    if (Platform.OS === 'ios') {
      handleDownload(id, name, res, rej);
    } else {
      try {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Usted no cuenta con permisos suficientes',
            message:
              'Tiene que aceptar los permisos de acceso a archivos de su dispositivo para poder descargar archivos',
          },
        ).then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Storage Permission Granted.');
            handleDownload(id, name, res, rej);
          } else {
            rej('Ocurrio un error al descargar el archivo');
          }
        });
      } catch (err) {
        rej('Ocurrio un error al descargar el archivo');
      }
    }
  });
};

const get_url_extension = url => {
  return url.split(/[#?]/)[0].split('.').pop().trim();
};

const handleDownload = async (id, name, resolve, reject) => {
  const {dirs} = RNFetchBlob.fs;
  const dirToSave = Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
  const date = new Date();
  const extension = get_url_extension(name);
  const fileTitle = `aes_${Math.floor(
    date.getTime() + date.getSeconds() / 2,
  )}.${extension}`;
  const configfb = {
    fileCache: true,
    useDownloadManager: true,
    notification: true,
    title: fileTitle,
    path: `${dirToSave}/${fileTitle}`,
  };
  const configOptions = Platform.select({
    ios: {
      fileCache: configfb.fileCache,
      path: configfb.path,
      appendExt: extension,
      title: configfb.title,
    },
    android: {
      addAndroidDownloads: {
        useDownloadManager: configfb.useDownloadManager,
        notification: configfb.notification,
        path: configfb.path,
        description: 'Archivo Footloose',
        title: configfb.title,
      },
    },
  });

  RNFetchBlob.config(configOptions)
    .fetch(
      'GET',
      encodeURI(`https://admin.lerietmall.net/v1/api/cypher/file/${id}`),
    )
    .then(res => {
      const pathDownload = res.path();
      if (Platform.OS === 'ios') {
        RNFetchBlob.fs.writeFile(configfb.path, res.data, 'base64');
      }
      resolve({fileTitle, pathDownload});
    })
    .catch(() => {
      reject('Ocurrio un error al descargar el archivo');
    });
};
