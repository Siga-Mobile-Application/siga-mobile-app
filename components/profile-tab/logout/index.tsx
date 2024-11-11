import StyledButton from "@/components/styled-button";
import AuthContext from "@/contexts/auth";
import { useState, useContext } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Logout() {
    const [loading, setLoading] = useState(false);
    const { signOut } = useContext(AuthContext);

    function handleLogout() {
        setLoading(true);

        signOut().finally(() => (
            setLoading(false)
        ));
    }

    return (
        <StyledButton isLoading={loading} customIcon={<FontAwesome size={30} name="arrow-circle-o-right" color='#BF4647' />} onClick={handleLogout} />
    )
}
