import { JSX } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'

const handlePress = (): void => {
    router.push('memo/edit')
}

const Detail = (): JSX.Element => {
    return(
        <View style={styles.container} >
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年10月1日 10：00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                    カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。なお、組見本の「組」とは文字組のことです。活字印刷時代の用語だったと思います。このダミーテキストは自由に改変することが出来ます。主に書籍やウェブページなどのデザインを作成する時によく使われます。書体やレイアウトなどを確認するために用います。
                    ダミーテキストはダミー文書やダミー文章とも呼ばれることがあります。カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。主に書籍やウェブページなどのデザインを作成する時によく使われます。これは正式な文章の代わりに入れて使うダミーテキストです。
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto' }}>
                <Icon name='pencil' size={40} color='#ffffff'/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'

    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})

export default Detail

