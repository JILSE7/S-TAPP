import { useState } from "react";




const UseDrawer = () => { 
    const [visible, setVisible] = useState(false);
    const [drawerData, setdrawerData] = useState([]);
    const [type, setType] = useState('');
    return {
        visible,
        setVisible,
        drawerData,
        setdrawerData,
        type, setType
    }
        
};

export default UseDrawer
