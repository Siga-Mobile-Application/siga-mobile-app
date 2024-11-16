import { Slot } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AuthProvider } from "@/contexts/auth";
import { HelperProvider } from "@/contexts/assistant";

export default function Layout() {
    return (
        <GluestackUIProvider>
            <HelperProvider>
                <AuthProvider>
                    <Slot />
                </AuthProvider>
            </HelperProvider>
        </GluestackUIProvider>
    );
}
