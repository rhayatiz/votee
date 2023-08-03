import './bootstrap';
import React from 'react'
import {createRoot} from 'react-dom/client'
import {createInertiaApp } from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <Notifications />
                <App {...props} />
            </MantineProvider>
        )
    },
})