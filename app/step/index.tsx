import { colors } from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z } from 'zod';
import { Input } from '../../components/input';

import { useContext } from 'react';
import { Context } from '../../context/context';


const schema = z.object({
    name: z.string().min(1, { message: "O nome é obrigatório" }),
    weight: z.string().min(1, { message: "O peso é obrigatório" }),
    age: z.string().min(1, { message: "A idade é obrigatória" }),
    height: z.string().min(1, { message: "A altura é obrigatória" }),
})

type FormData = z.infer<typeof schema>



export default function Index() {

    const { setUser } = useContext(Context);
    function submitCreate(data: FormData) {
        setUser(prev => ({
            ...prev,
            name: data.name,
            weight: data.weight,
            age: data.age,
            height: data.height,
        }));

        router.push("/create");
    }


    const {
        control,                       
        handleSubmit,                 
        formState: { errors, isValid } 
    } = useForm<FormData>({
        resolver: zodResolver(schema), 
        mode: 'onChange',           
    });

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <View style={styles.form}>

                <TouchableOpacity activeOpacity={0.6} onPress={() => router.back()} style={{ padding: 10, }}>
                    <FontAwesome name="arrow-left" size={24} color={colors.secondaryText} />
                </TouchableOpacity>

                <ScrollView>
                    <View style={styles.containerText}>
                        <Text style={styles.textInfo}>Informações Básicas</Text>
                        <Text style={styles.textSec}>Vamos começar conhecendo você melhor</Text>
                    </View>
                    <View style={styles.inputName}>
                        <Text style={styles.label}>Nome</Text>
                        <Input name="name" control={control} placeholder='Digite seu nome...' error={errors.name?.message} keyboardType='default' />
                    </View>
                    <View style={styles.boxContainer}>
                        <View style={styles.box}>
                            <Text style={styles.label}>Peso (kg)</Text>
                            <Input name="weight" control={control} placeholder='70' error={errors.name?.message} keyboardType='numeric' />
                        </View>

                        <View style={styles.box}>
                            <Text style={styles.label}>Altura (cm)</Text>
                            <Input name="height" control={control} placeholder='170' error={errors.name?.message} keyboardType='numeric' />
                        </View>
                    </View>

                    <View style={styles.inputAge}>
                        <Text style={styles.label}>Idade</Text>
                        <Input name="age" control={control} placeholder='25' error={errors.name?.message} keyboardType='numeric' />
                    </View>



                    <TouchableOpacity onPress={handleSubmit(submitCreate)} activeOpacity={0.6} style={styles.button}>
                        <Text style={styles.textButton}>Continuar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 30,
        backgroundColor: colors.background,
    },
    form: {
        flex: 1,
    },
    containerText: {
        paddingTop: 70,
    },
    textInfo: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    textSec: {
        color: colors.secondaryText,
    },
    inputName: {
        paddingTop: 40,
    },
    label: {
        paddingLeft: 4,
        paddingBottom: 10,
        fontSize: 16,
    },
    boxContainer: {
        height: 90,
        flexDirection: 'row',
        gap: 16,
        marginTop: 20,
    },
    box: {
        flex: 1,
    },
    inputAge: {
        marginTop: 16,
    },
    button: {
        backgroundColor: colors.colorDefault,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 50,
        borderRadius: 8,
    },
    textButton: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 17,
    }
});