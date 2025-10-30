import { colors } from '@/constants/Colors';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';

interface InputProps {
  name: string;
  control: any,
  placeholder?: string;
  rules?: object;
  error?: any;
  keyboardType?: KeyboardTypeOptions;
}

export function Input({ name, control, placeholder, rules, error, keyboardType }: InputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);



  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}

        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, isFocused && styles.focused ]}
            placeholder={placeholder}
            onChangeText={onChange}
            onBlur={() => {
              onBlur();
              setIsFocused(false);
            }}
            onFocus={() => setIsFocused(true)}
            value={value}
            keyboardType={keyboardType}
            placeholderTextColor={ colors.secondaryText }
          />
        )}
      />
      {error?.[name] && (
        <Text>{error[name].message}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ecebebff',
    borderRadius: 8,
    padding: 10,
  },
  focused:{
    borderWidth: 1,
    borderColor: colors.colorDefault,
    borderRadius: 8,
    padding: 10,
  }
});