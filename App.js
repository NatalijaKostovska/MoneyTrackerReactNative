import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Addform from "./components/Addform";
import ExpenseComponent from "./components/ExpenseComponent";
import { PieChart } from "react-native-chart-kit";

export default function App() {
  // Define state variables using the useState hook
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [expenses, setExpenses] = useState([]);
  const categories = ["Food", "Clothes", "Bills", "Others"];
  const [addForm, setAddForm] = useState(false);

  // Function to open the add expense form
  const addExpense = () => {
    setAddForm(true);
  };

  // Initialize the chart data with default values
  const [chartData, setChartData] = useState([
    {
      name: "Food",
      amount: 0,
      color: "#e62d20",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Clothes",
      amount: 0,
      color: "#27e620",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Bills",
      amount: 0,
      color: "#1c6bd9",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Others",
      amount: 0,
      color: "#5adbac",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ]);

  // Render the components and UI
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading2}>
        Expense Tracker using React-Native
      </Text>

      {/* Render the PieChart component with data */}
      <PieChart
        data={chartData}
        width={300}
        height={200}
        chartConfig={{
          backgroundGradientFrom: "#1E2923",
          backgroundGradientTo: "#08130D",
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        }}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />

      {/* Conditional rendering: If addForm is true, 
              render the Addform component */}
      {addForm == true ? (
        <Addform
          name={name}
          setName={setName}
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          categories={categories}
          setExpenses={setExpenses}
          expenses={expenses}
          chartData={chartData}
          setChartData={setChartData}
          setAddForm={setAddForm}
        />
      ) : (
        /* If addForm is false, render the "Add Expense" button */
        <View style={styles.row}>
          <Button
            onPress={addExpense}
            color="green"
            style={styles.addButton}
            title="Add Expense"
          />
        </View>
      )}

      {/* Render the ExpenseComponent */}
      <ExpenseComponent
        expenses={expenses}
        setExpenses={setExpenses}
        chartData={chartData}
        setChartData={setChartData}
      />
    </SafeAreaView>
  );
}

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
