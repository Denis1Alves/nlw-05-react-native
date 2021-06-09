import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../view/Welcome";
import { UserIdentification } from "../view/UserIdentification";
import { Confirmation } from "../view/Confirmation";
import { PlantSave } from "../view/PlantSave";
import { MyPlants } from "../view/MyPlants";

import colors from "../styles/colors";
import AuthRoutes from "./tab.routes";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator headerMode="none" 
    screenOptions={{
        cardStyle: {
            backgroundColor: colors.white
        },
    }}>

        <stackRoutes.Screen name="Welcome" component={Welcome}/>
        <stackRoutes.Screen name="UserIdentification" component={UserIdentification}/>
        <stackRoutes.Screen name="Confirmation" component={Confirmation}/>
        <stackRoutes.Screen name="PlantSelect" component={AuthRoutes}/>
        <stackRoutes.Screen name="PlantSave" component={PlantSave}/>
        <stackRoutes.Screen name="MyPlants" component={AuthRoutes}/>
    </stackRoutes.Navigator>
)

export default AppRoutes;