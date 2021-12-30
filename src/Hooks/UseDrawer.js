import { useState } from "react";




const UseDrawer = (data) => { 
    const [visible, setVisible] = useState(false);
    const [drawerData, setdrawerData] = useState(data? data : []);
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
