import { View, Text, StyleSheet } from 'react-native'
import { JSX } from 'react/jsx-runtime'


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#467FD3',
        height: 104,
        justifyContent: 'flex-end'
    },
    headerInner: {
        alignItems: 'center'
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255,255,255,0.7)'
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
    }
})

const Header = (): JSX.Element => {
    return (
            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>
    )
}

export default Header
