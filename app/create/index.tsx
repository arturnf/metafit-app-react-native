import CustomSelect from '@/components/customSelect';
import { colors } from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import z from 'zod';
import { Radio } from '../../components/radio/index';
import { Context } from '../../context/context';



const schema = z.object({
    sexo: z.string().min(1, { message: "O sexo é obrigatório" }),
    level: z.string().min(1, { message: "O nível é obrigatório" }),
    objetivo: z.string().min(1, { message: "O objetivo é obrigatória" }),
})

type FormData = z.infer<typeof schema>


export default function Create() {
  const { setUser } = useContext(Context);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      sexo: 'Masculino',
      level: '',
      objetivo: '',
    },
    resolver: zodResolver(schema), 
  });


  const onSubmit = (data: any) => {

    setUser(prev => ({
            ...prev,
            sexo: data.sexo,
            level: data.level,
            objetivo: data.objetivo,
        }));

    router.push("/result");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => router.back()} style={{ padding: 10, paddingTop: 30 }}>
        <FontAwesome name="arrow-left" size={24} color={colors.secondaryText} />
      </TouchableOpacity>

      <ScrollView>
        <View style={styles.containerText}>
          <Text style={styles.textInfo}>Mais Sobre Você</Text>
          <Text style={styles.textSec}>Agora vamos personalizar seu plano</Text>
        </View>

        <Text style={styles.label}>Sexo</Text>
        <Controller
          control={control}
          name="sexo"
          render={({ field: { onChange, value } }) => (
            <Radio
              options={['Masculino', 'Feminino']}
              selected={value === 'Masculino' ? 0 : 1}
              onChangeSelect={(index) => onChange(index === 0 ? 'Masculino' : 'Feminino')}
            />
          )}
        />

        <Text style={[styles.label, { marginTop: 20 }]}>Nível de Atividade Física</Text>
        <Controller
          control={control}
          name="level"
          render={({ field: { onChange, value } }) => (
            <CustomSelect
              options={['Sedentário', 'Levemente ativo', 'Moderadamente ativo', 'Muito ativo', 'Extremamente ativo']}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Text style={[styles.label, { marginTop: 20 }]}>Objetivo</Text>
        <Controller
          control={control}
          name="objetivo"
          render={({ field: { onChange, value } }) => (
            <CustomSelect
              options={['Ganhar massa muscular', 'Ganhar peso', 'Manter peso', 'Perder peso']}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={{ color: colors.white }}>Gerar Dieta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 30
    },
    label: {
        fontSize: 16,
        paddingBottom: 15,
        paddingLeft: 4,
    }, containerText: {
        paddingTop: 70,
        paddingBottom: 50
    },
    textInfo: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    textSec: {
        color: colors.secondaryText,
    },
    button: {
        backgroundColor: colors.colorDefault,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 30,
        borderRadius: 8,
    },
});