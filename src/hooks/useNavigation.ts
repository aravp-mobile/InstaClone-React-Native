import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";

import { ApplicationStackParamsList } from "../../@types/navigation";

const useTypedNavigation = () => {
    const navigator = 
        useNavigation<StackNavigationProp<ApplicationStackParamsList>>();

    return navigator;
}

export default useTypedNavigation;
