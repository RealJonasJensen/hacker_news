
import React, { useEffect, useCallback } from 'react';

// Modules
import { useSelector, useDispatch } from "react-redux";

// Actions
import * as actions from "../Redux/actions/actionTypes";

// Components
import SingleStory from "../Components/SingleStory";

// Native Imports
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl,
    ActivityIndicator
} from 'react-native';


const App: React.FC = () => {
    // Redux
    // Props
    const newsProps = useSelector(state => state.news);
    // Dispatch
    const dispatch = useDispatch();

    // OnMount
    useEffect(() => {
        onMountFunction()
    }, []);

    // On Mount Function
    const onMountFunction: Function = () => {
        dispatch({ type: actions.GET_NEWS })
    }

    // Refresh Function
    const onRefresh = React.useCallback(() => {
        dispatch({ type: actions.GET_NEWS })
    }, []);

    // Content
    let content = null;

    const newsItems = newsProps.stories.map(item => {
        return <SingleStory story={item} key={item.id} />
    })

    content = (
        <View>
            {newsItems}
        </View>
    )

    // Loading
    if (newsProps.loading) {
        content = (
            <View style={[styles.loadingContainer, styles.horizontal]}>
                <ActivityIndicator size="large" color="rgb(255, 80, 10)" />
            </View>
        )
    }
    console.log(content);


    return (
        <View>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={<RefreshControl refreshing={false} onRefresh={onRefresh} />}>
                {content}
            </ScrollView>
        </View>
    )
}

// Styles

const styles = StyleSheet.create({
    scrollView: {
        // flex: 1,
        // height: "100%"
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})


export default App;
