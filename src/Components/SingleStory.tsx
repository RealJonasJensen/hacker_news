
import React from 'react';

// Native Imports
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

// Helpers
import { timeConverter } from "../util/helpers";

// Props
interface Props {
    story: object
}


const SingleStory: React.FC<Props> = (props) => {
    const { story } = props;
    console.log(story);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{story["title"]}</Text>
            <Text>{story['score']} points</Text>
            <Text>Created: {timeConverter(story["time"])}</Text>
            <Text>By: {story["by"]["id"]} - {story["by"]["karma"]} karma points</Text>
            <Text style={styles.url} >{story["url"]} </Text>
        </View>
    )
}

// Styles

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(245, 245, 237)",
        margin: 5,
        padding: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'rgb(255, 80, 10)',
    },
    title: {
        fontWeight: "bold"
    },
    url: {
        color: "blue",
        marginTop: 10
    }
})


export default SingleStory;
