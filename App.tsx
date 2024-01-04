import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCard from "./components/ActionCard";

function App(){
return(
  <SafeAreaView>
    <ScrollView>
     <View>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards/>
      <ActionCard/>
    </View>
  </ScrollView>
</SafeAreaView>
)
}

export default App;