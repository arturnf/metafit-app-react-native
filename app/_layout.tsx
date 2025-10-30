import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { ContextProvider } from '../context/context';

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Início", headerShown: false }} />
          <Stack.Screen name="step/index" options={{ title: "Step", headerShown: false }} />
          <Stack.Screen name="create/index" options={{ title: "Create", headerShown: false }} />
          <Stack.Screen name="result/index" options={{ title: "Result", headerShown: false }} />
        </Stack>
      </ContextProvider>
    </QueryClientProvider>
  );
}