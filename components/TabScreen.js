
const Tabs = createMaterialTopTabNavigator({
    About: About,
    Contact: Contact
},
{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});
