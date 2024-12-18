import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/list';
import User from '../pages/user';
import CustomTabBar from '../components/CustomTabBar';
import Home from '../pages/home';
import { AuthProvider_list } from '../context/authContext_list';
const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <AuthProvider_list>

            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                tabBar={props => <CustomTabBar{...props} />}
            >
                <Tab.Screen
                    name="Home"
                    component={Home} />

                <Tab.Screen
                    name="List"
                    component={List}
                />

                <Tab.Screen
                    name="User"
                    component={User}
                />
            </Tab.Navigator>
        </AuthProvider_list>

    );
}