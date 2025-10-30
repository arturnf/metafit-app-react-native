import { colors } from '@/constants/Colors';
import { Context } from '@/context/context';
import { FontAwesome } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { router } from 'expo-router';
import { useContext } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

export default function result() {
    const { user } = useContext(Context);

    const { data, isFetching, isError } = useQuery({
        queryKey: ["nutrition"],
        queryFn: async () => {
            try {
                if (!user) {
                    throw new Error("Filed load nutrition")
                }

                const response = await api.post('/api/send/message', {
                    name: user.name,
                    weight: user.weight,
                    age: user.age,
                    height: user.height,
                    sexo: user.sexo,
                    level: user.level,
                    objetivo: user.objetivo,
                });

                return response.data;
            } catch {

            }
        }
    })
    const cafeDaManha = data?.['Café da Manhã'] ?? [];
    const lancheDaManha = data?.['Lanche da Manhã'] ?? [];
    const almoco = data?.['Almoço'] ?? [];
    const lancheDaTarde = data?.['Lanche da Tarde'] ?? [];
    const jantar = data?.['Jantar'] ?? [];
    const ceia = data?.['Ceia'] ?? [];


    function onSubmit() {
        router.push('/step');
    }

    if (isFetching) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.containerTextMain}>
                        <Text style={styles.textMain}>Sua Dieta Personalizada</Text>
                        <Text style={{ color: colors.secondaryText }}>Plano criado especialmente para você</Text>
                    </View>
                </View>
                <ScrollView style={styles.main}>
                    <View style={{ width: '100%', height: 200, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{color:colors.colorDefault, fontWeight: 'bold'}}>Estamos Gerando Sua Dieta...</Text>
                    </View>
                    
                </ScrollView>

            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerTextMain}>
                    <Text style={styles.textMain}>Sua Dieta Personalizada</Text>
                    <Text style={{ color: colors.secondaryText }}>Plano criado especialmente para você</Text>
                </View>
            </View>
            <ScrollView style={styles.main}>
                <View style={styles.containerDiet}>
                    <View style={styles.headerDiet}>
                        <View style={styles.icon}>
                            <FontAwesome name="coffee" size={24} color={colors.colorDefault} />
                        </View>
                        <View>
                            <Text style={styles.textTitle}>Café da Manhã</Text>
                            <Text style={styles.textHorario}>7h - 8h</Text>
                        </View>
                    </View>

                    <View style={styles.content}>
                        {cafeDaManha.map((item: string, index: number) => (
                            <View key={index} style={styles.boxTextDiet}>
                                <View style={styles.point}></View>
                                <Text>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.containerDiet}>
                    <View style={styles.headerDiet}>
                        <View style={styles.icon}>
                            <FontAwesome5 name="apple-alt" size={24} color={colors.colorDefault} />
                        </View>
                        <View>
                            <Text style={styles.textTitle}>Lanche da Manhã</Text>
                            <Text style={styles.textHorario}>10h</Text>
                        </View>
                    </View>

                    <View style={styles.content}>
                        {lancheDaManha.map((item: string, index: number) => (
                            <View key={index} style={styles.boxTextDiet}>
                                <View style={styles.point}></View>
                                <Text>{item}</Text>
                            </View>
                        ))}

                    </View>
                </View>

                <View style={styles.containerDiet}>
                    <View style={styles.headerDiet}>
                        <View style={styles.icon}>
                            <FontAwesome name="cutlery" size={24} color={colors.colorDefault} />
                        </View>
                        <View>
                            <Text style={styles.textTitle}>Almoço</Text>
                            <Text style={styles.textHorario}>12h - 13h</Text>
                        </View>
                    </View>

                    <View style={styles.content}>
                        {almoco.map((item: string, index: number) => (
                            <View key={index} style={styles.boxTextDiet}>
                                <View style={styles.point}></View>
                                <Text>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>



                <View style={styles.containerDiet}>
                    <View style={styles.headerDiet}>
                        <View style={styles.icon}>
                            <FontAwesome5 name="carrot" size={24} color={colors.colorDefault} />
                        </View>
                        <View> 
                            <Text style={styles.textTitle}>Lanche da Tarde</Text>
                            <Text style={styles.textHorario}>16h</Text>
                        </View>
                    </View>

                    <View style={styles.content}>
                        {lancheDaTarde.map((item: string, index: number) => (
                            <View key={index} style={styles.boxTextDiet}>
                                <View style={styles.point}></View>
                                <Text>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>



                <View style={styles.containerDiet}>
                    <View style={styles.headerDiet}>
                        <View style={styles.icon}>
                            <FontAwesome name="cutlery" size={24} color={colors.colorDefault} />
                        </View>
                        <View>
                            <Text style={styles.textTitle}>Jantar</Text>
                            <Text style={styles.textHorario}>19h - 20h</Text>
                        </View>
                    </View>

                    <View style={styles.content}>
                        {jantar.map((item: string, index: number) => (
                            <View key={index} style={styles.boxTextDiet}>
                                <View style={styles.point}></View>
                                <Text>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>



                <View style={styles.containerDiet}>
                    <View style={styles.headerDiet}>
                        <View style={styles.icon}>
                            <FontAwesome5 name="moon" size={24} color={colors.colorDefault} />
                        </View>
                        <View>
                            <Text style={styles.textTitle}>Ceia</Text>
                            <Text style={styles.textHorario}>Antes de dormir</Text>
                        </View>
                    </View>

                    <View style={styles.content}>
                        {ceia.map((item: string, index: number) => (
                            <View key={index} style={styles.boxTextDiet}>
                                <View style={styles.point}></View>
                                <Text>{item}</Text>
                            </View>
                        ))}

                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={{ color: colors.white, fontWeight: 'bold' }}>Gerar Nova Dieta</Text>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        height: 100,
    },
    containerTextMain: {
        alignItems: 'center'
    },
    textMain: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.colorDefault
    },
    main: {
        flex: 1,
        backgroundColor: '#f1fcf5',
        paddingHorizontal: 30,
    },
    containerDiet: {
        backgroundColor: colors.background,
        marginTop: 20,
        borderRadius: 10,
        padding: 20,
    },
    headerDiet: {
        flexDirection: 'row',
        gap: 10
    },
    icon: {
        padding: 15,
        backgroundColor: '#e6fcd7ff',
        borderRadius: 10,
    },
    content: {
        gap: 10,
        marginTop: 10,
    },
    point: {
        width: 6,
        height: 6,
        borderRadius: 20,
        backgroundColor: colors.colorDefault
    },
    boxTextDiet: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    button: {
        width: '100%',
        backgroundColor: colors.colorDefault,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 100
    },
    textTitle:{
        fontWeight:'bold',
        fontSize: 16
    },
    textHorario:{
        color: colors.pText,
        fontSize: 13,
    }
});