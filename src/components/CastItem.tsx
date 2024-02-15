import { View, Text, StyleSheet, Image } from 'react-native'
import { CastElement } from '../interfaces/CastInterface';
import { FC } from 'react';


interface CastProps {
    actor: CastElement
}
const CastItem: FC<CastProps> = ({ actor }) => {
    const uri = `https://image.tmdb.org/t/p/w500/${actor?.profile_path}`;
    return (
        <View style={styles.contanier}>
            {actor.profile_path && (
                <Image style={styles.imageActor} source={{
                    uri
                }} />
            )}

            <View style={styles.textContainer}>
                <Text> {actor.name}</Text>
                <Text>{actor.character}</Text>
            </View>

        </View>

    )
}


const styles = StyleSheet.create({
    contanier: {
        flexDirection : 'row',
        marginRight : 10,
        padding : 10,        
        borderRadius : 10,
        backgroundColor : '#D6DBDF',
        marginTop : 10,
        marginBottom : 10
    },    
    imageActor: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    textContainer : {
        marginLeft : 5
    }

})
export default CastItem