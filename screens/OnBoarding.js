import React from 'react';
import { View, StyleSheet } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import OnBoardingPage from '../components/OnBoardingPage';
import { ILLUSTRATION_1, ILLUSTRATION_2, ILLUSTRATION_3, ILLUSTRATION_4 } from '../constants/Images';

const OnBoarding = () => {
    return (
        <View style={styles.container}>
            <ViewPager style={styles.container}>
                <View key="1">
                    <OnBoardingPage
                        backgroundColor="#FFFFFF"
                        img={ILLUSTRATION_1}
                        title="Bienvenue dans Monumental Habits"
                        description="On peut vous aider à devenir une meilleure version de vous même" />
                </View>
                <View key="2">
                    <OnBoardingPage
                        backgroundColor="#FFFFFF"
                        img={ILLUSTRATION_2}
                        title="Créez des nouvelles habitudes facilement."
                        description="On peut vous aider à devenir une meilleure version de vous même" />
                </View>
                <View key="3">
                    <OnBoardingPage
                        backgroundColor="#FFFFFF"
                        img={ILLUSTRATION_3}
                        title="Gardez en oeil sur vos progrès."
                        description="On peut vous aider à devenir une meilleure version de vous même" />
                </View>
                <View key="4">
                    <OnBoardingPage
                        backgroundColor="#FFFFFF"
                        img={ILLUSTRATION_4}
                        title="Rejoignez une communauté inspirante."
                        description="On peut vous aider à devenir une meilleure version de vous même" />
                </View>
            </ViewPager>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
    }
});

export default OnBoarding;