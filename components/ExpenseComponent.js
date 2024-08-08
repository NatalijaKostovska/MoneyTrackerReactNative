import { Alert, Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ExpenseComponent({
    expenses,
    setExpenses,
    chartData,
    setChartData,
}) {
    return (

        <ScrollView
            style={{
                marginBottom: 80,
            }}
        >
            {expenses.map((expense) => {
                console.log(expense);
                return (
                    <ExpenseListTile
                        key={expense.id}
                        expense={expense}
                        chartData={chartData}
                        expenses={expenses}
                        setChartData={setChartData}
                        setExpenses={setExpenses}
                    />
                );
            })}
        </ScrollView>
    );
}
const ExpenseListTile = ({
    expense,
    expenses,
    setExpenses,
    chartData,
    setChartData,
}) => {
    return (
        <View style={styles.expenseTile}>
            <Text style={styles.expenseTileText}>{expense.name}</Text>
            <Text style={styles.expenseTileText}>{expense.category}</Text>
            <Text style={styles.expenseTileText}>{expense.amount}</Text>
            <Button
                onPress={() => {
                    Alert.alert("Delete", "Are you sure you want to delete?", [
                        {
                            text: "Yes",
                            onPress: () => {
                                let newExpenses = [...expenses];
                                let index = newExpenses.findIndex(
                                    (item) => item.id == expense.id
                                );
                                newExpenses.splice(index, 1);
                                setExpenses(newExpenses);
                                let newChartData = [...chartData];
                                let index2 = newChartData.findIndex(
                                    (item) => item.name == expense.category
                                );
                                newChartData[index2].amount -= expense.amount;
                                setChartData(newChartData);
                            },
                        },
                        {
                            text: "No",
                            onPress: () => {
                                console.log("No");
                            },
                        },
                    ]);
                }}
                title="Delete"
            />
        </View>
    );
};
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    container: {
        backgroundColor: "#fff",
        height: "100%",
        marginTop: 50,
    },
    heading: {
        color: "green",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    addButton: {
        padding: 10,
        margin: 10,
    },
    heading2: {
        color: "black",
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
    },
    heading3: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
    },
    label: {
        color: "black",
        fontSize: 16,
        textAlign: "left",
        fontWeight: "bold",
        marginLeft: 10,
    },
    expenseTile: {
        // column with 3 cells
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "lightgrey",
        width: "95%",
        padding: 10,
        margin: 10,
    },
    expenseTileText: {
        fontSize: 20,
        width: "22%",
        textAlign: "center",
    },
    formAdd: {
        // display: "none",
    },
    textInput: {
        borderRadius: 12,
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
});
