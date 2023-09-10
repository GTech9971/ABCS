import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil'
import { IS_DEVELOPMENT } from '@/config/constants';
import { queryClient } from '@/lib/react-query';

type AppProviderProps = {
    children: ReactNode;
};

export const AppProvider = ({ children, }: AppProviderProps) => {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                {IS_DEVELOPMENT && (
                    <ReactQueryDevtools initialIsOpen={false} />
                )}
                {children}
            </QueryClientProvider>
        </RecoilRoot>
    );
};
