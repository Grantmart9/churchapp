// DEBUG: Fixed syntax error in createClient call
import { createClient } from '@supabase/supabase-js';

// Check if environment variables are properly set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('DEBUG: supabaseUrl value:', supabaseUrl);
console.log('DEBUG: supabaseKey value:', supabaseKey);

if (!supabaseUrl || supabaseUrl === 'https://your-project-supabase-url.com') {
    console.warn('Supabase URL is not configured. Please set up your NEXT_PUBLIC_SUPABASE_URL in .env file');
}

if (!supabaseKey || supabaseKey === 'anon-only-api-key-here') {
    console.warn('Supabase key is not configured. Please set up your NEXT_PUBLIC_SUPABASE_ANON_KEY in .env file');
}

// Create a mock client if credentials are not properly set
const createMockClient = () => {
    console.warn('Using mock Supabase client. Authentication features will not work.');
    return {
        auth: {
            user: () => Promise.resolve(null),
            signIn: (params) => {
                console.log('Mock signIn called with:', params);
                return Promise.resolve({ error: { message: 'Mock client - authentication not configured. Please set up your Supabase credentials in .env file.' } });
            },
            signUp: (params) => {
                console.log('Mock signUp called with:', params);
                return Promise.resolve({ error: { message: 'Mock client - authentication not configured. Please set up your Supabase credentials in .env file.' } });
            },
            signOut: () => Promise.resolve({ error: { message: 'Mock client - authentication not configured' } }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } })
        },
        from: () => ({
            select: () => ({
                eq: () => ({
                    single: () => Promise.resolve({ data: null, error: { message: 'Mock client - database not configured' } })
                })
            }),
            insert: () => Promise.resolve({ data: null, error: { message: 'Mock client - database not configured' } }),
            update: () => ({
                eq: () => Promise.resolve({ data: null, error: { message: 'Mock client - database not configured' } })
            }),
            delete: () => ({
                eq: () => Promise.resolve({ data: null, error: { message: 'Mock client - database not configured' } })
            })
        })
    };
};

// Use real client if credentials are valid, otherwise use mock
const useRealClient = supabaseUrl && supabaseKey &&
    supabaseUrl !== 'https://your-project-supabase-url.com' &&
    supabaseKey !== 'anon-only-api-key-here';

console.log('DEBUG: Using real Supabase client:', useRealClient);
console.log('DEBUG: Supabase URL configured:', !!supabaseUrl);
console.log('DEBUG: Supabase Key configured:', !!supabaseKey);
console.log('DEBUG: supabaseUrl starts with https:', supabaseUrl?.startsWith('https'));
console.log('DEBUG: supabaseKey length:', supabaseKey?.length);

export const supabase = useRealClient
    ? createClient(supabaseUrl, supabaseKey)
    : createMockClient();

export default supabase;
