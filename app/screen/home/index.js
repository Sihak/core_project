//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, SafeAreaView, Platform, Image, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainCarousel from '../../component/carousel'
import SubCarousel from '../../component/subCarousel'
import { COLORS, APPEARANCES } from '../../module';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel';
import GridMenu from './GridMenu';
import * as Animatable from 'react-native-animatable';
import PrimaryHeader from '../../component/primaryHeader';


class HomeApp extends Component {
    render() {
        const data = [
            {
                title: 'Beautiful and dramatic Antelope Canyon',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/UYiroysl.jpg'
            },
            {
                title: 'Earlier this morning, NYC',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
            },
            {
                title: 'White Pocket Sunset',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                illustration: 'https://i.imgur.com/MABUbpDl.jpg'
            },
            {
                title: 'Acrocorinth, Greece',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
            },
            {
                title: 'The lone tree, majestic landscape of New Zealand',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
            },
            {
                title: 'Middle Earth, Germany',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/lceHsT6l.jpg'
            }
        ];
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Image resizeMode={'stretch'} style={{ position: 'absolute', width: viewportWidth, height: viewportHeight }} source={require('../../assets/image/homeBackground.jpg')} />
                <ScrollView style={styles.container}>
                   <PrimaryHeader 
                   tittle = {'camGuide'}
                   pressed = {() => this.props.navigation.navigate('Search')}
                    />
                    <View style={[styles.carouselContainer, APPEARANCES.SHADOW]} >
                        <MainCarousel data={data} />
                    </View>
                    <Text style={[styles.subHearderTittle, APPEARANCES.SHADOW, { fontSize: 22, marginTop: 15 }]}> Services </Text>
                    <View style={styles.SubCarouselContainer}>
                        <SubCarousel data={data} />
                    </View>
                    <GridMenu />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    carouselContainer: {
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SubCarouselContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    subHearderTittle: {
        fontSize: 32,
        fontWeight: '300',
        color: COLORS.SUB_HEADER_TITTLE
    },
    container: {
        padding: APPEARANCES.MARGIN,
        flex: 1,
    },

    gridMenu: {
        opacity: 0.8,
        height: 200,
        width: '100%',
        borderRadius: 16,
        marginVertical: APPEARANCES.MARGIN,
        backgroundColor: 'rgba(255,255,255,1)',
        borderLeftWidth: 8,
        borderLeftColor: '#E82A94',
        borderRightWidth: 8,
        borderRightColor: '#15FCBB',
        borderTopWidth: 4,
        borderTopColor: '#15FCBB',
        borderBottomWidth: 4,
        borderBottomColor: '#E82A94',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    gridButton: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#242424',
    },
    gridIcon: {
        fontSize: 52,
        fontWeight: '300',
        color: '#242424',
    }


});

export default HomeApp;
