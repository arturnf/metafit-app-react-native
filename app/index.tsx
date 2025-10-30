import { colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';


export default function Index() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={ colors.background } />
            <Image source={require('../assets/images/logo.png')} style={{ width: 150, height: 150 }} />
            <Text style={styles.textLogo}>MetaFit</Text>
            <Text style={styles.text}>Seu plano alimentar personalizado com inteligência artificial</Text>
            <Link href="/step" asChild>
                <Pressable style={styles.button}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: colors.white }}>
                        Gerar Minha Dieta
                    </Text>
                </Pressable>
            </Link>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background
    },
    textLogo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.colorDefault,
    },
    text: {
        marginHorizontal: 16,
        width: 250,
        fontSize: 15,
        textAlign: 'center',
        color: colors.secondaryText,
    },
    button: {
        marginTop: 20,
        backgroundColor: colors.colorDefault,
        width: 300,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});