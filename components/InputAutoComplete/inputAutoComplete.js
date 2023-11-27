import React, { useState } from 'react';
import { Text, View, TouchableHighlight, ActivityIndicator, ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import Modal from '../Modal';
import styles from './styles';
import InputText from '../InputText';
import { XmarkIcon, PlusIcon } from '../../src/assets/icons';
import colors from '../../src/assets/colors';
import useGetAutoCompleteData from './hooks/useGetAutoCompleteData';

const InputAutoComplete = ({
    label,
    labelStyles,
    inputStyles,
    styles: inputContainerStyles,
    onValueChange,
    handleSubmit,
    name,
    value
}) => {

    const {
        handleInputChange,
        query,
        result,
        loading,
        error,
        resetValues
    } = useGetAutoCompleteData();

    const headerHeight = useHeaderHeight();
    const [selectedItem, setSelectedItem] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View>
            <Modal
                isOpen={isOpen}
                style={styles.principalContainer}
            >
                <ScrollView
                    style={{ flex: 1, height: '100%' }}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                >
                    <View style={styles.content}>
                        <TouchableHighlight
                            underlayColor={'#fff'}
                            onPress={() => setIsOpen(false)} style={styles.closeButton}>
                            <XmarkIcon width='30' height='30' fill={colors.principalRed} />
                        </TouchableHighlight>
                        <View style={styles.autoCompleteContainer}>
                            <InputText
                                label={label}
                                labelStyles={labelStyles}
                                inputStyles={inputStyles}
                                styles={inputContainerStyles}
                                onChangeText={handleInputChange}
                                value={query}
                            />
                        </View>
                        {
                            loading ? (
                                <ActivityIndicator size="small" color="#0000ff" />
                            ) : (
                                <View style={styles.skillsContainer}>
                                    {error ? <Text style={{ textAlign: 'center', color: colors.principalRed }}>{error}</Text> : (
                                        !result.length ? <Text style={{ textAlign: 'center' }}>No hay resultados</Text> :
                                            result.map(skill => {
                                                return (
                                                    <View style={styles.skillContainer}>
                                                        <Text style={styles.skillTitle}>{skill}</Text>
                                                        <TouchableHighlight
                                                            underlayColor={'#fff'}
                                                            onPress={() => {
                                                                onValueChange(name, skill)
                                                                setIsOpen(false)
                                                                resetValues()
                                                            }} style={styles.selectButton}>
                                                            <PlusIcon width='30' height='30' fill={colors.principalWhite} />
                                                        </TouchableHighlight>
                                                    </View>
                                                )
                                            })
                                    )}
                                </View>
                            )
                        }
                        {/* <TouchableHighlight
                        underlayColor={'#fff'}
                        onPress={() => setIsOpen(false)} style={styles.submitButton}>
                        <Text style={styles.textButton}>Agregar</Text>
                    </TouchableHighlight> */}
                    </View>
                </ScrollView>
            </Modal>
            <View style={styles.principalInputContainer}>
                <TouchableHighlight
                    onPress={() => setIsOpen(true)}
                    style={styles.principalInputButton}
                    underlayColor={'rgba(0,0,0,0)'}>
                    <Text></Text>
                </TouchableHighlight>
                <InputText
                    label={label}
                    labelStyles={labelStyles}
                    inputStyles={inputStyles}
                    styles={inputContainerStyles}
                    onChangeText={onValueChange}
                    value={value}
                />
            </View>
        </View>
    );
}

export default InputAutoComplete;