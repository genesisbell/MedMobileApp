import React from 'react';
import { Text, View } from 'react-native';

/** @Components */
import { 
    BaseCollapsable,
    BaseScreen,
} from 'components';
/** */

let id = 0;
let did = 0;
const drugs = [
    {
        id: id++,
        specialty: 'Manejo del dolor',
        drugs: [
            {
                id: did++,
                name: 'Paracetamol'
            },
            {
                id: did++,
                name: 'Ketorolaco'
            },
        ]
    },
    {
        id: id++,
        specialty: 'Neumologia',
        drugs: [
            {
                id: did++,
                name: 'Adrenalina racemica'
            },
            {
                id: did++,
                name: 'Salbutamol'
            },
        ]
    },
]

function Drugs(){

    return(
        <BaseScreen extraStyle={{paddingHorizontal: 0}}>
            <View style={{paddingHorizontal: 15}}>

                <Text>Drugs</Text>
            </View>
            {
                drugs.map(d => (
                    <BaseCollapsable
                        key={d.id}
                        title={d.specialty}
                        collapsableContent={
                            d.drugs.map(dd => (
                                <BaseCollapsable
                                    key={dd.id}
                                    title={dd.name}
                                    collapsableContent={(
                                        <Text>some indication</Text>
                                    )}
                                />
                            ))
                        }
                    />
                ))
            }
        </BaseScreen>
    )
}

export default Drugs