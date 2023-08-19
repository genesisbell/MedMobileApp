import React, { useState } from 'react';
import { 
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { SvgXml } from 'react-native-svg';

/** @Assets */
import { CommonStyles } from 'styles';
import { chevronArrow } from 'icons';
/** */

/** @Components */
import { BaseSpace } from './BaseSpace';
/** */

interface BaseCollapsableProps{
    title: string,
    collapsableContent: React.ReactNode,
}

function BaseCollapsableFunc(props: BaseCollapsableProps){

    /** @Variables */
    const {
        title,
        collapsableContent,
    } = props;
    const [isCollapsed, setIsCollapsed] = useState(false);
    /** */

    /** @Handlers */
    function handleCollapsed(){
        setIsCollapsed(prevState => !prevState);
    }
    /** */

    return(
        <View>
            <TouchableWithoutFeedback onPress={handleCollapsed}>
                <View style={{
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View style={isCollapsed ? CommonStyles.rotate180deg : CommonStyles.rotate90deg}>
                        <SvgXml xml={chevronArrow()} width={20} height={20}/>
                    </View>
                    <BaseSpace horizontal/>
                    <Text style={CommonStyles.h5}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
            {
                isCollapsed && (
                    <View style={{
                        paddingLeft: 10,
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                    }}>
                        {collapsableContent}
                    </View>
                )
            }
        </View>
    )
}

export const BaseCollapsable = React.memo(BaseCollapsableFunc);