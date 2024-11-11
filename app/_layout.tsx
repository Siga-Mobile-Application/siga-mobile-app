import { Slot } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AuthProvider } from "@/contexts/auth";

export default function Layout() {
    return (
        <GluestackUIProvider>
            <AuthProvider >
                <Slot />
            </AuthProvider>
        </GluestackUIProvider>
    );
}
