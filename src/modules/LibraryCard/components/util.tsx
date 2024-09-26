import bwipjs, { code39 } from '@bwip-js/react-native';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';

export const BarCode = (options: bwipjs.RenderOptions) => {
    const [barCode, setBarCode] = useState<React.JSX.Element>();


    useEffect(() => {

        const generateBarCode = async () => {
            let img = null;

            try {
                img = await code39(options);
            } catch (e) {
                // `e` may be a string or Error object
            }

            if (img) {
                setBarCode(
                    <Image
                        style={{ height:img.height, width:img.width }}
                        source={{ uri:img.uri }}
                    />
                )
            }
        }

        if (options.bcid) generateBarCode()
    },[options.bcid])
    

    if(barCode) {
        return barCode
    } else return <></>
};