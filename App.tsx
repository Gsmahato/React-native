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
import ContactLists from "./components/ContactLists";

function App(){
return(
  <SafeAreaView>
    <ScrollView>
     <View>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards/>
      <ContactLists/>
      <ActionCard/>  
    </View>
  </ScrollView>
</SafeAreaView>
)
}

export default App;