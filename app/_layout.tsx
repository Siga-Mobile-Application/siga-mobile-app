import { Slot } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AuthProvider } from "@/contexts/auth";
import { HelperProvider } from "@/contexts/assistant";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
    return (
        <GluestackUIProvider>
            <HelperProvider>
                <AuthProvider>
                    <StatusBar backgroundColor="#6482A3" />
                    <Slot />
                </AuthProvider>
            </HelperProvider>
        </GluestackUIProvider>
    );
}
