import { colors } from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
type Props = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function CustomSelect({ options, value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const handleSelect = (item: string) => {
    onChange(item); 
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.selectBox} onPress={() => setOpen(!open)}>
        <Text style={styles.selectText}>
          {value || 'Selecione uma opção'}
        </Text>
        <FontAwesome
          name="chevron-down"
          size={16}
          color={colors.secondaryText}
        />
      </Pressable>

      {open && (
        <View style={styles.dropdown}>
          {options.map((item) => (
            <Pressable
              key={item}
              style={styles.option}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.optionText}>{item}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', position: 'relative' },
  selectBox: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ecebebff',
    borderRadius: 8,
    paddingHorizontal: 16, 
    backgroundColor: '#fff',
  },
  selectText: {
    color: '#333',
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    zIndex: 999,
    elevation: 3,
  },
  option: {
    padding: 10,
  },
  optionText: {
    color: '#333',
  },
});
