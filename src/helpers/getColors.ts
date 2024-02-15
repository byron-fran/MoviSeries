import { AxiosError } from 'axios';
import ImageColors from 'react-native-image-colors';


export const getColors = async (uri: string) => {

    let primary: string = '';
    let secundary: string = '';
    try {
        const color = await ImageColors.getColors(uri, {});

        if (color.platform === 'android') {
            primary = color.dominant!
            secundary = color.average!
        }
        else {
            // Solo funciona para dispositivos IOS
        }
    
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            console.log(error.response)
        }
    }
    return {
        primary,
        secundary
    }
}