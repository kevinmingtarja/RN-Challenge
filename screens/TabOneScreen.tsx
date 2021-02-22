import React, { useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";

import SearchBar from "../components/SearchBar.js";
import categoriesData from "../tmpData/Categories.js";
import tasksData from "../tmpData/Tasks.js";
import CategoryCard from "../components/CategoryCard.js";
import TaskList from "../components/TaskList.js";

export default function TabOneScreen({ navigation }) {
    const [search, setSearch] = useState("");
    const [tasks, setTasks] = useState(tasksData);
    const [categories, setCategories] = useState(categoriesData);

    const currDate = new Date().toDateString();
    const tasksToday = tasks.filter(
        (task) => task.date.toDateString() == currDate
    );

    const checkHandler = (id) => {
        let modifiedTask = tasks.filter((task) => task.id == id)[0];
        modifiedTask.completed = !modifiedTask.completed;

        setTasks([...tasks.filter((task) => task.id != id), modifiedTask]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Hello, User!</Text>
                <Text style={styles.title}>
                    You've got {tasksToday.length} tasks today
                </Text>
                <SearchBar term={search} onTermChange={setSearch} />
            </View>
            <View>
                {/* If search bar not empty, display queried result, else display categories etc */}
                {search == "" ? (
                    <View style={styles.bottomContainer}>
                        <Text style={styles.altTitle}>Categories</Text>
                        <View style={styles.categories}>
                            <FlatList
                                data={categories}
                                scrollEnabled={false}
                                numColumns={2}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <CategoryCard category={item.category} />
                                )}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.altTitle}>Today's Tasks</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Tasks")}
                            >
                                <Text style={styles.link}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tasks}>
                            <TaskList
                                taskList={tasksToday.sort((a, b) => {
                                    if (a.date - b.date > 0) return 1;
                                    else if (a.date - b.date < 0) return -1;
                                    else {
                                        return a.id - b.id;
                                    }
                                })}
                                checkHandler={checkHandler}
                            />
                        </View>
                    </View>
                ) : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    topContainer: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginLeft: 20,
        marginTop: 80,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    bottomContainer: {
        backgroundColor: "#F4F5F9",
        width: "100%",
        height: "100%",
        borderRadius: 30,
        padding: 20,
    },
    altTitle: {
        color: "#333333",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    categories: {
        backgroundColor: "#F4F5F9",
        alignItems: "flex-start",
        width: "96%",
    },
    textContainer: {
        backgroundColor: "#F4F5F9",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
    },
    link: {
        color: "#333333",
    },
    tasks: {
        backgroundColor: "#F4F5F9",
        width: "95%",
    },
});
