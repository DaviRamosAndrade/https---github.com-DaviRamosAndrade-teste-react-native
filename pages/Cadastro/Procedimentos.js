import { Text } from 'react-native';


const Procedimentos = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

export default Procedimentos;