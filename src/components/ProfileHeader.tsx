import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';

const ProfileHeader = () => {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(!open);
    }


    return (
        <View style={{paddingHorizontal: 15, paddingTop: 10, height: 55}}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '500',
                    color: 'black'
                }}>Jai Shree Ram</Text>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={{marginRight: 15}}>
                        <Image
                            style={{height: 24, width: 24}}
                            source={require('../assets/footer/addPost.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleModal}>
                        <Image
                            style={{height: 20, width: 20, tintColor: 'black'}}
                            source={require('../assets/footer/menu.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProfileHeader;
