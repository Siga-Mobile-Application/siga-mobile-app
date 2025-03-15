import { Slot } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AuthProvider } from "@/contexts/auth";
import { HelperProvider } from "@/contexts/assistant";
import { StatusBar } from "expo-status-bar";
import { VersionProvider } from "@/contexts/version";

export default function Layout() {
    return (
        <GluestackUIProvider>
            <HelperProvider>
                <AuthProvider>
                    <VersionProvider>
                        <StatusBar backgroundColor="#6482A3" />
                        <Slot />
                    </VersionProvider>
                </AuthProvider>
            </HelperProvider>
        </GluestackUIProvider>
    );
}
