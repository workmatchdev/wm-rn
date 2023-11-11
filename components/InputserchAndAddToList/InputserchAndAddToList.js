import InputText from '../InputText';
import { View, Text, TouchableHighlight } from 'react-native';
import Button from '../Button';
import { Formik } from 'formik';
import styles from './styles';
import DatePicker from '../DatePicket';
import CheckBox from '@react-native-community/checkbox';
import { useMemo } from 'react';
import colors from '../../src/assets/colors';
import useInputserchAndAddToList from './hooks/useInputserchAndAddToList';

const InputSerchMultiSelect = (props) => {

    const { title, fields, items, handleSubmit: handleSubmitForm, listComponent } = props;

    const currentItemsSelected = items ? items : [];

    const {
        onSubmit,
        itemList,
        showMore,
        setShowMore
    } = useInputserchAndAddToList({
        handleSubmit: handleSubmitForm,
        defaultItems: currentItemsSelected
    });

    const initialValues = useMemo(() => {
        const obj = {}
        fields.forEach(field => {
            obj[field.name] = field.defaultValue
        });
        return obj
    }, [fields])

    return (
        <View style={styles.principalContainer}>
            <Text style={styles.title}>{title} </Text>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({ handleChange, handleSubmit, setFieldValue, values }) => {
                    return (
                        <View style={styles.formContainer}>
                            <View>
                                {fields.map((field, i) => {
                                    if (field.type === 'text') {
                                        return (
                                            <InputText
                                                key={i}
                                                label={field.label}
                                                labelStyles={styles.label}
                                                inputStyles={styles.input}
                                                styles={styles.inputContainer}
                                                onChangeText={handleChange(field.name)}
                                                value={values[field.name]}
                                            />
                                        )
                                    }
                                    if (field.type === "date") {
                                        return (
                                            <View style={{
                                                marginVertical: 5
                                            }}>
                                                <Text style={styles.label}>{field.label}</Text>
                                                <DatePicker
                                                    onChange={handleChange(field.name)}
                                                    value={values[field.name]}
                                                />
                                            </View>
                                        )
                                    }
                                    if (field.type === "checkbox") {
                                        return (
                                            <View style={styles.checkboxContainer}>
                                                <Text style={styles.label}>{field.label}</Text>
                                                <CheckBox
                                                    tintColors={{ true: colors.principalColor, false: colors.principalColor }}
                                                    onCheckColor={'#6F763F'}
                                                    value={values[field.name]}
                                                    onValueChange={() => setFieldValue(field.name, !values[field.name])}
                                                />
                                            </View>
                                        )
                                    }

                                })}
                                <Button
                                    style={styles.submitButton}
                                    textStyle={styles.submitButtonText}
                                    title="Agregar"
                                    onPress={() => { handleSubmit() }}
                                />
                            </View>
                        </View>
                    )
                }}
            </Formik>
            <View>
                {itemList.map((item, i) => {
                    if(!showMore && i > 2) return null 
                    return listComponent(item,i)
                })}
                {itemList.length >= 3 ? (
                    <TouchableHighlight onPress={() => { setShowMore(!showMore) }} style={styles.viewMore}>
                        <Text style={styles.viewMoreText}>{ !showMore ? 'Ver mas' : 'Ver menos' }</Text>
                    </TouchableHighlight>
                ) : null}
            </View>
        </View>
    );
}

export default InputSerchMultiSelect;