import { colors } from '@/constants/Colors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type RadioProps = {
    options: string[];
    onChangeSelect: (index: number) => any;
    selected: number;
};

export function Radio({ options, onChangeSelect, selected }: RadioProps) {
    return (
        <View>
            {
                options.map((opt, index) => (
                    <TouchableOpacity onPress={() => onChangeSelect(index)} key={opt} style={[styles.radio, selected === index && styles.borderSelected]}>
                        <View style={styles.circle}>
                            { selected === index && <View style={styles.circleInner}/>}
                        </View>
                        <Text>{ opt }</Text>    
                    </TouchableOpacity>
                ))
            }

        </View>
    );
}

const styles = StyleSheet.create({
    radio:{
        flexDirection:'row',
        width:'100%',
        height:55,
        alignItems: 'center',
        gap:10,
        borderWidth:1,
        borderColor:'#ecebebff',
        paddingHorizontal: 20,
        borderRadius:10,
        marginBottom:10,
    },
    circle:{
        width:20,
        height:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:colors.colorDefault,
        justifyContent:'center',
        alignItems:'center'
    },
    circleInner:{
        width:13,
        height:13,
        backgroundColor:colors.colorDefault,
        borderRadius: 20,
    },
    borderSelected:{
        borderRadius:10,
        borderWidth:1,
        borderColor:colors.colorDefault,
    }
})