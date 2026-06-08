// @ts-ignore
import { Text, View } from "react-native";
import "../global.css";
 import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center h-100 bg-red-500">
      <Text className="text-xl font-bold text-red-500">
        Welcome to Nativewind!
      </Text>
    </SafeAreaView>
  );
}